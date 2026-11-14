# Charte graphique (v1)

**Direction :** « atelier d'amélioration continue ». Univers de l'usine et du bureau Lean : cartes de contrôle, ruban jaune de marquage 5S, feuilles A3.

## Élément signature
La **carte de contrôle** de l'accueil (`src/components/ControlChart.astro`) : un processus instable, avec des points rouges hors limites, devient stable après un projet DMAIC. C'est ce que fait le Six Sigma, montré en une image. Les données sont illustratives.

## Couleurs (`src/styles/tokens.css`)
| Nom | Hex | Usage |
|---|---|---|
| Ardoise | `#15212B` | Texte, boutons, sections sombres |
| Papier | `#F4F6F5` | Fond |
| Ruban 5S | `#F5C518` | Accent : surlignage, soulignés, focus. Jamais pour du texte sur fond clair |
| Défaut | `#D64933` | Uniquement pour les points hors contrôle de la carte |

## Typographie
- **Archivo** élargie (`font-stretch` 118 à 125 %) : titres, au ton de signalétique industrielle.
- **IBM Plex Sans** : texte courant.
- **IBM Plex Mono** : étiquettes, mesures, annotations (eyebrows, tags).

## Règles
- Numérotation seulement quand c'est une vraie séquence : la démarche est notée **D-M-A-I-C**.
- Le jaune reste rare : il signale, il ne décore pas.
- Rayons courts (3 à 10 px), pas d'ombres au repos, liseré jaune au survol des cartes.
- Les animations respectent `prefers-reduced-motion`.
