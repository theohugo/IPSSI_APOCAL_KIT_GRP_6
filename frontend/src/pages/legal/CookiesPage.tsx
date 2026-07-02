/** Politique de gestion des cookies — EduTutor IA (complétée J3-bis). */
import LegalScaffold, { type LegalSection } from './LegalScaffold';

const SECTIONS: LegalSection[] = [
  {
    title: "Qu'est-ce qu'un cookie ?",
    hint: 'définition simple à destination des utilisateurs.',
    content:
      'Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d\'un site web. Il permet de mémoriser des informations entre deux visites (session de connexion, préférences…). EduTutor IA n\'utilise pas de cookies au sens strict, mais recourt au stockage local du navigateur (localStorage) pour gérer les sessions.',
  },
  {
    title: 'Cookies et stockage utilisés',
    hint: "lister ce que le site dépose (ex. token d'authentification en localStorage).",
    content:
      '• auth_token (localStorage) : jeton d\'authentification JWT stocké côté navigateur après connexion. Nécessaire au maintien de la session utilisateur.\n• Aucun cookie tiers, aucun cookie publicitaire, aucun outil de tracking (Google Analytics, etc.).',
  },
  {
    title: 'Finalité de chaque cookie',
    hint: "à quoi sert chaque cookie/stockage (technique, mesure d'audience…).",
    content:
      '• auth_token : cookie technique strictement nécessaire. Permet de rester connecté sans ressaisir ses identifiants à chaque page. Sans ce jeton, le service ne peut pas fonctionner.\nAucun cookie de mesure d\'audience ou de personnalisation publicitaire.',
  },
  {
    title: 'Consentement',
    hint: 'cookies nécessitant un consentement préalable et comment il est recueilli.',
    content:
      'Les cookies strictement nécessaires (comme auth_token) ne requièrent pas de consentement préalable selon les lignes directrices de la CNIL (délibération du 17 septembre 2020). EduTutor IA ne dépose aucun cookie nécessitant un consentement explicite.',
  },
  {
    title: 'Durée de conservation',
    hint: 'combien de temps chaque cookie est conservé.',
    content:
      '• auth_token : durée de la session active. Le jeton expire automatiquement après 24 heures d\'inactivité ou lors de la déconnexion explicite (bouton « Se déconnecter »).',
  },
  {
    title: 'Gérer ou refuser les cookies',
    hint: 'comment paramétrer ou supprimer les cookies (navigateur, bannière).',
    content:
      'Vous pouvez supprimer le stockage local à tout moment via les paramètres de votre navigateur (Paramètres > Confidentialité > Effacer les données de navigation > Stockage local).\nAttention : la suppression du jeton d\'authentification vous déconnecte immédiatement.\nPour plus d\'informations sur la gestion des cookies : https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser',
  },
];

export default function CookiesPage() {
  return (
    <LegalScaffold
      title="Politique de gestion des cookies"
      intro="Les cookies et technologies de stockage utilisés par le site, et comment les gérer."
      sections={SECTIONS}
    />
  );
}
