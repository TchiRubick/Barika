# barika
State container for jquery


# Use case

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
