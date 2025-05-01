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
	background-color: rgb(244, 250, 255);
}

.box-container {
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1000px;
	width: 100%;
	gap: 2rem;
}


.box1, .box2 {
	background-color: #fff2aa;
	border: 2.5px dashed white;
	border-radius: 16px;
	box-shadow: 0 6px 6px rgba(0, 0, 0, 0.15);
}

.box1 {
	font-family: 'Italiana', serif;
	font-size: 22px;
	margin: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
}

.box2 {
	padding: 1rem;
	max-width: 450px;
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
	.box2 img  {
		max-height: 180px;
	}

	.box-container {
		flex-direction: column;
        align-items: center;
	}
}
</style>
