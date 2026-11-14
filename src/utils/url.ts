// Préfixe un chemin interne avec le « base » Astro (ex. /emna-ladhib-site sur GitHub Pages).
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;
