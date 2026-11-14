# Site web d'Emna Ladhib (ing., LSSBB)

Site vitrine pour une consultante et formatrice en amélioration continue / Lean Six Sigma au Québec.
Références d'inspiration : leannovation.ca/nous (structure services + valeurs) et campuslean.com/formateurs (fiches formateurs, catalogue).

## Phase actuelle : coquille et contenu
- Priorité : **contenu et structure**. L'UI/UX sera travaillé dans une phase ultérieure.
- La charte graphique est **provisoire** : tout passe par `src/styles/tokens.css`.
- Tout fait non confirmé sur la cliente est marqué `[...]` ou `[À VALIDER]`. Ne jamais inventer de faits biographiques, de chiffres ni de témoignages. Voir `docs/contenus-a-valider.md`.

## Stack
- Astro 5 (site statique), TypeScript, CSS natif. Node 22.14 sur le poste : **ne pas passer à Astro 7** (exige Node 22.23 ou plus).
- `npm run dev` : serveur local (http://localhost:4321) · `npm run build` : génère `dist/`.

## Aperçu en ligne (validation cliente)
- https://taupe-kashata-cc64d4.netlify.app : déployé par glisser-déposer du dossier `dist/` (Netlify Drop).
- Indexation bloquée pendant la validation (`site.indexable = false` + `public/robots.txt`). À réactiver au lancement.
- Les fichiers locaux font foi : ne pas modifier le site dans l'interface Netlify, ces changements seraient écrasés au prochain dépôt.

## Où modifier quoi
| Besoin | Fichier |
|---|---|
| Coordonnées, navigation, CTA | `src/data/site.ts` |
| Accueil : valeurs, démarche, chiffres, témoignages | `src/data/home.ts` |
| Services | `src/content/services/*.md` |
| Catalogue de formations | `src/content/formations/*.md` |
| Équipe / formateurs | `src/content/equipe/*.md` |
| Blogue | `src/content/articles/*.md` |
| Couleurs, polices, espacements | `src/styles/tokens.css` |
| Schémas des contenus | `src/content.config.ts` |

## Arborescence du site
Accueil · Approche · Services (Consultation, Coaching, Formation) · Formations (catalogue + fiches) · À propos · Équipe · Ressources (blogue) · Contact · Confidentialité · 404

## Équipe d'agents (`.claude/agents/`)
| Agent | Rôle |
|---|---|
| `chef-de-projet` | Planification, répartition des tâches, suivi |
| `business-analyst` | Besoins, personas, user stories, règles d'affaires |
| `redacteur-contenu` | Textes du site, microcopie, articles |
| `marketing-strategist` | Positionnement, messages, génération de leads |
| `seo-specialist` | Mots-clés, meta, données structurées, SEO local |
| `ux-ui-designer` | Charte, tokens, gabarits, responsive |
| `frontend-developer` | Pages et composants Astro |
| `backend-developer` | Formulaires, infolettre, hébergement, sécurité |
| `qa-accessibilite` | Tests, WCAG 2.2 AA, conformité Loi 25 / LCAP |

## Conventions
- Langue : français (Québec), vouvoiement du visiteur, « je » pour Emna.
- Conformité : Loi 25 (renseignements personnels), LCAP (infolettre).
- `archive/maquette-v0/` : première maquette one-page, conservée pour référence et exclue du build.
