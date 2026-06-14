---
theme: default
title: Devons-nous sacrifier la qualité avec l'IA ?
info: |
  Tech'Work Lyon 2026 — Track Craft
  Talk de Kevin Delfour, CTO — 18 juin 2026
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Space Grotesk'
  mono: 'JetBrains Mono'
---
title: "Le prompt magique"
class: chatgpt-slide
clicks: 5
---

<TronGrid color="#10a37f" :opacity="0.06" />

<div class="relative z-10 flex flex-col h-full w-full max-w-3xl mx-auto py-4">

<div class="flex items-center gap-2 mb-5 shrink-0">
  <div class="w-8 h-8 rounded-full bg-[#10a37f] flex items-center justify-center text-white text-lg leading-none">✦</div>
  <span class="font-bold text-gray-100 text-lg">ChatGPT</span>
  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">turbo-deluxe-9000</span>
</div>

<div class="flex-1 flex flex-col gap-3 text-left text-[0.95rem] leading-relaxed justify-start overflow-hidden">

<div v-if="$clicks >= 1" class="self-end max-w-[78%] bg-[#2f2f2f] rounded-2xl rounded-br-md px-5 py-3 text-gray-100">
  <Typewriter text="je suis à la ramasse complet, génère-moi une prez sur la qualité et l'IA, un truc qui claque stp, merci, bisous 😘" :speed="42" jitter />
</div>

<div v-if="$clicks >= 2" class="self-start max-w-[85%] flex gap-3">
  <div class="w-7 h-7 shrink-0 rounded-full bg-[#10a37f] flex items-center justify-center text-white text-sm leading-none mt-1">✦</div>
  <div class="bg-[#1a1a1a] border border-white/10 rounded-2xl rounded-bl-md px-5 py-3 text-gray-300 italic">
    <Typewriter text="Bien sûr ! Voici votre texte : « Mes très chers frères et sœurs, nous voici réunis aujourd'hui pour célébrer le sacrement du code propre… »" :speed="16" :thinking="900" />
  </div>
</div>

<div v-if="$clicks >= 3" class="self-end max-w-[78%] bg-[#2f2f2f] rounded-2xl rounded-br-md px-5 py-3 text-gray-100">
  <Typewriter text="euh… c'est pas le bon auditoire 😅 quelque chose de plus engagé." :speed="42" jitter />
</div>

<div v-if="$clicks >= 4" class="self-start max-w-[85%] flex gap-3">
  <div class="w-7 h-7 shrink-0 rounded-full bg-[#10a37f] flex items-center justify-center text-white text-sm leading-none mt-1">✦</div>
  <div class="bg-[#1a1a1a] border border-white/10 rounded-2xl rounded-bl-md px-5 py-3 text-gray-300 italic">
    <Typewriter text="Compris, version militante : « Compagnons ! L'heure est grave. Le capital algorithmique nous vole notre savoir-faire — debout, les forçats du refacto ! »" :speed="16" :thinking="900" />
  </div>
</div>

</div>

<div v-if="$clicks >= 5" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }" class="shrink-0 mt-5 text-center">
  <div class="text-2xl md:text-3xl font-orbitron font-black leading-tight">
    L'IA, ça peut aider.<br/>
    Mais visiblement… <GlowText color="#ff8c00">pas pour tout.</GlowText>
  </div>
</div>

</div>

<!--
**Intention** — démarrer par un éclat de rire, désamorcer, et poser en creux la thèse : l'IA est un outil formidable… mal utilisé, elle produit du hors-sujet qui "claque" mais ne sert à rien. Parfaite rampe de lancement vers le sujet qualité.
**Déroulé (clics)** —
1. lire le prompt à voix haute, ton fatigué/relâché — la salle se reconnaît
2. première réponse "sermon" : prendre une voix d'homélie, marquer le silence
3. "c'est pas le bon auditoire" — jouer l'agacement complice
4. deuxième réponse "militante" : monter d'un cran, poing levé pour le fun
5. punchline : redescendre, sourire — "l'IA peut aider, mais pas là" → bascule vers le vrai sujet
**Connexion** — "Bon. Blague à part, c'est exactement de ça qu'on va parler." → slide titre
**Repère temporel** — 0:00 → 0:45
**Jeu** — ne pas se presser entre les clics, laisser les rires retomber avant d'enchaîner.
-->

---

<TronGrid color="#00d9ff" :opacity="0.14" />

<div class="relative z-10 flex flex-col items-center justify-center h-full">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-cyan mb-6 font-orbitron">
  Tech'Work Lyon · 18 juin 2026
</div>

<div class="max-w-5xl mx-auto">
  <GradientTitle size="5xl" variant="tron">
    Devons-nous sacrifier<br/>
    la qualité avec l'IA ?
  </GradientTitle>
</div>

<div class="mt-16 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
  <span class="w-2 h-2 rounded-full bg-tron-cyan animate-pulse inline-block"></span>
  Kevin Delfour · CTO · Track Craft
</div>

</div>

<!--
**Intention** — accrocher la salle visuellement, planter le sujet, semer l'analogie horlogère.
**Points clés** —
- annoncer le titre, sourire
- "On va parler IA et craft, mais on va le faire en passant par les montres"
- ne PAS trop dévoiler le fil rouge ici, juste le suggérer
**Connexion** — vers slide 2 : "Avant de commencer, un mot sur qui vous parle"
**Repère temporel** — 0:00 → 0:30
**Jeu** — laisser la slide afficher 5-8s en silence pour que la salle absorbe
-->

---
title: "Qui parle ?"
---

<TronGrid color="#a855f7" :opacity="0.08" />

<div class="relative z-10 flex items-center justify-center h-full">
<div class="text-center max-w-3xl">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-violet mb-6 font-orbitron">
  Votre intervenant
</div>

<h1 class="text-5xl font-orbitron font-black mb-8">Kevin Delfour</h1>

<div class="text-2xl text-gray-300 mb-10">
  CTO · Dev depuis <span class="text-tron-cyan font-bold">15+ ans</span> · Défenseur du <span class="text-tron-magenta">craft</span>
</div>

<div class="grid grid-cols-3 gap-4 text-sm text-gray-400">
  <GlowCard color="cyan">
    <div class="text-tron-cyan font-bold mb-1 font-orbitron text-xs tracking-widest uppercase">Hier</div>
    <div>Douze ans à râler quand<br/>on n'écrivait pas SOLID.<br/><span class="italic text-gray-500">Demandez à mes juniors.</span></div>
  </GlowCard>

  <GlowCard color="orange">
    <div class="text-tron-orange font-bold mb-1 font-orbitron text-xs tracking-widest uppercase">Aujourd'hui</div>
    <div>L'IA dans nos projets,<br/>tous les jours, en prod</div>
  </GlowCard>

  <GlowCard color="magenta">
    <div class="text-tron-magenta font-bold mb-1 font-orbitron text-xs tracking-widest uppercase">Le sujet</div>
    <div>Ce que ça m'a fait<br/>changer dans mes standards</div>
  </GlowCard>
</div>

<div class="mt-10 text-base text-gray-500 italic">
  Et accessoirement, fan de montres mécaniques. On va y revenir.
</div>

</div>
</div>

<!--
**Intention** — crédibilité (CTO, 15 ans), auto-dérision discrète pour désamorcer le côté "sage qui descend de la montagne", annonce subtile du fil rouge horlogerie.
**Points clés** —
- "15 ans de métier — dont une bonne partie à râler quand le code n'était pas SOLID."
- petit sourire en coin sur "Demandez à mes juniors" — la salle comprend
- "Aujourd'hui, l'IA dans nos projets, tous les jours."
- "Et le sujet : ce que ça m'a fait changer dans mes standards."
- "Je ne suis pas un fanboy d'IA. Je suis un mec qui a un avis sur le code, et qui a changé d'avis sur certaines choses."
- mention discrète des montres : "Vous allez comprendre"
**Connexion** — vers slide 3 : engager la salle
**Repère temporel** — 0:30 → 2:00 (90s)
**Jeu** — ralentir sur "défenseur du craft", regarder la salle. Sourire en coin sur "Demandez à mes juniors" — laisser le petit rire de reconnaissance arriver. PAS d'auto-flagellation : on rit avec la salle, pas contre elle.
-->

---
title: "Enthousiaste ou allergique ?"
---

<TronGrid color="#00d9ff" :opacity="0.10" />

<div class="relative z-10 flex flex-col items-center justify-center h-full">

<div class="text-[5rem] mb-8">🤚</div>

<h1 class="text-5xl font-orbitron font-black text-center leading-tight">
  Code généré par l'IA :<br/>
  vous êtes plutôt <GlowText color="#00d9ff">enthousiaste</GlowText><br/>
  ou plutôt <GlowText color="#ff8c00">allergique</GlowText> ?
</h1>

<div class="mt-12 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-lg text-gray-400">
  Levez la main. Je regarde. Et on en reparle dans 40 minutes.
</div>

</div>

<!--
**Intention** — engager la salle, baseliner le ressenti, créer un rendez-vous pour la fin.
**Points clés** —
- "Levez la main si plutôt enthousiaste" → compter à l'oeil
- "Maintenant plutôt allergique" → compter
- "Très bien. On va y revenir à la fin."
- créer un mini "before/after" implicite : ils se souviendront de leur position de départ
**Connexion** — vers slide 4 : "Pendant qu'on est dans le sondage… une autre question."
**Repère temporel** — 2:00 → 3:00 (60s, on raccourcit pour faire de la place au vote montres)
**Jeu** — vraiment lever la tête, regarder, prendre le temps. Le contact avec la salle ici détermine les 40 min suivantes.
-->

---
title: "Et au poignet ?"
---

<TronGrid color="#a855f7" :opacity="0.10" />

<div class="relative z-10 flex flex-col items-center justify-center h-full px-12">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-violet mb-5 font-orbitron">
  Pendant qu'on y est…
</div>

<h1 class="text-5xl font-orbitron font-black text-center leading-tight mb-10">
  Et au <GlowText color="#a855f7">poignet</GlowText>,<br/>
  vous portez quoi ?
</h1>

<div class="grid grid-cols-2 gap-10 max-w-3xl w-full">

  <GlowCard color="cyan" :glow="true">
    <div class="flex flex-col items-center text-center py-4">
      <div class="i-tabler-clock-cog text-7xl text-tron-cyan mb-4" />
      <div class="font-orbitron font-bold text-tron-cyan tracking-widest uppercase text-base mb-3">Mécanique</div>
      <div class="text-sm text-gray-400 leading-relaxed">
        Remontage manuel,<br/>balancier, échappement.
      </div>
      <div class="mt-3 text-xs text-tron-cyan/70 italic font-mono">Le geste pur.</div>
    </div>
  </GlowCard>

  <GlowCard color="orange" :glow="true">
    <div class="flex flex-col items-center text-center py-4">
      <div class="i-tabler-cpu text-7xl text-tron-orange mb-4" />
      <div class="font-orbitron font-bold text-tron-orange tracking-widest uppercase text-base mb-3">Quartz</div>
      <div class="text-sm text-gray-400 leading-relaxed">
        Pile, oscillateur,<br/>moteur pas-à-pas.
      </div>
      <div class="mt-3 text-xs text-tron-orange/70 italic font-mono">L'efficacité moderne.</div>
    </div>
  </GlowCard>

</div>

<div class="mt-10 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
  <div class="i-tabler-hand-finger text-tron-violet text-base" />
  <span>Levez la main</span>
  <span class="text-gray-600">·</span>
  <span class="text-white">souvenez-vous</span>
  <span class="text-gray-600">·</span>
  <span class="italic text-gray-500">on y revient dans 30 min</span>
</div>

</div>

<!--
**Intention** — second hook, prépare directement l'analogie horlogère qui va structurer l'Acte II. Crée un second rendez-vous mémorable avec la salle.
**Points clés** —
- "Pendant qu'on est dans le sondage, j'en ai un autre, plus inhabituel."
- "Levez la main : qui porte une mécanique (manuelle ou automatique) ?" *(compter)*
- "Une quartz ou montre connectée ?" *(compter)*
- "Très bien. Souvenez-vous de votre catégorie. On y revient — promis."
- Si quelqu'un dit "smartwatch", traiter comme quartz (oscillateur électronique).
- L'automatique est rangée avec la mécanique (même architecture : balancier-spiral) — éviter la 3ᵉ catégorie qui dilue l'opposition narrative méca/quartz du reste du talk.
**Connexion** — vers slide 5 (Acte I) : "Bon. On va commencer par parler de craft. Et de montres. Vous allez voir le lien."
**Repère temporel** — 3:00 → 3:30 (30s, rapide, juste un sondage à la volée)
**Jeu** — sourire, "ok il y a 3 horlogers passionnés dans la salle, parfait". Pas trop s'attarder, c'est juste planter une graine.
-->

---
title: "Acte I — Construction"
---

<ActSeparator
  act="I"
  title="CONSTRUCTION"
  subtitle="La haute horlogerie comme métaphore du craft logiciel"
  color="#00d9ff"
/>

