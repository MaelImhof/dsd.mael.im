# Activer/Désactiver les clocks (Logisim)

Un composant vital pour les circuits séquentiels est la **clock**. Logisim possède un composant représentant une clock, et ce tutoriel a pour objectif de montrer comment l'utiliser.

## Ajouter une clock

Le composant de **clock** se trouve dans les [composants additionels](general-logisim-ui#3-les-composants-additionnels) sous le dossier `Câblage` > `Horloge`.

![`Une image indiquant où trouver une clock devrait s'afficher ici`](/logisim/images/logisim-clock-add.png)

## Simuler une clock

Avoir une clock dans son circuit fait joli, mais on aimerait l'utiliser pour simuler le circuit.

Logisim permet de simuler la clock automatiquement à une fréquence donnée, grâce au menu `Simulation`.

`Simulation` > `Tics activés` active ou désactive la simulation des clocks du circuit.

`Simulation` > `Fréquence des tics` indique à quelle fréquence la clock devrait être simulée. `1Hz` signifie une fois par seconde, et `1kHz` signifie mille fois par secondes.

> [!TIP]
> Désactiver la clock peut être très utile pour travailler sur son circuit sans être distrait par des signaux changeants.

![`Une image montrant une clock activée et à deux fréquences devrait s'afficher ici`](/logisim/images/logisim-clock-simulation.gif)

## Appendice

Le projet Logisim utilisé dans ce tutoriel peut être téléchargé via <a href="/logisim/projects/logisim_clock.circ" download="logisim_clock.circ">ce lien</a>.