/** Mentions légales — EduTutor IA (complétées J3-bis). */
import LegalScaffold, { type LegalSection } from './LegalScaffold';

const SECTIONS: LegalSection[] = [
  {
    title: 'Éditeur du site',
    hint: "nom de l'organisation/équipe, statut, adresse, email de contact.",
    content:
      "EduTutor IA — Équipe n°6, Semaine immersive APOCAL'IPSSI 2026.\nEntité fictive créée dans le cadre pédagogique de l'IPSSI (Institut Privé de Management des Systèmes d'Information).\nContact : contact@edututoria.fr (fictif)",
  },
  {
    title: 'Directeur de la publication',
    hint: 'nom de la personne responsable du contenu publié.',
    content: 'Hugo RAGUIN — responsable technique du projet EduTutor IA, Équipe n°6.',
  },
  {
    title: 'Hébergeur',
    hint: "nom, adresse et téléphone de l'hébergeur du site.",
    content:
      'Hébergement : serveur local Docker Compose (contexte pédagogique POC).\nEn production cible : OVHcloud SAS — 2 rue Kellermann, 59100 Roubaix, France — Tel : 1007.\nAucune donnée hébergée hors Union Européenne.',
  },
  {
    title: 'Propriété intellectuelle',
    hint: 'à qui appartiennent les textes, logos, code, contenus.',
    content:
      "Le code source d'EduTutor IA est distribué sous licence MIT (voir fichier LICENSE du dépôt GitHub).\nLes contenus pédagogiques (cours, quiz) uploadés par les utilisateurs restent leur propriété exclusive.\nLe nom et le concept EduTutor IA sont des créations de l'Équipe n°6 dans le cadre pédagogique APOCAL'IPSSI 2026.",
  },
  {
    title: 'Contact',
    hint: 'comment vous joindre pour toute question juridique.',
    content:
      "Pour toute question d'ordre juridique ou relative aux données personnelles :\nEmail : dpo@edututoria.fr (fictif — contexte pédagogique)\nDélai de réponse : 30 jours maximum (RGPD Art. 12)",
  },
];

export default function MentionsLegalesPage() {
  return (
    <LegalScaffold
      title="Mentions légales"
      intro="Informations légales obligatoires identifiant l'éditeur et l'hébergeur du site."
      sections={SECTIONS}
    />
  );
}
