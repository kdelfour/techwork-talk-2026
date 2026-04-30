import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(() => {
  if (typeof window === 'undefined') return

  // Désactiver les raccourcis Slidev qui ouvrent des menus latéraux ou modaux
  // - 'o' / 'O' : QuickOverview (panel plein écran avec liste des slides)
  // - 'e' / 'E' : SideEditor (panel d'édition à droite, dev uniquement)
  // - 'g' / 'G' : Goto dialog
  const blockedKeys = new Set(['o', 'O', 'e', 'E', 'g', 'G'])
  window.addEventListener('keydown', (ev) => {
    if (!blockedKeys.has(ev.key) || ev.ctrlKey || ev.metaKey || ev.altKey) return
    const target = ev.target as HTMLElement | null
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      return
    }
    ev.stopImmediatePropagation()
    ev.preventDefault()
  }, { capture: true })
})
