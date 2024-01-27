# D-Flip-Flop

Le début du cours de DSD concerne principalement les circuits **combinatoires**, dont les sorties sont entièrement déterminées par les entrées. On dit aussi que ces circuits ne contiennent aucune action de mémorisation.

Les circuits **séquentiels** deviendront graduellement de plus en plus important dans le cours, et le D-Flip-Flop est l'acteur majeur de ce changement.

Ce tutoriel n'a pas pour objectif de remplacer le cours sur le D-Flip-Flop, mais de permettre de mettre en pratique ce qui a été enseigné dans Logisim.

## Ajouter un D-Flip-Flop à son circuit

Un D-Flip-Flop est un composant important, aussi il a sa place dans la [barre d'outil](general-logisim-ui#2-la-barre-doutils), d'où on peut l'ajouter.

![`Une image montrant l'élément de la barre d'outils rapide à utiliser devrait s'afficher ici`](/logisim/images/logisim-dff-tool.png)

## Que brancher à un DFF et comment?

Un D-Flip-Flop (DFF) est utilisé pour mémoriser un bit.

![`Une image de D-Flip-Flop avec tous les inputs possibles devrait s'afficher ici`](/logisim/images/logisim-dff-cables.png)

> [!NOTE]
> Le DFF n'est que le composant au milieu, les autres lui sont simplement branchés.

> [!WARNING]
> Les noms utilisés ne sont pas obligatoires et peuvent être modifiés dépendamment de la situation et du TP.

Lorsque le signal `ClockComponent` passe de `0` à `1`, la valeur d'entrée `InputBit` remplace la valeur `OutputBit`.

`Set` et `Reset`, quant à eux, sont asynchrones, c'est-à-dire qu'ils n'attendent pas que la clock passe de `0` à `1` pour changer la valeur du DFF.

`Set` force la valeur du DFF à devenir `1` dès qu'il est activé. `Reset` force la valeur du DFF à devenir `0` dès qu'il est activé.

Le comportement lorsque `Set` et `Reset` sont activés en même temps dépend du DFF. Le projet Logisim utilisé dans ce tutoriel est disponible dans l'appendice, il permet de jouer avec le DFF et de voir comment il se comporte.

> [!TIP]
> Les clocks sont abordées dans [un autre tutoriel](toggle-clock).

### Utilisation de Set/Reset

Les tutoriels n'ont pas abordé la forme d'entrée utilisée pour `Set` et `Reset` ci-dessus. Il s'agit simplement de deux boutons. Ils produisent un signal `1` lorsqu'on clique dessus, `0` le reste du temps.

Dans les TPs notés, lorsqu'un circuit devra avoir un **reset asynchrone**, cela signifiera qu'il faudra utiliser une de ces entrées du DFF (pas nécessairement avec un bouton cela dit).

En général, les instructions d'un TP fournissent une valeur par défaut à définir lorsque le circuit est reset. À partir de là on :

1) Définit quels valeurs doivent contenir les DFFs pour être dans l'état décrit lors du reset (`1` ou `0` pour chaque DFF).
2) Utilise soit `Set` soit `Reset` sur chacun des DFFs dépendamment de s'il doit contenir `1` ou `0` lors du reset.

Qu'on choisisse `Set` ou `Reset`, le signal sera lié à un bouton de reset où un élément du même style. En effet, le circuit ne sait pas quand il a démarré, et seul un reset général peut mettre le circuit dans l'état voulu.

> [!CAUTION]
> Si les instructions demandent d'implémenter un reset **synchrone**, les entrées `Set` et `Reset` du DFF ne doivent surtout pas être utilisées, car elles sont asynchrones par définition. À la place, une logique de reset doit être appliquée à l'entrée `InputBit`.

## Appendice

> [!TIP]
> Pour se familiariser avec les DFFs, quoi de mieux que de télécharger le projet utilisé dans ce tutoriel, cliquer un peu partout et voir ce qu'il se passe?
>
> La clock peut être activée manuellement, ou elle peut s'activer régulièrement et automatiquement comme expliqué dans [ce tutoriel](toggle-clock).

Le projet Logisim utilisé dans ce tutoriel peut être téléchargé via <a href="/logisim/projects/logisim_dff.circ" download="logisim_dff.circ">ce lien</a>.