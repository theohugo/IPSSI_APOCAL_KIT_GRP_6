# Product Backlog — EduTutor IA

> Artefact de cadrage Jour 1 — APOCAL'IPSSI 2026
> Produit : **EduTutor IA** — assistant IA de révision, *enseignant-first*, génération ancrée dans les cours (RAG) et 100 % local (Ollama, RGPD).
> Dépôt : fork public `theohugo/IPSSI_APOCAL_KIT`
> Statut : **à valider par le Product Owner** (arbitrage MoSCoW avant démarrage des sprints)

---

## 1. Objet du document

Ce backlog est issu d'un **inventaire de l'existant** (mentalité brownfield) : le kit fourni n'est pas un point de départ vierge mais une base fonctionnelle et volontairement inégale. Chaque item indique donc son **état réel dans le code** (`✅ livré` / `🔧 partiel` / `⬜ à faire`) pour éviter de réécrire ce qui marche et concentrer l'effort sur les manques.

Périmètre Release 1 : les **6 fonctionnalités must-have F1–F6**, à terminer pour **mercredi 17h45**.

---

## 2. Définitions partagées

### Definition of Ready (DoR) — une story est prête à entrer en sprint si :
- [ ] Elle respecte les critères **INVEST** (voir §5).
- [ ] La valeur métier et l'utilisateur cible sont explicites.
- [ ] Les **critères d'acceptation** sont rédigés (format Given/When/Then ou liste vérifiable).
- [ ] Les dépendances (autre story, donnée, endpoint) sont identifiées.
- [ ] Une **estimation** (points) a été posée par l'équipe.
- [ ] L'état de l'existant a été vérifié dans le code (brownfield).

### Definition of Done (DoD) — une story est terminée si :
- [ ] Code mergé sur `main` via Pull Request **revue par un pair**.
- [ ] **Tests** (back et/ou front) passants et CI verte.
- [ ] Tous les **critères d'acceptation** sont satisfaits et démontrables.
- [ ] Aucune régression sur les fonctionnalités existantes.
- [ ] Fonctionne dans l'environnement **Docker Compose** (pas seulement en local).
- [ ] Documentation / `CHANGELOG.md` mis à jour si pertinent.
- [ ] Commits au format **Conventional Commits** et répartis dans l'équipe.

### Priorisation MoSCoW
| Code | Signification | Engagement |
|------|---------------|------------|
| **M** | Must have | Indispensable au MVP, livré R1 |
| **S** | Should have | Important mais contournable, visé R1 si temps |
| **C** | Could have | Confort, R2 |
| **W** | Won't have (this time) | Hors périmètre semaine, noté pour mémoire |

### Échelle d'estimation (Fibonacci, story points)
`1` trivial · `2` simple · `3` modéré · `5` conséquent · `8` lourd / à découper.

---

## 3. Épics

| ID | Épic | Description | Fonctionnalités |
|----|------|-------------|-----------------|
| E1 | **Compte & identité** | Inscription, connexion, vérification email, profil, mot de passe | F1 |
| E2 | **Ingestion de cours** | Upload PDF (≤5 Mo) ou texte (≥200 car.) comme source de quiz | F2 |
| E3 | **Génération de quiz** | 10 QCM générés par LLM local ancrés dans le cours | F3 |
| E4 | **Passation & correction** | Soumission des réponses, correction automatique | F4 |
| E5 | **Résultats** | Score /10 + détail des réponses | F5 |
| E6 | **Historique** | Persistance et consultation des quiz passés | F6 |
| E7 | **Qualité & exploitation** | RGPD, Docker, tests, ADR changement LLM | transverse |

---

## 4. Backlog priorisé (MoSCoW + état brownfield)

> Légende état : ✅ livré · 🔧 partiel (à finir) · ⬜ à faire

### Release 1 — MVP (must-have)

