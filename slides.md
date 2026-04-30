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
    <div>Architecture, DDD, clean code,<br/>SOLID quasi religieux</div>
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
**Intention** — crédibilité (CTO, 15 ans), positionnement (défenseur du craft, donc crédible pour parler de qualité), annonce subtile du fil rouge horlogerie.
**Points clés** —
- "15 ans de métier, dont une bonne partie à défendre les patterns"
- "Aujourd'hui je vais raconter ce qui m'a fait bouger"
- "Je ne suis pas un fanboy d'IA. Je suis un mec qui a un avis sur le code."
- mention discrète des montres : "Vous allez comprendre"
**Connexion** — vers slide 3 : engager la salle
**Repère temporel** — 0:30 → 2:00 (90s)
**Jeu** — ralentir sur "défenseur du craft", regarder la salle. Sourire sur "fan de montres mécaniques".
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

<div class="relative z-10 flex flex-col items-center justify-center h-full">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-violet mb-6 font-orbitron">
  Pendant qu'on y est…
</div>

<h1 class="text-5xl font-orbitron font-black text-center leading-tight mb-12">
  Et au <GlowText color="#a855f7">poignet</GlowText>,<br/>
  vous portez quoi ?
</h1>

<div class="grid grid-cols-3 gap-6 max-w-5xl w-full px-8">

  <GlowCard color="cyan" :glow="true">
    <div class="text-center">
      <div class="i-tabler-clock-cog text-5xl text-tron-cyan mb-3" />
      <div class="font-orbitron font-bold text-tron-cyan tracking-widest uppercase text-sm mb-2">Mécanique</div>
      <div class="text-sm text-gray-400 leading-relaxed">
        Remontage manuel,<br/>balancier, échappement.<br/>
        <span class="italic">Le geste pur.</span>
      </div>
    </div>
  </GlowCard>

  <GlowCard color="violet" :glow="true">
    <div class="text-center">
      <div class="i-tabler-rotate-clockwise text-5xl text-tron-violet mb-3" />
      <div class="font-orbitron font-bold text-tron-violet tracking-widest uppercase text-sm mb-2">Automatique</div>
      <div class="text-sm text-gray-400 leading-relaxed">
        Mécanique à remontage<br/>par le mouvement du poignet.<br/>
        <span class="italic">L'hybride élégant.</span>
      </div>
    </div>
  </GlowCard>

  <GlowCard color="orange" :glow="true">
    <div class="text-center">
      <div class="i-tabler-cpu text-5xl text-tron-orange mb-3" />
      <div class="font-orbitron font-bold text-tron-orange tracking-widest uppercase text-sm mb-2">Quartz</div>
      <div class="text-sm text-gray-400 leading-relaxed">
        Pile, oscillateur,<br/>moteur pas-à-pas.<br/>
        <span class="italic">L'efficacité moderne.</span>
      </div>
    </div>
  </GlowCard>

</div>

<div class="mt-10 px-8 py-3 rounded-2xl bg-white/5 border border-white/10 text-base text-gray-400">
  Levez la main. <span class="text-white">Souvenez-vous de votre catégorie.</span> Vous comprendrez pourquoi dans 30 minutes.
</div>

</div>

<!--
**Intention** — second hook, prépare directement l'analogie horlogère qui va structurer l'Acte II. Crée un second rendez-vous mémorable avec la salle.
**Points clés** —
- "Pendant qu'on est dans le sondage, j'en ai un autre, plus inhabituel."
- "Levez la main : qui porte une mécanique pure ?" *(compter)*
- "Une automatique ?" *(compter)*
- "Une quartz ou montre connectée ?" *(compter)*
- "Très bien. Souvenez-vous de votre catégorie. On y revient — promis."
- Si quelqu'un dit "smartwatch", traiter comme quartz (oscillateur électronique).
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
  « You never actually own a Patek Philippe.<br/>
  You merely look after it for the next generation. »
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
title: "Le choc"
---

<TronGrid color="#ff8c00" :opacity="0.10" />

<div class="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-8">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-orange mb-8 font-orbitron">
  Le choc — première rencontre
</div>

<div class="text-3xl font-orbitron font-bold leading-relaxed text-center mb-10">
  Une <GlowText color="#ff8c00">quartz japonaise</GlowText> à 100 $.<br/>
  Plus précise qu'un <GlowText color="#00d9ff">chronomètre suisse</GlowText> à 10 000 $.
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
  - "Aucun garde-temps n'a jamais été conçu comme ça."
  </div>
</GlowCard>

<GlowCard color="orange">
  <div class="text-xs tracking-widest uppercase text-tron-orange mb-3 font-orbitron">Le dev senior en 2024</div>
  <div class="space-y-2 text-base italic text-gray-200">

  - "C'est pas SOLID, ça ne respecte rien."
  - "Pas de DDD, où sont les bounded contexts ?"
  - "Cette IA ne sait même pas ce qu'est l'inversion de dépendance."
  - "Ce sera ingérable en prod dans 6 mois."
  - "Aucun code propre n'a jamais été conçu comme ça."
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

