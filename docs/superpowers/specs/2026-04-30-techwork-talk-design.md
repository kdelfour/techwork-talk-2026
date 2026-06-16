# Design — Talk Tech'Work Lyon 2026

> *Devons-nous sacrifier la qualité avec l'IA ?*

---

## 1. Contexte

| Champ | Valeur |
|---|---|
| **Conférence** | Tech'Work Lyon 2026 |
| **Track** | Craft (Craft Room) |
| **Date** | Jeudi 18 juin 2026 |
| **Horaire** | 16:00 → 16:50 (50 min) |
| **Format** | Talk avec slides — 40 min de présentation + 10 min Q&A |
| **Niveau** | Intermédiaire |
| **Speaker** | Kevin Delfour (CTO) |
| **Lien session** | https://techwork.events/sessions/cmn2z82un005t01prv9hvn0y9/ |

### Objectif du talk

REX d'un CTO confronté à l'IA dans des projets en production. Le talk explore :

1. Pourquoi les développeurs expérimentés résistent à l'IA (ego, identité, craft)
2. Comment nos standards (SOLID, Clean Architecture, DDD…) ont été pensés pour compenser nos limites humaines
3. Ce que l'IA change réellement dans la notion de qualité
4. Ce que Kevin a modifié concrètement dans ses exigences et ses standards d'équipe

**Positionnement** : ni "pro IA" ni "anti IA". Une réflexion pragmatique sur l'évolution du craft à l'ère de la génération de code.

### Public cible

Développeurs expérimentés, lead dev, architectes, CTO. Public Craft, donc sensible à la qualité, au geste, à l'héritage.

---

## 2. Décisions de cadrage

| Décision | Choix |
|---|---|
| **Durée** | 40 min de talk (slot total 50 min avec Q&A) |
| **Livrable speaker** | Notes speaker dans chaque slide **+** script narratif complet à part (`script.md`) |
| **Titre** | Officiel : *"Devons-nous sacrifier la qualité avec l'IA ?"* |
| **Ton** | **Mix** : intro provocatrice (axe ego), REX nuancé en 2e moitié, fin assumée |
| **Code/démos** | **Aucun code, aucune démo**. 100 % concepts, REX, schémas, métaphores |
| **Palette visuelle** | TRON étendu : cyan + orange (TRON canon) + magenta/violet en accents |
| **Fil rouge** | **Analogie horlogère** : haute horlogerie ↔ craft logiciel, crise du quartz (Seiko Astron 1969) ↔ arrivée de l'IA, redéfinition de la qualité ↔ horlogerie de luxe post-quartz |
| **Stack** | Slidev + UnoCSS + composants Vue custom (cohérent avec la prez SocialNetwork existante) |

---

## 3. Architecture narrative — Approche "L'héritage / La crise / Le renouveau"

Arc dramaturgique en 3 actes. Le mix provoc/REX se distribue mécaniquement :
- **Acte I** prépare le terrain (héritage craft, identité)
- **Acte II** = moment provocateur (ego, remise en question des standards)
- **Acte III** = REX nuancé + résolution

**Cible : 29 slides pour 40 min** (≈1.4 min/slide).

### ACTE I — L'HÉRITAGE (12 min, slides 1–8)

> *La haute horlogerie comme métaphore du craft logiciel.*

| # | Slide | Rôle |
|---|---|---|
| 1 | Cover : titre + sous-titre + Tech'Work 2026 | Accroche TRON |
| 2 | Qui parle ? Kevin Delfour, CTO | Crédibilité |
| 3 | Hook public : "Code IA → enthousiaste ou allergique ?" | Engager la salle |
| 4 | Séparateur ACTE I — L'HÉRITAGE | Repère narratif |
| 5 | Notre histoire commune : Beck, Fowler, Evans, Martin / Patek, Vacheron, Audemars, Lange | Le craft a des pères |
| 6 | Ce qu'on a appris : SOLID, DRY, Clean Archi, DDD, TDD = nos complications horlogères | Inventaire |
| 7 | La promesse implicite : un beau code se transmet, se révise, se respecte | Pourquoi on y croit |
| 8 | Notre identité de craftsman : "Nous sommes des horlogers du logiciel" | Pivot vers Acte II |

### ACTE II — LA CRISE (15 min, slides 9–19)

> *La crise du quartz comme miroir de l'arrivée de l'IA.*

