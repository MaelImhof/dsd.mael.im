# Interface générale de Logisim

La suite des tutoriels proposés visent à mieux tirer parti de Logisim.

Dans un premier temps, ce tutoriel vise la prise en main de l'interface de Logisim. Celle-ci se décompose en **5 parties principales** :

![`L'image de l'interface de Logisim dans son ensemble devrait s'afficher ici`](/logisim/images/logisim-interface-overview.png)

## 1. Le plan de travail

C'est dans ce grand espace (vide pour l'instant) que les circuits sont créés en glissant et en déposant des composants comme des portes logiques, des fils, et ainsi de suite.

En guise d'exemple, le plan de travail pourrait contenir des éléments comme ceci (une porte `AND` avec deux entrées et une sortie) :

![`L'image d'un circuit devrait s'afficher ici`](/logisim/images/logisim-interface-circuit.png)

## 2. La barre d'outils

Ces outils sont utilisés pour modifier le circuit dans le plan de travail.

![`Une image de la barre d'outils devrait s'afficher ici`](/logisim/images/logisim-interface-tools.png)

De gauche à droite :

### **La main**

La main permet de modifier les valeurs d'entrées du circuit. Une fois cet outil sélectionné, il est possible de cliquer sur les entrées (*inputs*) pour changer leur valeur (la valeur passe de `0` à `1` ou inversément).

![`Une animation d'exemple d'utilisation de la main devrait apparaître ici`](/logisim/images/logisim-interface-hand.gif)

À noter que ce processus fonctionne même avec des [entrées de plusieurs bits](properties-in-logisim). Il suffit de cliquer sur chaque bit individuellement pour le changer.

### **Le pointeur**

Cet outil (qui ressemble à un curseur de souris) permet de modifier le circuit au sens large du terme.

Il permet notamment de **sélectionner des éléments** du circuit, de les **déplacer** et de les **relier par des fils**.

![`Une animation d'exemple d'utilisation du pointeur devrait appraître ici`](/logisim/images/logisim-interface-pointer.gif)

> [!TIP]
> Pour relier des éléments avec un fil, il est nécessaire de maintenir le clic de la souris et de glisser le curseur jusqu'au deuxième élément.

### **Les fils**

Là où l'outil [pointeur](#le-pointeur) permet d'ajouter des fils liant un élément du circuit à un autre, l'outil **fil** permet d'ajouter des fils sans nécessairement partir d'un élément. L'outil pointeur est généralement plus utilisé.

### **Le texte**

Les personnes extrêmement organisées seront ravies d'apprendre que Logisim permet de commenter son circuit (en quelque sorte). L'outil texte peut être utilisé pour ajouter des blocs de texte dans le circuit.

![L'image d'un commentaire très utile devrait s'afficher ici](/logisim/images/logisim-interface-comments.png)

Même si cela est clairement inutile en l'occurrence, certaines personnes trouveront cela aidant lorsque les projets deviendront plus complexes.

> [!IMPORTANT]
> Ajouter des commentaires n'a rien d'obligatoire dans le cours, à moins d'une directive contraire de l'enseignant(e).

### **Entrées et sorties**

Les deux outils suivants permettent d'ajouter des entrées et des sorties au circuit (barre verte à droite et à gauche respectivement).

La barre verte d'une entrée est orientée vers la droite pour montrer que le courant "entre" dans le circuit, et inversément pour la sortie.

Pour ajouter une entrée, on sélectionnera l'outil correspondant, puis on cliquera dans le plan de travail à l'endroit où on veut ajouter une entrée. De même pour les sorties.

> [!TIP]
> Il est possible de créer des entrées/sorties de plusieurs bits en [manipulant leurs propriétés](properties-in-logisim).

### **NOT, AND, OR, XOR, NAND, NOR, D-FLIP-FLOP, REGISTER**

Tous les outils suivants sont des portes logiques à ajouter dans le circuit de la même manière qu'une [entrée/sortie](#entrees-et-sorties) (exceptés le `D-Flip-Flop` et le `Register` qui sont des éléments vus durant le semestre).

En cas de doute, survoler un outil avec la souris permet de voir le nom de la porte.

> [!WARNING]
> Attention à respecter les critères du TP s'il y en a. Dans certaines parties, seules certaines portes seront autorisées.

## 3. Les composants additionnels

La barre d'outils contient les composants principaux, mais il en existe bien d'autres.

Certains des tutoriels suivants sont dédiés à des composants spécifiques. Ceux-ci se trouvent dans l'arborescence en haut à gauche :

![`Une animation de l'arborescence devrait s'afficher ici`](/logisim/images/logisim-interface-components.gif)

Une arborescence de dossiers se trouve sous `logisim_interface` (qui est le titre du projet). Ces dossiers regroupent par catégorie des composants moins fréquemment utilisés, dont certains seront tout de même utiles pour DSD.

> [!TIP] À SUIVRE
> Les composants additionnels sont un vaste sujet. Les tutoriels suivants sont notamment dédiés au [Splitter](splitter), à la [Clock](toggle-clock), au [DIP-Switch](dip-switch) ou encore au [7-Segment Display](seven-segment-display). Il s'agit de composants utilisés durant le semestre qui seront probablement introduits dans les TPs.
>
> Il est également possible de créer des sous-circuits pouvant être utilisés comme des composants dans d'autres circuits. Cela sera le sujet d'un autre [tutoriel](master-subcircuits).

## 4. Propriétés

En sélectionnant un élément du circuit avec l'outil [pointeur](#le-pointeur), ses propriétés s'afficheront dans cet onglet. On peut ensuite ajuster selon nos besoins :

![`Une animation des propriétés devrait s'afficher ici`](/logisim/images/logisim-interface-properties.gif)

Les propriétés feront l'object d'un [tutoriel à part entière](properties-in-logisim).

## 5. Le menu

Comme de nombreuses applications, Logisim dispose d'un menu en haut à droite permettant notamment de :

- Sauvegarder le projet courant
- Ouvrir un projet existant
- Gérer la simulation du circuit (voir le tutoriel sur la [clock](toggle-clock))
- Tester son circuit sur une GECKO (FPGA)
- Générer un circuit automatiquement à partir d'une table de vérité (voir le [tutoriel à ce sujet](generate-circuits))

Les paramètres, quant à eux, se trouvent dans `Fichier` > `Préférences`.

## Appendice

Le projet Logisim utilisé pour les captures d'écran de ce tutoriel peut être téléchargé via <a href="/logisim/projects/logisim_interface.circ" download="logisim_interface.circ">ce lien</a>.