<Punchline color="#ff2e9a" size="6xl">
  Si on porte une <GlowText color="#ff2e9a" font="orbitron">mécanique</GlowText>,<br/>
  ce n'est pas pour la <GlowText color="#ff8c00" font="orbitron">précision</GlowText>.
</Punchline>

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
title: "Standards = béquilles cognitives"
---

<TronGrid color="#ff8c00" :opacity="0.06" />

<div class="relative z-10">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-orange mb-3 font-orbitron text-center">
  Le coeur conceptuel
</div>

<h2 class="text-4xl font-orbitron font-black text-center mb-6">
  Nos standards sont des <GlowText color="#ff8c00">béquilles cognitives</GlowText>
</h2>

<div class="grid grid-cols-2 gap-4">

<StandardCard
  name="DRY"
  humanLimit="On ne peut pas maintenir 3 fois la même logique. On va en rater une lors d'un changement."
  color="#00d9ff"
/>

<StandardCard
  name="Design Patterns"
  humanLimit="On ne peut pas tenir une architecture complexe en tête. On a besoin de structures mentales partagées."
  color="#ff8c00"
/>

<StandardCard
  name="Architecture Hexagonale"
  humanLimit="Le couplage humainement ingérable provoque des bugs en cascade. On le contraint pour s'en sortir."
  color="#ff2e9a"
/>

<StandardCard
  name="Tests unitaires"
  humanLimit="On fait des erreurs. Beaucoup. Tout le temps. Les tests sont notre garde-fou."
  color="#a855f7"
/>

</div>

<div class="mt-4 text-center text-base text-gray-400 italic max-w-3xl mx-auto">
  Tous ces standards sont <span class="text-white font-semibold">utiles et vrais</span>.<br/>
  Mais ils existent <GlowText color="#ff8c00">parce que nous sommes humains</GlowText>.
</div>

</div>

<!--
**Intention** — démonstration sur 4 cas concrets que les standards compensent des limites humaines spécifiques.
**Points clés** —
- "DRY. Pourquoi ? Parce qu'on n'arrive pas à maintenir 3 copies cohérentes."
- "Patterns. Pourquoi ? Parce qu'on a besoin de structures mentales pour penser le code à plusieurs."
- "Hexagonale. Pourquoi ? Parce que le couplage non contraint dépasse notre capacité à gérer."
- "Tests. Pourquoi ? Parce qu'on se trompe. Tout le temps."
- "Ces standards ne sont pas faux. Ils sont vrais POUR NOUS."
**Connexion** — vers slide 18 : et si on les regardait de plus près ?
**Repère temporel** — 23:00 → 24:30 (90s)
**Jeu** — passer chaque standard avec une intention différente. Pas trop didactique : on raconte, on ne récite pas.
-->

---
title: "Le parallèle exact"
---

<TronGrid color="#ff8c00" :opacity="0.06" />

<div class="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-8">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-orange mb-8 font-orbitron text-center">
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

<div class="mt-12 text-center text-2xl font-orbitron font-bold">
  Les complications horlogères sont <GlowText color="#00d9ff">magnifiques</GlowText>
  parce qu'on a su les inventer <GlowText color="#ff8c00">SANS électronique</GlowText>.
</div>

<div class="mt-4 text-center text-2xl font-orbitron font-bold text-gray-300">
  Nos patterns sont magnifiques parce qu'on a su faire <GlowText color="#ff8c00">SANS IA</GlowText>.
</div>

</div>

<!--
**Intention** — sceller le parallèle conceptuel : tourbillon = SOLID, contrainte physique = contrainte cognitive.
**Points clés** —
- "Mettons les deux côte à côte. Tourbillon : compense une contrainte physique. SOLID : compense une contrainte cognitive."
- "Même structure. Une contrainte qui engendre une réponse esthétique."
- "Et c'est ça qui les rend BEAUX. C'est qu'on a su faire SANS l'outil qui aurait évité la contrainte."
- "Sans électronique. Sans IA."
- "Ce sont des solutions qui font notre fierté PARCE QUE c'était difficile."
**Connexion** — vers slide 19 : la punchline acte II.
**Repère temporel** — 24:30 → 26:00 (90s)
**Jeu** — pédagogique mais pas plat. Insister sur "magnifiques" — la beauté n'est pas niée, elle est expliquée.
-->

---
title: "Punchline — Complications cognitives"
---

<Punchline color="#ff8c00" size="6xl">
  Nos standards sont des<br/>
  <GlowText color="#ff8c00" font="orbitron">complications cognitives</GlowText>.
</Punchline>

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
**Connexion** — vers slide 23 : nouveaux critères.
**Repère temporel** — 29:00 → 30:30 (90s)
**Jeu** — concept central. Articuler "régénération" plusieurs fois. Insister sur le fait que ça change l'optimisation.
-->

---
title: "Nouveaux critères de qualité"
---

<TronGrid color="#ff2e9a" :opacity="0.08" />

