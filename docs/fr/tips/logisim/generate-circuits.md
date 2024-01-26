# Générer des circuits (Logisim)

Dans certains cas, les circuits à créer sont longs à créer à la main et plus simple à générer automatiquement.

Logisim est en effet capable de **générer automatiquement des circuits à partir de tables de vérité** (*truth table*).

## Exemple d'utilisation

Reprenons l'exemple du [tutoriel précédent](keep-it-organized#mise-en-situation) où l'on désirait créer un additionneur de bits.

Le circuit possède trois entrées, `A`, `B` et `carry`, ainsi que deux sorties, `result` et `remainder`.

Le circuit est tout à fait réalisable à la main, cependant il est plus intéressant dans ce cas-ci de le générer automatiquement en donnant sa *truth table* à Logisim.

### Analyse combinatoire

Dans le menu, `Fenêtre` > `Analyse combinatoire` devrait ouvrir une fenêtre comme la suivante :

![`Une animation montrant comment ouvrir la fenêtre devrait s'afficher ici`](/logisim/images/logisim-truth-tables-combinational-analysis.gif)

### Lister les variables

Dans ce premier onglet `Entrées et sorties`, on liste les variables d'entrées et de sortie, comme les tables de vérité vues en cours.

Pour notre circuit d'exemple, on a `A`, `B`, `carry` en entrée et `result`, `remainder` en sortie, comme ceci :

![`Une image de la liste des entrées et sorties remplies devrait apparaître ici`](/logisim/images/logisim-truth-tables-combinational-analysis-inputs-and-outputs-tab-filled-in.png)

### Compléter la table de vérité

L'onglet suivant, `Table`, permet de donner les résultats désirés pour chacune des combinaisons de variables d'entrée.

Par exemple, si `A` et `B` sont tous deux `1` mais que `carry` est `0`, alors on aura un `0` pour `result` et un `1` pour `remainder`.

Chaque ligne de la table doit être ainsi remplie. Un `-` signifie *don't care*, c'est-à-dire que Logisim choisira librement la valeur en fonction de ce qui simplifie le circuit.

La table pour notre circuit d'exemple ressemble à ceci :

![`Une image de table complétée devrait apparaître ici`](/logisim/images/logisim-truth-tables-combinational-analysis-table-tab-filled-in.png)

### Expression et *Karnaugh diagram*

Une fois la table complétée, Logisim génère l'expression logique correspondant à la table de vérité donnée dans l'onglet `Expression`.

![`Une image de l'expression générée automatiquement devrait apparaître ici`](/logisim/images/logisim-truth-tables-combinational-analysis-expression-tab.png)

Logisim génère également le *Karnaugh diagram* correspondant à l'expression et trouve une expression minimisée pour la décrire, dans l'onglet `Karnaugh` (en anglais `Minimized`).

### Générer le circuit

Une fois toutes ces données obtenues, Logisim est capable de générer le circuit. On peut lui en donner l'instruction via le bouton `Construire le circuit` en bas à gauche de la fenêtre d'analyse combinatoire.

Certaines propriétés du circuit peuvent être modifiées comme le projet de destination ou le nom du circuit.

![`Une image des paramètres de génération de circuit devrait s'afficher ici`](/logisim/images/logisim-truth-tables-combinational-analysis-build-circuit.png)

En guise d'exemple, voici le circuit généré sans contrainte particulière :

![`Une image du circuit généré automatiquement devrait apparaître ici`](/logisim/images/logisim-truth-tables-combinational-analysis-built-circuit.png)

## Autres possibilités - importer et exporter les tables de vérité

Il est possible d'importer une table de vérité sous forme d'un fichier texte contenant les valeurs nécessaires.

Il est également possible d'exporter une table de vérité une fois celle-ci créée et remplie.

La *truth table* utilisée dans cet exemple peut être téléchargée dans l'[appendice](#appendice).

## Appendice

Le projet Logisim utilisé pour les captures d'écran de ce tutoriel peut être téléchargé via <a href="/logisim/projects/logisim_truth_tables_generate_circuits_with_truth_tables.circ" download="logisim_truth_tables_generate_circuits_with_truth_tables.circ">ce lien</a>.

La table de vérité utilisée peut être téléchargée via <a href="/logisim/truth-tables/logisim-truth-tables-generate-circuits-with-truth-tables.txt" download="logisim-truth-tables-generate-circuits-with-truth-tables.txt">ce lien</a>.