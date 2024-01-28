# Organiser ses câbles (Logisim)

Durant la première partie du semestre, Logisim sera utilisé pour créer et simuler des circuits.

Ceux-ci **deviendront de plus en plus complexes**, aussi ce tutoriel a pour but de fournir quelques astuces afin de garder ses circuits lisibles et compréhensibles.

## Mise en situation

**Supposons qu'on désire créer un additionneur de bits** tout simple.

On a deux bits en entrée, A et B, qui sont 1 ou 0, et un `carry` qui pourrait provenir d'une addition précédente en cas d'addition bit par bit.

Le circuit donne en sortie le résultat ainsi que le reste de l'addition qui a été effectuée.

Voici une implémentation possible :

![`Une image d'un circuit chaotique devrait apparaître ici`](/logisim/images/logisim-cables-chaotic-circuit.png)

> [!NOTE]
> Remarquons que des portes `AND` et `XOR` à trois entrées sont utilisées. Pas de panique, celles-ci sont couvertes dans [un des tutoriels suivants](properties-in-logisim).

Le circuit est relativement simple, il est donc possible de comprendre avec de la patience et de la concentration. Mais peut-on le rendre plus simple à appréhender?

## Organisation des câbles

Une technique pour rendre le circuit

- Plus lisible
- Plus joli et aéré (très important)
- Plus facilement extensible, modifiable et réparable

est simplement de réarranger les câbles. Certains circuits d'exemple ou des circuits trouvés en ligne utilisent la méthode suivante :

![`L'image d'un circuit ordonné devrait apparaître ici`](/logisim/images/logisim-cables-sorted-circuit.png)

En arrangeant les entrées sur ces lignes de câbles, on voit facilement d'un coup d'oeil quelle entrée est utilisée et s'il s'agit de sa négation.

> [!NOTE]
> Cette méthode n'est pas obligatoire sauf indication contraire de l'enseignant(e).
>
> Elle peut cependant devenir utile dans des projets de plus grande envergure comme les TPs notés.

## Erreur de câblage

Une erreur très spécifique peut être rencontrée si on ne fait pas attention, comme ci-dessous :

![`L'image d'un circuit ordonné avec une erreur devrait apparaître ici`](/logisim/images/logisim-cables-sorted-circuit-with-error.png)

L'erreur ici est due au fait que le câble qui relie la deuxième porte XOR à la deuxième porte OR **passe par les bouts des trois câbles des négations des inputs**. Lorsqu'un câble passe par le bout d'un autre câble, les deux se lient automatiquement, même si cela n'était pas l'intention de l'utilisateur.

La solution à ceci est simple : prolonger les câbles vers le bas de quelques points de plus, afin de déplacer le bout plus bas et éviter le contact avec les autres câbles.

## Appendice

Le projet Logisim utilisé pour les captures d'écran de ce tutoriel peut être téléchargé via <a type="button" href="/logisim/projects/logisim_cables_chaotic_addition_circuit.circ" download="logisim_cables_chaotic_addition_circuit.circ">ce lien</a>.