# Plan de slides — Soutenance APOCAL'IPSSI 2026
## EduTutor IA — Équipe 6 — Vendredi 03/07/2026

> **Durée cible : 15 min présentation + 5 min questions**
> **Outil recommandé : Canva / Google Slides**
> **Couleurs : violet `#5B4CF5` + blanc + gris clair (charte EduTutor)**

---

## SLIDE 1 — Couverture

**Titre :** EduTutor IA
**Sous-titre :** *Révise mieux, grâce à l'IA*
**Équipe 6 :** Kahil MOKHTARI · Amine HADDANE · Souleymane FALL · Nikola MILOSAVLJEVIC · Dina CHAOUKI · Rayan ZEBAZE SAO · Hugo RAGUIN
**Date :** 03 juillet 2026 — APOCAL'IPSSI 2026

> 🎨 Logo EduTutor IA (violet + "IA" en doré) en grand. Photo d'équipe ou avatars.

---

## SLIDE 2 — Le problème (30 secondes)

**Titre :** *Un étudiant sur deux révise sans se tester*

**3 points :**
- 📚 Les étudiants ont des cours — mais pas de quiz personnalisés
- ⏱️ Créer des QCM manuellement = 2-3h de travail
- 🔒 Les outils IA existants envoient vos cours chez des serveurs tiers (RGPD ?)

> 🎨 Icônes simples, fond blanc, chiffres en grand violet

---

## SLIDE 3 — La solution : Product Vision Board

**Titre :** *Notre vision produit*

**Tableau 2 colonnes :**

| | |
|---|---|
| **Pour qui** | Étudiants du supérieur · Enseignants (Mme Lefèvre) · Lycéens FR/international (J4) |
| **Le problème** | Révision passive, pas de quiz personnalisés, IA non souveraine |
| **Notre solution** | Upload cours → 10 QCM IA → Score + lacunes → 100% local |
| **Valeur** | Gagner 2-3h/semaine · Données sur ta machine · Gratuit |
| **Objectif J4** | Service public national · RGAA AA · 100 000 users · Multilingue |

> 🎨 Tableau coloré avec icônes. Mettre en évidence "100% local" et "RGAA".

---

## SLIDE 4 — Architecture technique (1 minute)

**Titre :** *Stack technique — 100% open source, 100% local*

**Schéma en 3 blocs :**

```
[Navigateur]          [Backend]              [IA locale]
React + Vite    →    Django REST API    →    Ollama (mistral:7b)
TypeScript           PostgreSQL              Sur ta machine
Tailwind CSS         Docker Compose          0€ · RGPD ✅
```

**Points clés à dire :**
- Tout tourne dans **Docker** → 1 commande pour lancer
- Le modèle IA tourne **en local** → aucune donnée ne sort
- API documentée (Redoc) → **extensible** (Groq, Gemini en 1 ligne)

> 🎨 Flèches entre les 3 blocs. Icônes Docker 🐳, React ⚛️, Python 🐍

---

## SLIDE 5 — Démo live (3 minutes)

**Titre :** *Démonstration*

**À l'écran (basculer sur le navigateur) :**

1. `localhost:3000` → Landing page
2. S'inscrire → compte étudiant
3. Uploader un texte → **Générer le quiz** (Groq → ~2s)
4. Répondre aux 10 questions → Score
5. **Tableau de bord** → graphe de progression
6. `localhost:8000/api/redoc/` → API documentée

> ⚠️ **AVOIR LE QUIZ PRÉ-GÉNÉRÉ EN BACKUP** si la démo plante

---

## SLIDE 6 — Méthode Agile — Les sprints (1 minute)

**Titre :** *4 jours, 8 sprints, 4 perturbations absorbées*

**Timeline horizontale :**

| Jour | Sprints | Événement clé |
|---|---|---|
| Lundi J1 | S1-S2 | Cadrage · PVB · Personas · Mme Lefèvre ajoutée |
| Mardi J2 | S3-S4 | Benchmark LLM → mistral:7b · Retry + prompt hardening |
| Mercredi J3 | S5 | 🎯 MVP `v1.0.0-mvp` livré · Prompt injection · RGPD SAR |
| Jeudi J4 | S6-S7 | 🚀 Release 2 `v1.1.0` · Scalabilité · RGAA · i18n |
| Vendredi J5 | S8 | 🎤 Soutenance |

