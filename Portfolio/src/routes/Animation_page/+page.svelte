<script> 
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    onMount(() => {
        console.log("Animation Page Loaded");
    });
</script>

<div class="container">
    <div class="animation-text-box">
        <h1>Animation</h1>
    </div>
</div>

<div class="art-box-container">
   
    <div class="art-and-description">
        <div class="art-background-box">
            <!-- svelte-ignore a11y_media_has_caption -->
            <video class="art1" controls>
                <source src="{base}/UFO.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="description-box">
            <p class="date">07-11-2024</p>
            <p class="description">For this assignment, I had to design and create a spaceship and a city background. I then had to animate the spaceship to kidnap a person.</p>
        </div> 
    </div>

    <div class="art-and-description">
        <div class="art-background-box">
            <!-- svelte-ignore a11y_media_has_caption -->
            <video class="art2" controls>
                <source src="{base}/walk.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="description-box">
            <p class="date">03-12-2024</p>
            <p class="description">I had to take my character that I had already designed previously and animate it walking. The background was created by me also.</p>
        </div> 
    </div>
</div>


<style>

.date {
    text-decoration: underline;
}

h1 {
    font-size: 32px;   
    font-weight: 600;  
    margin: 0;         
}

.container {
    /*Layout*/
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    margin-top: 0;
    padding-top: 5px; 

    /*Size*/
    min-height: 20vh;  

    /*Text*/
    text-align: center;
    
}

.animation-text-box {
    /*Border*/
    border-radius: 18px;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;

    /*Layout*/
    padding: clamp(0.4rem, 1.5vw, 0.75rem) clamp(1.2rem, 3vw, 2rem);  
    text-align: center;
    margin: clamp(0.75rem, 2vw, 1.25rem) auto clamp(1rem, 2.5vw, 2rem);

    /*Size*/
    width: auto; 
    max-width: clamp(200px, 40vw, 320px);
    min-width: 150px;

    /*Font and text*/
    font-size: clamp(0.7rem, 1.5vw, 0.9rem);

    /*Styling*/
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); 
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
    background-color: #fff2aa;
}

.art-box-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: clamp(1.5rem, 4vw, 3rem);
    padding: 0 clamp(1rem, 3vw, 2rem);
    margin-top: 0;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.art-and-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(1rem, 2.5vw, 2rem);
    flex: 1;
    min-width: 280px;
    max-width: 500px;
}

.art-background-box {
    /*Size*/
    width: 100%;
    max-width: clamp(300px, 80vw, 500px);
    min-height: clamp(200px, 25vw, 280px);
    aspect-ratio: 16/9;

    /*Layout*/
    display: flex;
    justify-content: center;
    align-items: center;
    margin: clamp(1rem, 2vw, 2rem) auto;

    /*Border*/
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
    border-radius: clamp(15px, 3vw, 25px);

    /*Styling*/
    background-color: #fff2aa; 
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
}

.description-box {
    /*Size*/
    width: 90%;
    max-width: clamp(300px, 80vw, 500px);
    min-height: fit-content;
    padding: clamp(0.5rem, 1.5vw, 1.5rem);

    /*Styling*/
    background-color: #fdf7d1;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);

    /*Layout*/
    margin: clamp(0.5rem, 0.2vw, 1rem) auto clamp(2rem, 4vw, 4rem);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    /*Border*/
    border-radius: clamp(15px, 3vw, 25px);
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
}

.art1 {
    /*Size*/
    width: 85%;
    height: 85%;

    /*Layout*/
    object-fit: cover;

    /*Border*/
    border-radius: 20px;
}

.art2 {
    /*Size*/
    width: 85%;
    height: 85%;

    /*Layout*/
    object-fit: cover;

    /*Border*/
    border-radius: 20px;
}

p {
    /*font*/
    font-weight: 600;
    font-size: 19px;
    font-family: 'Italiana', serif;

    /*Layout*/
    padding-left: 20px;
    margin-top: 10px;

    /*Styling*/
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
}

.description {
    /*Font*/
    font-family: 'Italiana', serif;
    font-weight: 600;
    font-size: 18px;

    /*Layout*/
    margin-top: 0px;
    margin-left: -10px;
    
    /*Size*/
    width: 95%;

    /*Styling*/
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
}



/* Tablets and smaller laptops */
@media (max-width: 1024px) {
    .art-box-container {
        gap: clamp(1rem, 3vw, 2rem);
        padding: 0 clamp(0.75rem, 2vw, 1.5rem);
    }
    
    .art-and-description {
        max-width: 450px;
    }
}

/* Tablets */
@media (max-width: 800px) {
    .art-box-container {
        flex-direction: column;
        align-items: center;
        gap: clamp(2rem, 5vw, 3rem);
    }
    
    .art-and-description {
        max-width: 100%;
        width: 100%;
    }
    
    .description {
        margin-left: 0;
        text-align: left;
        padding: 0 clamp(0.5rem, 2vw, 1rem);
    }
}

/* Mobile phones */
@media (max-width: 480px) {
    .container {
        padding-top: 0;
    }
    
    .animation-text-box {
        margin: clamp(0.5rem, 2vw, 1rem) auto;
        max-width: 90vw;
    }
    
    .art-box-container {
        padding: 0 0.5rem;
    }
    
    .art1, .art2 {
        width: 95%;
        height: auto;
        padding: clamp(0.5rem, 2vw, 1rem);
    }
    
    p {
        text-align: left;
        margin-top: clamp(0.25rem, 1vw, 0.5rem);
        padding: clamp(0.25rem, 1vw, 0.5rem);
    }
}

/* Very small screens */
@media (max-width: 350px) {
    .animation-text-box {
        padding: 0.4rem 1rem;
        font-size: 0.75rem;
        margin-top: 1rem;
    }
    
    .art-background-box,
    .description-box {
        max-width: 95vw;
    }
}

</style>