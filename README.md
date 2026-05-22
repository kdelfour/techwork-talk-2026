# Devons-nous sacrifier la qualité avec l'IA ?

> Talk de Kevin Delfour, CTO — **Tech'Work Lyon 2026**, jeudi 18 juin 2026, 16:00–16:50, Craft Room.

Slidev + UnoCSS, thème néon TRON étendu, fil rouge **horlogerie** (la haute horlogerie face à la crise du quartz comme métaphore du craft logiciel face à l'IA).

---

## Lancement

```bash
npm install
npm run dev
```

Ouvre http://localhost:3030.

### Avec timer (mode présentation)

Pour activer le tracking de rythme (cible : ~42 min de talk) :

```
http://localhost:3030/?time=42
```

Une barre haut-droite affiche le temps écoulé, la progression slides vs temps, et un état "en avance / en retard / dans le rythme".

### Mode présentateur

```bash
npm run presenter
```

---

## Export PDF

```bash
npm run export
```

Produit `slides-export.pdf` à la racine.

---

## Structure du deck

45 slides en 3 actes :

| Acte | Slides | Couleur dominante | Durée cible |
|---|---|---|---|
| Intro | 1–4 | gris/cyan | ~3 min |
| **I — Construction** | 5–10 | cyan `#00d9ff` | ~8 min |
| **II — Déconstruction** | 11–27 | orange `#ff8c00` | ~15 min |
| **III — Reconstruction** | 28–42 | magenta `#ff2e9a` | ~13 min |
| Final | 43–45 | violet | ~2 min |

Voir le design complet dans [`docs/superpowers/specs/2026-04-30-techwork-talk-design.md`](./docs/superpowers/specs/2026-04-30-techwork-talk-design.md).

---

## Script narratif

Le verbatim complet du talk (~40 min de parole) est dans [`script.md`](./script.md).
À utiliser pour la répétition. Le speaker peut s'y appuyer mais ne le lit pas en live.

---

## Composants Vue custom

Sous `components/` :

| Composant | Rôle |
|---|---|
| `TronGrid` | Fond grille TRON perspective |
| `ActSeparator` | Séparateur d'acte plein écran |
| `Punchline` | Slide punchline grand format |
| `WatchAnalogy` | Card 2 colonnes mécanique/quartz ↔ code |
| `StandardCard` | Card "standard ↔ limite humaine compensée" |
| `NeonDivider` | Séparateur horizontal lumineux |
| `LightStreak` | Animation diagonale lumineuse |
| `GlowCard` | Card avec bordure et glow |
| `GlowText` | Texte glow pulsé |
| `GradientTitle` | Titre Orbitron avec gradient |

---

## Raccourcis Slidev utiles

| Raccourci | Action |
|---|---|
| `f` | Plein écran |
| `o` | Vue d'ensemble (toutes les slides) |
| `e` | Mode dessin |
| `d` | Mode sombre / clair (le deck force toujours le sombre) |
| `→ / ←` | Slide suivante / précédente |
| `Espace` | Slide suivante |