<!--
**Intention** — repère narratif fort, annonce l'analogie horlogère qui va être filée.
**Points clés** —
- "Acte un. Avant d'attaquer l'IA, on doit d'abord se rappeler ce qu'on a construit."
- "On va le faire en passant par les montres. Vous allez voir, ça colle parfaitement."
- annoncer la durée implicite : "12 minutes pour ça"
**Connexion** — vers slide 5 : "Le craft a une histoire. L'horlogerie aussi."
**Repère temporel** — 3:30 → 4:00 (30s)
**Jeu** — laisser la slide se déployer. Ne pas parler pendant les 2-3 premières secondes. Ça doit imprimer.
-->

---
title: "Le craft a ses maîtres"
---

<TronGrid color="#00d9ff" :opacity="0.06" />

<div class="relative z-10">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-cyan mb-3 font-orbitron">
  Notre histoire commune
</div>

# Le craft a ses <span class="text-tron-cyan">maîtres</span>

<div class="mt-6 grid grid-cols-2 gap-6">

<GlowCard color="cyan" :glow="true">
  <div class="text-xs tracking-widest uppercase text-tron-cyan mb-3 font-orbitron">Côté code</div>
  <div class="space-y-2">

  - **Kent Beck** — TDD, eXtreme Programming
  - **Martin Fowler** — Refactoring, patterns
  - **Eric Evans** — Domain-Driven Design
  - **Robert C. Martin** — Clean Code, SOLID
  - **Ward Cunningham** — wiki, technical debt
  </div>
</GlowCard>

<GlowCard color="violet" :glow="true">
  <div class="text-xs tracking-widest uppercase text-tron-violet mb-3 font-orbitron">Côté horlogerie</div>
  <div class="space-y-2">

  - **Patek Philippe** — 1839
  - **Vacheron Constantin** — 1755
  - **Audemars Piguet** — 1875
  - **A. Lange & Söhne** — 1845
  - **Breguet** — 1775, le tourbillon
  </div>
</GlowCard>

</div>

<div class="mt-6 text-center text-xl text-gray-400">
  Deux disciplines. Deux héritages. <GlowText color="#00d9ff">Une même obsession du geste.</GlowText>
</div>

</div>

<!--
**Intention** — poser le parallèle d'égal à égal entre nos pères du craft et les grandes manufactures suisses. Légitimer l'analogie qui va structurer tout le talk.
**Points clés** —
- "Quand vous lisez Fowler, vous lisez un horloger qui décrit son atelier"
- "Patek depuis 1839 : c'est plus vieux que l'informatique"
- "Ces gens-là partagent un truc : l'obsession du geste, du détail, de la transmission"
- "Et ils vous diraient probablement les mêmes choses sur la qualité"
**Connexion** — vers slide 6 : "Et qu'est-ce qu'ils nous ont appris ?"
**Repère temporel** — 4:00 → 5:30 (90s)
**Jeu** — citer les noms avec respect. Pause sur "Une même obsession du geste."
-->

---
title: "Ce qu'on a appris à aimer"
---

<TronGrid color="#00d9ff" :opacity="0.06" />

<div class="relative z-10">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-cyan mb-3 font-orbitron">
  Notre vocabulaire
</div>

# Ce qu'on a appris à <span class="text-tron-cyan">aimer</span>

<div class="mt-4 grid grid-cols-3 gap-3">

<div class="p-3 rounded-2xl bg-tron-cyan/10 border border-tron-cyan/30 text-center">
  <div class="font-mono font-bold text-tron-cyan text-lg">SOLID</div>
  <div class="text-xs text-gray-400 mt-1">5 principes,<br/>20 ans de débats</div>
</div>

<div class="p-3 rounded-2xl bg-tron-cyan/10 border border-tron-cyan/30 text-center">
  <div class="font-mono font-bold text-tron-cyan text-lg">DRY</div>
  <div class="text-xs text-gray-400 mt-1">Don't Repeat<br/>Yourself</div>
</div>

<div class="p-3 rounded-2xl bg-tron-cyan/10 border border-tron-cyan/30 text-center">
  <div class="font-mono font-bold text-tron-cyan text-lg">KISS</div>
  <div class="text-xs text-gray-400 mt-1">Keep It<br/>Simple</div>
</div>

<div class="p-3 rounded-2xl bg-tron-violet/10 border border-tron-violet/30 text-center">
  <div class="font-mono font-bold text-tron-violet text-lg">CLEAN ARCHI</div>
  <div class="text-xs text-gray-400 mt-1">Couches,<br/>dépendances</div>
</div>

<div class="p-3 rounded-2xl bg-tron-violet/10 border border-tron-violet/30 text-center">
  <div class="font-mono font-bold text-tron-violet text-lg">HEXAGONAL</div>
  <div class="text-xs text-gray-400 mt-1">Ports &<br/>adapters</div>
</div>

<div class="p-3 rounded-2xl bg-tron-violet/10 border border-tron-violet/30 text-center">
  <div class="font-mono font-bold text-tron-violet text-lg">DDD</div>
  <div class="text-xs text-gray-400 mt-1">Domain-Driven<br/>Design</div>
</div>

<div class="p-3 rounded-2xl bg-tron-magenta/10 border border-tron-magenta/30 text-center">
  <div class="font-mono font-bold text-tron-magenta text-lg">TDD</div>
  <div class="text-xs text-gray-400 mt-1">Test-Driven<br/>Development</div>
</div>

<div class="p-3 rounded-2xl bg-tron-magenta/10 border border-tron-magenta/30 text-center">
  <div class="font-mono font-bold text-tron-magenta text-lg">PATTERNS</div>
  <div class="text-xs text-gray-400 mt-1">23 du GoF,<br/>et bien plus</div>
</div>

<div class="p-3 rounded-2xl bg-tron-magenta/10 border border-tron-magenta/30 text-center">
  <div class="font-mono font-bold text-tron-magenta text-lg">CODE REVIEW</div>
  <div class="text-xs text-gray-400 mt-1">Pair, mob,<br/>review obligatoire</div>
</div>

</div>

<div class="mt-6 text-center text-xl">
  En horlogerie, on appelle ça des <GlowText color="#a855f7">complications</GlowText>.<br/>
  <span class="text-base text-gray-500">Tourbillon, quantième perpétuel, répétition minutes…</span>
</div>

</div>

<!--
**Intention** — inventaire (sans détail) de notre vocabulaire de craft. Asséner le parallèle avec les "complications" horlogères.
**Points clés** —
- balayer rapidement la grille, ne pas tout détailler
- "Ces mots, on les a dans l'ADN. On débat dessus depuis 20 ans."
- "En horlogerie, ce sont les complications. Le tourbillon, c'est notre Hexagonale."
- "Et c'est BEAU. C'est de l'art."
**Connexion** — vers slide 8 : "Et tout ça, ça nous a coûté quelque chose."
**Repère temporel** — 5:30 → 7:00 (90s, raccourci)
**Jeu** — passer à l'aise sur la grille (le public a déjà ces mots). Insister sur "complications" — c'est le hook horlogerie.
-->

---
title: "Apprendre tout ça"
---

<TronGrid color="#00d9ff" :opacity="0.06" />

<div class="relative z-10">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-cyan mb-3 font-orbitron">
  Le coût caché du craft
</div>

# Apprendre tout ça, <span class="text-tron-cyan">ça coûte cher</span>

<div class="mt-6 grid grid-cols-4 gap-3">

<div class="p-3 rounded-2xl bg-tron-cyan/10 border border-tron-cyan/30 text-center">
  <div class="i-tabler-books text-3xl text-tron-cyan mb-2" />
  <div class="font-orbitron font-bold text-tron-cyan text-xs tracking-widest uppercase mb-1">Lectures</div>
  <div class="text-xs text-gray-400">Clean Code, GoF, DDD blue book…</div>
</div>

<div class="p-3 rounded-2xl bg-tron-cyan/10 border border-tron-cyan/30 text-center">
  <div class="i-tabler-microphone-2 text-3xl text-tron-cyan mb-2" />
  <div class="font-orbitron font-bold text-tron-cyan text-xs tracking-widest uppercase mb-1">Conférences</div>
  <div class="text-xs text-gray-400">Devoxx, MiXiT, Craft Conf…<br/>des centaines d'heures</div>
</div>

<div class="p-3 rounded-2xl bg-tron-cyan/10 border border-tron-cyan/30 text-center">
  <div class="i-tabler-bug text-3xl text-tron-cyan mb-2" />
  <div class="font-orbitron font-bold text-tron-cyan text-xs tracking-widest uppercase mb-1">Erreurs</div>
  <div class="text-xs text-gray-400">Refactos cuisants,<br/>prods cassées, leçons</div>
</div>

<div class="p-3 rounded-2xl bg-tron-cyan/10 border border-tron-cyan/30 text-center">
  <div class="i-tabler-messages text-3xl text-tron-cyan mb-2" />
  <div class="font-orbitron font-bold text-tron-cyan text-xs tracking-widest uppercase mb-1">Débats</div>
  <div class="text-xs text-gray-400">Repository vs DAO,<br/>hexagonale vs clean…</div>
</div>

</div>

<div class="mt-5 text-center text-base text-gray-500 italic">
  Des années de montée en compétence. Souvent en dehors des heures de boulot.
</div>

<div class="mt-5 p-4 rounded-2xl bg-tron-orange/10 border border-tron-orange/40">
  <div class="flex items-start gap-4">
    <div class="i-tabler-arrow-big-right-line text-3xl text-tron-orange flex-shrink-0 mt-1" />
    <div>
      <div class="font-orbitron text-tron-orange font-bold text-xs tracking-widest uppercase mb-1">Conséquence inévitable</div>
      <div class="text-lg text-white leading-snug">Cet effort fonde notre <GlowText color="#ff8c00">égo</GlowText> de craftsman.</div>
      <div class="text-sm text-gray-400 mt-1">On ne défend pas ces standards seulement parce qu'ils sont vrais. On les défend aussi parce qu'on les a <strong class="text-white">chèrement payés</strong>.</div>
    </div>
  </div>
</div>

</div>

<!--
**Intention** — révéler une seconde dimension à côté des limites cognitives : l'effort d'apprentissage qui crée un attachement émotionnel. Préparer la déconstruction "ego" de l'Acte II tout en restant en mode positif (Acte I).
**Points clés** —
- "Tous ces patterns, ces principes, ces architectures — on ne les a pas appris en deux week-ends."
- "Lectures denses. Conférences. Centaines d'heures de pratique. Refactos cuisants. Débats avec des collègues. Des années."
- "Et c'est NORMAL que ça nous coûte cher de les laisser tomber."
- "Cet effort fonde notre égo. Au sens noble : on défend ce qu'on a appris durement."
- "Souvenez-vous de ça pour la suite. Notre résistance n'est pas QUE cognitive. Elle est aussi affective."
**Connexion** — vers slide 9 (la promesse implicite) : "Et derrière tout ça, il y a une promesse."
**Repère temporel** — 7:00 → 8:00 (60s)
**Jeu** — ton chaleureux, complice. Moment "entre devs". Ne PAS l'asséner comme une critique. Le présenter comme une fierté légitime.
-->

---
title: "La promesse implicite"
---

<TronGrid color="#00d9ff" :opacity="0.08" />

<div class="relative z-10 flex flex-col items-center justify-center h-full">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-cyan mb-6 font-orbitron">
  La promesse implicite
</div>

<div class="text-center max-w-3xl">

<div class="text-3xl font-orbitron font-bold leading-relaxed mb-10">
  Un beau code se <GlowText color="#00d9ff">transmet</GlowText>,<br/>
  se <GlowText color="#a855f7">révise</GlowText>,<br/>
  se <GlowText color="#ff2e9a">respecte</GlowText>.
</div>

<div class="text-xl text-gray-400 italic max-w-2xl mx-auto leading-relaxed">
  « On ne possède jamais vraiment une Patek Philippe.<br/>
  On en est juste le gardien pour la génération suivante. »
</div>

<div class="mt-3 text-sm text-gray-600">
  — slogan publicitaire Patek Philippe, 1996
</div>

</div>
</div>

<!--
**Intention** — révéler la promesse implicite que les standards portent : on construit pour la suite. Citation Patek qui scelle l'analogie.
**Points clés** —
- "Quand on écrit du clean code, on le fait pour qui ?"
- "Pas pour le compilateur. Pas pour la prod. Pour le prochain."
- citer la pub Patek de 1996, lentement
- "On code pareil. On lègue."
**Connexion** — vers slide 10 : "Et ça, ça forge une identité."
**Repère temporel** — 8:00 → 9:30 (90s)
**Jeu** — moment lent. Lire la citation Patek doucement. Laisser un silence après "On code pareil. On lègue."
-->

---
title: "Notre identité de craftsman"
---

<TronGrid color="#00d9ff" :opacity="0.10" />

<div class="relative z-10 flex flex-col items-center justify-center h-full">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-cyan mb-8 font-orbitron">
  Notre identité
</div>

<div class="text-center">

<div class="text-7xl font-orbitron font-black leading-tight mb-8">
  Nous sommes des<br/>
  <GlowText color="#00d9ff" font="orbitron">horlogers</GlowText><br/>
  du logiciel.
