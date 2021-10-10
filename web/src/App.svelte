<script lang="ts">
	// export let name: string;
</script>

<main>
	<h1>form bot</h1>

	<h2>adicione os elementos do formulario que voce quer clicar</h2>

	<div class=form_groups>
		<div class=group>
			<label for="element">Escolha o elemento</label>
			<input type="text" id="element"/>
		</div>
		
		<div class=group>
			<label for="atribute">Escolha um atibuto desse elemento</label>
			<input type="text" id="atribute"/>
		</div>

		<div >
			<label for="method">selecione uma ação</label>
			<select >
				<option  value="click">Clicar</option>
				<option value="type">escrever</option>
			</select>
		</div>

	
	</div>

	


</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	main .form_groups {
		display: flex;
		justify-content: space-evenly;
		/* padding: 0 500px; */
		margin: 0 100px
	}

	main .group {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		
		
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>