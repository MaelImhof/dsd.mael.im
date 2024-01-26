# Splitter (Logisim)

Comme déjà abordé dans un [précédent tutoriel](properties-in-logisim), les bits individuels ne suffiront pas durant tout le semestre, et viendra un temps où les entrées ressembleront plutôt à ceci :

![`Une image d'entrée de 8 bits devrait s'afficher ici`](/logisim/images/logisim-splitter-input-of-8-bits.png)

On peut désirer effectuer une opération avec des bits bien précis de ce vecteur plutôt qu'avec le vecteur entier. **Ce cas de figure revient régulièrement**, c'est pourquoi le **Splitter** est si important.

## Ajouter un Splitter à ton circuit

Le Splitter est un composant additionel se trouvant dans l'[arborescence de composants](general-logisim-ui#3-les-composants-additionnels) vue précédemment dans le dossier nommé `Câblage` et sous le nom `Répartiteur (Splitter)`.

Pour l'ajouter à un circuit, cliquer dessus pour le sélectionner et cliquer dans le circuit là où il devrait être ajouté.

![`Une animation de comment ajouter un Splitter devrait s'afficher ici`](/logisim/images/logisim-splitter-add.gif)

## Utiliser et ajuster le Splitter

Par défaut, le Splitter n'est pas encore configuré à notre convenance :

![`Une image du Splitter par défaut devrait s'afficher ici`](/logisim/images/logisim-splitter-default-splitter.png)

Les [propriétés](properties-in-logisim) suivantes peuvent être utilisées pour régler le Splitter selon le cas pratique :

| Nom | Description |
|-----|-------------|
| `Nbr Terminaisons` (anglais : `Fan Out`) | Nombre de fils **sortant** du Splitter |
| `Largeur faisceau` (anglais : `Bit Width In`) | Nombre de bits pris en entrée |
| `Bit i` | Indique dans quel fil de sortie ira le ième bit d'entrée |
| `Espacement` | Nombre de points séparant chaque fil de sortie |

![`Une animation illustrant les propriétés du Splitter devrait s'afficher ici`](/logisim/images/logisim-splitter-properties.gif)

> [!TIP]
> La meilleure manière de maîtriser les Splitter et d'expérimenter avec leur propriétés.

## Prendre plusieurs bits pour les unifier en un vecteur

Le Splitter permet de sélectionner des bits précis au sein d'un vecteur de bits. Il permet également d'effectuer l'opération inverse et de **rassembler plusieurs bits en un vecteur**.

Pour cela il suffira de brancher les bits individuels aux fils décris jusqu'à présent comme "sortant" du Splitter. Le sens est le seul élément qui change.

Pour rendre cela plus visuel, on pourra également modifier l'apparence du Splitter dans ses propriétés pour qu'il soit tourné.

![`Une image d'un Splitter qui rassemble 8 bits dans un seul vecteur devrait s'afficher ici`](/logisim/images/logisim-splitter-splitter-examples-reversed-process.png)

## Appendice

Le projet Logisim utilisé pour illustrer ce tutoriel est téléchargeable via <a href="/logisim/projects/logisim_splitters.circ" download="logisim_splitters.circ">ce lien</a>.