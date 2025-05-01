<script> 
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Animation Page Loaded");
    });
</script>

<div class="cv-container">
    <div class="box">
        <h1>Animation</h1>
    </div>
</div>

<div class="box-container">
   
    <div class="box-with-image">
        <div class="background-box">
            <!-- svelte-ignore a11y_media_has_caption -->
            <video class="art1" controls>
                <source src="UFO.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="under-box">
            <p>07-11-2025</p>
            <p class="description">For this assignment, I had to design and create a spaceship and a city background. I then had to animate the spaceship to kidnap a person.</p>
        </div> 
    </div>

    <div class="box-with-image">
        <div class="background-box">
            <!-- svelte-ignore a11y_media_has_caption -->
            <video class="art2" controls>
                <source src="walk.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="under-box">
            <p>03-12-2024</p>
            <p class="description">I had to take my character that I had already designed previously and animate it walking. The background was created by me also.</p>
        </div> 
    </div>
</div>


<style>

.cv-container {
     display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align items to the top */
    align-items: center;
    min-height: 80vh;  /* Reduced from 100vh */
    padding-top: 40px;  /* Add some space from top */
    text-align: center;
    margin-top: 0;
}

.box {
    background-color: #fff2aa;
    border-radius: 18px;
    padding: 0.5rem 2rem;  
    text-align: center;
    width: auto; 
    max-width: 300px; 
    box-shadow: 0 8px 7px rgba(0, 0, 0, 0.2); 
    font-size: 13px;
    margin-bottom: 0px; 
    margin-top: 60px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Added shadow */
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
}

.box-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 0px; /* Keep this at 0 to preserve initial placement */
}

.box-with-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.background-box {
    width: 500px;
    height: 280px;
    background-color: #fff2aa;
    border-radius: 25px;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -250px;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
}

.under-box {
    width: 500px;
    height: 113px;
    background-color: #fdf7d1;
    border-radius: 25px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 100px;
    display: flex;
    justify-content: left;
    padding-top: 0px; /* control how high the text sits */
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
}

.art1 {
    width: 85%;
    height: 85%;
    object-fit: cover;
    border-radius: 20px;
}

.art2 {
    width: 85%;
    height: 85%;
    object-fit: cover;
    border-radius: 20px;
}

p {
    padding-left: 20px;
    font-family: 'Italiana', serif;
    font-weight: 600;
    font-size: 19px;
    margin-top: 10px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Added shadow */
}

.description {
    font-family: 'Italiana', serif;
    font-size: 18px;
    margin-top: 40px;
    margin-left: -110px;
    font-weight: 100;
    width: 95%;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Added shadow */
}

@media (max-width: 1268px) {
    .box-container {
        gap: 60px;
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 1268px) {
    .box-container {
        flex-direction: column;
        margin-top: -550px;
        margin-bottom: 100px;
        align-items: center;  /* Center all child elements horizontally */
        gap: 60px;            /* Optional: Adds space between the two boxes */
    }

    .box-with-image {
        max-width: 100%;
        align-items: center;
        height: auto;
        padding: 15px;
    }

    .background-box,
    .under-box {
        width: 100%;
        height: auto;
        max-width: 500px;     /* Keeps layout from becoming too wide on tablets */
        margin: 0 auto;       /* Center horizontally */
    }

    .art1,
    .art2 {
        width: 100%;
        height: auto;
        padding: 15px;
    }

    .description {
        margin-left: -10;
        text-align: left;
    }

    p {
        text-align: left;
    }
}

</style>