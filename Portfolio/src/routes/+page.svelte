<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	onMount(() => {
		console.log("Home Page Loaded");
	});
</script>

<div class="home-page">
	<div class="container">
		<div class="name-box">
			<h1>Aoife Leahy</h1>
		</div>

		<div class="image-box">
			<img src="{base}/background.png" alt="Forest background" />
		</div>
	</div>
</div>

<style>

.home-page {
	display: flex;
	justify-content: center;
	align-items: center;
    /**Size*/ 
	min-height: 100vh;
	padding: 2rem;

	background-color: rgb(244, 250, 255);
}

.container {
    /*Layout*/
	display: flex;
	justify-content: center;
	align-items: center;
    gap: 2rem;

    /*Size*/
	max-width: 1000px;
	width: 100%;
}


.name-box, .image-box {
    /*Styling*/
	background-color: #fff2aa;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.15);

    /**Border*/
	border: 2.5px dashed white;
	border-radius: 16px;
	
}

.name-box {
    /**Font*/
	font-family: 'Italiana', serif;
	font-size: 22px;

    /*Layout*/
	margin: 0;

    /*Styling*/
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
}

.image-box {
    /*Layout*/
	padding: 1rem;

    /*Size*/
	max-width: 450px;
}

.image-box img {
    /**Size*/
	width: 100%;
	max-height: 280px;

    /**Border*/
	border-radius: 12px;

    /*Layout*/
	object-fit: cover;
}


@media (max-width: 768px) {
	.home-page {
		padding: 2.5rem 1rem;
	}

	.container {
		flex-direction: column;
	}

	.name-box, .image-box {
		max-width: 90%;
	}
}

@media (max-width: 480px) {
	.image-box img  {
		max-height: 180px;
	}

	.container {
		flex-direction: column;
        align-items: center;
	}
}
</style>
