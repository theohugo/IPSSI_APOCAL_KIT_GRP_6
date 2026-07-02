# Blameless Post-mortem — Incident J4 « Succès viral & effondrement imminent »

## 🗂️ Identification

| | |
|---|---|
| **Équipe** | n° 6 |
| **Membres** | Kahil MOKHTARI · Amine HADDANE · Souleymane FALL · Nikola MILOSAVLJEVIC · Dina CHAOUKI · Rayan ZEBAZE SAO · Hugo RAGUIN |
| **Incident** | Saturation de la plateforme EduTutor IA suite à un passage télévisé national |
| **Date de l'incident** | 02/07/2026 — Sprint 6, 09h15 |
| **Sévérité** | P1 — Critique (risque d'indisponibilité totale) |
| **Statut** | ✅ Résolu — plan de remédiation validé |
| **Rédactrice** | Dina CHAOUKI |
| **Méthode** | Blameless post-mortem (SRE Google) |

---

## 1. Résumé exécutif

Le 02/07/2026 à 09h15, EduTutor IA a enregistré une **multiplication par 200 du trafic** après une mention en direct sur une chaîne nationale. Le serveur Ollama (instance unique, 8 Go RAM) a atteint **98 % de charge CPU** à 09h32. Le service de génération de quiz est devenu **indisponible pour 87 % des requêtes** pendant 47 minutes (09h35–10h22). Aucune perte de données. L'incident a déclenché le plan d'urgence J4 et conduit l'État à conditionner son soutien à une refonte de l'architecture (scalabilité + RGAA + i18n).

---

## 2. Chronologie de l'incident

| Heure | Événement |
|---|---|
| **09h00** | Passage TV national — mention « EduTutor IA, la révolution pédagogique française » |
| **09h15** | Premier pic détecté : +2 000 % de requêtes simultanées vs. baseline |
| **09h28** | File d'attente Ollama sature (timeout 30 s dépassé pour 40 % des requêtes) |
| **09h32** | CPU Ollama à 98 % — premier message d'erreur `503 Service Unavailable` |
| **09h35** | 87 % des générations de quiz échouent — utilisateurs voient une page d'erreur |
| **09h38** | Alerte reçue par l'équipe via les logs Docker |
| **09h45** | Décision de mise en maintenance partielle (upload de PDF désactivé) |
| **10h05** | Redémarrage Ollama + activation manuelle d'un deuxième worker |
| **10h22** | Retour à la normale — taux d'erreur < 1 % |
| **10h30** | Réunion équipe — déclenchement du plan J4 (scalabilité, RGAA, i18n) |
| **11h00** | L'État contacte l'équipe : soutien conditionnel à la conformité RGAA |

---

## 3. Cause racine (Root Cause Analysis — 5 Pourquoi)

| Niveau | Question | Réponse |
|---|---|---|
| **Pourquoi 1** | Pourquoi le service était-il indisponible ? | Le serveur Ollama ne pouvait plus traiter les requêtes |
| **Pourquoi 2** | Pourquoi Ollama était-il saturé ? | Instance unique, pas de file d'attente, pas d'autoscaling |
| **Pourquoi 3** | Pourquoi n'y avait-il pas de scaling ? | Architecture MVP conçue pour ~50 utilisateurs simultanés max |
| **Pourquoi 4** | Pourquoi l'architecture MVP n'était-elle pas dimensionnée pour la croissance ? | Le projet a grandi plus vite que prévu — pas de plan de capacité |
| **Pourquoi 5** | Pourquoi n'y avait-il pas de plan de capacité ? | Absence de tests de charge et d'ADR scalabilité dans le backlog |

**Cause racine identifiée** : absence d'architecture asynchrone et d'autoscaling pour la génération LLM, combinée à l'absence de tests de charge dans le pipeline CI.

---

## 4. Impact

| Dimension | Détail |
|---|---|
| **Utilisateurs affectés** | ~12 000 utilisateurs simultanés (pic estimé) |
| **Durée de l'indisponibilité** | 47 minutes (09h35 → 10h22) |
| **Taux d'erreur au pic** | 87 % des requêtes de génération de quiz |
| **Données perdues** | Aucune |
| **Impact financier** | Incalculable (opportunité nationale ratée pendant l'incident) |
| **Impact réputationnel** | Moyen — les médias ont relayé l'indisponibilité |
| **SLA violé** | p95 latence < 15 s → p95 mesuré > 60 s pendant 47 min |

---

## 5. Ce qui a bien fonctionné

- La **détection a été rapide** (alerte dans les 3 minutes via logs Docker)
- Le mécanisme de **retry côté backend** (MAX_RETRIES=3, PR `fix/llm-retry-parser-j2`) a absorbé une partie des erreurs transitoires
- La décision de **mise en maintenance partielle** (désactivation upload PDF) a limité la dégradation
- **Aucune donnée utilisateur n'a été perdue** grâce à la persistance PostgreSQL
- L'**équipe a réagi sans panique** et en moins d'une heure le service était rétabli

---

## 6. Ce qui a mal fonctionné

- **Pas de file d'attente** : les requêtes LLM étaient traitées en mode synchrone bloquant
- **Instance Ollama unique** sans failover ni autoscaling
- **Pas d'alerting proactif** (pas de monitoring CPU/RAM configuré)
- **Pas de tests de charge** dans le pipeline CI (`k6`, `locust` absents)
- **Pas de circuit breaker** : les requêtes en échec continuaient à solliciter Ollama au lieu d'échouer vite (fail-fast)
- **Page d'erreur générique** (500) — pas de message utilisateur explicite lors de la maintenance

---

## 7. Plan d'action (Action Items)

| # | Action | Priorité | Responsable | US associée | Échéance |
|:--:|---|:--:|---|---|---|
| **A1** | Implémenter une file d'attente asynchrone (Celery + Redis) pour la génération LLM | 🔴 Critique | Équipe backend | US-SC.1 (E14) | Release 3 |
| **A2** | Configurer autoscaling des workers Celery (Kubernetes HPA ou Docker Swarm) | 🔴 Critique | DevOps | US-SC.2 (E14) | Release 3 |
| **A3** | Ajouter un circuit breaker sur le client Ollama | 🟠 Haute | Backend | US-SC.3 (E14) | Sprint 7 |
| **A4** | Mettre en place monitoring CPU/RAM/latence (Prometheus + Grafana) | 🟠 Haute | DevOps | US-SC.4 (E14) | Sprint 7 |
| **A5** | Créer tests de charge (`locust`) dans le pipeline CI (seuil : p95 < 15 s à 500 users) | 🟠 Haute | QA | US-SC.5 (E14) | Sprint 7 |
| **A6** | Page de maintenance gracieuse avec message utilisateur clair | 🟡 Moyenne | Frontend | US-SC.6 (E14) | Sprint 7 |
| **A7** | Audit RGAA AA complet (conformité service public) | 🟠 Haute | Équipe front | US-A11Y.1 (E15) | Sprint 7 |
| **A8** | Ajouter runbook incident dans `/docs/runbooks/` | 🟡 Moyenne | Dina CHAOUKI | — | Semaine J4 |

---

## 8. Leçons apprises

> *Ce post-mortem est blameless : aucun individu n'est mis en cause. Les causes sont systémiques.*

1. **Le succès peut tuer un produit** autant qu'un bug : prévoir la croissance dès le MVP suivant.
2. **Asynchronisme = résilience** : toute opération longue (> 2 s) doit passer par une file d'attente.
3. **Les tests de charge sont des tests fonctionnels** — ils doivent être dans le pipeline CI, pas facultatifs.
4. **Monitoring first** : sans observabilité, on réagit à l'aveugle. Prometheus/Grafana doivent être configurés dès le début du projet.
5. **Fail fast** plutôt que dégrader silencieusement : un circuit breaker protège l'utilisateur et le système.

---

## 9. Suivi des actions

Ce document sera mis à jour à chaque sprint. Les Action Items ont été intégrés dans les épics **E14 (Scalabilité)**, **E15 (RGAA)** et **E16 (i18n)** du [Product Backlog](../cadrage/product-backlog.md).

---

*Document produit dans le cadre de APOCAL'IPSSI 2026 — Sprint 6 — Équipe 6.*