| ID | User Story | Épic | MoSCoW | Points | État code |
|----|-----------|------|:------:|:------:|:---------:|
| **US-F1.1** | En tant qu'**étudiant**, je veux **créer un compte par email** (avec mot de passe) afin d'accéder à mes révisions. | E1 | M | 2 | ✅ `signup/` |
| **US-F1.2** | En tant qu'étudiant, je veux **me connecter / me déconnecter** afin de retrouver mes données. | E1 | M | 2 | ✅ `login/` `logout/` |
| **US-F1.3** | En tant qu'étudiant, je veux **valider mon email** via un lien afin de sécuriser mon compte. | E1 | M | 3 | 🔧 `verify-email/` (flux à fiabiliser) |
| **US-F1.4** | En tant qu'étudiant, je veux **réinitialiser mon mot de passe oublié** afin de récupérer l'accès. | E1 | M | 3 | 🔧 `password-reset/` (à tester bout-en-bout) |
| **US-F1.5** | En tant qu'étudiant, je veux **consulter et modifier mon profil** afin de garder mes infos à jour. | E1 | M | 2 | ✅ `profile/` `me/` `change-password/` |
| **US-F2.1** | En tant qu'étudiant, je veux **téléverser un PDF (≤5 Mo)** afin de générer un quiz à partir de mon cours. | E2 | M | 5 | 🔧 extraction PDF à fiabiliser |
| **US-F2.2** | En tant qu'étudiant, je veux **coller du texte (≥200 car.)** afin de générer un quiz sans PDF. | E2 | M | 2 | 🔧 saisie présente, validation à renforcer |
| **US-F2.3** | En tant qu'étudiant, je veux **un message d'erreur clair** si le fichier est trop lourd / le texte trop court. | E2 | M | 2 | ⬜ validation & UX d'erreur |
| **US-F3.1** | En tant qu'étudiant, je veux **générer 10 QCM** depuis ma source via le **LLM local** afin de réviser. | E3 | M | 5 | 🔧 `generate-quiz/` (robustesse parsing JSON) |
| **US-F3.2** | En tant qu'étudiant, je veux que chaque QCM ait **4 options et 1 bonne réponse** afin d'avoir un format cohérent. | E3 | M | 3 | ✅ modèle `Question` (`options`, `correct_index`) |
| **US-F3.3** | En tant qu'étudiant, je veux un **retour de chargement** pendant la génération afin de patienter sereinement. | E3 | S | 2 | ⬜ état de chargement front |
| **US-F4.1** | En tant qu'étudiant, je veux **soumettre mes réponses** afin d'être corrigé automatiquement. | E4 | M | 3 | 🔧 `<pk>/answer/` à finaliser |
| **US-F4.2** | En tant qu'étudiant, je veux que **1 seule bonne réponse par QCM** soit comptée afin d'avoir un score juste. | E4 | M | 2 | ✅ logique `correct_index` |
| **US-F5.1** | En tant qu'étudiant, je veux voir mon **score /10** après soumission afin de mesurer mes acquis. | E5 | M | 2 | 🔧 champ `Quiz.score`, affichage à finir |
| **US-F5.2** | En tant qu'étudiant, je veux le **détail bonne/mauvaise réponse par question** afin de comprendre mes erreurs. | E5 | M | 3 | 🔧 `mistakes/` + détail front |
| **US-F6.1** | En tant qu'étudiant, je veux **retrouver l'historique** de mes quiz (date, cours, score) afin de suivre ma progression. | E6 | M | 3 | 🔧 `quiz-list` + `stats/` à brancher au front |
| **US-F6.2** | En tant qu'étudiant, je veux **rouvrir un quiz passé** afin de revoir mes réponses. | E6 | S | 2 | 🔧 `<pk>/` détail |

**Total points must-have (M) :** 49 pts environ — à confirmer en planning poker.

### Release 1 — should-have (si le temps le permet)

| ID | User Story | Épic | MoSCoW | Points |
|----|-----------|------|:------:|:------:|
| US-Q.1 | En tant qu'étudiant, je veux **rejouer un quiz raté** ciblé sur mes erreurs. | E6 | S | 3 |
| US-Q.2 | En tant qu'utilisateur, je veux une **page d'accueil claire** expliquant le produit. | E5 | S | 2 |
| US-X.1 | En tant qu'équipe, je veux des **tests automatisés** sur F3/F4 (cœur métier) pour éviter les régressions. | E7 | S | 5 |

### Release 2 — could-have (pistes jeudi)

| ID | Piste R2 | MoSCoW | Note |
|----|----------|:------:|------|
| US-R2.1 | **RAG renforcé** : génération réellement ancrée chapitre par chapitre. | C | différenciateur produit |
| US-R2.2 | **Tableau de bord enseignant** : suivi de classe, export. | C | cible *teacher-first* |
| US-R2.3 | **Niveaux de difficulté** des QCM (facile/moyen/difficile). | C | engagement |
| US-R2.4 | **Export PDF** du quiz et de la correction. | C | confort |

### Won't have (this time)

| ID | Item | MoSCoW | Raison |
|----|------|:------:|--------|
| US-W.1 | Application mobile native | W | hors périmètre / temps |
| US-W.2 | Paiement / abonnement | W | non requis MVP |
| US-W.3 | LLM cloud (OpenAI, etc.) | W | **RGPD : local obligatoire** — tout changement exige une **ADR** |

---

## 5. Contrôle INVEST (échantillon)

Vérification appliquée à toutes les stories must-have ; exemple sur **US-F3.1** :

| Critère | Vérifié | Justification |
|---------|:------:|---------------|
| **I**ndependent | ✅ | Génération isolable de la soumission (F4). |
| **N**egotiable | ✅ | Le nombre de QCM/format reste discutable avec le PO. |
| **V**aluable | ✅ | Cœur de la proposition de valeur (réviser depuis son cours). |
| **E**stimable | ✅ | Estimée 5 pts. |
| **S**mall | ✅ | Tient dans un sprint, découpable (parsing / prompt / UI). |
| **T**estable | ✅ | Critères d'acceptation vérifiables (voir ci-dessous). |

**Critères d'acceptation US-F3.1**
- *Given* une source valide (PDF extrait ou texte ≥200 car.), *when* l'utilisateur lance la génération, *then* le système crée **exactement 10 questions** avec 4 options chacune.
- *Given* une réponse LLM malformée, *when* le parsing échoue, *then* l'utilisateur reçoit un **message d'erreur explicite** sans crash serveur.
- *Given* l'environnement, *then* la génération utilise **Ollama en local** (aucun appel réseau externe).

---

## 6. Notes d'arbitrage pour le Product Owner

- **Focus brownfield** : ~60 % des stories M sont en état `🔧 partiel` — l'effort principal n'est pas de coder de zéro mais de **fiabiliser, brancher front↔back et tester**.
- **Risque n°1** : robustesse du parsing JSON de sortie LLM (US-F3.1) → bloquant pour F4/F5.
- **Risque n°2** : extraction de texte PDF (US-F2.1) variable selon les fichiers.
- **Décision attendue du PO** : confirmer le périmètre M ci-dessus et trancher les `S` à inclure dans le Sprint 1.

---

*Document vivant — mis à jour à chaque revue de sprint. Source de vérité du périmètre : GitHub Issues & Project du dépôt.*
