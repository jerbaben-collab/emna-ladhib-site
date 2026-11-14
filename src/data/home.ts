// Contenus structurés réutilisés sur plusieurs pages (accueil, approche, à propos).

export const valueProps = [
  {
    title: "Des résultats mesurables",
    text: "Chaque démarche part d'un indicateur clair : délais, coûts, qualité ou satisfaction. On mesure avant, on mesure après.",
  },
  {
    title: "Des équipes impliquées",
    text: "Les meilleures solutions viennent de celles et ceux qui font le travail. Mon rôle est de structurer et de faciliter, pas d'imposer.",
  },
  {
    title: "Des gains qui durent",
    text: "Standards, routines de suivi et transfert de compétences : l'objectif est que votre organisation devienne autonome.",
  },
];

// Démarche inspirée du cycle DMAIC, reformulée en langage client.
export const steps = [
  {
    number: "01",
    title: "Comprendre",
    method: "Définir",
    text: "Rencontre exploratoire, clarification du besoin, des objectifs et du périmètre. On s'entend sur ce qui définira le succès.",
  },
  {
    number: "02",
    title: "Observer",
    method: "Mesurer",
    text: "Visite terrain (Gemba), cartographie des processus et collecte de données pour établir un portrait fidèle de la situation actuelle.",
  },
  {
    number: "03",
    title: "Analyser",
    method: "Analyser",
    text: "Identification des gaspillages, des sources de variation et des causes profondes, avec les équipes concernées.",
  },
  {
    number: "04",
    title: "Améliorer",
    method: "Innover",
    text: "Conception et essai de solutions concrètes : ateliers Kaizen, standardisation, réorganisation des flux.",
  },
  {
    number: "05",
    title: "Pérenniser",
    method: "Contrôler",
    text: "Indicateurs de suivi, gestion visuelle et transfert de compétences pour que les gains se maintiennent dans le temps.",
  },
];

export const values = [
  { title: "Rigueur", text: "Des décisions appuyées sur les faits et les données, pas sur les impressions." },
  { title: "Respect", text: "Envers les personnes, leur expertise et la réalité de leur travail." },
  { title: "Collaboration", text: "Les améliorations durables se construisent avec les équipes, jamais à leur place." },
  { title: "Amélioration continue", text: "Être un peu meilleur chaque jour, pour nos clients comme pour nous-mêmes." },
];

// TODO(cliente) : remplacer par de vrais chiffres vérifiables, ou retirer la section.
export const stats = [
  { value: "[10+]", label: "années d'expérience en ingénierie et amélioration continue" },
  { value: "[30+]", label: "projets d'amélioration menés" },
  { value: "[500+]", label: "personnes formées" },
];

// TODO(cliente) : témoignages réels avec autorisation écrite de publication.
export const testimonials = [
  {
    quote: "[Témoignage à recueillir : résultat obtenu, qualité de l'accompagnement, impact sur l'équipe.]",
    author: "[Prénom Nom]",
    role: "[Poste, Organisation]",
  },
  {
    quote: "[Témoignage à recueillir : ce qui a changé concrètement après la démarche.]",
    author: "[Prénom Nom]",
    role: "[Poste, Organisation]",
  },
];

export const sectors = [
  "Manufacturier",
  "Santé et services sociaux",
  "Services et bureaux",
  "Logistique et distribution",
  "Secteur public",
  "[Autre secteur à confirmer]",
];
