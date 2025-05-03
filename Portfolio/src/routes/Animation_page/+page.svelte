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
            <p>07-11-2025</p>
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
            <p>03-12-2024</p>
            <p class="description">I had to take my character that I had already designed previously and animate it walking. The background was created by me also.</p>
        </div> 
    </div>
</div>


<style>

.container {
    /*Layout*/
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    margin-top: 0;
    padding-top: 40px; 

    /*Size*/
    min-height: 80vh;  

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
    padding: 0.5rem 2rem;  
    text-align: center;
    margin-bottom: 0px; 
    margin-top: 60px;

    /*Size*/
    width: auto; 
    max-width: 300px; 

    /*Font and text*/
    font-size: 13px;

    /*Styling*/
    box-shadow: 0 8px 7px rgba(0, 0, 0, 0.2); 
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
    background-color: #fff2aa;
}

.art-box-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 0px; 
}

.art-and-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.art-background-box {
    /*Size*/
    width: 500px;
    height: 280px;

    /*Layout*/
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -250px;

    /*Border*/
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
    border-radius: 25px;

    /*Styling*/
    background-color: #fff2aa; 
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
}

.description-box {
    /*Size*/
    width: 500px;
    height: 113px;

    /*Styling*/
    background-color: #fdf7d1;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

    /*Layout*/
    margin-bottom: 100px;
    display: flex;
    justify-content: left;
    padding-top: 0px; 

    /*Border*/
    border-radius: 25px;
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
    font-weight: 100;
    font-size: 18px;

    /*Layout*/
    margin-top: 40px;
    margin-left: -110px;
    
    /*Size*/
    width: 95%;

    /*Styling*/
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
}



@media (max-width: 1268px) {
    .animation-text-box {
        margin-top: 40rem;
    }

    .container {
        flex-direction: column;
        margin-top: -550px;
        margin-bottom: 100px;
        align-items: center; 
        gap: 60px;            
    }

    .art-and-description {
        /*Size*/
        max-width: 100%;
        height: auto;

        /*Layout*/
        align-items: center;
        padding: 15px;
    }

    .art-background-box,
    .description-box {
        /*Size*/
        width: 100%;
        height: auto;
        max-width: 500px;
        
        /*Layout*/
        margin: 0 auto;       
    }

    .art1,
    .art2 {
        /*Size*/
        width: 100%;
        height: auto;

        /*Layout*/
        padding: 15px;
    }

    .description {
        margin-left: -10;
        text-align: left;
    }

    p {
        text-align: left;
        margin-top: -2px;
        padding-top: 2px;
    }

    @media (max-width: 522px) {
        .art-box-container {
        flex-direction: column;
        align-items: center;
    }

    }
}

</style>