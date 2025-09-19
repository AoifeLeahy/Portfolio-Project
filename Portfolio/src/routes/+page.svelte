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
	padding: clamp(1rem, 3vw, 2rem);
	background-color: rgb(233, 243, 255);

}

.container {
    /*Layout*/
	display: flex;
	justify-content: center;
	align-items: center;
    gap: clamp(1rem, 3vw, 2rem);

    /*Size*/
	max-width: min(1200px, 90vw);
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
	font-size: clamp(18px, 3vw, 24px);

    /*Layout*/
	margin: 0;
    padding: clamp(1rem, 2vw, 1.5rem);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: clamp(60px, 12vw, 100px);

    /*Styling*/
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
}

.image-box {
    /*Layout*/
	padding: clamp(0.75rem, 2vw, 1.25rem);

    /*Size*/
	max-width: min(500px, 45vw);
    min-width: 280px;
}

.image-box img {
    /**Size*/
	width: 100%;
	height: auto;
	max-height: clamp(150px, 20vw, 260px);
	min-height: 140px;

    /**Border*/
	border-radius: 12px;

    /*Layout*/
	object-fit: cover;
}


/* Ultra-wide screens - maintain laptop aesthetic */
@media (min-width: 1400px) {
	.container {
		max-width: 1400px;
		gap: 3rem;
	}
	
	.name-box {
		font-size: 28px;
		padding: 2rem;
	}
	
	.image-box {
		max-width: 550px;
		padding: 1.5rem;
	}
	
	.image-box img {
		max-height: 350px;
	}
}

/* Large tablets and small laptops */
@media (max-width: 1024px) {
	.container {
		gap: 1.5rem;
	}
	
	.name-box {
		font-size: clamp(16px, 2.5vw, 20px);
		min-height: 80px;
	}
	
	.image-box {
		max-width: min(400px, 40vw);
	}
}

/* Tablets - transition to stacked layout */
@media (max-width: 768px) {
	.home-page {
		padding: clamp(1.5rem, 4vw, 2.5rem) 1rem;
	}

	.container {
		flex-direction: column;
		gap: 1.5rem;
		max-width: 95vw;
	}

	.name-box, .image-box {
		max-width: 100%;
		width: 90%;
	}
	
	.name-box {
		order: 1;
		min-height: 60px;
		width: 40%;
	}
	
	.image-box {
		order: 2;
		max-width: none;
		width: 60%;
	}

	.image-box img {
		object-fit:scale-down;
	}
}

/* Mobile phones */
@media (max-width: 480px) {
	.home-page {
		padding: 1rem 0.75rem;
		min-height: calc(100vh - 60px); /* Account for header */
	}
	
	.container {
		gap: 1rem;
		max-width: 100vw;
		padding: 0 0.5rem;
	}

	.image-box img {
		max-height: clamp(120px, 30vw, 170px);
		min-height: 120px;
	}

	.name-box {
		font-size: clamp(16px, 4vw, 18px);
		padding: clamp(0.75rem, 3vw, 1rem);
		min-height: 70px;
	}
	
	.image-box {
		padding: clamp(0.5rem, 2vw, 0.75rem);
	}
}

/* Very small screens */
@media (max-width: 320px) {
	.name-box, .image-box {
		border-width: 2px;
	}
	
	.name-box {
		font-size: 16px;
		padding: 0.75rem 0.5rem;
		min-height: 50px;
	}
	
	.image-box {
		padding: 0.5rem;
	}
	
	.image-box img {
		max-height: 110px;
		min-height: 100px;
	}
}
</style>