</div>

<div class="mt-10 text-xl text-gray-400 max-w-2xl mx-auto">
  Et c'est cette <span class="text-white font-semibold">identité</span> qui va se faire bousculer.
</div>

</div>

</div>

<!--
**Intention** — fermer l'Acte I sur une affirmation forte, pivot vers l'Acte II qui va remettre tout ça en question.
**Points clés** —
- "Voilà ce qu'on est. Des horlogers du logiciel."
- "On forme. On transmet. On juge la qualité d'un coup d'œil."
- "C'est notre fierté. C'est aussi notre identité."
- "Et c'est exactement ce qui va être bousculé maintenant."
**Connexion** — vers slide 11 : transition vers l'Acte II.
**Repère temporel** — 9:30 → 12:00 (2:30 — ralentir, on prépare le pivot)
**Jeu** — silence avant la dernière phrase. Bien marquer le mot "bousculé".
-->

---
title: "Acte II — Déconstruction"
---

<ActSeparator
  act="II"
  title="DÉCONSTRUCTION"
  subtitle="La crise du quartz comme miroir de l'arrivée de l'IA"
  color="#ff8c00"
/>

<!--
**Intention** — bascule narrative forte. Le talk passe en mode provoc.
**Points clés** —
- "Acte deux. La crise."
- "Et pour comprendre ce qui nous arrive, on va remonter à 1969."
**Connexion** — vers slide 10 : la date charnière.
**Repère temporel** — 12:00 → 12:30 (30s)
**Jeu** — pause. Ne pas parler pendant les 3 premières secondes. Le ton change ici.
-->

---
title: "Deux dates qui ont tout changé"
---

<TronGrid color="#ff8c00" :opacity="0.08" />

<div class="relative z-10">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-orange mb-6 font-orbitron text-center">
  Deux dates qui ont tout changé
</div>

<div class="grid grid-cols-2 gap-8 mt-8">

<GlowCard color="orange" :glow="true">
  <div class="text-tron-orange font-orbitron text-3xl font-black mb-3">25 décembre 1969</div>
  <div class="text-lg mb-3"><strong class="text-white">Seiko sort l'Astron.</strong></div>
  <div class="text-base text-gray-300 leading-relaxed">
    Première montre quartz au monde.<br/>
    Plus précise qu'un chronomètre suisse.<br/>
    <span class="text-tron-orange">100 fois moins chère à produire.</span>
  </div>
  <div class="mt-3 text-sm text-gray-500 italic">→ La Suisse panique.</div>
</GlowCard>

<GlowCard color="magenta" :glow="true">
  <div class="text-tron-magenta font-orbitron text-3xl font-black mb-3">30 novembre 2022</div>
  <div class="text-lg mb-3"><strong class="text-white">OpenAI sort ChatGPT.</strong></div>
  <div class="text-base text-gray-300 leading-relaxed">
    Premier LLM grand public capable de coder.<br/>
    Plus rapide qu'un junior.<br/>
    <span class="text-tron-magenta">Disponible pour tout le monde.</span>
  </div>
  <div class="mt-3 text-sm text-gray-500 italic">→ Les devs paniquent.</div>
</GlowCard>

</div>

<div class="mt-8 text-center text-xl font-bold">
  <GlowText color="#ff8c00">L'histoire ne se répète pas. Elle rime.</GlowText>
</div>

</div>

<!--
**Intention** — installer le parallèle Astron / ChatGPT comme analogie centrale de l'Acte II.
**Points clés** —
- "Noël 1969. Seiko sort la première montre quartz."
- "Plus précise qu'un chrono suisse. 100 fois moins chère. Du jour au lendemain."
- "Entre 1970 et 1985, la Suisse va perdre 60 % de ses manufactures."
- "Maintenant. Novembre 2022. OpenAI sort ChatGPT."
- "Vous voyez le parallèle ?"
**Connexion** — vers slide 11 : le choc de la première rencontre.
**Repère temporel** — 12:30 → 14:30 (2 min)
**Jeu** — ralentir sur les dates. Insister sur "L'histoire ne se répète pas. Elle rime." (citation attribuée à Twain).
-->

---
title: "On est passé de la mécanique…"
---

<TronGrid color="#00d9ff" :opacity="0.07" />

<div class="relative z-10 h-full flex flex-col px-12 py-4">

<div class="text-[10px] font-bold tracking-[0.4em] uppercase text-tron-cyan/80 mb-2 font-orbitron text-center">
  Sous le verre
</div>

<h2 class="text-4xl font-orbitron font-black text-center mb-4 leading-tight">
  On est passé de la <GlowText color="#00d9ff">mécanique</GlowText>…
</h2>

<div class="flex-1 min-h-0 grid grid-cols-2 gap-8 items-center">

  <!-- Photo -->
  <div class="flex flex-col items-center gap-2 min-h-0">
    <img
      src="/resources/clock-meca.jpg"
      alt="Calibre mécanique Omega 3861"
      class="rounded-2xl object-contain"
      style="max-height: 280px; max-width: 100%; box-shadow: 0 0 40px rgba(0,217,255,0.35); border: 1px solid rgba(0,217,255,0.4);"
    />
    <div class="text-[10px] font-mono text-tron-cyan/80 tracking-[0.2em] uppercase">
      Calibre Omega 3861 · Master Co-Axial
    </div>
  </div>

  <!-- Schema -->
  <div class="flex flex-col items-center gap-2 min-h-0">
    <div
      class="rounded-xl overflow-hidden bg-white flex"
      style="max-height: 230px; box-shadow: 0 0 35px rgba(0,217,255,0.25); border: 2px solid rgba(0,217,255,0.5);"
    >
      <img
        src="/resources/clock-mecanik-schema.jpeg"
        alt="Vue éclatée d'un mouvement mécanique"
        class="object-contain"
        style="max-height: 230px; max-width: 100%;"
      />
    </div>
    <div class="text-[10px] font-mono text-tron-cyan/80 tracking-[0.2em] uppercase">
      Vue éclatée
    </div>
  </div>

</div>

<div class="mt-4 text-center text-sm font-mono text-gray-300">
  <span class="text-tron-cyan font-bold">~ 130 pièces</span>
  <span class="text-gray-600 mx-3">·</span>
  oscillation à <span class="text-tron-cyan">4 Hz</span>
  <span class="text-gray-600 mx-3">·</span>
  8 ans de formation pour assembler
</div>

</div>