<div class="relative z-10">

<div class="text-xs font-bold tracking-[0.4em] uppercase text-tron-magenta mb-6 font-orbitron text-center">
  Les nouveaux critères de qualité
</div>

<h2 class="text-4xl font-orbitron font-black text-center mb-8">
  Ce qui compte <GlowText color="#ff2e9a">maintenant</GlowText>
</h2>

<div class="grid grid-cols-2 gap-4">

<GlowCard color="cyan">
  <div class="flex items-center gap-3 mb-2">
    <div class="i-tabler-message-language text-2xl text-tron-cyan" />
    <div class="font-orbitron text-tron-cyan font-bold">Promptabilité</div>
  </div>
  <div class="text-sm text-gray-400">Le code peut-il être régénéré à partir d'une spec courte ?</div>
</GlowCard>

<GlowCard color="violet">
  <div class="flex items-center gap-3 mb-2">
    <div class="i-tabler-checkbox text-2xl text-tron-violet" />
    <div class="font-orbitron text-tron-violet font-bold">Convention forte</div>
  </div>
  <div class="text-sm text-gray-400">Tout le repo suit-il les mêmes patterns que l'IA peut anticiper ?</div>
</GlowCard>

<GlowCard color="orange">
  <div class="flex items-center gap-3 mb-2">
    <div class="i-tabler-test-pipe text-2xl text-tron-orange" />
    <div class="font-orbitron text-tron-orange font-bold">Couverture exécutable</div>
  </div>
  <div class="text-sm text-gray-400">Les tests vérifient-ils le comportement, sans dépendre de l'implémentation ?</div>
</GlowCard>

<GlowCard color="magenta">
  <div class="flex items-center gap-3 mb-2">
    <div class="i-tabler-refresh-dot text-2xl text-tron-magenta" />
    <div class="font-orbitron text-tron-magenta font-bold">Refactorabilité par régénération</div>
  </div>
  <div class="text-sm text-gray-400">Combien de temps pour refaire ce module si on le jette ?</div>
</GlowCard>

</div>

<div class="mt-6 text-center text-base text-gray-500 italic">
  Notez ce qui n'est <span class="text-white font-bold">plus en haut de la liste</span>.
</div>

</div>

<!--
**Intention** — présenter concrètement les 4 critères qui prennent de l'importance dans un contexte humain+IA.
**Points clés** —
- "Si on optimise pour la régénération, voici ce qui devient critique."
- "Promptabilité : si je dois écrire 3 pages de prompt pour qu'on régénère, c'est mort."
- "Convention forte : l'IA est une stagiaire qui apprend des patterns du repo. Plus c'est cohérent, plus elle est précise."
- "Couverture exécutable : les tests qui vérifient l'implémentation deviennent un frein. Ceux qui vérifient le COMPORTEMENT deviennent un super-pouvoir."
- "Refactorabilité par régénération : si je peux jeter et refaire en 10 min, je n'ai pas besoin de patterns hyper sophistiqués."
- "Et notez : la pureté des couches, la rigueur SOLID stricte… ne sont plus en haut de la liste."
**Connexion** — vers slide 24 : REX concret.
**Repère temporel** — 30:30 → 32:00 (90s)
**Jeu** — pédagogique et posé. C'est la liste à retenir.
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
**Repère temporel** — 32:00 → 33:30 (90s)
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
**Repère temporel** — 33:30 → 35:30 (2 min)
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
**Connexion** — vers slide 27 : la qualité a changé pas baissé.
**Repère temporel** — 35:30 → 37:30 (2 min)
**Jeu** — énergie positive. C'est ce qu'on a GAGNÉ. Faire la bascule émotionnelle après le "abandonné".
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
**Repère temporel** — 37:30 → 38:30 (60s, raccourci pour ménager le poll de retour)
**Jeu** — le ton se calme. On approche de la conclusion. Lire la citation horlogère doucement.
-->

---
title: "Punchline finale"
---

<Punchline color="#ff2e9a" size="6xl">
  Nous ne <GlowText color="#ff8c00" font="orbitron">sacrifions</GlowText> pas la qualité.<br/>
  Nous redéfinissons<br/>
  <GlowText color="#ff2e9a" font="orbitron">ce que nous vendons</GlowText>.
</Punchline>

<!--
**Intention** — punchline finale 3/3. Le talk se referme sur cette formule.
**Points clés** —
- silence après l'apparition
- répéter la phrase, lentement, en regardant la salle
- "Voilà ma réponse. La qualité n'est pas en danger. Notre confort intellectuel, lui, oui."
- pause
- "Et ça vaut peut-être la peine de le sacrifier."
**Connexion** — vers slide 32 : retour au poll d'ouverture.
**Repère temporel** — 38:30 → 39:30 (60s)
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
**Repère temporel** — 39:30 → 40:00 (30s)
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
**Repère temporel** — 40:00 → 50:00 (Q&A 10 min)
**Jeu** — sourire. Saluer. Boire de l'eau. Attendre la première question avec patience.
-->
