# Propriétés des blocs Logisim

Tous les éléments d'un circuit Logisim peuvent être considérés comme des objets individuels. Une porte `AND` est un objet, un input en est un autre.

**Ces objets ont des propriétés** qui permettent de mieux expliquer à Logisim l'intention de l'utilisateur.

## Exemple 1 : la porte `AND` à 24 entrées

Supposons avoir 24 bits d'entrée. On désire vérifier que tous ces bits sont à `1`.

On pourrait bien sûr utiliser de multiples portes `AND` et les lier entre elles pour atteindre le résultat escompté, cependant cette solution est longue et fastidieuse à mettre en place.

Une autre solution est de se reposer sur les propriétés de notre porte `AND`.

Ces propriétés nous permettent notamment de modifier le nombre d'entrées que la porte `AND` accepte, pouvant donner des résultats plutôt cocaces visuellement parlant :

![`Une animation d'une porte AND à 24 entrées devrait s'afficher ici`](/logisim/images/logisim-properties-and-24-inputs.gif)

> [!NOTE]
> Le nombre d'entrées n'est de loin pas la seule propriété intéressante des portes `AND`. Expérimenter avec permet de mieux comprendre ce que chacune représente.

## Exemple 2 : Créer des vecteurs de bits

Passé le début du semestre, un seul bit en entrée ne suffira plus. Certaines entrées auront une taille de plus d'un bit, et il faudra travailler avec.

Créer une entrée à plusieurs bits suit à peu près le même processus qu'une porte `AND` à 24 entrées :

![`Une animation d'une entrée à 8 bits devrait s'afficher ici`](/logisim/images/logisim-properties-8-bits-input.gif)

Le processus est exactement le même pour une sortie de plusieurs bits.

> [!NOTE]
> Les vecteurs de bits seront abordés plus en détails dans les [astuces concernant les Splitters](splitter).

### Modifier une entrée à plusieurs bits

L'outil main fonctionne exactement de la même manière sur les entrées à plusieurs bits :

![`Une animation de modification d'une entrée à plusieurs bits devrait s'afficher ici`](/logisim/images/logisim-properties-hand-multibit-inputs.gif)

### Représentation de l'entrée

Parfois, les bits servent à représenter autre chose que des `1` et des `0`. Il est possible d'afficher une entrée différemment, toujours en utilisant ses propriétés :

![`Une animation de changement de représentation devrait s'afficher ici`](/logisim/images/logisim-properties-bits-representations.gif)

## Exemple 3 : Utiliser une porte `AND` sur des vecteurs de bits

On désirera parfois **effectuer des opérations bit à bit sur des vecteurs de bits** (on prend les deux premiers bits et on effectue l'opération sur eux, les deux deuxièmes bits, etc...).

Les propriétés permettent également de faire cela. Prenons l'exemple d'un `AND` bit à bit :

![`Une animation d'une opération AND bit à bit devrait s'afficher ici`](/logisim/images/logisim-properties-bit-by-bit-operations.gif)

Notons qu'initialement, **une erreur est présente**. En effet, on ne peut utiliser une porte `AND` normale avec des vecteurs de bits. On doit la modifier pour qu'elle accepte des vecteurs d'une certaine taill en entrée.

> [!NOTE]
> On peut également combiner les exemples 1 et 3 pour avoir une porte `AND` prenant 5 entrées de 8 bits chacune par exemple.

## Appendice

Le projet utilisé pour imager ce tutoriel peut être téléchargé via <a href="/logisim/projects/logisim_blocks_use_object_properties.circ" download="logisim_blocks_use_object_properties.circ">ce lien</a>.