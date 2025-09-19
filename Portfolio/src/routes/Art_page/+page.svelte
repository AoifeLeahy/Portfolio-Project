<script> 
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    onMount(() => {
        console.log("Art Page Loaded");
    });
</script>

<div class="container">
    <div class="art-text-box">
        <h1>Art</h1>
    </div>
</div>

<div class="art-box-container">
   
    <div class="art-and-description">
        <div class="art-background-box">
            <img src="{base}/art_1.png" alt="First artwork" class="art1"/>
        </div>
        <div class="description-box">
            <p>26-11-2024</p>
            <p class="description">This assignment consisted of designing and creating are own character. I then had to draw the character facing in different directions.</p>
        </div> 
    </div>

    <div class="art-and-description">
        <div class="art-background-box">
            <img src="{base}/art_2.png" alt="Second artwork" class="art2"/>
        </div>
        <div class="description-box2">
            <p>25-09-2024</p>
            <p class="description">I had to draw rough sketches of a character created by me in different poses. I had to pick the best pose and then design and do a final piece.</p>
        </div> 
    </div>
</div>


<style>

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
    padding-top: 5px;  
    margin-top: 0; 

    /*Size*/
    min-height: 20vh;  
    
    /*Text*/
    text-align: center;
   
}

.art-text-box {
    /*Styling*/
    background-color: #fff2aa;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 

    /*Border*/
    border-radius: 18px; 
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;

    /*Layout*/
    padding: clamp(0.4rem, 1.5vw, 0.75rem) clamp(1.2rem, 3vw, 2rem); 
    text-align: center;
    margin: clamp(0.75rem, 2vw, 1.25rem) auto clamp(1rem, 2.5vw, 2rem);
    
    /*Font*/
    font-size: clamp(0.8rem, 1.8vw, 1rem);

    /*Size*/
    width: auto; 
    max-width: clamp(200px, 40vw, 320px);
    min-width: 150px;
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

    /*Styling*/
    background-color: #fff2aa;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);

    /*Border*/
    border-radius: clamp(15px, 3vw, 25px); 
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
    
    /*Layout*/
    display: flex;
    justify-content: center;
    align-items: center;
    margin: clamp(1rem, 2vw, 2rem) auto;
}

.description-box, .description-box2 {
    /*Size*/
    width: 90%;
    max-width: clamp(300px, 80vw, 500px);
    min-height: fit-content;
    padding: clamp(0.5rem, 1.5vw, 1.5rem);

    /*Styling*/
    background-color: #fdf7d1;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);

    /*Border*/
    border-radius: clamp(15px, 3vw, 25px);
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
    
    /*Layout*/
    margin: clamp(0.5rem, 0.2vw, 1rem) auto clamp(2rem, 4vw, 4rem);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}



.art1, .art2 {
    /*Size*/
    width: 85%;
    height: 85%;

    /**Layout*/
    object-fit: cover;

    /*Border*/
    border-radius: 20px;
}

p {
    /*Font*/
    font-family: 'Italiana', serif;
    font-weight: 600;
    font-size: 19px;

    /*Layout*/
    margin-top: 10px;
    padding-left: 20px;

    /*Styling*/
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
}

.description {
    /*Font*/
    font-family: 'Italiana', serif;
    font-size: 18px;
    font-weight: 100;

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
@media (max-width: 768px) {
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
    
    .art-text-box {
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
        font-size: clamp(14px, 3vw, 16px);
        padding: clamp(0.25rem, 1vw, 0.5rem);
        margin-top: clamp(0.25rem, 1vw, 0.5rem);
    }
}

/* Very small screens */
@media (max-width: 350px) {
    .art-text-box {
        padding: 0.4rem 1rem;
        font-size: 0.75rem;
    }
    
    .art-background-box,
    .description-box,
    .description-box2 {
        max-width: 95vw;
    }
    
    .description {
        width: 100%;
        margin-left: 0;
    }
}

</style>