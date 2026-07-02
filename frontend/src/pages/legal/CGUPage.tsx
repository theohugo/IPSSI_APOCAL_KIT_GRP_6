/** Conditions Générales d'Utilisation — EduTutor IA (complétées J3-bis). */
import LegalScaffold, { type LegalSection } from './LegalScaffold';

const SECTIONS: LegalSection[] = [
  {
    title: 'Objet',
    hint: 'ce que régissent ces CGU et le service concerné (EduTutor IA).',
    content:
      "Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme EduTutor IA, service de génération de quiz pédagogiques par intelligence artificielle locale, accessible à l'adresse edututoria.fr (fictif — contexte pédagogique APOCAL'IPSSI 2026).",
  },
  {
    title: 'Acceptation des conditions',
    hint: "comment l'utilisateur accepte les CGU (inscription, usage…).",
    content:
      "L'inscription sur la plateforme vaut acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser le service. EduTutor IA se réserve le droit de modifier les CGU ; les utilisateurs seront informés par email au moins 15 jours avant toute modification substantielle.",
  },
  {
    title: 'Accès au service',
    hint: "conditions d'accès, disponibilité, prérequis techniques.",
    content:
      "Le service est accessible 24h/24, 7j/7, sous réserve de maintenance. Un compte utilisateur (email + mot de passe) est requis. EduTutor IA ne garantit pas une disponibilité ininterrompue et se réserve le droit d'interrompre le service pour maintenance, sans préavis en cas d'urgence.",
  },
  {
    title: 'Compte utilisateur',
    hint: 'création, responsabilité du mot de passe, exactitude des informations.',
    content:
      "L'utilisateur s'engage à fournir des informations exactes lors de l'inscription et à maintenir la confidentialité de ses identifiants. Tout accès réalisé avec vos identifiants est réputé effectué par vous. En cas de compromission, vous devez contacter immédiatement l'équipe via dpo@edututoria.fr.",
  },
  {
    title: 'Comportements interdits',
    hint: 'usages abusifs, contenus illicites, atteinte à la sécurité.',
    content:
      "Il est strictement interdit de :\n• Uploader des contenus illicites, diffamatoires ou portant atteinte aux droits de tiers.\n• Tenter d'injecter des instructions malveillantes dans les documents uploadés (prompt injection).\n• Utiliser le service à des fins d'automatisation massive ou de scraping.\n• Partager ses identifiants avec des tiers.\nTout manquement peut entraîner la suspension immédiate du compte.",
  },
  {
    title: 'Contenu généré par IA',
    hint: "limites des quiz générés (peuvent contenir des erreurs), responsabilité de l'utilisateur.",
    content:
      "Les quiz générés par EduTutor IA sont produits par un modèle de langage local (Ollama). Bien que le contenu soit ancré dans les documents fournis, des inexactitudes ponctuelles restent possibles. EduTutor IA ne peut être tenu responsable des erreurs factuelles dans les questions générées. L'utilisateur est invité à vérifier les réponses critiques auprès de sources officielles.",
  },
  {
    title: 'Responsabilité',
    hint: "limites de responsabilité de l'éditeur.",
    content:
      "EduTutor IA ne peut être tenu responsable des dommages indirects résultant de l'utilisation du service (perte de données, mauvais résultats d'examen, etc.). La responsabilité de l'éditeur est limitée au strict minimum autorisé par la loi française.",
  },
  {
    title: 'Propriété intellectuelle',
    hint: "droits sur le service et sur les contenus déposés par l'utilisateur.",
    content:
      "Le code source, les interfaces et les contenus originaux d'EduTutor IA sont protégés par le droit d'auteur. Les documents uploadés par l'utilisateur restent sa propriété exclusive. L'utilisateur concède à EduTutor IA une licence limitée permettant le traitement technique nécessaire à la génération des quiz.",
  },
  {
    title: 'Modification des CGU',
    hint: 'comment et quand les CGU peuvent évoluer.',
    content:
      "EduTutor IA peut modifier les présentes CGU à tout moment. Les utilisateurs sont informés par email 15 jours avant l'entrée en vigueur des modifications. La poursuite de l'utilisation du service après ce délai vaut acceptation des nouvelles CGU.",
  },
  {
    title: 'Droit applicable et litiges',
    hint: 'droit applicable et juridiction compétente.',
    content:
      'Les présentes CGU sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les tribunaux français compétents auront juridiction exclusive.',
  },
];

export default function CGUPage() {
  return (
    <LegalScaffold
      title="Conditions Générales d'Utilisation"
      intro="Les règles d'utilisation du service EduTutor IA, acceptées par chaque utilisateur."
      sections={SECTIONS}
    />
  );
}