<!--
**Intention** — laisser la salle ressentir la beauté et la complexité du calibre mécanique avant de basculer sur la quartz.
**Points clés** —
- "Voilà ce qu'il y a sous le verre d'une montre suisse en 1972."
- pointer la photo (l'objet) puis le schéma (la décortication)
- "~ 130 pièces. Un balancier qui bat 4 fois par seconde. 8 ans de formation."
- ne pas sourire — laisser la gravité du métier s'installer
**Connexion** — vers slide suivante (quartz) : la phrase reste suspendue, "on est passé de la mécanique…"
**Repère temporel** — 14:30 → 14:50 (~20s)
**Jeu** — silence 3s sur l'image. Lire la stats à voix posée.
-->

---
title: "…à la quartz."
---

<TronGrid color="#ff8c00" :opacity="0.07" />

<div class="relative z-10 h-full flex flex-col px-12 py-4">

<div class="text-[10px] font-bold tracking-[0.4em] uppercase text-tron-orange/80 mb-2 font-orbitron text-center">
  Sous le verre
</div>

<h2 class="text-4xl font-orbitron font-black text-center mb-4 leading-tight">
  …à la <GlowText color="#ff8c00">quartz</GlowText>.
</h2>

<div class="flex-1 min-h-0 grid grid-cols-2 gap-8 items-center">

  <!-- Photo -->
  <div class="flex flex-col items-center gap-2 min-h-0">
    <img
      src="/resources/clock-quartz.jpg"
      alt="Calibre quartz Grand Seiko 9F62A"
      class="rounded-2xl object-contain"
      style="max-height: 280px; max-width: 100%; box-shadow: 0 0 40px rgba(255,140,0,0.35); border: 1px solid rgba(255,140,0,0.4);"
    />
    <div class="text-[10px] font-mono text-tron-orange/80 tracking-[0.2em] uppercase">
      Calibre Grand Seiko 9F62A
    </div>
  </div>

  <!-- Schema -->
  <div class="flex flex-col items-center gap-2 min-h-0">
    <div
      class="rounded-xl overflow-hidden bg-white flex"
      style="max-height: 230px; box-shadow: 0 0 35px rgba(255,140,0,0.25); border: 2px solid rgba(255,140,0,0.5);"
    >
      <img
        src="/resources/clock-quartz-schema.jpg"
        alt="Vue éclatée d'un mouvement quartz"
        class="object-contain"
        style="max-height: 230px; max-width: 100%;"
      />
    </div>
    <div class="text-[10px] font-mono text-tron-orange/80 tracking-[0.2em] uppercase">
      Vue éclatée
    </div>
  </div>

</div>

<div class="mt-4 text-center text-sm font-mono text-gray-300">
  <span class="text-tron-orange font-bold">~ 50 pièces</span>
  <span class="text-gray-600 mx-3">·</span>
  oscillation à <span class="text-tron-orange">32 768 Hz</span>
  <span class="text-gray-600 mx-3">·</span>
  sortie d'usine
</div>

</div>

<!--
**Intention** — choc visuel par contraste. La complexité d'avant disparaît. Une pile, un cristal, un circuit.
**Points clés** —
- "Et voilà ce qu'il y a dans une Seiko Astron."
- pointer la photo : "C'est ça. Une pile, un circuit, et c'est tout."
- pointer le schéma : "Pas de balancier. Pas d'échappement. Pas de spiral Breguet."
- "~ 50 pièces. Un cristal qui vibre 32 768 fois par seconde. Sortie d'usine."
**Connexion** — vers slide "Le choc" : "Imaginez maintenant qu'on vous met ÇA sous le nez."
**Repère temporel** — 14:50 → 15:10 (~20s)
**Jeu** — accélérer un peu le débit ici, la simplicité doit choquer. Puis silence avant la slide suivante.
-->

---
title: "Le choc"
---

<TronGrid color="#ff8c00" :opacity="0.10" />

<div class="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-8">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-orange mb-8 font-orbitron">
  Le choc — première rencontre
</div>

<div class="text-3xl font-orbitron font-bold leading-relaxed text-center mb-10">
  Une <GlowText color="#ff8c00">quartz japonaise</GlowText> à 100&nbsp;$.<br/>
  Plus précise qu'un <GlowText color="#00d9ff">chronomètre suisse</GlowText> à 10&nbsp;000&nbsp;$.
</div>

<div class="grid grid-cols-3 gap-4 text-center w-full">
  <div class="p-3 rounded-xl bg-white/5 border border-white/10">
    <div class="text-3xl mb-2">😶</div>
    <div class="text-sm text-gray-400">Pas d'âme</div>
  </div>
  <div class="p-3 rounded-xl bg-white/5 border border-white/10">
    <div class="text-3xl mb-2">⚙️</div>
    <div class="text-sm text-gray-400">Pas de geste</div>
  </div>
  <div class="p-3 rounded-xl bg-white/5 border border-white/10">
    <div class="text-3xl mb-2">📜</div>
    <div class="text-sm text-gray-400">Pas de poésie</div>
  </div>
</div>

<div class="mt-8 text-2xl font-orbitron font-black text-center">
  Mais <GlowText color="#ff8c00">plus précise</GlowText>.
</div>

</div>

<!--
**Intention** — décrire la sidération du moment, premier regard sur la quartz / sur le code IA.
**Points clés** —
- "Imaginez. Vous êtes horloger en Suisse en 1972. On vous met une Seiko sous le nez."
- "Pas d'échappement, pas de rouage, pas de balancier. Une pile et un cristal."
- "Et c'est PLUS précis que ce que vous savez faire."
- pause
- "C'est exactement ce qu'on a ressenti la première fois qu'on a regardé du code de Copilot ou de Claude."
**Connexion** — vers slide 12 : nos réactions classiques (qui sonnent pareil).
**Repère temporel** — 14:30 → 16:00 (90s)
**Jeu** — ralentir sur "Mais plus précise." Dire la phrase au ralenti.
-->

---
title: "Nos réactions classiques"
---

<TronGrid color="#ff8c00" :opacity="0.08" />

<div class="relative z-10">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-orange mb-6 font-orbitron text-center">
  Nos réactions
</div>

<h2 class="text-4xl font-orbitron font-black text-center mb-8">
  Vous reconnaissez ces phrases ?
</h2>

<div class="grid grid-cols-2 gap-6">

<GlowCard color="violet">
  <div class="text-xs tracking-widest uppercase text-tron-violet mb-3 font-orbitron">L'horloger en 1972</div>
  <div class="space-y-2 text-base italic text-gray-200">

  - "Pas d'échappement, ce n'est pas une vraie montre."
  - "Pas de finition main, c'est de la merde."
  - "Une pile ? Quel manque de noblesse."
  - "Ça ne durera jamais 100 ans."
  - "Aucun horloger digne de ce nom n'aurait signé ça."
  </div>
</GlowCard>

<GlowCard color="orange">
  <div class="text-xs tracking-widest uppercase text-tron-orange mb-3 font-orbitron">Le dev senior en 2024</div>
  <div class="space-y-2 text-base italic text-gray-200">

  - "C'est pas SOLID, ça ne respecte rien."
  - "Pas de DDD, où sont les bounded contexts ?"
  - "Cette IA ne sait même pas ce qu'est l'inversion de dépendance."
  - "Ce sera ingérable en prod dans 6 mois."
  - "Aucun dev digne de ce nom n'aurait signé ça."
  </div>
</GlowCard>

</div>

<div class="mt-6 text-center text-xl text-gray-400">
  Mêmes mots. <GlowText color="#ff8c00">Mêmes peurs.</GlowText> 50 ans d'écart.
</div>

</div>

<!--
**Intention** — moment miroir. Faire rire de soi, faire reconnaître nos propres réactions, désamorcer la défense par l'humour.
**Points clés** —
- "Lisez les deux colonnes. Ce sont les mêmes phrases."
- "L'une est dans les archives suisses, l'autre vous l'avez dit la semaine dernière."
- attendre 5-6 secondes que la salle lise
- "C'est pas un défaut. C'est humain. C'est ce qui arrive quand on voit son métier remis en question."
**Connexion** — vers slide 13 : "Et pourtant…"
**Repère temporel** — 16:00 → 17:30 (90s)
**Jeu** — laisser le temps de lire. Sourire en lisant à voix haute une ou deux phrases.
-->

---
title: "La précision en chiffres"
---

<TronGrid color="#ff8c00" :opacity="0.08" />

<div class="relative z-10">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-orange mb-6 font-orbitron text-center">
  Et pourtant…
</div>

<h2 class="text-4xl font-orbitron font-black text-center mb-8">
  La <GlowText color="#ff8c00">précision</GlowText>, en chiffres.
</h2>

<WatchAnalogy
  leftLabel="Mécanique COSC (top 3 %)"
  rightLabel="Quartz haute précision"
  leftColor="#00d9ff"
  rightColor="#ff8c00"
  bridge="ratio"
>
  <template #left>

  - **±5 secondes / jour**
  - 18 000 à 36 000 alternances/h
  - réglage manuel à l'atelier
  - service tous les 5 ans

  </template>
  <template #right>

  - **±5 secondes / an**
  - 32 768 oscillations/sec
  - aucun réglage
  - pile remplaçable, mouvement régénérable

  </template>
  <template #code>
  Une quartz est <span class="text-tron-orange font-bold">10 à 100 fois plus précise</span> qu'une mécanique. Selon le segment.<br/>
  <span class="text-base text-gray-400 italic">Et le code IA ? Souvent fonctionnel, testé, et plus rapide.</span>
  </template>
</WatchAnalogy>

</div>

<!--
**Intention** — confronter la salle à la réalité numérique : la quartz est mesurablement plus précise. Le code IA fonctionne mesurablement.
**Points clés** —
- "Une mécanique COSC, c'est le top 3 % de la production. ±5 secondes par JOUR."
- "Une quartz Bulova haute précision : ±5 secondes par AN."
- "C'est un facteur 365."
- "Le code généré par IA aujourd'hui : il compile, il passe les tests, il livre la feature."
- "On peut le critiquer, mais on ne peut pas dire qu'il ne fonctionne pas."
**Connexion** — vers slide 14 : la question gênante.
**Repère temporel** — 17:30 → 19:00 (90s)
**Jeu** — donner les chiffres lentement, articuler. Marquer un silence avant "Et le code IA ?"
-->

---
title: "La question gênante"
---

<TronGrid color="#ff8c00" :opacity="0.10" />

<div class="relative z-10 flex flex-col items-center justify-center h-full max-w-3xl mx-auto">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-orange mb-8 font-orbitron">
  La question gênante
</div>

<div class="text-center">

<div class="text-5xl font-orbitron font-black leading-tight mb-10">
  Si c'est <GlowText color="#ff8c00">plus précis</GlowText>,<br/>
  <GlowText color="#ff8c00">plus rapide</GlowText>,<br/>
  <GlowText color="#ff8c00">moins cher</GlowText>…
</div>

<div class="text-3xl font-orbitron font-bold text-gray-300">
  Pourquoi est-ce qu'on <GlowText color="#ff2e9a">rejette</GlowText> ?
</div>

</div>

</div>

<!--
**Intention** — formuler la question qui dérange et qui ouvre vers la punchline ego.
**Points clés** —
- "Donc, sur les critères mesurables, la quartz gagne. Le code IA livre."
- "Et pourtant, on rejette. Pourquoi ?"
- laisser un silence
- "On va répondre franchement."
**Connexion** — vers slide 15 : la punchline ego.
**Repère temporel** — 19:00 → 20:00 (60s)
**Jeu** — prendre le temps. Ne pas être trop rapide. Le silence prépare la punchline.
-->

---
title: "Punchline — Pas pour la précision"
---

<TronGrid color="#ff2e9a" :opacity="0.08" />

<div class="relative z-10 flex flex-col items-center justify-center h-full px-12">

  <div class="text-center text-6xl font-orbitron font-bold leading-tight max-w-5xl text-white">
    Si on porte une <span class="text-tron-magenta">mécanique</span>,<br/>
    ce n'est pas pour la <GlowText color="#ff8c00" font="orbitron">précision</GlowText>.
  </div>

  <div class="mt-12 h-1 w-32 rounded-full" style="background: #ff2e9a;"></div>

</div>

<!--
**Intention** — punchline forte 1/3. Le coeur provocateur de l'Acte II.
**Points clés** —
- afficher la slide
- silence de 2-3 secondes
- "Personne n'achète une Patek pour donner l'heure plus précisément qu'une Casio."
- "On l'achète pour autre chose. Pour le geste. Pour la transmission. Pour SOI."
- pause
- "Et le code crafté ? On le défend pour quoi, vraiment ? Pour le client ? Ou pour nous ?"
**Connexion** — vers slide 16 : creusons.
**Repère temporel** — 20:00 → 21:30 (90s)
**Jeu** — c'est LA punchline ego. Doit être assumée. Pas d'auto-protection. Regarder la salle.
-->

---
title: "D'où viennent vraiment nos standards ?"
---

<TronGrid color="#ff8c00" :opacity="0.06" />

<div class="relative z-10">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-orange mb-6 font-orbitron">
  Creusons sérieusement
</div>

<h2 class="text-4xl font-orbitron font-black mb-6">
  D'où viennent <span class="text-tron-orange">vraiment</span> nos standards ?
</h2>

<div class="mt-8 grid grid-cols-2 gap-6">

<GlowCard color="violet">
  <div class="text-tron-violet font-orbitron text-xs tracking-widest uppercase mb-3">L'histoire officielle</div>
  <div class="text-base text-gray-300 leading-relaxed">
    "Ces standards garantissent <strong class="text-white">la qualité, la maintenabilité, la lisibilité du code.</strong> Ils sont <strong class="text-white">universels</strong>."
  </div>
  <div class="mt-3 text-sm text-tron-violet italic">→ Vrai. Mais incomplet.</div>
</GlowCard>

<GlowCard color="orange" :glow="true">
  <div class="text-tron-orange font-orbitron text-xs tracking-widest uppercase mb-3">L'histoire qu'on évite</div>
  <div class="text-base text-gray-300 leading-relaxed">
    "Ces standards ont aussi été inventés pour <strong class="text-white">compenser nos limites humaines</strong> face au code."
  </div>
  <div class="mt-3 text-sm text-tron-orange italic">→ Aussi vrai. Et ça change tout.</div>
</GlowCard>

</div>

<div class="mt-6 text-center text-lg text-gray-400 italic">
  Le tourbillon a été inventé par Breguet en 1801 pour <span class="text-white">compenser la gravité</span> sur le balancier d'une montre de poche.<br/>
  Une <span class="text-tron-orange font-bold">contrainte physique</span> a engendré une <span class="text-tron-cyan font-bold">complication magnifique</span>.
</div>

</div>

<!--
**Intention** — bascule conceptuelle de l'Acte II. Introduire l'idée que les standards sont aussi des compensations.
**Points clés** —
- "Demandez à 10 devs : pourquoi DRY ? Réponse : 'pour la maintenabilité'. OK."
- "Mais creusez : maintenabilité POUR QUI ? Pour QUI a du mal à maintenir 3 fois la même logique ?"
- raconter le tourbillon : "Breguet, 1801. Le balancier d'une montre de poche se dérègle à cause de la gravité. Sa réponse : faire tourner tout l'échappement sur lui-même pour annuler l'effet."
- "C'est génial. C'est une oeuvre d'art. Et c'est un workaround."
**Connexion** — vers slide 17 : standards = béquilles humaines.
**Repère temporel** — 21:30 → 23:00 (90s)
**Jeu** — raconter le tourbillon comme une anecdote. Sourire à "C'est génial. Et c'est un workaround."
-->

---
title: "Standard 1/4 — DRY"
---

<TronGrid color="#00d9ff" :opacity="0.07" />

<div class="relative z-10 flex flex-col items-center justify-center h-full px-12">

<div class="text-[10px] font-bold tracking-[0.4em] uppercase text-tron-cyan mb-8 font-orbitron">
  Béquille cognitive · 1 / 4
</div>

<div class="rounded-3xl p-10 border-2 backdrop-blur-sm relative overflow-hidden max-w-3xl w-full" style="border-color: rgba(0,217,255,0.45); background-color: rgba(0,217,255,0.04); box-shadow: 0 0 60px rgba(0,217,255,0.18);">
<div class="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none" style="background: #00d9ff;"></div>
<div class="relative z-10">
<div class="text-[10px] tracking-[0.3em] uppercase mb-2 font-orbitron text-tron-cyan">Standard</div>
<div class="font-mono font-black text-7xl text-white leading-none mb-2">DRY</div>
<div class="text-sm text-gray-500 italic mb-8">Don't Repeat Yourself</div>
<div class="flex items-center gap-3 mb-3">
<div class="i-tabler-arrow-down text-xl text-tron-cyan"></div>
<span class="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-orbitron">Compense</span>
</div>
<div class="text-xl text-gray-200 leading-relaxed italic">
« On ne peut pas maintenir 3 fois la même logique.<br/>
On va en rater une lors d'un changement. »
</div>
</div>
</div>

</div>

<!--
**Intention** — premier exemple de standard reframed comme béquille cognitive. Poser le pattern de raisonnement.
**Points clés** —
- "DRY. Don't Repeat Yourself."
- "Pourquoi cette règle existe ?"
- "Parce qu'on n'arrive pas à maintenir 3 copies cohérentes. Point."
- "Ce n'est pas une vérité absolue. C'est une compensation."
**Connexion** — vers slide suivante (Patterns) : "Deuxième exemple."
**Repère temporel** — 23:00 → 23:25 (~25s)
**Jeu** — poser, ne pas surjouer. C'est le 1er exemple, on installe le rythme.
-->

---
title: "Standard 2/4 — Design Patterns"
---

<TronGrid color="#ff8c00" :opacity="0.07" />

<div class="relative z-10 flex flex-col items-center justify-center h-full px-12">

<div class="text-[10px] font-bold tracking-[0.4em] uppercase text-tron-orange mb-8 font-orbitron">
  Béquille cognitive · 2 / 4
</div>

<div class="rounded-3xl p-10 border-2 backdrop-blur-sm relative overflow-hidden max-w-3xl w-full" style="border-color: rgba(255,140,0,0.45); background-color: rgba(255,140,0,0.04); box-shadow: 0 0 60px rgba(255,140,0,0.18);">
<div class="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none" style="background: #ff8c00;"></div>
<div class="relative z-10">
<div class="text-[10px] tracking-[0.3em] uppercase mb-2 font-orbitron text-tron-orange">Standard</div>
<div class="font-mono font-black text-6xl text-white leading-none mb-2">Design Patterns</div>
<div class="text-sm text-gray-500 italic mb-8">Gang of Four · 1994</div>
<div class="flex items-center gap-3 mb-3">
<div class="i-tabler-arrow-down text-xl text-tron-orange"></div>
<span class="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-orbitron">Compense</span>
</div>
<div class="text-xl text-gray-200 leading-relaxed italic">
« On ne peut pas tenir une architecture complexe en tête.<br/>
On a besoin de structures mentales partagées. »
</div>
</div>
</div>

</div>

<!--
**Intention** — deuxième exemple, accentuer le pattern : c'est une béquille pour LIMITE HUMAINE.
**Points clés** —
- "Design Patterns. Le bouquin du Gang of Four en 1994."
- "Pourquoi ?"
- "Parce qu'on n'arrive pas à expliquer une architecture sans vocabulaire commun."
- "C'est une béquille pour notre incapacité à partager des structures complexes."
**Connexion** — vers slide suivante (Hexagonale).
**Repère temporel** — 23:25 → 23:50 (~25s)
**Jeu** — même cadence que slide précédente, le rythme s'installe.
-->

---
title: "Standard 3/4 — Architecture Hexagonale"
---

<TronGrid color="#ff2e9a" :opacity="0.07" />

<div class="relative z-10 flex flex-col items-center justify-center h-full px-12">

<div class="text-[10px] font-bold tracking-[0.4em] uppercase text-tron-magenta mb-8 font-orbitron">
  Béquille cognitive · 3 / 4
</div>

<div class="rounded-3xl p-10 border-2 backdrop-blur-sm relative overflow-hidden max-w-3xl w-full" style="border-color: rgba(255,46,154,0.45); background-color: rgba(255,46,154,0.04); box-shadow: 0 0 60px rgba(255,46,154,0.18);">
<div class="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none" style="background: #ff2e9a;"></div>
<div class="relative z-10">
<div class="text-[10px] tracking-[0.3em] uppercase mb-2 font-orbitron text-tron-magenta">Standard</div>
<div class="font-mono font-black text-6xl text-white leading-none mb-2">Architecture Hexagonale</div>
<div class="text-sm text-gray-500 italic mb-8">Ports &amp; Adapters · Cockburn · 2005</div>
<div class="flex items-center gap-3 mb-3">
<div class="i-tabler-arrow-down text-xl text-tron-magenta"></div>
<span class="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-orbitron">Compense</span>
</div>
<div class="text-xl text-gray-200 leading-relaxed italic">
« Le couplage humainement ingérable provoque des bugs en cascade.<br/>
On le contraint pour s'en sortir. »
</div>
</div>
</div>

</div>

<!--
**Intention** — troisième exemple. Le rythme est installé, on accélère légèrement.
**Points clés** —
- "Hexagonale. Ports & Adapters. Cockburn, 2005."
- "Pourquoi on impose un découplage strict ?"
- "Parce que le couplage non contraint, on n'arrive pas à le suivre. Bugs en cascade."
**Connexion** — vers slide suivante (Tests).
**Repère temporel** — 23:50 → 24:15 (~25s)
**Jeu** — un peu plus rapide, le pattern doit devenir évident pour la salle.
-->

---
title: "Standard 4/4 — SOLID"
---

<TronGrid color="#a855f7" :opacity="0.07" />

<div class="relative z-10 flex flex-col items-center justify-center h-full px-12">

<div class="text-[10px] font-bold tracking-[0.4em] uppercase text-tron-violet mb-6 font-orbitron">
  Béquille cognitive · 4 / 4
</div>

<div class="rounded-3xl p-10 border-2 backdrop-blur-sm relative overflow-hidden max-w-3xl w-full" style="border-color: rgba(168,85,247,0.45); background-color: rgba(168,85,247,0.04); box-shadow: 0 0 60px rgba(168,85,247,0.18);">
<div class="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none" style="background: #a855f7;"></div>
<div class="relative z-10">
<div class="text-[10px] tracking-[0.3em] uppercase mb-2 font-orbitron text-tron-violet">Standard</div>
<div class="font-mono font-black text-7xl text-white leading-none mb-2">SOLID</div>
<div class="text-sm text-gray-500 italic mb-8">Robert C. Martin · 2000</div>
<div class="flex items-center gap-3 mb-3"><div class="i-tabler-arrow-down text-xl text-tron-violet"></div><span class="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-orbitron">Compense</span></div>
<div class="text-xl text-gray-200 leading-relaxed italic">
« On ne sait pas écrire du code qui supporte le changement.<br/>
On a besoin de cinq principes pour s'y obliger. »
</div>
</div>
</div>

<div class="mt-8 text-center text-lg text-gray-400 max-w-3xl">
  Tous ces standards sont <span class="text-white font-semibold">vrais et utiles</span>.<br/>
  Mais ils existent <GlowText color="#ff8c00">parce que nous sommes humains</GlowText>.
</div>

</div>

<!--
**Intention** — quatrième et dernier exemple, puis le climax du raisonnement : la phrase qui recadre tout. Écho rhétorique fort à la slide 18 où le dev en 2024 reproche à l'IA de ne pas être SOLID — maintenant on déconstruit pourquoi NOUS on en a besoin.
**Points clés** —
- "SOLID. Cinq lettres. Cinq principes. Robert C. Martin."
- "Pourquoi cet acronyme existe ?"
- "Parce que, sans règles strictes, on couple. On entasse les responsabilités. On rend le code rigide."
- "C'est une béquille pour notre incapacité à concevoir naturellement du code qui supporte le changement."
- pause
- "Vous vous souvenez de la phrase de tout à l'heure ? *C'est pas SOLID, ça ne respecte rien.* Eh bien."
- "Ces 4 standards ne sont pas faux. Ils sont VRAIS."
- "Mais ils existent parce que nous sommes humains."
- silence — c'est LA phrase qui ouvre la suite
**Note** — les tests unitaires sont volontairement absents de cette liste. Eux restent nécessaires même avec l'IA (les tests de comportement sont la spec exécutable — voir Acte III).
**Connexion** — vers slide "Le parallèle exact" : maintenant qu'on a posé ça, regardons les montres.
**Repère temporel** — 24:15 → 24:45 (~30s — un peu plus, à cause du climax)
**Jeu** — RALENTIR sur la phrase finale. Laisser un long silence après "humains". Ne pas enchaîner.
-->

---
title: "Le parallèle exact"
---

<TronGrid color="#ff8c00" :opacity="0.06" />

<div class="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-8">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-orange mb-10 font-orbitron text-center">
  Le parallèle exact
</div>

<div class="space-y-6 w-full">

<div class="grid grid-cols-[auto_1fr_auto_1fr] gap-4 items-center text-lg">
<div class="font-orbitron text-tron-violet text-sm tracking-wider">TOURBILLON</div>
<div class="text-gray-300 italic">compense la gravité sur le balancier</div>
<div class="text-gray-600 text-2xl">→</div>
<div class="text-white">workaround d'une <span class="text-tron-orange">contrainte physique</span></div>
</div>

<NeonDivider color="#ff8c00" />

<div class="grid grid-cols-[auto_1fr_auto_1fr] gap-4 items-center text-lg">
<div class="font-orbitron text-tron-cyan text-sm tracking-wider">SOLID</div>
<div class="text-gray-300 italic">compense notre incapacité à tenir tête à 50K lignes</div>
<div class="text-gray-600 text-2xl">→</div>
<div class="text-white">workaround d'une <span class="text-tron-orange">contrainte cognitive</span></div>
</div>

</div>

<div class="mt-12 text-center text-xl font-orbitron text-gray-300">
  Même structure. <span class="text-white">Deux contraintes différentes.</span>
</div>

</div>

<!--
**Intention** — sceller le parallèle conceptuel : tourbillon = SOLID, contrainte physique = contrainte cognitive. Pédagogique, on pose les fondations avant la punchline de la slide suivante.
**Points clés** —
- "Mettons les deux côte à côte."
- "Le tourbillon : compense la gravité qui dérègle le balancier. Une contrainte physique."
- "SOLID : compense notre incapacité à tenir 50 000 lignes en tête. Une contrainte cognitive."
- "Même structure. Une contrainte qui engendre une réponse esthétique."
**Connexion** — vers slide suivante : "Et ce qui suit, c'est ce que ça veut dire pour leur beauté."
**Repère temporel** — 24:45 → 25:30 (~45s)
**Jeu** — pédagogique mais pas plat. Pointer alternativement les deux lignes en parlant.
-->

---
title: "Magnifiques sans"
---

<TronGrid color="#ff8c00" :opacity="0.07" />

<div class="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-12">

<div class="text-center text-3xl font-orbitron font-bold leading-relaxed mb-8">
Les complications horlogères sont <GlowText color="#00d9ff">magnifiques</GlowText><br/>
parce qu'on a su les inventer <GlowText color="#ff8c00">SANS électronique</GlowText>.
</div>

<div class="my-6 h-px w-32 bg-white/15"></div>

<div class="text-center text-3xl font-orbitron font-bold leading-relaxed text-gray-200">
Nos patterns sont magnifiques<br/>
parce qu'on a su faire <GlowText color="#ff8c00">SANS IA</GlowText>.
</div>

</div>

<!--
**Intention** — révélation philosophique du parallèle. La beauté de la béquille TIENT à la difficulté qu'elle a fallu surmonter. Quand l'outil change, la beauté change de nature.
**Points clés** —
- silence 2-3s sur la 1re ligne
- "Le tourbillon, ce n'est pas beau parce qu'il est précieux. C'est beau parce qu'on a inventé une mécanique qui résout la gravité — sans batterie, sans électronique, juste avec des engrenages."
- pause
- "Eh bien nos patterns, c'est pareil."
- 2e ligne : "Magnifiques parce qu'on a su faire SANS IA."
- "Ce sont des solutions qui font notre fierté PRÉCISÉMENT parce que c'était difficile."
**Connexion** — vers slide "Punchline — Complications cognitives" : la cristallisation finale de l'Acte II.
**Repère temporel** — 25:30 → 26:00 (~30s)
**Jeu** — TRÈS LENT. Chaque mot pèse. La 2e ligne est plus douce, presque triste — c'est ce qu'on est en train de regarder différemment.
-->

---
title: "Punchline — Complications cognitives"
---

<TronGrid color="#ff8c00" :opacity="0.08" />

<div class="relative z-10 flex flex-col items-center justify-center h-full px-12">

  <div class="text-center text-6xl font-orbitron font-bold leading-tight max-w-5xl text-white">
    Nos standards sont des<br/>
    <GlowText color="#ff8c00" font="orbitron">complications cognitives</GlowText>.
  </div>

  <div class="mt-12 h-1 w-32 rounded-full" style="background: #ff8c00;"></div>

</div>

<!--
**Intention** — punchline forte 2/3. Cristalliser ce qu'on vient de démontrer.
**Points clés** —
- silence après le titre
- "Belles. Utiles. Mais ce sont nos limites qui les ont rendues nécessaires."
- pause
- "Quand l'outil change la contrainte, qu'est-ce qu'il advient de la complication ?"
- "C'est la question qu'on va attaquer maintenant."
**Connexion** — vers slide 20 : Acte III.
**Repère temporel** — 26:00 → 27:00 (60s)
**Jeu** — la formule "complications cognitives" doit imprimer. Articuler. Pas pressé.
-->

---
title: "Acte III — Reconstruction"
---

<ActSeparator
  act="III"
  title="RECONSTRUCTION"
  subtitle="Aujourd'hui, on porte les deux. Pas pour les mêmes raisons."
  color="#ff2e9a"
/>

<!--
**Intention** — bascule vers le REX, le concret, la résolution.
**Points clés** —
- "Acte trois. La reconstruction."
- "Maintenant, on parle concret. Ce que j'ai changé. Comment je code aujourd'hui."
- "Et ce que ça donne quand on assume."
**Connexion** — vers slide 21 : le constat qui tout débloque.
**Repère temporel** — 27:00 → 27:30 (30s)
**Jeu** — le ton change : moins provoc, plus posé, plus partage d'expérience.
-->

---
title: "L'IA n'a pas nos limites"
---

<TronGrid color="#ff2e9a" :opacity="0.08" />

<div class="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-8">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-magenta mb-8 font-orbitron">
  Le constat
</div>

<h2 class="text-4xl font-orbitron font-black text-center mb-10">
  L'IA n'a <GlowText color="#ff2e9a">pas nos limites</GlowText>.
</h2>

<div class="grid grid-cols-2 gap-6 w-full">

<div class="p-5 rounded-2xl bg-tron-cyan/5 border border-tron-cyan/30">
  <div class="text-xs tracking-widest uppercase text-tron-cyan mb-3 font-orbitron">Côté humain</div>
  <div class="space-y-2 text-base">

  - Mémoire courte limitée
  - Fatigue
  - Dette cognitive
  - Difficulté à maintenir 50K lignes
  - Erreurs systématiques
  </div>
</div>

<div class="p-5 rounded-2xl bg-tron-magenta/5 border border-tron-magenta/30">
  <div class="text-xs tracking-widest uppercase text-tron-magenta mb-3 font-orbitron">Côté IA</div>
  <div class="space-y-2 text-base text-gray-300">

  - Contexte massif (millions de tokens)
  - Pas de fatigue
  - Pas de dette cognitive
  - Lit le repo entier en quelques secondes
  - Erreurs différentes (pas mieux, pas pire)
  </div>
</div>

</div>

<div class="mt-8 text-center text-lg text-gray-400 italic">
  La quartz n'a pas de balancier qui s'use. <span class="text-white">Pas d'huile à remplacer.</span>
</div>

</div>

<!--
**Intention** — montrer que l'IA déplace le problème, pas qu'elle résout tout.
**Points clés** —
- "L'IA ne souffre pas de nos limites — pas comme nous, en tout cas."
- "Elle a SES limites. Différentes. Mais elle ne fatigue pas, ne se trompe pas par ennui, ne perd pas le fil sur un module de 50K lignes."
- "C'est exactement comme la quartz : elle n'a pas de balancier qui s'use."
- "Donc certaines de nos complications cognitives… ne servent plus à rien si on travaille AVEC elle."
**Connexion** — vers slide 22 : nouveau paradigme.
**Repère temporel** — 27:30 → 29:00 (90s)
**Jeu** — ton plus posé que dans l'Acte II. Pas une provoc, un constat factuel.
-->

---
title: "Maintenance → Régénération"
---

<TronGrid color="#ff2e9a" :opacity="0.08" />

<div class="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-8">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-magenta mb-8 font-orbitron">
  Le glissement de paradigme
</div>

<div class="grid grid-cols-[1fr_auto_1fr] gap-8 items-center mb-8">

  <div class="text-center p-6 rounded-2xl bg-tron-cyan/5 border border-tron-cyan/30">
    <div class="i-tabler-tool text-5xl text-tron-cyan mb-3" />
    <div class="text-2xl font-orbitron font-bold text-white mb-2">Maintenance</div>
    <div class="text-sm text-gray-400 leading-relaxed">
      On entretient le code humainement.<br/>
      Refactoring incrémental, prudent, coûteux.
    </div>
  </div>

  <div class="text-tron-magenta text-5xl font-orbitron font-black">→</div>

  <div class="text-center p-6 rounded-2xl bg-tron-magenta/5 border border-tron-magenta/30">
    <div class="i-tabler-refresh text-5xl text-tron-magenta mb-3" />
    <div class="text-2xl font-orbitron font-bold text-white mb-2">Régénération</div>
    <div class="text-sm text-gray-400 leading-relaxed">
      On régénère le code à partir d'un cahier des charges.<br/>
      Réécriture massive, rapide, peu coûteuse.
    </div>
  </div>

</div>

<div class="text-center text-lg text-gray-400 italic max-w-3xl mx-auto">
  Une mécanique se révise tous les 5 ans, démontée pièce par pièce, par un artisan.<br/>
  Une quartz : on change la pile. Parfois le mouvement entier.<br/>
  <span class="text-tron-magenta font-bold">Régénération</span> &gt; Réparation.
</div>

</div>

<!--
**Intention** — installer le concept clé de l'Acte III : on passe d'une logique de maintenance à une logique de régénération.
**Points clés** —
- "Avant, on optimisait pour la maintenance humaine. C'est ça qui a engendré nos standards."
- "Maintenant, on peut optimiser pour la RÉGÉNÉRATION."
- "Si je peux régénérer un module en 5 minutes à partir de spécifs claires, je n'ai pas besoin qu'il soit refactorable à la main par un humain expert."
- "Comme la quartz : on ne la révise pas, on change le mouvement."
**Connexion** — vers slide "Le sort des 4 complications" : on ferme la boucle des 4 béquilles de l'Acte II.
**Repère temporel** — 29:00 → 30:00 (60s — un peu réduit pour faire place à la slide d'anecdote)
**Jeu** — concept central. Articuler "régénération" plusieurs fois. Insister sur le fait que ça change l'optimisation.
-->

---
title: "Le sort des 4 complications"
---

<TronGrid color="#ff2e9a" :opacity="0.07" />

<div class="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-10">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-magenta mb-2 font-orbitron text-center">
  Retour sur nos 4 béquilles
</div>

<h2 class="text-2xl font-orbitron font-black text-center mb-6 leading-snug">
  La régénération ne les <span class="text-gray-500 line-through">jette</span> pas.<br/>
  Elle les <GlowText color="#ff2e9a">recalibre</GlowText>.
</h2>

<div class="w-full divide-y divide-white/10">

  <div class="grid grid-cols-[210px_160px_1fr] gap-5 items-center py-2.5">
    <div class="font-mono font-black text-lg text-tron-cyan">DRY</div>
    <div class="font-orbitron text-[10px] tracking-[0.25em] uppercase text-tron-cyan">tient</div>
    <div class="text-gray-300 text-base leading-snug">Change d'échelle — du fichier au repo entier. Ça devient la <span class="text-white">convention forte</span>.</div>
  </div>

  <div class="grid grid-cols-[210px_160px_1fr] gap-5 items-center py-2.5">
    <div class="font-mono font-black text-lg text-tron-orange">Design Patterns</div>
    <div class="font-orbitron text-[10px] tracking-[0.25em] uppercase text-tron-orange">se scinde</div>
    <div class="text-gray-300 text-base leading-snug">Le vocabulaire partagé reste. L'<span class="text-white">abstraction prophylactique</span> tombe.</div>
  </div>

  <div class="grid grid-cols-[210px_160px_1fr] gap-5 items-center py-2.5">
    <div class="font-mono font-black text-lg text-tron-magenta">Hexagonale</div>
    <div class="font-orbitron text-[10px] tracking-[0.25em] uppercase text-tron-magenta">s'assouplit</div>
    <div class="text-gray-300 text-base leading-snug">Pureté stricte des couches → <span class="text-white">frontières fonctionnelles</span> avec contrat explicite.</div>
  </div>

  <div class="grid grid-cols-[210px_160px_1fr] gap-5 items-center py-2.5">
    <div class="font-mono font-black text-lg text-tron-violet">SOLID</div>
    <div class="font-orbitron text-[10px] tracking-[0.25em] uppercase text-tron-violet">se contextualise</div>
    <div class="text-gray-300 text-base leading-snug">Le curseur bouge selon que le code est <span class="text-white">régénérable ou non</span>.</div>
  </div>

</div>

<div class="mt-6 text-center text-lg text-gray-400 italic">
  Aucun de ces principes ne disparaît.<br/>
  C'est leur version <GlowText color="#ff8c00">dogmatique</GlowText> qui tombe.
</div>

</div>

<!--
**Intention** — fermer la boucle ouverte en Acte II. Les 4 béquilles (DRY, Patterns, Hexagonale, SOLID) ne sont pas "abandonnées" en bloc : chacune a un sort distinct. Contre-pied au ton "liste de renoncements" et raccord avec la posture "je porte les deux".
**Points clés** —
- "Souvenez-vous des 4 béquilles de l'Acte II. La régénération, est-ce qu'elle les jette ? Non. Elle les déplace."
- DRY → "tient, et monte d'un cran : du fichier au repo. C'est la convention forte."
- Patterns → "se scinde : le vocabulaire partagé reste, l'abstraction prophylactique tombe."
- Hexagonale → "s'assouplit : frontières fonctionnelles, pas pureté stricte."
- SOLID → "se contextualise : le curseur bouge selon régénérable ou non."
- chute : "Aucun principe ne disparaît. C'est leur version DOGMATIQUE qui tombe."
**Connexion** — vers slide "Mon premier deuil de code" : on a réglé le sort des standards, place au vécu.
**Repère temporel** — 30:00 → 30:45 (~45s)
**Jeu** — rythme de tableau : pointer chaque ligne. Ralentir sur la chute "version dogmatique".
-->

---
title: "Mon premier deuil de code"
---

<TronGrid color="#ff2e9a" :opacity="0.06" />

<div class="relative z-10 flex flex-col items-center justify-center h-full px-12">

<div class="text-[10px] font-bold tracking-[0.4em] uppercase text-tron-magenta mb-8 font-orbitron">
  Confession
</div>

<div class="max-w-3xl text-center">

<div class="text-3xl font-orbitron font-bold leading-tight mb-8">
La première fois que j'ai jeté <span class="text-tron-magenta">400 lignes</span><br/>
pour les régénérer en <span class="text-tron-cyan">2 minutes</span>…<br/>
<span class="text-white">j'ai fait un mini-deuil.</span>
</div>

<div class="text-lg text-gray-300 leading-relaxed italic mb-10 max-w-2xl mx-auto">
Ce code, je l'avais peaufiné.<br/>
Noms de variables philosophiquement justes.<br/>
Tests bien rangés.<br/>
<span class="text-white not-italic">L'IA l'a refait. Différent. Et fonctionnel.</span>
</div>

<div class="text-2xl font-orbitron font-bold text-tron-magenta">
J'en parle à mon thérapeute.
</div>

</div>

</div>

<!--
**Intention** — RESPIRATION. Acte III était jusqu'ici très conceptuel (maintenance → régénération). La salle a besoin d'une histoire vraie pour ancrer ça. Et d'un rire — surtout après la déconstruction de l'Acte II.
**Points clés** —
- "Je vais vous raconter une vraie anecdote."
- "Premier paragraphe :" lire posé, factuel — *"La première fois que j'ai jeté 400 lignes pour les régénérer en 2 minutes, j'ai fait un mini-deuil."*
- pause 1s
- "Deuxième paragraphe : pourquoi." — lire vulnérable, presque triste — *"Ce code, je l'avais peaufiné. Noms de variables philosophiquement justes. Tests bien rangés. L'IA l'a refait. Différent. Et fonctionnel."*
- pause 2s, regarder la salle, sourire intérieur
- punchline DEADPAN — *"J'en parle à mon thérapeute."* — le pince-sans-rire est crucial. Si tu ris en le disant, ça tombe à l'eau.
**Connexion** — vers slide "Nouveaux critères" : maintenant qu'on a vécu la chose, regardons la grille.
**Repère temporel** — 30:45 → 31:15 (~30s — court mais essentiel)
**Jeu** — la slide REQUIERT un timing parfait. Lire chaque ligne avec l'intention différente : factuel → vulnérable → deadpan. La punchline DOIT être livrée le plus sérieux possible. C'est le silence d'1 seconde après "thérapeute" qui fait rire la salle, pas la phrase elle-même.
-->

---
title: "Nouveaux critères de qualité"
---

<TronGrid color="#ff2e9a" :opacity="0.08" />

<div class="relative z-10 flex flex-col items-center justify-center h-full px-12">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-magenta mb-6 font-orbitron text-center">
  Les nouveaux critères de qualité
</div>

<h1 class="text-6xl font-orbitron font-black text-center mb-8 leading-tight">
  Ce qui compte<br/>
  <GlowText color="#ff2e9a">maintenant</GlowText>.
</h1>

<div class="text-xl text-gray-300 max-w-2xl text-center leading-relaxed">
  Quatre critères pour le code qui se <span class="text-white font-semibold">régénère</span>.
</div>

</div>

<!--
**Intention** — slide-charnière. On a posé le shift conceptuel (maintenance → régénération). On annonce maintenant la grille concrète qui en découle. Préparer la salle aux 4 slides suivantes.
**Points clés** —
- "On vient de voir le shift : maintenance vers régénération."
- "Concrètement, qu'est-ce qui compte quand on optimise pour la régénération ?"
- "Quatre critères. Je vous les passe en revue."
- (lire les 4 noms des pastilles à voix haute, brièvement)
**Connexion** — vers la séquence des 4 critères qui suit.
**Repère temporel** — 31:15 → 31:30 (~15s, transition rapide)
**Jeu** — annoncer, ne pas s'attarder. Les 4 slides suivantes font le détail.
-->

---
title: "Critère 1/4 — Promptabilité"
---

<TronGrid color="#00d9ff" :opacity="0.07" />

<div class="relative z-10 flex flex-col items-center justify-center h-full px-12">

<div class="text-[10px] font-bold tracking-[0.4em] uppercase text-tron-cyan mb-8 font-orbitron">
  Nouveau critère · 1 / 4
</div>

<div class="rounded-3xl p-10 border-2 backdrop-blur-sm relative overflow-hidden max-w-3xl w-full" style="border-color: rgba(0,217,255,0.45); background-color: rgba(0,217,255,0.04); box-shadow: 0 0 60px rgba(0,217,255,0.18);">
<div class="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none" style="background: #00d9ff;"></div>
<div class="relative z-10">
<div class="flex items-center gap-3 mb-4"><div class="i-tabler-message-language text-2xl text-tron-cyan"></div><div class="text-[10px] tracking-[0.3em] uppercase font-orbitron text-tron-cyan">Critère</div></div>
<div class="font-mono font-black text-6xl text-white leading-none mb-3">Promptabilité</div>
<div class="text-sm text-gray-500 italic mb-8">Le code régénérable depuis une spec courte</div>
<div class="flex items-center gap-3 mb-3"><div class="i-tabler-help-circle text-xl text-tron-cyan"></div><span class="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-orbitron">La question</span></div>
<div class="text-xl text-gray-200 leading-relaxed italic">
« Le code peut-il être régénéré<br/>
à partir d'une spec courte ? »
</div>
</div>
</div>

</div>

<!--
**Intention** — premier critère du nouveau référentiel qualité. Poser le rythme.
**Points clés** —
- "Si on optimise pour la régénération, voici ce qui compte."
- "Premier critère : la promptabilité."
- "Si je dois écrire 3 pages de prompt pour qu'on régénère un module, c'est mort. Le code est trop complexe pour son intention."
- "Un code promptable, c'est un code dont on peut écrire la spec en quelques lignes."
**Connexion** — vers slide suivante (Convention forte).
**Repère temporel** — 31:30 → 31:55 (~25s)
**Jeu** — poser le 1er critère, installer le format.
-->

---
title: "Critère 2/4 — Convention forte"
---

<TronGrid color="#a855f7" :opacity="0.07" />

<div class="relative z-10 flex flex-col items-center justify-center h-full px-12">

<div class="text-[10px] font-bold tracking-[0.4em] uppercase text-tron-violet mb-8 font-orbitron">
  Nouveau critère · 2 / 4
</div>

<div class="rounded-3xl p-10 border-2 backdrop-blur-sm relative overflow-hidden max-w-3xl w-full" style="border-color: rgba(168,85,247,0.45); background-color: rgba(168,85,247,0.04); box-shadow: 0 0 60px rgba(168,85,247,0.18);">
<div class="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none" style="background: #a855f7;"></div>
<div class="relative z-10">
<div class="flex items-center gap-3 mb-4"><div class="i-tabler-checkbox text-2xl text-tron-violet"></div><div class="text-[10px] tracking-[0.3em] uppercase font-orbitron text-tron-violet">Critère</div></div>
<div class="font-mono font-black text-6xl text-white leading-none mb-3">Convention forte</div>
<div class="text-sm text-gray-500 italic mb-8">Le repo prévisible — l'IA anticipe</div>
<div class="flex items-center gap-3 mb-3"><div class="i-tabler-help-circle text-xl text-tron-violet"></div><span class="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-orbitron">La question</span></div>
<div class="text-xl text-gray-200 leading-relaxed italic">
« Tout le repo suit-il les mêmes patterns<br/>
que l'IA peut anticiper ? »
</div>
</div>
</div>

</div>

<!--
**Intention** — deuxième critère. Reframe : la convention n'est plus pour les humains, elle est pour l'IA.
**Points clés** —
- "Deuxième critère : la convention forte."
- "L'IA est une stagiaire qui apprend des patterns du repo en 30 secondes."
- "Plus le repo est cohérent, plus elle est précise. Plus on lui demande peu, plus elle livre juste."
- "Un repo qui mélange 3 styles, c'est un repo où l'IA hésite."
**Connexion** — vers slide suivante (Couverture exécutable).
**Repère temporel** — 31:55 → 32:20 (~25s)
**Jeu** — même cadence que slide 1, le rythme s'installe.
-->

---
title: "Critère 3/4 — Couverture exécutable"
---

<TronGrid color="#ff8c00" :opacity="0.07" />

<div class="relative z-10 flex flex-col items-center justify-center h-full px-12">

<div class="text-[10px] font-bold tracking-[0.4em] uppercase text-tron-orange mb-8 font-orbitron">
  Nouveau critère · 3 / 4
</div>

<div class="rounded-3xl p-10 border-2 backdrop-blur-sm relative overflow-hidden max-w-3xl w-full" style="border-color: rgba(255,140,0,0.45); background-color: rgba(255,140,0,0.04); box-shadow: 0 0 60px rgba(255,140,0,0.18);">
<div class="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none" style="background: #ff8c00;"></div>
<div class="relative z-10">
<div class="flex items-center gap-3 mb-4"><div class="i-tabler-test-pipe text-2xl text-tron-orange"></div><div class="text-[10px] tracking-[0.3em] uppercase font-orbitron text-tron-orange">Critère</div></div>
<div class="font-mono font-black text-5xl text-white leading-none mb-3">Couverture exécutable</div>
<div class="text-sm text-gray-500 italic mb-8">Le test devient la spec — pas l'implémentation</div>
<div class="flex items-center gap-3 mb-3"><div class="i-tabler-help-circle text-xl text-tron-orange"></div><span class="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-orbitron">La question</span></div>
<div class="text-xl text-gray-200 leading-relaxed italic">
« Les tests vérifient-ils le comportement,<br/>
sans dépendre de l'implémentation ? »
</div>
</div>
</div>

</div>

<!--
**Intention** — troisième critère. Articuler la nuance test d'implémentation vs test de comportement (cf. ton point sur les tests qui restent nécessaires).
**Points clés** —
- "Troisième critère : la couverture exécutable."
- "Les tests qui mockent 5 dépendances et vérifient *comment* le code marche — ils figent l'implémentation. Avec l'IA, ils empêchent la régénération."
- "Les tests qui vérifient le COMPORTEMENT — ce que la fonction fait, pas comment — deviennent un super-pouvoir. Ils sont la spec exécutable."
- "Un bon test, aujourd'hui, c'est un test qu'une IA peut lire et générer le code correspondant."
**Connexion** — vers slide suivante (Refactorabilité), la pointe finale.
**Repère temporel** — 32:20 → 32:45 (~25s)
**Jeu** — c'est le critère qui désamorce la question "et les tests alors ?". Bien marquer la nuance.
-->

---
title: "Critère 4/4 — Refactorabilité par régénération"
---

<TronGrid color="#ff2e9a" :opacity="0.07" />

<div class="relative z-10 flex flex-col items-center justify-center h-full px-12">

<div class="text-[10px] font-bold tracking-[0.4em] uppercase text-tron-magenta mb-6 font-orbitron">
  Nouveau critère · 4 / 4
</div>

<div class="rounded-3xl p-10 border-2 backdrop-blur-sm relative overflow-hidden max-w-3xl w-full" style="border-color: rgba(255,46,154,0.45); background-color: rgba(255,46,154,0.04); box-shadow: 0 0 60px rgba(255,46,154,0.18);">
<div class="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none" style="background: #ff2e9a;"></div>
<div class="relative z-10">
<div class="flex items-center gap-3 mb-4"><div class="i-tabler-refresh-dot text-2xl text-tron-magenta"></div><div class="text-[10px] tracking-[0.3em] uppercase font-orbitron text-tron-magenta">Critère</div></div>
<div class="font-mono font-black text-4xl text-white leading-tight mb-3">Refactorabilité<br/>par régénération</div>
<div class="text-sm text-gray-500 italic mb-8">Jeter et refaire — plus rapide que patcher</div>
<div class="flex items-center gap-3 mb-3"><div class="i-tabler-help-circle text-xl text-tron-magenta"></div><span class="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-orbitron">La question</span></div>
<div class="text-xl text-gray-200 leading-relaxed italic">
« Combien de temps pour refaire ce module<br/>
si on le jette ? »
</div>
</div>
</div>

<div class="mt-8 text-center text-base text-gray-400 italic max-w-3xl">
  Notez ce qui n'est <span class="text-white font-bold">plus en haut de la liste</span>.
</div>

</div>

<!--
**Intention** — quatrième critère + recadrage final : ces 4 critères remplacent l'ancienne hiérarchie.
**Points clés** —
- "Quatrième critère : la refactorabilité par régénération."
- "Si je peux jeter ce module et le refaire en 10 minutes avec l'IA, je n'ai pas besoin de patterns hyper sophistiqués pour le maintenir."
- "C'est un changement de mentalité : on ne maintient plus, on régénère."
- pause
- "Et regardez ce qui n'est PLUS en haut de cette liste."
- "La pureté des couches. La rigueur SOLID stricte. Le découplage parfait. Le découpage en 18 micro-services."
- "Pas faux. Mais plus en tête."
**Connexion** — vers slide REX : voilà ce que ça donne en pratique.
**Repère temporel** — 32:45 → 33:15 (~30s — un peu plus, à cause du recadrage)
**Jeu** — RALENTIR sur la phrase finale. Laisser le silence faire le boulot. La salle doit faire la liste mentale de ce qui dégringole.
-->

---
title: "REX — On porte les deux"
---

<TronGrid color="#ff2e9a" :opacity="0.08" />

<div class="relative z-10 flex flex-col items-center justify-center h-full text-center max-w-4xl mx-auto">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-magenta mb-8 font-orbitron">
  Retour d'expérience
</div>

<div class="text-4xl font-orbitron font-black leading-tight mb-10">
  Aujourd'hui, je porte <GlowText color="#00d9ff">les deux</GlowText>.<br/>
  Pas pour les mêmes raisons.
</div>

<div class="text-2xl font-orbitron font-bold text-gray-300 mb-12">
  <GlowText color="#ff2e9a">Et je code pareil.</GlowText>
</div>

<div class="grid grid-cols-2 gap-6 w-full">
  <div class="p-4 rounded-xl bg-tron-cyan/10 border border-tron-cyan/30">
    <div class="text-tron-cyan font-orbitron text-xs tracking-widest uppercase mb-1">Mécanique</div>
    <div class="text-base text-gray-300">Pour les morceaux qui se transmettent, qui doivent être lus, compris, débattus.</div>
  </div>
  <div class="p-4 rounded-xl bg-tron-magenta/10 border border-tron-magenta/30">
    <div class="text-tron-magenta font-orbitron text-xs tracking-widest uppercase mb-1">Quartz</div>
    <div class="text-base text-gray-300">Pour les morceaux qui doivent être robustes, rapides à régénérer, peu chargés en sens.</div>
  </div>
</div>

</div>

<!--
**Intention** — ouvrir le REX par une déclaration personnelle qui boucle l'analogie horlogère.
**Points clés** —
- "Maintenant le concret. Ce que j'ai changé chez moi, dans mes équipes, dans mes choix."
- "Premier truc : aujourd'hui, je porte les deux. Une mécanique, une quartz selon le jour."
- "Et je code pareil. Selon le morceau, selon l'enjeu."
- "Voici ce que j'ai abandonné, et ce que j'ai renforcé."
**Connexion** — vers slide 25 : ce que j'ai abandonné.
**Repère temporel** — 33:15 → 34:45 (90s)
**Jeu** — ton plus chaleureux. C'est le moment "je vous parle de moi".
-->

---
title: "Ce que j'ai abandonné"
---

<TronGrid color="#ff8c00" :opacity="0.06" />

<div class="relative z-10">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-orange mb-3 font-orbitron">
  REX · Ce que j'ai abandonné
</div>

<h2 class="text-3xl font-orbitron font-black mb-6">
  Sans regrets <span class="text-tron-orange">(ou presque)</span>
</h2>

<div class="space-y-3">

<div class="flex items-start gap-3 p-3 rounded-xl bg-tron-orange/5 border border-tron-orange/20">
  <div class="i-tabler-x text-xl text-tron-orange mt-1 flex-shrink-0" />
  <div>
    <div class="font-bold text-white">L'obsession de la pureté des couches</div>
    <div class="text-sm text-gray-400">Si la régénération est facile, l'isolation parfaite n'est plus la priorité absolue.</div>
  </div>
</div>

<div class="flex items-start gap-3 p-3 rounded-xl bg-tron-orange/5 border border-tron-orange/20">
  <div class="i-tabler-x text-xl text-tron-orange mt-1 flex-shrink-0" />
  <div>
    <div class="font-bold text-white">Les abstractions prophylactiques</div>
    <div class="text-sm text-gray-400">"Au cas où on changerait d'implémentation un jour" — l'IA fait l'extraction quand on en a vraiment besoin.</div>
  </div>
</div>

<div class="flex items-start gap-3 p-3 rounded-xl bg-tron-orange/5 border border-tron-orange/20">
  <div class="i-tabler-x text-xl text-tron-orange mt-1 flex-shrink-0" />
  <div>
    <div class="font-bold text-white">Les débats dogmatiques</div>
    <div class="text-sm text-gray-400">"On utilise tel pattern, tel mot, telle nomenclature" — bikeshedding qui ne sert plus le produit.</div>
  </div>
</div>

<div class="flex items-start gap-3 p-3 rounded-xl bg-tron-orange/5 border border-tron-orange/20">
  <div class="i-tabler-x text-xl text-tron-orange mt-1 flex-shrink-0" />
  <div>
    <div class="font-bold text-white">Les tests qui testent l'implémentation</div>
    <div class="text-sm text-gray-400">Ils deviennent un frein à la régénération sans rien apporter en garantie de comportement.</div>
  </div>
</div>

</div>

</div>

<!--
**Intention** — REX 1/2 : ce que Kevin a concrètement laissé tomber dans ses pratiques et ses équipes.
**Points clés** —
- "Première chose : la pureté des couches. Hexagonale stricte, port/adapter sur tout. Trop coûteux quand on régénère."
- "Les abstractions 'au cas où'. Vous savez : l'interface de service qu'on extrait dès le début. Plus jamais."
- "Les débats dogmatiques. Repository vs DAO, controller vs handler. Si l'équipe perd 2 jours là-dessus, c'est 2 jours non livrés."
- "Les tests qui testent l'implem. Ils figent le code. La régénération devient impossible."
- "Note : je ne dis pas 'plus jamais'. Je dis 'moins automatique'. C'est un choix conscient."
**Connexion** — vers slide 26 : ce que j'ai renforcé.
**Repère temporel** — 34:45 → 36:45 (2 min)
**Jeu** — assumer. Ne pas se justifier sans cesse. Ce sont des choix, ils sont défendus.
-->

---
title: "Ce que j'ai renforcé"
---

<TronGrid color="#00d9ff" :opacity="0.06" />

<div class="relative z-10">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-cyan mb-3 font-orbitron">
  REX · Ce que j'ai renforcé
</div>

<h2 class="text-3xl font-orbitron font-black mb-6">
  Avec <span class="text-tron-cyan">conviction</span>
</h2>

<div class="space-y-3">

<div class="flex items-start gap-3 p-3 rounded-xl bg-tron-cyan/5 border border-tron-cyan/20">
  <div class="i-tabler-check text-xl text-tron-cyan mt-1 flex-shrink-0" />
  <div>
    <div class="font-bold text-white">Une convention forte, écrite, partagée</div>
    <div class="text-sm text-gray-400">Style guide, naming, structure de dossiers. L'IA en tire 10× plus de valeur que le dev.</div>
  </div>
</div>

<div class="flex items-start gap-3 p-3 rounded-xl bg-tron-cyan/5 border border-tron-cyan/20">
  <div class="i-tabler-check text-xl text-tron-cyan mt-1 flex-shrink-0" />
  <div>
    <div class="font-bold text-white">Des tests de comportement, lisibles</div>
    <div class="text-sm text-gray-400">Le test devient la spec. La spec doit pouvoir nourrir la régénération du code.</div>
  </div>
</div>

<div class="flex items-start gap-3 p-3 rounded-xl bg-tron-cyan/5 border border-tron-cyan/20">
  <div class="i-tabler-check text-xl text-tron-cyan mt-1 flex-shrink-0" />
  <div>
    <div class="font-bold text-white">Des frontières claires, fonctionnelles</div>
    <div class="text-sm text-gray-400">Pas la pureté des couches. Mais des modules avec un contrat explicite.</div>
  </div>
</div>

<div class="flex items-start gap-3 p-3 rounded-xl bg-tron-cyan/5 border border-tron-cyan/20">
  <div class="i-tabler-check text-xl text-tron-cyan mt-1 flex-shrink-0" />
  <div>
    <div class="font-bold text-white">Le jugement humain sur l'intention</div>
    <div class="text-sm text-gray-400">L'IA exécute. Le dev senior dit pourquoi, à quel coût, pour quoi en échange.</div>
  </div>
</div>

<div class="flex items-start gap-3 p-3 rounded-xl bg-tron-cyan/5 border border-tron-cyan/20">
  <div class="i-tabler-check text-xl text-tron-cyan mt-1 flex-shrink-0" />
  <div>
    <div class="font-bold text-white">La revue par un humain expérimenté</div>
    <div class="text-sm text-gray-400">Plus que jamais. C'est la dernière barrière de sens, pas de syntaxe.</div>
  </div>
</div>

</div>

</div>

<!--
**Intention** — REX 2/2 : ce sur quoi Kevin a doublé la mise.
**Points clés** —
- "La convention forte, écrite. Ce qui prenait 30 % du temps avant prend 5 % après. L'IA suit."
- "Les tests de comportement. Le test devient la SPEC. Et la spec, c'est ce qui nourrit la régénération."
- "Les frontières fonctionnelles. Pas la pureté Hexagonale stricte, mais des modules avec un contrat clair."
- "Le jugement humain sur l'INTENTION. L'IA dit 'comment'. Le senior dit 'pourquoi'."
- "La revue. Plus que jamais. Mais pas pour repérer un mauvais nom de variable. Pour vérifier le SENS."
**Connexion** — vers slide "L'IA, levier sur un projet dégradé".
**Repère temporel** — 36:45 → 38:45 (2 min)
**Jeu** — énergie positive. C'est ce qu'on a GAGNÉ. Faire la bascule émotionnelle après le "abandonné".
-->

---
title: "L'IA, levier sur un projet dégradé"
---

<TronGrid color="#ff2e9a" :opacity="0.07" />

<div class="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-10">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-magenta mb-3 font-orbitron text-center">
  L'objection qu'on me pose souvent
</div>

<h2 class="text-3xl font-orbitron font-black text-center mb-8 leading-snug">
  Un projet sans qualité ?<br/>
  L'IA peut le <GlowText color="#ff2e9a">relever</GlowText>.
</h2>

<div class="grid grid-cols-2 gap-6 w-full mb-8">

  <div class="p-5 rounded-2xl bg-tron-orange/5 border border-tron-orange/30">
    <div class="text-xs tracking-widest uppercase text-tron-orange mb-2 font-orbitron">Sans pilote</div>
    <div class="text-base text-gray-300 leading-snug">L'IA <span class="text-white">amplifie</span> le chaos qu'elle trouve. Un repo incohérent le reste — en plus rapide, en plus gros.</div>
  </div>

  <div class="p-5 rounded-2xl bg-tron-cyan/5 border border-tron-cyan/30">
    <div class="text-xs tracking-widest uppercase text-tron-cyan mb-2 font-orbitron">Calibrée par un expert</div>
    <div class="text-base text-gray-300 leading-snug">L'IA devient un <span class="text-white">levier</span> : convention imposée, dette régénérée module par module.</div>
  </div>

</div>

<div class="text-center text-lg text-gray-400 italic">
  À une condition : un expert qui la calibre — et qui continue de la régler.<br/>
  L'IA ne remplace pas le dev senior. <GlowText color="#ff2e9a">Elle le complète.</GlowText>
</div>

</div>

<!--
**Intention** — traiter frontalement l'objection "et mon projet legacy / sans qualité ?". Retourner la peur : l'IA n'est pas qu'un risque pour la qualité, elle peut être le levier qui la relève — à condition d'être pilotée.
**Points clés** —
- "On me pose souvent la question : 'mon projet est déjà un champ de ruines, l'IA va empirer le bordel.'"
- "Sans pilote : oui. L'IA amplifie ce qu'elle trouve. Un repo incohérent, elle le rend incohérent plus vite."
- "Mais calibrée par un expert : elle devient un levier. On impose une convention, on régénère la dette module par module. La qualité monte."
- "Condition non négociable : l'expert. Et ce n'est pas un réglage one-shot — il faut continuer de régler, de garder la pratique saine."
- chute : "L'IA ne remplace pas le dev senior. Elle le complète."
**Connexion** — vers slide "La qualité a changé, pas baissé" : la conclusion.
**Repère temporel** — 38:45 → 39:30 (~45s)
**Jeu** — ton d'ouverture, presque rassurant. C'est une main tendue à ceux qui partent d'un mauvais code.
-->

---
title: "La qualité a changé, pas baissé"
---

<TronGrid color="#ff2e9a" :opacity="0.10" />

<div class="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-8">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-magenta mb-8 font-orbitron">
  Le constat
</div>

<div class="text-center">

<div class="text-5xl font-orbitron font-black leading-tight mb-10">
  La qualité n'a pas <GlowText color="#ff8c00">baissé</GlowText>.<br/>
  Elle a <GlowText color="#ff2e9a">changé</GlowText>.
</div>

<NeonDivider color="#ff2e9a" :width="'200px'" />

<div class="mt-10 text-xl text-gray-300 leading-relaxed">
  L'horlogerie de luxe a survécu à la crise du quartz.<br/>
  <span class="text-white font-semibold">Pas en restant figée.</span><br/>
  <span class="text-white font-semibold">Pas en niant la quartz.</span><br/>
  En redéfinissant <GlowText color="#ff2e9a">ce qu'elle vendait</GlowText>.
</div>

<div class="mt-8 text-base text-gray-500 italic">
  Plus de la précision. Du geste, de la transmission, de l'émotion.
</div>

</div>
</div>

<!--
**Intention** — réponse au titre du talk. Boucler l'analogie horlogère.
**Points clés** —
- "On revient à la question de départ : devons-nous sacrifier la qualité ?"
- "Réponse : non. La qualité n'a pas baissé. Elle a changé."
- "L'horlogerie de luxe est plus puissante aujourd'hui qu'avant la crise du quartz."
- "Patek, Vacheron, Audemars — leur prix a explosé. Pas parce qu'elles donnent l'heure mieux. Parce qu'elles ne vendent plus l'heure."
- "Elles vendent autre chose. Et nous pouvons faire pareil."
**Connexion** — vers slide 28 : la punchline finale.
**Repère temporel** — 39:30 → 40:30 (60s, raccourci pour ménager le poll de retour)
**Jeu** — le ton se calme. On approche de la conclusion. Lire la citation horlogère doucement.
-->

---
title: "Punchline finale"
---

<TronGrid color="#ff2e9a" :opacity="0.08" />

<div class="relative z-10 flex flex-col items-center justify-center h-full px-12">

  <div class="text-center text-6xl font-orbitron font-bold leading-tight max-w-5xl text-white">
    Nous ne <GlowText color="#ff8c00" font="orbitron">sacrifions</GlowText> pas la qualité.<br/>
    Nous redéfinissons<br/>
    <GlowText color="#ff2e9a" font="orbitron">ce que nous vendons</GlowText>.
  </div>

  <div class="mt-12 h-1 w-32 rounded-full" style="background: #ff2e9a;"></div>

</div>

<!--
**Intention** — punchline finale 3/3. Le talk se referme sur cette formule.
**Points clés** —
- silence après l'apparition
- répéter la phrase, lentement, en regardant la salle
- "Voilà ma réponse. La qualité n'est pas en danger. Notre confort intellectuel, lui, oui."
- pause
- "Et ça vaut peut-être la peine de le sacrifier."
**Connexion** — vers slide 32 : retour au poll d'ouverture.
**Repère temporel** — 40:30 → 41:30 (60s)
**Jeu** — c'est LA fin de l'argument. On l'assume. Sourire en silence à la fin.
-->

---
title: "Et vous, encore une fois ?"
---

<TronGrid color="#a855f7" :opacity="0.10" />

<div class="relative z-10 flex flex-col items-center justify-center h-full">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-violet mb-8 font-orbitron">
  Retour au sondage du début
</div>

<h1 class="text-4xl font-orbitron font-black text-center leading-tight max-w-4xl">
  Si au début vous étiez plutôt<br/>
  <GlowText color="#ff8c00">allergique</GlowText> au code IA…
</h1>

<div class="mt-12 text-3xl font-orbitron font-bold text-gray-200 text-center">
  Quelque chose a-t-il <GlowText color="#a855f7">bougé</GlowText> ?
</div>

<div class="mt-12 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-base text-gray-400 max-w-xl text-center">
  Levez la main. <span class="text-white">Pas pour me faire plaisir.</span><br/>
  Juste pour vous-même.
</div>

</div>

<!--
**Intention** — refermer la boucle ouverte par le poll de la slide 3. Court, simple, interactif. Permet à la salle de reprendre conscience de son propre déplacement (ou pas).
**Points clés** —
- "Vous vous souvenez du sondage du tout début ?"
- "Si vous êtes arrivés plutôt allergiques au code IA, je veux juste savoir : est-ce que quelque chose a bougé pendant ces 40 minutes ?"
- "Levez la main. Pas pour me faire plaisir. Juste pour vous-même."
- *(compter discrètement)*
- *(commenter selon la salle, par ex. : "Quelques mains. Bien." ou "Beaucoup de mains. Le contrat est rempli." ou "Pas une main. C'est OK aussi — au moins on s'est posé la question.")*
- Pas de jugement, pas de victoire revendiquée. C'est un miroir, pas un score.
**Connexion** — vers slide 32 : Merci, Q&A.
**Repère temporel** — 41:30 → 42:00 (30s)
**Jeu** — sourire, calme. Ne PAS tenter de "convertir" si peu de mains. Juste constater honnêtement.
-->

---
title: "Merci / Q&A"
---

<TronGrid color="#a855f7" :opacity="0.10" />

<div class="relative z-10 flex flex-col items-center justify-center h-full text-center">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-violet mb-8 font-orbitron">
  Merci. Vos questions ?
</div>

<h1 class="text-6xl font-orbitron font-black mb-10">
  <GlowText color="#a855f7" font="orbitron">Merci</GlowText>
</h1>

<div class="text-xl text-gray-400 mb-12 max-w-2xl">
  Et vous, vous portez plutôt mécanique ou quartz ?<br/>
  Parlons-en.
</div>

<div class="grid grid-cols-3 gap-6 text-base text-gray-300">

<div class="flex flex-col items-center gap-2">
  <div class="w-12 h-12 rounded-xl bg-tron-violet/20 flex items-center justify-center">
    <div class="i-tabler-mail text-2xl text-tron-violet" />
  </div>
  <div>kevin@delfour.co</div>
</div>

<div class="flex flex-col items-center gap-2">
  <div class="w-12 h-12 rounded-xl bg-tron-cyan/20 flex items-center justify-center">
    <div class="i-tabler-brand-github text-2xl text-tron-cyan" />
  </div>
  <div>github.com/kdelfour</div>
</div>

<div class="flex flex-col items-center gap-2">
  <div class="w-12 h-12 rounded-xl bg-tron-magenta/20 flex items-center justify-center">
    <div class="i-tabler-brand-linkedin text-2xl text-tron-magenta" />
  </div>
  <div>linkedin.com/in/kevindelfour</div>
</div>

</div>

<div class="mt-16 text-sm text-gray-600">
  Tech'Work Lyon · 18 juin 2026 · Track Craft
</div>

</div>

<!--
**Intention** — clôture chaleureuse, ouverture sur le Q&A, contacts visibles.
**Points clés** —
- "Merci à vous."
- attendre les applaudissements puis ouvrir : "Des questions ? Des objections ? Des contre-exemples ?"
- "Et la question d'ouverture : vous, mécanique ou quartz ?"
- pendant le Q&A, laisser cette slide affichée — les contacts restent visibles
**Connexion** — fin du deck. Q&A jusqu'à 16:50.
**Repère temporel** — 42:00 → 50:00 (Q&A ~8 min)
**Jeu** — sourire. Saluer. Boire de l'eau. Attendre la première question avec patience.
-->
