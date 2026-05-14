# Kasa — Application React

Application web de location immobilière entre particuliers

L'objectif  : reproduire une maquette Figma en développant une **Single Page Application React** avec des composants réutilisables, une navigation par React Router, et un style en SCSS.

---

## Stack technique

| Outil | Version |
|---|---|
| React | 19.2 |
| React Router DOM | 7.10 |
| Vite | 7.2 |
| Sass (SCSS) | 1.94 |
| ESLint | 9.39 |

---
## Démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

---

## Pages

| Route | Composant | Description |
|---|---|---|
| `/` | `Home` | Galerie de tous les logements disponibles |
| `/about` | `About` | Présentation des valeurs de Kasa |
| `/lodging/:id` | `Lodging` | Détail d'un logement (carrousel, équipements, hôte, note) |
| `*` | `ErrorPage` | Page 404 avec lien de retour à l'accueil |

---

## Arborescence

```
p5/
├── public/
│   ├── Favicon.ico
│   ├── Favicon.png
│   └── logo.png
├── src/
│   ├── main.jsx                  # Point d'entrée React
│   ├── assets/                   # Images statiques (bannières, flèches, étoiles, logo)
│   │   ├── banner1.png
│   │   ├── banner2.png
│   │   ├── carrousel-left-arrow.png
│   │   ├── carrousel-right-arrow.png
│   │   ├── drop-arrow-down.png
│   │   ├── drop-arrow-up.png
│   │   ├── logo.png
│   │   ├── logo.svg
│   │   ├── logo-white.png
│   │   ├── star-active.png
│   │   └── star-inactive.png
│   ├── components/               # Composants réutilisables
│   │   ├── App.jsx               # Routeur principal + Header/Footer
│   │   ├── Banner.jsx            # Bandeau image + titre de page
│   │   ├── Carrousel.jsx         # Diaporama d'images avec navigation
│   │   ├── Drop.jsx              # Accordéon (menu déroulant)
│   │   ├── DropContainer.jsx     # Groupe de 4 Drop pour la page À propos
│   │   ├── Footer.jsx            # Pied de page
│   │   ├── Header.jsx            # En-tête avec logo et navigation
│   │   ├── Host.jsx              # Profil de l'hôte + note
│   │   ├── Rating.jsx            # Notation 5 étoiles
│   │   ├── Tag.jsx               # Badge catégorie individuel
│   │   ├── TagsContainer.jsx     # Liste de badges Tag
│   │   ├── Thumb.jsx             # Vignette d'un logement
│   │   └── ThumbContainer.jsx    # Grille de toutes les vignettes
│   ├── datas/
│   │   └── logements.json        # Données des logements (id, titre, photos, hôte, équipements…)
│   ├── pages/
│   │   ├── About.jsx             # Page À propos
│   │   ├── ErrorPage.jsx         # Page 404
│   │   ├── Home.jsx              # Page d'accueil
│   │   └── Lodging.jsx           # Page détail d'un logement
│   └── styles/                   # Feuilles de style SCSS par composant
│       ├── index.scss
│       ├── Banner.scss
│       ├── Carrousel.scss
│       ├── Drop.scss
│       ├── Dropcontainer.scss
│       ├── ErrorPage.scss
│       ├── Footer.scss
│       ├── Header.scss
│       ├── Host.scss
│       ├── Lodging.scss
│       ├── Tag.scss
│       ├── TagsContainer.scss
│       ├── Thumb.scss
│       └── ThumbContainer.scss
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## Composants principaux

### `Carrousel`
Diaporama d'images avec flèches de navigation gauche/droite. Gère le défilement circulaire et masque les flèches quand il n'y a qu'une seule image.

### `Drop`
Accordéon générique : reçoit un `titre` et un `contenu` (liste ou texte) et affiche/masque ce contenu au clic.

### `Rating`
Affiche 5 étoiles (actives ou inactives) en fonction de la note numérique du logement.

### `ThumbContainer` / `Thumb`
Lit `logements.json` et génère dynamiquement la galerie de l'accueil. Chaque vignette est un lien vers `/lodging/:id`.

### `TagsContainer` / `Tag`
Reçoit un tableau de tags et les affiche sous forme de badges colorés.

---

## Données

Les logements sont stockés dans [src/datas/logements.json](src/datas/logements.json). Chaque entrée contient :

```json
{
  "id": "c67ab8a7",
  "title": "Appartement cosy",
  "cover": "url",
  "pictures": ["url1", "url2"],
  "description": "…",
  "host": { "name": "Nathalie Jean", "picture": "url" },
  "rating": "5",
  "location": "Ile de France - Paris 17e",
  "equipments": ["Wifi", "Micro-Ondes", "…"],
  "tags": ["Batignolle", "Montmartre"]
}
```
