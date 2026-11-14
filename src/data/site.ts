// Informations globales du site : identité, coordonnées, navigation.
// Toute valeur entre [crochets] est un contenu à valider avec la cliente.

export const site = {
  name: "Emna Ladhib",
  tagline: "Amélioration continue & Lean Six Sigma",
  description:
    "Emna Ladhib, ing., Lean Six Sigma Black Belt, accompagne les organisations du Québec dans l'amélioration de leurs processus : consultation, coaching et formation.",
  locale: "fr-CA",
  // false pendant la validation avec la cliente : le site n'est pas indexé par Google.
  // Passer à true (et mettre à jour public/robots.txt) au lancement officiel.
  indexable: false,
  credentials: "B. Ing., LSSBB",
  contact: {
    email: "[courriel@domaine.ca]",
    phone: "[514-000-0000]",
    region: "[Grand Montréal], Québec",
  },
  social: {
    linkedin: "https://ca.linkedin.com/in/emna-ladhib-b-ing-lssbb-35a42694",
  },
  cta: {
    label: "Demander une rencontre exploratoire",
    href: "/contact",
  },
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: "Approche", href: "/approche" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Consultation", href: "/services/consultation" },
      { label: "Coaching", href: "/services/coaching" },
      { label: "Formation", href: "/services/formation" },
    ],
  },
  { label: "Formations", href: "/formations" },
  {
    label: "À propos",
    href: "/a-propos",
    children: [
      { label: "Mon parcours", href: "/a-propos" },
      { label: "Équipe & formateurs", href: "/equipe" },
    ],
  },
  { label: "Ressources", href: "/ressources" },
];

export const footerNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Approche", href: "/approche" },
  { label: "Services", href: "/services" },
  { label: "Formations", href: "/formations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Ressources", href: "/ressources" },
  { label: "Contact", href: "/contact" },
];
