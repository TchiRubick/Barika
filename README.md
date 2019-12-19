# barika
Conteneur d'etat pour jquery.

# Description
Plus besoin de passer par un __input[hidden]__ pour garder des informations au chaud.
Il suffit juste de le garder dans le conteneur.
Comme c'est du javascript, n'importe quoi peut être garder dans le conteneur, même des fonctions et des classes.

# Utilisation

```
<script src="jquery.js"></script>
<script src="jqbarika.js"></script>
<div id="app"></div>
<script>
	$( "#app" ).barika( 'setState',
		{
			'stateinitial': 'Nice state',
			'stateFunctional': ( arg ) => console.log( arg )
		}
	);

	var stateinitial = $( "#app" ).barika( 'getState', 'stateinitial' );
	var stateFunctional = $( "#app" ).barika( 'getState', 'stateFunctional' );
	stateFunctional( stateinitial );
</script>
```
__output__ 
> Nice state

# Documentation et téléchargement
> Documentation en cours

Vous pouvez directement cloner le repository and you're good to go.
