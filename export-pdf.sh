#!/usr/bin/env bash
#
# Export WYSIWYG du deck en PDF.
#
# Pourquoi ne pas faire `slidev export` directement :
# l'export PDF natif de Slidev passe par le print-to-PDF de Chromium, qui ne sait
# PAS rendre `background-clip: text` (nos titres en dégradé via <GradientTitle>) — le
# dégradé remplit alors tout le bloc et le texte disparaît. On exporte donc chaque
# slide en PNG (capture WYSIWYG, identique au navigateur) puis on assemble en PDF.
#
# Dépendances : Node + @slidev/cli (déjà dans le projet) + un assembleur image->PDF :
#   img2pdf (recommandé, `pip install img2pdf`) ou ImageMagick (`magick`/`convert`).
#
set -euo pipefail
cd "$(dirname "$0")"

OUT="slides-export.pdf"
TMP=".export-png"

# Réutilise le Chromium déjà présent dans le cache Playwright (évite un
# re-téléchargement : le package npm attend parfois un build différent du cache).
CHROME=$(ls -d "$HOME"/.cache/ms-playwright/chromium-*/chrome-linux64/chrome 2>/dev/null | head -1 || true)
EXEC_ARG=()
[ -n "$CHROME" ] && EXEC_ARG=(--executable-path "$CHROME")

echo "▶ Export des slides en PNG (WYSIWYG)…"
rm -rf "$TMP"
npx slidev export --format png --output "$TMP" --timeout 120000 "${EXEC_ARG[@]}"

echo "▶ Assemblage en PDF → $OUT"
mapfile -t FILES < <(ls "$TMP"/*.png | sort -V)   # tri numérique : 1, 2, …, 10, 11

# img2pdf d'abord (lossless, aucun souci de policy) ; sinon ImageMagick (magick/convert).
# NB : sur Ubuntu la policy ImageMagick bloque souvent l'écriture PDF — d'où img2pdf en CI.
if command -v img2pdf >/dev/null 2>&1; then
  img2pdf "${FILES[@]}" -o "$OUT"
elif command -v magick >/dev/null 2>&1; then
  magick "${FILES[@]}" "$OUT"
elif command -v convert >/dev/null 2>&1; then
  convert "${FILES[@]}" "$OUT"
else
  echo "✗ Aucun assembleur trouvé. Installe img2pdf (« pip install img2pdf ») ou ImageMagick." >&2
  rm -rf "$TMP"; exit 1
fi

rm -rf "$TMP"
echo "✓ $OUT généré ($(du -h "$OUT" | cut -f1), ${#FILES[@]} pages)"
