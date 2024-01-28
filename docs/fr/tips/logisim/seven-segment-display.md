# Le 7-Segment Display

L'afficheur 7-segments (*7-Segment Display* en anglais) est un type de sortie bien particulier utilisé dans certains TPs notés.

## Ajouter un 7-Segment Display

Tout comme le [DIP-Switch](dip-switch), le 7-Segment Display se trouve dans le dossier des `Entrées/Sorties` parmi les [composants additionels](general-logisim-ui#3-les-composants-additionnels).

## Utiliser l'afficheur 7 segments

Un afficheur 7 segments se présente de la manière suivante :

![`Une image de afficheur 7 segments devrait s'afficher ici`](/logisim/images/logisim-7-segments-display-what-it-is-like.png)

Chaque point bleu représente une entrée pouvant accepter un fil, et chaque entrée allume ou éteint une des parties de l'afficheur.

Notons que le composant s'appelle 7-Segment Display mais qu'il y a **8 bits d'entrées**. Cela s'explique par la présence du bas en bas à droite.

Voici la correspondance entre les entrées et les segments :

![`Une image du mapping entre entrées et segments devrait s'afficher ici`](/logisim/images/logisim-7-segments-display-mapping.png)

> [!NOTE]
> Le `1` encadré en haut à gauche de l'image est un composant nommé **constante**, son seul rôle est d'émettre un signal constant à `1`. Il est disponible dans le dossier `Câblage` des [composants additionels](general-logisim-ui#3-les-composants-additionnels).

> [!CAUTION]
> De nombreuses options sont disponibles dans les propriétés du 7-Segment Display, cependant il est déconseillé de jouer avec ces propriétés dans les TPs notés. En effet, les 7-Segment Display sont généralement **déjà fourni et configuré** avec les instructions, il est donc préférable de ne rien toucher.

## Aide-mémoire

Voici une image qui peut aider à se souvenir de quelle entrée correspond à quel segment.

![`L'image d'aide-mémoire devrait s'afficher ici`](/logisim/images/logisim-7-segments-display-cheatsheet.png)

## Appendice

Le projet Logisim utilisé dans ce projet peut être téléchargé via <a href="/logisim/projects/logisim_7_segments_display.circ" download="logisim_7_segments_display.circ">ce lien</a>.

L'image d'aide-mémoire peut être téléchargée au format PNG via <a href="/logisim/images/logisim-7-segments-display-cheatsheet.png" download="logisim-7-segments-display-cheatsheet.png">ce lien</a> ou <a href="/logisim/docs/logisim-7-segments-display-cheatsheet.pdf">celui-ci en PDF</a>.