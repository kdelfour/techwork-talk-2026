# Devons-nous sacrifier la qualité avec l'IA ?

> **Tech'Work Lyon 2026** — 18 juin 2026, 16:00 → 16:50, Craft Room
> **Speaker** : Kevin Delfour, CTO
> **Format** : 40 min de talk + 10 min Q&A
> **Cible verbatim** : ~6 000 mots (≈40 min à 150 mots/min)

---

## Légende

- **[pause]** : silence court (1-2 sec)
- **[silence]** : silence long (3-5 sec)
- **[regarder la salle]** : contact visuel, balayage
- **[ralentir]** : articuler, prendre son temps
- **[accélérer]** : enchaîner sans respirer
- **[sourire]** : ton chaleureux
- **[posé]** : ton calme et grave
- *(en italique)* : indications de jeu

---

# ACTE I — CONSTRUCTION (0:00 → 12:00)

## Slide 1 — Cover · 0:00 → 0:30

*(la slide est affichée pendant l'intro de la salle ; lumière baissée)*

> Bonjour à toutes et à tous. **[regarder la salle]**
>
> On va parler IA. On va parler qualité. On va parler craft.
>
> Et on va le faire en passant par les montres. **[pause] [sourire]**
>
> Vous allez voir, ça colle parfaitement.

---

## Slide 2 — Qui parle ? · 0:30 → 2:00

> Avant de commencer, un mot sur qui vous parle. Je m'appelle Kevin Delfour, je suis CTO. Je code depuis un peu plus de quinze ans.
>
> Une bonne partie de ces quinze ans, je l'ai passée à défendre. À défendre les patterns. À défendre les principes. À défendre l'idée qu'un beau code, ça a une valeur intrinsèque.
>
> J'ai débattu pendant des heures sur l'inversion de dépendance. J'ai refusé des merge-requests pour un nom de variable. J'ai milité pour le DDD dans des équipes qui s'en fichaient.
>
> **[pause]**
>
> Aujourd'hui, dans mes équipes, l'IA est en prod. Tous les jours. Sur du code qui livre.
>
> Et ce que je vais vous raconter, c'est ce que ça m'a fait. Comment ça m'a fait bouger. Ce que j'ai changé dans mes exigences, dans celles de mes équipes. Ce sur quoi je suis revenu, et ce que j'ai renforcé.
>
> Je précise tout de suite : je ne suis pas un fanboy d'IA. Je ne suis pas non plus un alarmiste. Je suis un mec qui a un avis sur le code, et qui s'est cogné à la réalité.
>
> **[sourire]** Ah, et accessoirement, je suis fan de montres. Surtout les mécaniques. Vous allez comprendre pourquoi.

---

## Slide 3 — Hook public · 2:00 → 3:00

> Avant de commencer, j'aimerais prendre la température.
>
> Une question simple. **[regarder la salle]**
>
> Levez la main si, quand vous regardez du code généré par une IA, votre première réaction est plutôt **enthousiaste**. *(compter)*
>
> OK. Maintenant levez la main si votre première réaction est plutôt **allergique**. *(compter)*
>
> **[pause]**
>
> Très bien. *(commenter selon la salle)*
>
> On va y revenir à la fin. Souvenez-vous de votre position aujourd'hui. Dans 40 minutes, je vous reposerai la question, et on verra si quelque chose a bougé.

---

## Slide 4 — Et au poignet ? · 3:00 → 3:30

> Tant qu'on est dans le sondage, j'en ai un autre. **[sourire]** Plus inhabituel.
>
> **[regarder la salle]**
>
> Au poignet, vous portez quoi ?
>
> Levez la main si vous portez une **mécanique pure** — remontage manuel, vraie petite manufacture qui bat. *(compter, sourire)*
>
> Une **automatique** — mécanique mais qui se remonte avec le mouvement de votre poignet. *(compter)*
>
> Une **quartz**, ou une montre connectée. *(compter — souvent la majorité)*
>
> **[pause]**
>
> *(adapter selon la salle, par ex. : "OK, j'ai trois passionnés de mécanique au fond, j'en suis. Et une grosse majorité de quartz / connectées. Parfait.")*
>
> Souvenez-vous de votre catégorie. Vous comprendrez pourquoi dans une trentaine de minutes.

---

## Slide 5 — Séparateur ACTE I · 3:30 → 4:00

*(la slide se déploie)* **[silence]**

> Acte un. Construction.
>
> Avant d'attaquer ce que l'IA fait au code, on doit d'abord se rappeler ce qu'on a construit. Ce qu'on défend. Ce qu'on aime.
>
> Et on va le faire en passant par les montres. Pour de bon.

---

## Slide 6 — Notre histoire commune · 4:00 → 5:30

> Le craft a ses pères. Vous les connaissez tous. Beck. Fowler. Evans. Martin. Cunningham.
>
> Quand vous lisez Fowler, vous lisez quelqu'un qui décrit son atelier comme un horloger. Avec le même respect du geste, le même souci du détail, la même obsession de la transmission.
>
> Et de l'autre côté, vous avez les grandes manufactures suisses. Patek Philippe, fondée en 1839. Vacheron Constantin, en 1755 — c'est plus ancien que les États-Unis. Audemars Piguet, en 1875. A. Lange & Söhne, en 1845. Breguet, en 1775, qui a inventé le tourbillon.
>
> Deux disciplines. Deux héritages. **[ralentir]** Une même obsession du geste.
>
> Je vous demande de tenir cette image en tête pendant les 40 prochaines minutes : on parle de deux mondes qui partagent quelque chose de profond.

---

## Slide 7 — Ce qu'on a appris à aimer · 5:30 → 7:00

> Voilà notre vocabulaire. **[regarder la grille à l'écran]**
>
> SOLID. Cinq principes, vingt ans de débats. DRY, Don't Repeat Yourself. KISS, Keep It Simple. Clean Architecture, Hexagonale, DDD. TDD, les patterns du Gang of Four, la code review.
>
> Ces mots, vous les avez dans la tête. Vous les avez débattus. Vous les avez défendus en entretien d'embauche, en code review, en réunion d'archi.
>
> En horlogerie, on appelle ça les **complications**.
>
> Le tourbillon, c'est une complication. Le quantième perpétuel, qui sait quand le mois fait 28, 29, 30 ou 31 jours, et quel siècle on traverse — c'est une complication. La répétition minutes, qui sonne l'heure quand vous appuyez sur un poussoir — c'est une complication.
>
> Ces complications sont l'ADN de l'horlogerie de luxe. Elles sont **belles**. Elles sont **utiles**. Et elles sont **chères**.
>
> Nos patterns, c'est pareil. Le pattern Repository, c'est notre quantième perpétuel. L'Architecture Hexagonale, c'est notre tourbillon. C'est de l'art technique.

---

## Slide 8 — Apprendre tout ça · 7:00 → 8:00

> Avant de fermer cette série, je voudrais qu'on regarde un truc qu'on n'évoque jamais.
>
> **[posé, regarder la salle]**
>
> Tous ces patterns, ces principes, ces architectures — on ne les a pas appris en deux week-ends.
>
> Lectures denses. Centaines d'heures de conférences. Erreurs cuisantes. Refactos qui prennent des nuits. Débats interminables avec des collègues sur Repository ou DAO. **[sourire]**
>
> Des années. Souvent en dehors des heures de boulot.
>
> **[pause]**
>
> Et ça, ça produit autre chose en plus de la compétence. Ça produit un attachement.
>
> **[ralentir]**
>
> Cet effort fonde notre **égo** de craftsman. Et je dis "égo" au sens noble du terme.
>
> On ne défend pas seulement ces standards parce qu'ils sont vrais. On les défend aussi parce qu'on les a **chèrement payés**.
>
> Je vous demande de garder cette idée en tête pour la suite. Notre résistance à l'IA, elle n'est pas que cognitive. Elle est aussi **affective**. Et c'est légitime.

---

## Slide 9 — La promesse implicite · 8:00 → 9:30

> Et derrière toutes ces complications, il y a une promesse. Une promesse implicite.
>
> Un beau code se **transmet**. Il se **révise**. Il se **respecte**. **[ralentir sur les trois mots]**
>
> Quand on écrit du clean code, on l'écrit pour qui ? **[pause]**
>
> Pas pour le compilateur. Pas pour la prod. Pour le prochain.
>
> Pour le développeur qui va arriver dans deux ans. Pour le junior qui va lire le module pour la première fois. Pour vous-même, dans six mois, quand vous aurez oublié.
>
> Patek Philippe a une publicité, depuis 1996. Elle dit : **[posé, lentement]**
>
> *« You never actually own a Patek Philippe. You merely look after it for the next generation. »*
>
> Vous ne possédez jamais vraiment une Patek Philippe. Vous en prenez soin pour la prochaine génération.
>
> **[pause]**
>
> On code pareil. On lègue.

---

## Slide 10 — Notre identité de craftsman · 9:30 → 12:00

> Tout ça, mises bout à bout, ça a fait quelque chose. Ça a forgé une identité.
>
> **[lentement, en lisant l'écran]**
>
> Nous sommes des horlogers du logiciel.
>
> On forme. On transmet. On juge la qualité d'un coup d'œil. On reconnaît les nôtres à un commit. On a un vocabulaire commun, une éthique commune, des héros communs.
>
> C'est notre fierté. C'est notre crédibilité. C'est notre ego, aussi — au sens noble.
>
> Et c'est notre **identité**. **[regarder la salle]**
>
> Je ne crois pas qu'il faille en avoir honte. Je crois même qu'il faut en être fier. Cette identité a produit des choses extraordinaires. Des systèmes qui tournent depuis vingt ans. Des architectures qui ont permis à des entreprises entières de scaler. Des codebases qui se sont laissé maintenir par dix générations de développeurs.
>
> Mais. **[silence]**
>
> Cette identité, c'est exactement ce qui va se faire bousculer maintenant.

---

# ACTE II — DÉCONSTRUCTION (12:00 → 27:00)

## Slide 11 — Séparateur ACTE II · 12:00 → 12:30

*(la slide se déploie)* **[silence long]**

> Acte deux. La crise.
>
> Et pour comprendre ce qui nous arrive, on va remonter à 1969.

---

## Slide 12 — Deux dates qui ont tout changé · 12:30 → 14:30

> 25 décembre 1969. Noël. Pendant que la Suisse horlogère célèbre les fêtes, à Tokyo, Seiko sort un produit qui s'appelle **l'Astron**.
>
> C'est la première montre quartz au monde. Plus précise qu'un chronomètre suisse certifié. Et — c'est ça le drame — elle est cent fois moins chère à produire.
>
> **[posé]**
>
> Ce qui suit, on l'appelle aujourd'hui « la crise du quartz ». Entre 1970 et le milieu des années 80, l'industrie horlogère suisse perd une part massive de ses manufactures et une part encore plus massive de ses emplois. Des marques disparaissent. Des familles d'horlogers se reconvertissent. Le pays entier doute.
>
> **[pause]**
>
> Maintenant. 30 novembre 2022. **[regarder la salle]**
>
> OpenAI sort ChatGPT. Premier LLM grand public capable d'écrire du code. Plus rapide qu'un junior. Disponible pour tout le monde, gratuit dans sa première version.
>
> Vous voyez le parallèle ?
>
> L'historien Mark Twain — enfin, ça lui est attribué, on n'est pas sûr — aurait dit : **[ralentir]** *« L'histoire ne se répète pas. Elle rime. »*
>
> Là, elle rime fort.

---

## Slide 13 — Le choc · 14:30 → 16:00

> Imaginez. Vous êtes horloger en Suisse, en 1972. Vous travaillez chez Vacheron Constantin depuis dix-huit ans. Vous savez régler un échappement à l'œil. Vous sentez la qualité d'un balancier au son qu'il fait. Vous êtes un artisan reconnu.
>
> On vous met une Seiko Astron sous le nez.
>
> **[posé]**
>
> Pas d'échappement. Pas de rouage complexe. Pas de balancier. Pas de spirale Breguet. Une pile, un cristal de quartz qui oscille à 32 768 hertz, et un petit moteur pas-à-pas. **[pause]**
>
> Pas d'âme. Pas de geste. Pas de poésie.
>
> **[silence]**
>
> Mais plus précise. Beaucoup plus précise.
>
> **[ralentir]**
>
> Maintenant, faites le mouvement inverse. C'est exactement ce qu'on a ressenti la première fois qu'on a regardé du code généré par Copilot, ou par Claude, ou par GPT.
>
> Pas d'élégance. Pas de pattern reconnaissable. Pas d'intention apparente. Mais ça compile. Ça passe les tests. Ça livre la feature.

---

## Slide 14 — Nos réactions classiques · 16:00 → 17:30

> J'ai mis sur cette slide deux colonnes. Je vous laisse les lire en silence.
>
> **[laisser 5-6 secondes que la salle lise]**
>
> À gauche, l'horloger en 1972 : *« Pas d'échappement, ce n'est pas une vraie montre. Pas de finition main, c'est de la merde. Une pile ? Quel manque de noblesse. Ça ne durera jamais cent ans. Aucun garde-temps n'a jamais été conçu comme ça. »*
>
> À droite, le dev senior en 2024 : *« C'est pas SOLID, ça ne respecte rien. Pas de DDD, où sont les bounded contexts ? Cette IA ne sait même pas ce qu'est l'inversion de dépendance. Ce sera ingérable en prod dans six mois. Aucun code propre n'a jamais été conçu comme ça. »*
>
> **[regarder la salle]**
>
> Ce sont les mêmes phrases. À cinquante ans d'écart.
>
> Et je le dis sans aucun jugement : c'est humain. C'est ce qui arrive quand on voit son métier remis en question par un outil qui ne respecte pas notre cadre.

---

## Slide 15 — La précision en chiffres · 17:30 → 19:00

> Mais regardons les chiffres. Parce qu'à un moment, il faut bien les regarder.
>
> Une montre mécanique certifiée COSC — c'est le top trois pour cent de la production horlogère suisse — c'est précis à plus ou moins **cinq secondes par jour**.
>
> Une montre quartz haute précision — Citizen Chronomaster, Bulova UHF — c'est plus ou moins **cinq secondes par an**.
>
> **[pause]**
>
> Cinq secondes par jour contre cinq secondes par an. **[ralentir]** C'est un facteur trois cent soixante.
>
> Selon le segment de quartz qu'on regarde, on est entre dix fois et cent fois plus précis. Sans débat, sans subjectivité.
>
> Et le code généré par IA aujourd'hui ? Il compile. Il passe les tests. Il livre la feature. Plus rapidement que ce que le développeur aurait fait. **[regarder la salle]**
>
> On peut le critiquer. On peut le trouver inélégant. On peut dire qu'il manque de patterns. Mais on ne peut pas dire qu'il ne fonctionne pas.

---

## Slide 16 — La question gênante · 19:00 → 20:00

> Donc. **[posé]**
>
> Sur les critères mesurables, la quartz gagne. Le code IA livre.
>
> Et pourtant, on rejette.
>
> **[silence long]**
>
> Pourquoi ?
>
> On va répondre franchement.

---

## Slide 17 — PUNCHLINE EGO · 20:00 → 21:30

*(la slide apparaît)* **[silence de 3 secondes]**

> Si on porte une mécanique, ce n'est pas pour la précision.
>
> **[pause]**
>
> Personne, jamais, n'a acheté une Patek Philippe à 50 000 euros pour donner l'heure plus précisément qu'une Casio à 20 euros.
>
> On l'achète pour autre chose. Pour le geste. Pour la transmission. Pour soi.
>
> **[ralentir, regarder la salle]**
>
> Et le code crafté ? Le clean code ? Le SOLID strict ? La pureté hexagonale ?
>
> On le défend pour quoi, **vraiment** ? Pour le client ? Pour la maintenabilité ? Ou… pour nous ?
>
> **[silence]**
>
> Je ne dis pas qu'il n'y a pas de raison technique. J'en parlerai dans cinq minutes. Mais je vous demande de regarder en face une part qui est en nous : on défend ces standards aussi parce qu'ils nous définissent. Parce que les abandonner, ce serait se renier.
>
> C'est ça, le vrai problème avec l'IA. Pas la qualité du code. **L'identité du développeur.**

---

## Slide 18 — Creusons · 21:30 → 23:00

> Bon. On vient de poser un truc lourd. Maintenant, on creuse — sérieusement, sans rester dans le ressenti.
>
> Demandez à dix développeurs : pourquoi DRY ? Pourquoi Don't Repeat Yourself ?
>
> Vous allez avoir dix variantes de la même réponse : *« pour la maintenabilité. Pour ne pas avoir à modifier le même bug à trois endroits. Pour la lisibilité. »*
>
> OK. C'est vrai. Mais creusez : maintenabilité **pour qui** ? Qui est-ce qui n'arrive pas à maintenir trois copies cohérentes d'une même logique ? **[regarder la salle]**
>
> Pas le compilateur. Pas la prod. **Nous.**
>
> Petite anecdote. En 1801, Abraham-Louis Breguet — un horloger français qui travaille à Paris — a un problème. Les montres de poche de l'époque, quand elles sont posées à plat dans une poche pendant des heures, voient leur balancier se dérégler à cause de la gravité.
>
> Sa réponse : il invente une cage qui fait tourner tout l'échappement sur lui-même, en une minute. Cette rotation annule statistiquement l'effet de la gravité. Il appelle ça un **tourbillon**.
>
> **[pause, sourire]**
>
> C'est génial. C'est une œuvre d'art. C'est l'une des complications horlogères les plus prestigieuses au monde.
>
> Et c'est un workaround. **[regarder la salle]**
>
> Une contrainte physique a engendré une complication magnifique.

---

## Slide 19 — Standards = béquilles humaines · 23:00 → 24:30

> Maintenant, regardons nos standards. Avec ce regard-là.
>
> **DRY**. C'est magnifique parce qu'on n'arrive pas à maintenir trois copies cohérentes. Si on pouvait, on s'en ficherait.
>
> **Design Patterns**. Vingt-trois patterns du Gang of Four. Magnifiques. Pourquoi ? Parce qu'on ne peut pas tenir une architecture complexe en tête. On a besoin de structures mentales partagées entre nous.
>
> **Architecture Hexagonale**. Magnifique. Pourquoi ? Parce que le couplage non contraint dépasse notre capacité humaine à raisonner. Au-delà de cinquante mille lignes de code, on est perdus.
>
> **SOLID**. Cinq principes. Magnifiques. Pourquoi ? Parce que, livrés à nous-mêmes, on ne sait pas écrire du code qui encaisse le changement. On a besoin de cinq règles pour s'y *obliger*.
>
> **[regarder la salle]**
>
> Ces standards ne sont pas faux. Ils ne sont pas inutiles. Ils ne sont pas des inventions arbitraires. Ils sont **vrais et utiles pour nous**.
>
> Mais ils existent **parce que nous sommes humains**.

---

## Slide 20 — Le parallèle exact · 24:30 → 26:00

> Mettons les deux côte à côte. Très simplement.
>
> **Tourbillon** : compense la gravité sur le balancier. C'est un workaround d'une contrainte physique.
>
> **SOLID** : compense notre incapacité à tenir tête à 50 000 lignes de code. C'est un workaround d'une contrainte cognitive.
>
> **[pause]**
>
> Même structure. Une contrainte qui engendre une réponse esthétique. Et c'est ça qui les rend beaux : ce sont des solutions élégantes à des problèmes qu'on n'a pas pu éviter autrement.
>
> Les complications horlogères sont magnifiques **parce qu'on a su les inventer sans électronique**.
>
> Nos patterns sont magnifiques **parce qu'on a su faire sans IA**.
>
> **[ralentir]**
>
> Ce sont des solutions qui font notre fierté précisément parce que c'était difficile, parce qu'il fallait du génie humain pour les trouver. Et il faut que ça reste vrai dans nos têtes : ce n'est pas parce que c'est beau que ce sera toujours nécessaire.

---

## Slide 21 — PUNCHLINE ACTE II · 26:00 → 27:00

*(la slide apparaît)* **[silence]**

> Nos standards sont des **complications cognitives**.
>
> **[ralentir]**
>
> Belles. Utiles. Mais ce sont nos limites qui les ont rendues nécessaires.
>
> **[pause]**
>
> Quand l'outil change la contrainte, qu'est-ce qu'il advient de la complication ?
>
> C'est la question qu'on va attaquer maintenant.

---

# ACTE III — RECONSTRUCTION (27:00 → 40:00)

## Slide 22 — Séparateur ACTE III · 27:00 → 27:30

*(la slide se déploie)* **[silence]**

> Acte trois. La reconstruction.
>
> Maintenant, on parle concret. Ce que j'ai changé. Comment je code aujourd'hui. Et ce que ça donne, quand on assume.

---

## Slide 23 — L'IA n'a pas nos limites · 27:30 → 29:00

> Constat de départ : l'IA n'a pas nos limites. Pas comme nous, en tout cas.
>
> Côté humain, vous connaissez la liste : mémoire courte limitée, fatigue, dette cognitive, difficulté à maintenir cinquante mille lignes de code, erreurs systématiques.
>
> Côté IA : contexte massif, des millions de tokens, pas de fatigue, pas de dette cognitive, capable de lire un repo entier en quelques secondes.
>
> Attention, je ne dis pas que l'IA n'a pas de limites. Elle en a. Différentes. Elle hallucine. Elle invente des API. Elle confond des contextes. Elle se trompe d'une manière différente.
>
> Mais sur certaines de nos limites — précisément celles qu'on a compensées par nos patterns — elle est libérée.
>
> **[ralentir]**
>
> La quartz n'a pas de balancier qui s'use. Pas d'huile à remplacer.
>
> Donc certaines de nos complications cognitives… ne servent plus à grand-chose, si on travaille avec elle.

---

## Slide 24 — Maintenance → Régénération · 29:00 → 30:30

> Et là, il y a un glissement de paradigme. Et c'est le concept central de la deuxième moitié de ce talk.
>
> **Avant**, on optimisait pour la **maintenance humaine**. C'est ça qui a engendré nos standards. Du code lisible, refactorable, isolé, testable, parce qu'un humain devra y revenir, le comprendre, le modifier en sécurité.
>
> **Maintenant**, on peut optimiser pour la **régénération**.
>
> **[ralentir]**
>
> Si je peux régénérer un module en cinq minutes à partir de spécifs claires, je n'ai pas besoin qu'il soit refactorable à la main par un humain expert.
>
> C'est exactement comme la quartz. Une mécanique, on la révise tous les cinq ans, démontée pièce par pièce, par un artisan formé pendant huit ans. Une quartz, on change la pile. Parfois le mouvement entier.
>
> **Régénération > Réparation.**
>
> Ça ne veut pas dire qu'on jette la maintenance partout. Ça veut dire qu'on a maintenant un curseur entre les deux. Et ce curseur, on le règle selon la situation.

---

## Slide 24b — Le sort des 4 complications · 30:00 → 30:45

> Avant d'aller plus loin, un retour en arrière. Souvenez-vous, dans l'Acte deux, des quatre béquilles : DRY, Design Patterns, Architecture Hexagonale, SOLID. La régénération, est-ce qu'elle les jette à la poubelle ?
>
> **[regarder la salle]**
>
> Non. Elle les déplace. Et pas toutes au même endroit.
>
> **DRY** tient. Mieux : il monte d'un cran. Ce n'est plus « ne te répète pas dans ce fichier », c'est « tout le repo reste cohérent ». DRY devient la convention forte.
>
> **Les Design Patterns** se scindent. Le vocabulaire partagé — Repository, Adapter — reste utile, pour nous comme pour l'IA. Mais l'abstraction qu'on extrait « au cas où » : terminé.
>
> **L'Hexagonale** s'assouplit. On ne vise plus la pureté stricte des couches, mais des frontières fonctionnelles, avec un contrat explicite.
>
> **SOLID** se contextualise. Selon que le code est jetable ou qu'il se transmet, le curseur bouge.
>
> **[ralentir]**
>
> Aucun de ces principes ne disparaît. C'est leur version **dogmatique** qui tombe.

---

## Slide 25 — Nouveaux critères de qualité · 30:30 → 32:00

> Si on optimise pour la régénération, voici ce qui devient critique.
>
> **Promptabilité.** Le code peut-il être régénéré à partir d'une spec courte ? Si je dois écrire trois pages de prompt pour qu'on régénère un module, c'est mort. Si je peux le décrire en cinq lignes, c'est gagné.
>
> **Convention forte.** L'IA est une stagiaire qui apprend des patterns du repo. Plus le repo est cohérent, plus elle est précise. Une convention molle ou contradictoire = une IA qui produit du code dissonant.
>
> **Couverture exécutable.** Les tests qui vérifient l'**implémentation** deviennent un frein à la régénération. Les tests qui vérifient le **comportement** — ce que la fonctionnalité fait, pas comment elle le fait — deviennent un super-pouvoir : ils sont la spec.
>
> **Refactorabilité par régénération.** Combien de temps pour refaire ce module si on le jette ? C'est devenu un critère de qualité à part entière.
>
> **[regarder la salle]**
>
> Et notez ce qui n'est plus en haut de la liste. La pureté des couches. La rigueur SOLID stricte. La beauté du pattern abstrait. **[pause]**
>
> Ça reste pertinent dans certains contextes. Mais ce n'est plus le critère principal.

---

## Slide 26 — REX intro · 32:00 → 33:30

> Maintenant, le concret. Ce que j'ai changé chez moi, dans mes équipes, dans mes choix.
>
> Premier truc, et c'est presque une déclaration. Aujourd'hui, je porte les deux. **[regarder la salle]**
>
> Une mécanique, une quartz. Selon le jour, selon l'envie, selon ce que je veux raconter en posant ma main sur la table.
>
> Et je code pareil. **[ralentir]**
>
> **Pour les morceaux qui se transmettent**, qui doivent être lus, compris, débattus, qui font le sens du produit — j'écris une mécanique. Avec soin, avec patterns, avec intention.
>
> **Pour les morceaux qui doivent être robustes, rapides à régénérer, peu chargés en sens** — j'écris une quartz. Avec convention forte, avec tests de comportement, et avec assistance IA assumée.
>
> Et voilà ce que ça donne, en pratique.

---

## Slide 27 — Ce que j'ai abandonné · 33:30 → 35:30

> Sans regrets. Ou presque.
>
> **L'obsession de la pureté des couches.** Si la régénération est facile, l'isolation parfaite n'est plus la priorité absolue. Une violation pragmatique, qu'on documente, qu'on assume, qu'on régénérera proprement plus tard si besoin — ça coûte beaucoup moins cher que la pureté à tout prix.
>
> **Les abstractions prophylactiques.** Vous savez : *« on va extraire l'interface, au cas où on changerait d'implémentation un jour ».* L'interface qui a une seule implémentation et qui en aura une seule pendant cinq ans. **[pause]** L'IA fait l'extraction quand on en a vraiment besoin. Plus jamais d'abstraction préventive juste pour montrer qu'on connaît SOLID.
>
> **Les débats dogmatiques.** Repository ou DAO. Controller ou Handler. UseCase ou Service. Si l'équipe perd deux jours à choisir, c'est deux jours non livrés. Convention forte au début, et on avance. On ré-aligne plus tard si besoin.
>
> **Les tests qui testent l'implémentation.** Vous savez, le test qui mocke trois dépendances et qui vérifie que tel champ est passé tel paramètre. Le test qui pète à chaque refactoring. Ce test fige le code. Avec l'IA, il rend la régénération impossible. **Donc on les supprime.** Et on les remplace par des tests de comportement.
>
> **[regarder la salle, posé]**
>
> Je le redis : je ne dis pas « plus jamais ». Je dis « moins automatique ». C'est un choix conscient, qu'on défend, qu'on assume.

---

## Slide 28 — Ce que j'ai renforcé · 35:30 → 37:30

> Et de l'autre côté, ce sur quoi j'ai doublé la mise. Avec conviction.
>
> **Une convention forte, écrite, partagée.** Style guide. Naming. Structure de dossiers. Patterns autorisés et patterns interdits. Avant l'IA, c'était bien. Avec l'IA, c'est un superpouvoir. L'IA en tire dix fois plus de valeur que le dev humain seul. Quand le repo est cohérent, l'IA produit du code cohérent. Quand il ne l'est pas, elle produit du chaos.
>
> **Des tests de comportement, lisibles.** Le test devient la spec. Et la spec, c'est ce qui nourrit la régénération du code. Un bon test, aujourd'hui, c'est un test qu'une IA peut lire et générer le code correspondant. Pas un test qui se moque de cinq dépendances.
>
> **Des frontières claires, fonctionnelles.** Pas la pureté Hexagonale stricte. Mais des modules avec un **contrat explicite** : voici ce que ce module fait, voici ce qu'il prend en entrée, voici ce qu'il rend. Lisible en trente secondes.
>
> **Le jugement humain sur l'intention.** L'IA exécute. Elle dit *comment*. Le développeur senior, lui, dit *pourquoi*. À quel coût. Pour quoi en échange. C'est ce qui ne se délègue pas. Et c'est devenu plus important, pas moins.
>
> **La revue par un humain expérimenté.** Plus que jamais. Mais pas pour repérer un mauvais nom de variable. Pour vérifier le **sens**. Est-ce que ce code fait ce qu'on veut, dans le bon contexte, avec les bonnes contraintes business ? Cette question-là, l'IA ne la pose pas. Vous, oui.

---

## Slide 28b — L'IA, levier sur un projet dégradé · 37:30 → 38:15

> Une objection qu'on me pose souvent : « Tout ça, c'est bien si ton repo est sain. Mais mon projet à moi, c'est déjà un champ de ruines. L'IA va juste empirer le bordel. »
>
> **[regarder la salle]**
>
> Sans pilote — oui. L'IA amplifie ce qu'elle trouve. Un repo incohérent, elle le rend incohérent plus vite, et à plus grande échelle.
>
> Mais calibrée par un expert, c'est l'inverse. Elle devient un **levier** : on lui impose une convention, on régénère la dette module par module, et la qualité remonte.
>
> **[poser]**
>
> La condition n'est pas négociable : il faut l'expert. Et ce n'est pas un réglage qu'on fait une fois — il faut continuer de la régler, garder cette façon de travailler saine.
>
> L'IA ne remplace pas le développeur senior. **Elle le complète.**

---

## Slide 29 — La qualité a changé · 37:30 → 38:30

> Donc, on revient à la question de départ.
>
> Devons-nous sacrifier la qualité avec l'IA ?
>
> **[posé, regarder la salle]**
>
> La qualité n'a pas baissé. Elle a changé.
>
> Elle ne se mesure plus aux mêmes critères. Elle ne se défend plus avec les mêmes arguments. Elle ne se reconnaît plus aux mêmes signes.
>
> **[ralentir]**
>
> L'horlogerie de luxe a survécu à la crise du quartz. Pas en restant figée. Pas en niant la quartz. Pas en attaquant Seiko en justice.
>
> Elle a survécu en redéfinissant ce qu'elle vendait.
>
> **[pause]**
>
> Aujourd'hui, vous achetez une Patek pour la transmission, pour le geste, pour l'émotion d'avoir au poignet l'aboutissement de plusieurs siècles de tradition. Pas pour la précision.
>
> Et le marché de la mécanique de luxe est plus puissant qu'il ne l'a jamais été.

---

## Slide 30 — PUNCHLINE FINALE · 38:30 → 39:30

*(la slide apparaît)* **[silence]**

> Nous ne sacrifions pas la qualité.
>
> Nous redéfinissons ce que nous vendons.
>
> **[ralentir, regarder la salle]**
>
> Voilà ma réponse.
>
> La qualité n'est pas en danger. Notre confort intellectuel, lui, oui.
>
> Et ça vaut peut-être la peine de le sacrifier.
>
> **[pause]**
>
> Merci.

---

## Slide 31 — Et vous, encore une fois ? · 39:30 → 40:00

> **[posé, regarder la salle]**
>
> Vous vous souvenez du sondage du tout début ?
>
> **[pause]**
>
> Si vous êtes arrivés plutôt allergiques au code IA, je veux juste savoir : est-ce que quelque chose a bougé pendant ces 40 minutes ?
>
> Levez la main. **[pause]** Pas pour me faire plaisir. Juste pour vous-même.
>
> *(compter discrètement)*
>
> *(adapter selon la salle, par ex. : "Quelques mains. Bien." / "Beaucoup de mains. Le contrat est rempli." / "Pas une main. C'est OK aussi — au moins on s'est posé la question ensemble.")*

---

## Slide 32 — Q&A / Merci · 40:00 → 50:00

*(applaudissements ; laisser la slide affichée pendant tout le Q&A)*

> *(après les applaudissements)*
>
> Vous avez vu, je vous avais dit qu'on rebouclerait sur la question du début. Vous, mécanique ou quartz ?
>
> Des questions ? Des objections ? Des contre-exemples ? Je préfère qu'on parle de ce qui ne vous a pas convaincus que de ce qui vous a plu.
>
> *(prendre l'eau, sourire, attendre la première main)*

---

# REPÈRES DE RYTHME

| Cumul | Slide | Si en retard… | Si en avance… |
|---|---|---|---|
| 4:00 | 6 | Couper la liste des manufactures à 3 noms | Développer Beck/Fowler avec une anecdote |
| 12:00 | 11 | Sauter la moitié de la slide 8 | Ralentir slide 8 sur "identité" |
| 20:00 | 17 | Compresser slide 14 (question gênante) | Pause avant punchline ego allongée |
| 27:00 | 22 | Sauter une partie de slide 18 | Allonger slide 17 avec un standard de plus |
| 33:30 | 26 | Aller direct slide 25 | Ajouter une anecdote perso |
| 40:00 | 32 | Couper la mention Patek slide 27 | Une slide-bonus disponible si projet |

---

# THÈMES À ANTICIPER POUR LE Q&A

| Question probable | Trame de réponse |
|---|---|
| « Mais l'IA hallucine, c'est dangereux en prod ! » | Oui. C'est pour ça que le jugement humain et la revue restent centraux. La régénération facile DIMINUE le coût d'une erreur, elle ne le supprime pas. |
| « Et la dette technique générée par l'IA ? » | La dette se mesure différemment. Si la régénération est facile, la dette est légère. Si elle est difficile, lourde. Le critère devient "régénérabilité", pas "élégance". |
| « Vous dites que SOLID, c'est dépassé ? » | Non. Je dis que SOLID strict comme dogme universel est à questionner. Selon le contexte (régénérable / non), le curseur change. |
| « Et la formation des juniors ? Comment forme-t-on à coder si l'IA fait tout ? » | Critique. La formation au sens (pourquoi) devient PLUS importante. La formation à la syntaxe, moins. C'est un sujet en soi, j'aurais 40 min dessus. |
| « C'est une posture de CTO, ça ne marche pas en bottom-up. » | Vrai. Cette transformation se pilote. Convention, tooling, revue. Ça ne se fait pas par l'enthousiasme individuel. |
| « Vous portez quoi aujourd'hui comme montre ? » | *(répondre honnêtement, sourire — c'est une question d'ouverture, prendre 30 sec puis ramener au sujet)* |

---

# NOTES DE PRÉPARATION

- **Répétition** : viser 38 minutes en répétition pour avoir une marge en live (les questions de la salle, les applaudissements, les pauses imprévues, ça s'additionne).
- **Voix** : la slide 15 (PUNCHLINE EGO) demande un changement de voix : plus grave, plus posé. Travailler ce passage spécifiquement.
- **Eau** : prévoir une bouteille à portée. Boire avant la slide 20 (entrée Acte III).
- **Vêtements** : porter une montre. Mécanique, idéalement. Si possible la montrer discrètement à la slide 24 ("aujourd'hui, je porte les deux").
- **Hook ouverture** : si la salle est froide aux mains levées slide 3, ne pas insister, enchaîner. Si elle est très chaude, prendre 15 secondes de plus.
- **Énergie** : Acte I = posé / Acte II = nerveux + provoc / Acte III = chaleureux + posé. Les actes ont des températures émotionnelles différentes.
