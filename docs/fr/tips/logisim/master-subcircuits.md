# Maîtriser les sous-circuits (Logisim)

Les circuits à implémenter deviennent de plus en plus complexes, jusqu'au TPs notés où tout faire dans un seul circuit principal n'est plus l'option la plus viable.

**Comme en programmation**, l'idée sera de **modulariser** et d'extraire du circuit les parties qui se répètent. En programmation, il y a les fonctions. Dans Logisim, il y a les **sous-circuits**.

## Circuit principal et sous-circuits

Logisim permet de créer plusieurs circuits plutôt qu'un seul pour modulariser les fonctionnalités recherchées.

La liste des circuits est affichées au même endroit que les [composants additionels](general-logisim-ui#3-les-composants-additionnels) :

![`Une image de la liste de différents circuits devrait s'afficher ici`](/logisim/images/logisim-subcircuits-circuits-list.png)

> [!TIP]
> Sur l'image ci-dessus, le circuit `main` a une icône de loupe à son côté. Cela signifie que `main` est le circuit actuellement affiché dans le [plan de travail](general-logisim-ui#1-le-plan-de-travail).
>
> Pour ouvrir un autre circuit, il est nécessaire de **double-cliquer dessus**.

## Création de nouveaux circuits

Un nouveau circuit peut être créé au moyen du bouton vert avec une icône de plus :

![`Une image indiquant comment ajouter un nouveau circuit à ton projet devrait s'afficher ici`](/logisim/images/logisim-subcircuits-add-new.png)

## Fonctionnement d'un sous-circuit

Les circuits créés dans Logisim possède généralement des entrées et des sorties (un circuit n'en possédant pas est peu intéressant).

L'utilisateur peut ensuite utiliser ses propres circuits dans d'autres, plus complexes, en leur donnant les entrées nécessaires.

Des exemples seront sont doutes bien plus parlant.

## Exemple 1 : `AND` gate personnalisée

Supposons avoir un **circuit `and_gate` dont la seule fonction est d'appliquer une porte `AND`** à ses deux inputs.

Il s'agit d'un circuit très peu utile, mais suffisamment simple pour un premir exemple.

On désire utiliser ce circuit `and_gate` à la place d'une simple porte `AND`. Pour cela, on suit les étapes suivantes :

1) Ouvrir le circuit où l'on désire ajouter une porte `AND` s'il n'est pas actuellement ouvert.
2) Sélectionner par un simple clic (pas double) le circuit `and_gate` : ![`Une image illustrant la sélection du bon circuit devrait s'afficher ici`](/logisim/images/logisim-subcircuits-select-subcircuit.png)
3) Ajouter le composant `and_gate` comme un composant normal, en cliquant dans le [plan de travail](general-logisim-ui#1-le-plan-de-travail).
4) Brancher le composant ajouté avec les entrées et sorties désirées.

![`Une image de l'affichage par défaut des sous-circuits devrait s'afficher ici`](/logisim/images/logisim-subcircuits-default-display.png)

Cette implémentation fourni deux entrées à `and_gate` et récupère sa sortie.

> [!IMPORTANT]
> Il n'est pas obligatoire de donné des composants `Entrée` en entrée ou de récupérer la sortie du sous-circuit avec un composant `Sortie`. On pourrait tout à fait appliquer de la logique aux entrées et aux sorties d'un sous-circuit, par exemple utiliser la sortie dans un DFF au lieu d'une sortie directement.

> [!NOTE]
> Par défaut, les sous-circuits s'affichent comme des gros rectangles comme affiché ci-dessus. Il est possible de modifier cette apparence dans les [propriétés](general-logisim-ui#4-proprietes) du sous-circuit, en modifiant `Apparence`, et en cliquant droit dessus, on accès à `Modifier l'apparence` qui ouvrira un éditeur d'apparence de circuit.
>
> **Ceci est purement esthétique et complètement inutile au regard d'une potentielle note, il est déconseillé d'y passer du temps, à moins de vouloir s'amuser.**

## Exemple 2 : Convertisseur 7-Segment

Donné une entrée de 2 bits, on désire afficher la valeur décimale qu'elle représente sur un [afficheur 7 segments](seven-segment-display).

![`Une illustration de la situation devrait s'afficher ici`](/logisim/images/logisim-subcircuits-complete-example-situation.png)

Une possibilité serait d'effectuer la conversion dans ce circuit directement, cependant :

- Ce circuit perdrait en lisibilité
- D'autres conversions pourraient être requises ailleurs

La création d'un sous-circuit semble donc le choix approprié.

Créons un circuit prenant en entrée un vecteur de 2 bits et donnera en sortie un vector de 8 bits représentant les 8 bits à donner en entrée à l'afficheur 7 segments.

Qui plus est, on peut alors se contenter de [générer le circuit de conversion à partir d'une table de vérité](generate-circuits).

Si on nomme le circuit principal `complete_example_circuit` et le convertisseur `complete_example_converter`, on se retrouve avec l'affichage suivant :

![`Une image des circuits créés devrait s'afficher ici`](/logisim/images/logisim-subcircuits-complete-example-circuits.png)

On ajoute donc le circuit de conversion dans le circuit principal :

![`Une image du sous-circuit ajouté au circuit principal devrait s'afficher ici`](/logisim/images/logisim-subcircuits-complete-example-add-subcircuit.png)

Après quoi, au moyen d'un [Splitter](splitter), on peut séparer les bits de sortie du convertisseur et les donner en entrée au 7-Segment Display.

![`Une image du circuit final devrait s'afficher ici`](/logisim/images/logisim-subcircuits-complete-example-plug-subcircuit-in.png)

> [!NOTE]
> On aurait également peut faire le choix d'avoir 8 bits de sortie de la part du sous-circuit plutôt qu'un seul vecteur de 8 bits.

## Appendice

Le projet Logisim utilisé dans ce tutoriel peut être téléchargé via <a href="/logisim/projects/logisim_subcircuits.circ" download="logisim_subcircuits.circ">ce lien</a>.

La table de vérité utilisée pour générer le convertisseur peut être téléchargée via <a href="/logisim/truth-tables/logisim-subcircuits-complete-example-converter-truth-table.txt" download="logisim-subcircuits-complete-example-converter-truth-table.txt">ce lien</a>.