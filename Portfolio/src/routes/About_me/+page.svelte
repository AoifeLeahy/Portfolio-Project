<script> 
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About me Page Loaded");
    });
</script>

<div class="cv-container">
    <!-- Background Box behind box2 -->
    <div class="background-box"></div>

    <div class="picture-box"></div>

    <div class="box">
        <h1>Aoife Leahy</h1>
    </div>
    <div class="box2">
        <p>I am currently a student studying Interactive Digital Art and Design in SETU Carlow. </p>
        <p>I love to create characters through animation and concept art. I thrive in bringing the characters to life through stories and background images. Art has always been a big part of my life and I am very passionate towards it.</p>
        <p>In the past couple of years, I have started to design games and experiment with game mechanics. With this new skill obtained, I have been able to mix this with my art skills to create some visually pleasing games.</p>
        <p>I am continuously learning new things by experimenting with different aspects of art. By doing this, I am constantly improving and making my performance strengthen.</p>
        <p>This portfolio shows my past projects and gives a brief look into my ongoing journey.</p>
    </div>
     <h2>You can find me below:</h2>
</div>

<style>
.cv-container {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    min-height: 100vh; 
    text-align: center;
    margin-top: 30px;
    position: relative;
}

.picture-box {
    position: absolute;
    top: 175px; /* Adjusted to be behind box2 */
    right: 70px; /* Position to match the left margin of box2 */
    width: 200px; /* Larger width to match size of box2 */
    height: 120px;
    background-color: #fff2aa; /* Lighter color for contrast */
    border-radius: 25px; /* Rounded corners */
    z-index: 0; /* Ensures it's behind the content */
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1); /* Light shadow */
    padding: 30px; /* Adds padding to ensure it covers the background */
}

.background-box {
    position: absolute;
    top: 170px; /* Adjusted to be behind box2 */
    left: 70px; /* Position to match the left margin of box2 */
    width: 610px; /* Larger width to match size of box2 */
    height: 260px;
    background-color: #fff2aa; /* Lighter color for contrast */
    border-radius: 25px; /* Rounded corners */
    z-index: 0; /* Ensures it's behind the content */
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1); /* Light shadow */
    padding: 30px; /* Adds padding to ensure it covers the background */
}

.box {
    background-color: #fff2aa; 
    border-radius: 18px;
    padding: 0.1rem 1rem;  
    text-align: center;
    width: auto; 
    max-width: 220px; 
    box-shadow: 0 8px 7px rgba(0, 0, 0, 0.2); 
    font-size: 13px;
    margin-bottom: 23px; 
    margin-top: 80px;
    margin-left: 70px;
    z-index: 1;
}

.box2 {
    background-color: #fdf7d1;
    border-radius: 18px;
    padding: 0.1rem 1rem;  
    text-align: center;
    width: auto; 
    max-width: 600px; 
    box-shadow: 0 8px 7px rgba(0, 0, 0, 0.2); 
    font-size: 13px;
    margin-bottom: 30px; 
    margin-top: 20px;
    margin-left: 90px;
    z-index: 1;
}

h1 {
    font-weight: 600;
    font-size: 25px;
}

h2 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 100px;
    margin-left: 90px;
    text-align: left;
}

p {
    font-size: 16px;
    font-family: 'Italiana', serif;
  
}
</style>