| # | Slide | Rôle |
|---|---|---|
| 9 | Séparateur ACTE II — LA CRISE | Repère narratif |
| 10 | L'IA débarque : Décembre 1969 / Novembre 2022 | Mise en parallèle |
| 11 | Le choc : premier regard sur du code IA | Phénoménologie |
| 12 | Nos réactions classiques : "pas clean, pas SOLID, pas DDD" | Miroir |
| 13 | Et pourtant… ça marche, ça teste, c'est rapide. Une quartz est 60× plus précise. | Inconfort |
| 14 | La question gênante : pourquoi on rejette ? | Pivot |
| 15 | **PUNCHLINE EGO** : "Si on porte une mécanique, ce n'est pas pour la précision." | Moment fort 1 |
| 16 | Creusons : d'où viennent vraiment nos standards ? | Bascule |
| 17 | Standards = béquilles humaines (visuel 4 quadrants) | Cœur conceptuel |
| 18 | Détail : DRY, Patterns, Hexagonale, Tests = limites humaines compensées | Démonstration |
| 19 | **PUNCHLINE ACTE II** : "Nos standards sont des complications cognitives." | Moment fort 2 |

### ACTE III — LE RENOUVEAU (13 min, slides 20–29)

> *Aujourd'hui, on porte les deux. Pas pour les mêmes raisons.*

