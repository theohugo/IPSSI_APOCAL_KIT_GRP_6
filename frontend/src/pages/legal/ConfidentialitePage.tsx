/** Politique de confidentialité — EduTutor IA (complétée J3-bis RGPD). */
import LegalScaffold, { type LegalSection } from './LegalScaffold';

const SECTIONS: LegalSection[] = [
  {
    title: 'Responsable du traitement',
    hint: 'qui décide pourquoi et comment les données sont traitées.',
    content:
      "EduTutor IA — Équipe n°6, Semaine APOCAL'IPSSI 2026 (entité fictive à des fins pédagogiques).\nContact : dpo@edututoria.fr",
  },
  {
    title: 'Données personnelles collectées',
    hint: 'email, nom, prénom, documents envoyés, historique de quiz…',
    content:
      "• Données de compte : adresse email, mot de passe (haché bcrypt), date d'inscription.\n• Documents pédagogiques : fichiers PDF ou textes uploadés pour générer les quiz.\n• Quiz et résultats : questions générées, réponses soumises, scores obtenus, historique de progression.\n• Données techniques : logs de connexion (IP pseudonymisée, horodatage).",
  },
  {
    title: 'Finalités du traitement',
    hint: 'pourquoi vous collectez ces données (créer un compte, générer des quiz…).',
    content:
      "• Fourniture du service : création de compte, authentification, génération de quiz via IA locale.\n• Suivi pédagogique : historique des scores et progression pour l'étudiant et l'enseignant.\n• Sécurité : détection des abus, protection contre les injections de prompt (OWASP LLM-01).\n• Conformité légale : traçabilité des demandes d'accès RGPD (Art. 15).",
  },
  {
    title: 'Base légale',
    hint: 'consentement, contrat, intérêt légitime… (RGPD art. 6).',
    content:
      "• Art. 6(1)(b) — Exécution du contrat : données de compte, documents, quiz, scores.\n• Art. 6(1)(a) — Consentement : historique de progression (opt-in à l'inscription).\n• Art. 6(1)(f) — Intérêt légitime : logs techniques (sécurité du service).\n• Art. 6(1)(c) — Obligation légale : logs d'audit SAR (conformité CNIL).",
  },
  {
    title: 'Durée de conservation',
    hint: 'combien de temps les données sont gardées, puis supprimées/anonymisées.',
    content:
      "• Données de compte : durée de vie du compte + 30 jours après suppression.\n• Documents uploadés : 90 jours après génération du quiz associé (suppression automatique).\n• Quiz et scores : 24 mois à compter de la date de génération.\n• Logs techniques : 12 mois (recommandation CNIL), puis anonymisation.\n• Logs d'audit SAR : 36 mois (prescription civile).\nDétail complet : voir notre Politique de rétention.",
  },
  {
    title: 'Destinataires des données',
    hint: 'qui y a accès (équipe, sous-traitants, fournisseurs LLM…).',
    content:
      '• Équipe EduTutor IA (accès back-office administrateur).\n• Aucun sous-traitant externe : le traitement IA est réalisé localement via Ollama (serveur hébergé en France).\n• Aucune transmission à des tiers à des fins commerciales.',
  },
  {
    title: 'Transferts hors UE',
    hint: 'si un fournisseur cloud héberge les données hors Union européenne.',
    content:
      "Aucun transfert hors Union Européenne. L'ensemble du traitement — y compris l'inférence IA — est réalisé sur des serveurs hébergés en France. Le modèle LLM (Ollama local) ne transmet aucune donnée à des services tiers.",
  },
  {
    title: 'Vos droits',
    hint: 'accès, rectification, suppression, portabilité, opposition, et comment les exercer.',
    content:
      "• Droit d'accès (Art. 15) : obtenir une copie de vos données → Page Profil > Exporter mes données.\n• Droit de rectification (Art. 16) : modifier vos informations → Page Profil.\n• Droit à l'effacement (Art. 17) : supprimer votre compte → Page Profil > Supprimer mon compte.\n• Droit à la portabilité (Art. 20) : export JSON/CSV → Page Profil > Exporter mes données.\n• Droit d'opposition (Art. 21) : demande écrite à dpo@edututoria.fr.\nDélai de réponse : 30 jours maximum.",
  },
  {
    title: 'Cookies',
    hint: 'renvoi vers la politique de cookies du site.',
    content:
      "EduTutor IA utilise uniquement des cookies techniques strictement nécessaires au fonctionnement du service (token d'authentification). Aucun cookie publicitaire ou de traçage. Consultez notre Politique de gestion des cookies pour le détail.",
  },
  {
    title: 'Contact & réclamation',
    hint: 'email du référent données + droit de réclamation auprès de la CNIL.',
    content:
      "DPO EduTutor IA : dpo@edututoria.fr (fictif — contexte pédagogique APOCAL'IPSSI 2026).\nVous disposez également du droit de déposer une réclamation auprès de la CNIL : https://www.cnil.fr/fr/plaintes",
  },
];

export default function ConfidentialitePage() {
  return (
    <LegalScaffold
      title="Politique de confidentialité"
      intro="Comment les données personnelles des utilisateurs sont collectées, utilisées et protégées (RGPD)."
      sections={SECTIONS}
    />
  );
}
