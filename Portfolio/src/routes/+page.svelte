<script>
	import { onMount } from 'svelte';

	onMount(() => {
		console.log("Home Page Loaded");
	});
</script>

<div class="home-page">
	<div class="box-container">
		<div class="box1">
			<h1>Aoife Leahy</h1>
		</div>

		<div class="box2">
			<img src="/background.png" alt="Forest background" />
		</div>
	</div>
</div>

<style>

.home-page {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	padding: 2rem;
	box-sizing: border-box;
	background-color: rgb(244, 250, 255);
}

.box-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	max-width: 1000px;
	width: 100%;
	gap: 2rem;
}


.box1 {
	background-color: #fff2aa;
	border: 2.5px dashed white;
	border-radius: 16px;
	padding: 1.5rem 2rem;
	box-shadow: 0 6px 6px rgba(0, 0, 0, 0.15);
	text-align: center;
	flex: 1 1 300px;
	max-width: 400px;
}

.box1 h1 {
	font-family: 'Italiana', serif;
	font-size: clamp(1.6rem, 4vw, 2.7rem);
	margin: 0;
	
}


.box2 {
	background-color: #fff2aa;
	border: 2.5px dashed white;
	border-radius: 16px;
	padding: 1rem;
	box-shadow: 0 6px 6px rgba(0, 0, 0, 0.15);
	flex: 1 1 300px;
	max-width: 450px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
}

.box2 img {
	width: 100%;
	max-height: 280px;
	border-radius: 12px;
	object-fit: cover;
}

/* Smaller screen tweaks */
@media (max-width: 768px) {
	.home-page {
		padding: 1.5rem 1rem;
	}

	.box-container {
		flex-direction: column;
	}

	.box1, .box2 {
		max-width: 90%;
	}
}

@media (max-width: 480px) {
	.box1  {
		font-size: 1rem;
	}

	.box2 img {
		max-height: 180px;
	}



}
</style>