| # | Slide | Rôle |
|---|---|---|
| 20 | Séparateur ACTE III — LE RENOUVEAU | Repère narratif |
| 21 | L'IA n'a pas nos limites (pas de fatigue, pas de mémoire limitée) | Bascule paradigme |
| 22 | Maintenance → Régénération | Concept clé |
| 23 | Nouveaux critères de qualité : promptabilité, convention forte, refactorabilité par régénération | Visuel |
| 24 | REX CTO — intro : "Aujourd'hui, je porte les deux. Et je code pareil." | On entre dans le concret |
| 25 | Ce que j'ai abandonné | REX 1 |
| 26 | Ce que j'ai renforcé | REX 2 |
| 27 | La qualité a changé, pas baissé. (L'horlogerie a survécu à la crise du quartz.) | Réponse au titre |
| 28 | **PUNCHLINE FINALE** : "Nous ne sacrifions pas la qualité. Nous redéfinissons ce que nous vendons." | Moment fort 3 |
| 29 | Merci / Q&A / Contacts | Clôture |

---

## 4. Fil rouge horlogerie — points d'ancrage

| Slide | Référent horloger |
|---|---|
| 5 | Beck/Fowler/Evans/Martin → Patek/Vacheron/Audemars/Lange |
| 6 | SOLID, hexagonale, DDD = complications (tourbillon, quantième, répétition minutes) |
| 7 | Patek : "You never actually own a Patek Philippe, you merely look after it for the next generation" |
| 8 | "Nous sommes des horlogers du logiciel" |
| 10 | **Décembre 1969 — Seiko Astron** (première quartz) // **Novembre 2022 — ChatGPT** |
| 11 | Quartz japonaise 100$ vs chrono suisse 10 000$. Pas d'âme, pas de geste, mais plus précise. |
| 12 | "Pas d'échappement, pas de balancier" → "pas SOLID, pas DDD" |
| 13 | Mécanique COSC certifiée (top 3 % de la production) : ±5 sec/jour. Quartz standard : ±15 sec/mois. Quartz haute précision (Citizen Chronomaster, Bulova UHF) : ±5 sec/an. **De 10 à 100 fois plus précise selon le segment.** |
| 15 | "Si on porte une mécanique, ce n'est pas pour la précision." |
| 17 | "Les complications horlogères sont magnifiques parce qu'on a su les inventer **sans électronique**." |
| 19 | "Nos standards sont des complications. Belles. Mais ce sont nos limites qui les ont rendues nécessaires." |
| 21 | La quartz n'a pas de balancier qui s'use. Pas d'huile à remplacer. |
| 22 | Mécanique : révision tous les 5 ans, démontée pièce par pièce. Quartz : on change la pile, voire le mouvement. **Régénération > Réparation.** |
| 24 | "Aujourd'hui, je porte les deux. Pas pour les mêmes raisons. Et je code pareil." |
| 27 | "L'horlogerie de luxe a survécu à la crise du quartz. Pas en restant figée. En redéfinissant ce qu'elle vendait." |
| 28 | "Nous ne sacrifions pas la qualité. Nous redéfinissons ce que nous vendons." |

**Référents réutilisables (à doser)** : Patek Philippe, Tourbillon (Breguet 1801, compense la gravité = workaround d'une limite physique), Crise du quartz (1970-1985, 1000 → 600 manufactures suisses), Swatch (1983, mécanique de masse industrielle), Grand Seiko Spring Drive (2004, hybride mécanique-quartz).

---

## 5. Identité visuelle TRON étendu

### Palette

| Rôle | Couleur | Hex | Usage |
|---|---|---|---|
| Fond principal | Noir profond | `#000000` | Toutes les slides |
| **Cyan TRON** (Acte I) | Cyan néon | `#00d9ff` | L'héritage, titres principaux, glow dominant |
| **Orange TRON** (Acte II) | Orange ambré | `#ff8c00` | La crise, provocations, alertes |
| **Magenta** (Acte III) | Magenta néon | `#ff2e9a` | Le renouveau, punchline finale |
| Violet (transition) | Violet électrique | `#a855f7` | Slides charnières, secondaires |
| Vert grid (subtil) | Cyan désaturé | `#0e3a4a` | Lignes de grille TRON en fond |
| Texte principal | Blanc cassé | `#e5e7eb` | Lecture |
| Texte secondaire | Gris froid | `#9ca3af` | Sous-titres, métadonnées |

### Typographie

- **Titres** : `Orbitron` (Google Fonts) — sans-serif géométrique, very TRON
- **Corps** : `Space Grotesk` (déjà utilisée dans SocialNetwork) — lecture confortable
- **Mono** : `JetBrains Mono` — étiquettes techniques (SOLID, DRY…)

### Motifs visuels

1. Grille TRON perspective au sol (composant `TronGrid`) — opacité 5–12 %, couleur de l'acte
2. Lignes néon horizontales pour rythmer
3. Bordures glow `shadow-[0_0_30px_var(--glow)]` pulsées sur les cards
4. Light streaks animées — uniquement sur les 3 séparateurs d'actes
5. Texte glow pulsé (style.css déjà existant) étendu aux 3 couleurs

### Mapping couleur par acte

- **Acte I — L'héritage** : dominante cyan
- **Acte II — La crise** : dominante orange
- **Acte III — Le renouveau** : dominante magenta
- **Punchlines fortes** : flash magenta + glow exagéré (slides 15, 19, 28)
- **Séparateurs d'actes** : full screen, couleur de l'acte, grille TRON pleine intensité

### Slide-types récurrents

1. **Cover/Séparateur d'acte** — full screen, gros titre Orbitron, grille TRON pleine, glow texte
2. **Slide concept** — titre + visuel central + sous-texte court
3. **Slide liste** (réactions, standards, REX) — `GlowCard` avec révélation `v-click` pour rythmer l'oral
4. **Slide punchline** — texte massif glow pulsé, fond presque vide, grille discrète
5. **Slide REX** — split layout avant/après ou abandonné/renforcé
6. **Slide Q&A / contacts** — coordonnées + grille TRON

### Animations

- Pulse glow étendu aux 3 couleurs
- Light streaks sur séparateurs d'actes (3×)
- `v-click` pour révélation des listes (réactions, standards, REX)
- Pas d'animation gratuite

---

## 6. Composants Vue

### Repris de SocialNetwork (adaptés)

| Composant | Adaptation |
|---|---|
| `GlowCard.vue` | Étendre couleurs : ajout `orange`, `magenta`, mapping aux 3 actes |
| `GlowText.vue` | Idem + font Orbitron pour les punchlines |
| `GradientTitle.vue` | Font Orbitron, gradients TRON (cyan→orange, cyan→magenta) |

### Abandonnés

`NetworkBg.vue`, `Timer.vue`, `AnimatedCounter.vue`, `Confetti.vue` — non pertinents.

### Nouveaux composants

| # | Composant | Rôle | Props principales |
|---|---|---|---|
| 1 | `TronGrid.vue` | Fond grille TRON perspective au sol | `color`, `opacity`, `intensity` |
| 2 | `ActSeparator.vue` | Séparateur d'acte plein écran | `act` (I/II/III), `title`, `subtitle`, `color` |
| 3 | `Punchline.vue` | Slide punchline grand format | `color`, slot principal |
| 4 | `WatchAnalogy.vue` | Card 2 colonnes mécanique/quartz | `leftLabel`, `rightLabel`, `bridge`, slots `#left` `#right` `#code` |
| 5 | `NeonDivider.vue` | Séparateur horizontal lumineux | `color`, `thickness` |
| 6 | `LightStreak.vue` | Animation ligne diagonale lumineuse | (interne à `ActSeparator`) |
| 7 | `StandardCard.vue` | Card "standard ↔ limite humaine compensée" | `name`, `humanLimit`, `color` |

### Adaptation `global-bottom.vue`

Remplacer les phases atelier par les 3 actes :

```js
const phases = [
  { label: 'Intro',           start: 1,  end: 3,  color: '#9ca3af' },
  { label: 'L\'héritage',     start: 4,  end: 8,  color: '#00d9ff' },
  { label: 'La crise',        start: 9,  end: 19, color: '#ff8c00' },
  { label: 'Le renouveau',    start: 20, end: 27, color: '#ff2e9a' },
  { label: 'Final',           start: 28, end: 29, color: '#a855f7' },
]
```

Compteur de temps avec param `?time=40` (40 min).

---

## 7. Arborescence projet

```
/home/kdelfour/Workspace/Personnel/Prez/TechWork/
├── README.md
├── package.json
├── uno.config.ts
├── style.css
├── slides.md
├── global-bottom.vue
├── public/
├── components/
│   ├── TronGrid.vue
│   ├── ActSeparator.vue
│   ├── Punchline.vue
│   ├── WatchAnalogy.vue
│   ├── StandardCard.vue
│   ├── NeonDivider.vue
│   ├── LightStreak.vue
│   ├── GlowCard.vue
│   ├── GlowText.vue
│   └── GradientTitle.vue
├── script.md
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-04-30-techwork-talk-design.md   ← ce document
```

---

## 8. Livrables

| # | Livrable | Description |
|---|---|---|
| 1 | Projet Slidev complet | Dépôt prêt à `npm install && npm run dev` |
| 2 | `slides.md` | 29 slides, fil rouge horlogerie, notes speaker détaillées |
| 3 | `script.md` | Script narratif complet (~5500–6500 mots, ≈40 min à 150 mots/min). Structuré par slide, avec transitions, silences, repères temporels, indications de jeu |
| 4 | Composants Vue TRON | 7 nouveaux + 3 adaptés |
| 5 | `README.md` | Lancement local, export PDF, mode présentateur, paramètre `?time=40` |

### Notes speaker (style commentaire HTML Slidev)

Chaque slide contient un bloc `<!-- ... -->` avec :
- **Intention** de la slide (1 ligne)
- **Points clés** (3–5 bullets)
- **Connexion** précédent/suivant (transition)
- **Repère temporel** (cumul depuis 0:00)
- **Indication de jeu** si pertinente (silence, regarder la salle, accélérer)

### Structure `script.md`

```
# Devons-nous sacrifier la qualité avec l'IA ?
## Tech'Work Lyon 2026 — Script narratif (40 min)

> Légende : [pause] [silence] [regarder la salle] [accélérer] [glow text]

---

## ACTE I — L'HÉRITAGE (0:00 → 12:00)

### Slide 1 — Cover (0:00 → 0:30)
*[lumière basse, on prend la salle]*

> "Bonjour. ..."

### Slide 2 — Qui parle ? (0:30 → 2:00)
> "..."

[etc. pour les 29 slides]

---

## REPÈRES DE RYTHME

- À 12:00 (fin Acte I) → slide 9
- À 27:00 (fin Acte II) → slide 20
- À 40:00 → slide 28 (slide 29 = Q&A)
- En retard ? Raccourcir REX (slides 25-26)
- En avance ? Développer Patek/Beck (slide 5)
```

---

## 9. Critères d'acceptation

1. Le projet se lance localement sans difficulté (`npm i && npm run dev`)
2. Les **29 slides** sont présentes et structurées en **3 actes**
3. L'analogie horlogère est **filée et explicite**, pas anecdotique
4. Le ton **mix** (provoc → REX) est respecté : 3 punchlines fortes (slides 15, 19, 28)
5. Le `script.md` couvre les **40 minutes** en intégralité
6. La palette TRON étendu est cohérente (cyan acte I / orange acte II / magenta acte III)
7. Les notes speaker sont présentes sur **chaque slide**
8. Le deck est exportable en **PDF**
9. La barre de phases en bas suit les **3 actes**
10. Le timer (param `?time=40`) fonctionne

---

## 10. Hors-périmètre (non-buts)

- Pas de démo live IA (Cursor / Claude Code) pendant le talk
- Pas d'extraits de code dans les slides (focus 100% concept/REX/schéma)
- Pas de QR code pour l'instant (peut être ajouté en post-prod si Kevin le souhaite)
- Pas de variante de talk en 20 min (focus sur le format 40 min)
- Pas de version anglaise (talk en français)

---

## 11. Étapes d'implémentation (à détailler dans le plan)

1. **Init projet Slidev** — `package.json`, `uno.config.ts`, `style.css`, structure
2. **Composants Vue** — créer les 7 nouveaux + adapter les 3 repris
3. **Adaptation `global-bottom.vue`** — phases par actes
4. **Rédaction `slides.md`** — 29 slides + notes speaker
5. **Rédaction `script.md`** — verbatim 40 min
6. **Vérification** — lancement local, export PDF, lecture du timing
7. **README** — instructions de lancement