> 🎨 Timeline avec icônes jalons. Mettre en vert les tags livrés.

---

## SLIDE 7 — Burndown & Burnup (1 minute)

**Titre :** *Pilotage par les faits — les perturbations rendues visibles*

**Deux graphes côte à côte :**

**Burndown Sprint MVP :**
- Ligne idéale vs réelle
- J3-bis absorbée sans décaler la fin
- 0 point restant à 17h45 ✅

**Burnup Projet :**
- Périmètre : 120 → 141 → **209 pts** (+48% en J4)
- Réalisé cumulé : 133/209 pts
- **Saut J4 visible** → Release 3 planifiée (pas subie)

**Message clé :** *"On ne cache pas le scope ajouté — on le chiffre et on replanifie"*

> 🎨 Reprendre les graphes du fichier j4-burndown-burnup.md (captures d'écran GitHub)

---

## SLIDE 8 — Les 4 perturbations absorbées (1 minute)

**Titre :** *4 perturbations → 4 décisions maîtrisées*

| | Perturbation | Notre réponse |
|---|---|---|
| J1 | Mme Lefèvre — persona enseignante | Espace enseignant intégré au backlog |
| J2 | Latence LLM > 15s | ADR-0001 : mistral:7b + retry MAX_RETRIES=3 |
| J3 | Prompt injection + RGPD | 4 couches de garde + politique retention + SAR |
| J4 | Succès viral → effondrement | Plan scalabilité + RGAA + i18n → Release 3 |

> 🎨 4 lignes colorées (rouge → vert pour montrer résolution). Icônes 🔒⚡🛡️📈

---

## SLIDE 9 — Sécurité & Conformité (30 secondes)

**Titre :** *Secure by design*

**3 colonnes :**

| 🔒 Sécurité | 📋 RGPD | ♿ RGAA |
|---|---|---|
| 4 couches anti-injection | Données 100% locales | Liens évitement |
| Délimiteurs `<<<COURS>>>` | Rétention 24 mois max | ARIA labels |
| Validation post-LLM | Export données (Art.20) | Contrastes AA |
| Tests adversariaux CI | SAR traité en 72h | Navigation clavier |

> 🎨 3 colonnes avec icônes. Fond violet léger.

---

## SLIDE 10 — Release 3 & Vision long terme (30 secondes)

**Titre :** *Ce qui vient — Release 3 « Plateforme publique »*

**3 axes J4 :**

- **♿ RGAA AA** — Service public accessible à tous (Amina, malvoyante)
- **🌍 i18n** — Interface + quiz en espagnol, anglais, arabe (Diego, Madrid)
- **⚡ Scalabilité** — Celery + Redis + autoscaling → 100k users simultanés

**Vision :** *"D'un MVP viral à la plateforme officielle des lycées de France"*

> 🎨 Carte de France + drapeaux + icône accessibilité. Impact visuel fort.

---

## SLIDE 11 — Rétrospective / Ce qu'on a appris (30 secondes)

**Titre :** *4 jours, 7 personnes, 1 produit livré*

**Ce qui a marché :**
- ✅ Scrum + GitHub Flow → zéro conflit de merge
- ✅ Docker → même environnement pour tous
- ✅ Perturbations anticipées → pas de panique

**Ce qu'on ferait différemment :**
- ⚡ Tests de charge dès le sprint 1
- 📊 Monitoring dès le MVP
- 🔄 Async LLM dès le départ

---

## SLIDE 12 — Conclusion (15 secondes)

**Titre :** *EduTutor IA — Prêt pour le service public*

**Grande citation centrale :**
> *"Upload ton cours. Révise mieux. Tes données restent chez toi."*

**Tags livrés :** `v1.0.0-mvp` ✅ · `v1.1.0` ✅
**Repo :** github.com/theohugo/IPSSI_APOCAL_KIT_GRP_6

**Merci !** 🎉 — *Questions ?*

---

## 📋 Checklist avant la soutenance

- [ ] Slides créées (Canva/Google Slides)
- [ ] Quiz pré-généré dans l'historique (tableau de bord non vide)
- [ ] `localhost:3000` ouvert dans un onglet
- [ ] `localhost:8000/api/redoc/` ouvert dans un onglet
- [ ] `localhost:8000/admin/` ouvert (login prêt : `admin@apocal.local` / `admindemo2026`)
- [ ] PRs mergées sur GitHub
- [ ] Répétition chrono (15 min max)
