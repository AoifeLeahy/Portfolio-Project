<script> 
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About me Page Loaded");
    });
</script>

<div class="cv-container">

    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img src="/picture.jpg" alt="Photo of Aoife" class="picture"/>
   
    <div class="description-framing-box"></div>

    <div class="picture-box"></div>
    <div class="picture-box2"></div>

    <div class="name-box">
        <h1>Aoife Leahy</h1>
    </div>
    <div class="about-me-text-box">
        <p>I am currently a student studying Interactive Digital Art and Design in SETU Carlow. </p>
        <p>I love to create characters through animation and concept art. I thrive in bringing the characters to life through stories and background images. Art has always been a big part of my life and I am very passionate towards it.</p>
        <p>In the past couple of years, I have started to design games and experiment with game mechanics. With this new skill obtained, I have been able to mix this with my art skills to create some visually pleasing games.</p>
        <p>I am continuously learning new things by experimenting with different aspects of art. By doing this, I am constantly improving and making my performance strengthen.</p>
        <p>This portfolio shows my past projects and gives a brief look into my ongoing journey.</p>
    </div>
     <h2>You can find me below:</h2> 
     <div class="contact-item">
        <img src="/gmail.png" alt="Gmail logo" class="logo1" />
        <h3>aoifeleahy.kk@gmail.com</h3>
    </div>
    
    <div class="contact-item">
        <img src="/github.png" alt="Github logo" class="logo2" />
        <h4>https://github.com/AoifeLeahy</h4>
    </div>
</div>
<style>



.picture {
    /*Layout*/
    position: absolute;
    top: 170px; 
    right: 170px;  
    z-index: 2; 
    padding: 30px; 
    object-fit: cover;

    /*Size*/
    width: 200px; 
    height: 260px;

    /*Border*/
    border-radius: 20px;
    
    /*Styling*/
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1); 
}

.picture-box2 {
    /*Layout*/
    position: absolute;
    top: 184px; 
    right: 182px; 
    z-index: 1; 
    padding: 30px; 
    object-fit: cover; 

    /*Size*/
    width: 175px; 
    height: 230px;

    /*Border*/
    border-radius: 20px;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;

    /*Styling*/
    background-color: #fdf7d1; 
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2); 
}

.cv-container {
    /*Layout*/
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    text-align: center;
    margin-top: 30px;
    position: relative;

    /*Size*/
    min-height: 100vh; 
}

.picture-box {
    /*Layout*/
    position: absolute;
    top: 170px; 
    right: 170px; 
    z-index: 0; 
    padding: 30px; 

    /*Size*/
    width: 200px;
    height: 260px;

    /*Styling*/
    background-color: #fff2aa; 
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1); 
    
    /*Border*/
    border-radius: 25px;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
}

.description-framing-box {
    /*Layout*/
    position: absolute;
    top: 170px; 
    left: 90px; 
    z-index: 0; 
    padding: 30px; 

    /*Size*/
    width: 650px; 
    height: 260px;

    /*Styling*/
    background-color: #fff2aa;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1); 

    /*Border*/
    border-radius: 25px; 
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
}

.name-box {
    /*Styling*/
    background-color: #fff2aa;
    box-shadow: 0 8px 7px rgba(0, 0, 0, 0.1); 
    
    /*Border*/
    border-radius: 18px;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;

    /*Layout*/
    padding: 0.1rem 1rem;  
    text-align: center; 
    margin-bottom: 23px; 
    margin-top: 80px;
    margin-left: 90px;
    z-index: 1;

    /*Size*/
    width: auto; 
    max-width: 220px; 

    /*Font*/
    font-size: 13px; 
}

.about-me-text-box {
    /*Styling*/
    background-color: #fdf7d1;
    box-shadow: 0 8px 7px rgba(0, 0, 0, 0.2); 

    /*Border*/
    border-radius: 18px; 
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;

    /*Layout*/
    padding: 0.1rem 1rem;  
    text-align: center;
    margin-bottom: 30px; 
    margin-top: 20px;
    margin-left: 110px;
    z-index: 1;

    /*Size*/
    width: auto; 
    max-width: 640px; 
    
    /*Font*/
    font-size: 13px;
   
}

h1 {
    font-weight: 600;
    font-size: 25px;
}

h2 {
    /*Font*/
    font-weight: 600;
    font-size: 20px;

    /*Layout*/
    margin-bottom: 20px;
    margin-left: 100px;
    text-align: left;
}

p {
    font-size: 16px;
    font-family: 'Italiana', serif;
  
}

.logo1 {
    /*Size*/
    height: 50px;
    width: 70px;

    /**Layout*/
    margin-top: 0px;
    margin-left: -1000px;
}

h3 {
    /*Text*/
    font-size: 23px;
    font-weight: 100;
    text-align: left;
    word-break: break-word;
    overflow-wrap: break-word;

    /*Layout*/
    margin-top: -38px;
    margin-bottom: 0px;
    margin-left: 190px;
    
    /*Size*/
    max-width: 90%;
    
}

.logo2 {
    /*Layout*/
    margin-top: -50px; 
    margin-left: -2rem; 
    margin-bottom: 100px;

    /*Size*/
    height: 50px;  
    width: 70px;   
}

h4 {
    /*Layout*/
    margin-top: -130px;
    margin-bottom: 100px;
    margin-left: 680px;

    /*Size*/
    height: 50px;
    width: 300px;
    
    /*Text*/
    font-size: 23px;
    font-weight: 100;
}

/* Responsiveness*/

@media (max-width: 1245px) {
  .cv-container {
    align-items: center;
    text-align: center;
    padding: 1rem;
  }

  .picture,
  .picture-box,
  .picture-box2 {
    /*Layout*/
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    margin: 2.5rem auto;
    padding: 0;

    /*Size*/
    width: 150px;
    height: 190px;

    /*Styling*/
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
  }

  .picture-box,
  .picture-box2 {
    display: none; 
  }

  .description-framing-box {
    display: none; 
  }

  .name-box {
    /*Layout*/
    margin: 1rem auto;
    padding: 0.5rem 1rem;

    /*Size*/
    max-width: 80%;

    /*Text*/
    font-size: 20px;
    
    /*Styling*/
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  .about-me-text-box {
    /*Layout*/
    margin: 1rem auto;
    padding: 1rem;

    /*Size*/
    max-width: 90%;

    /*Text*/
    font-size: 16px;
    text-align: left;
    
    /*Styling*/
    border-radius: 20px;
    background-color: #fdf7d1;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
    
  }

  .description-framing-box {
    /*Layout*/
    margin: 1rem auto;
    padding: 1rem;

    /*Size*/
    max-width: 100%;

    /*Text*/
    font-size: 16px;
    text-align: left;

    /*Styling*/    
    border-radius: 20px;
    background-color: #fdf7d1;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
    
  }

  h2 {
    margin: 1rem auto;
    font-size: 20px;
    
  }

  .logo1,
  .logo2 {
    margin: 1rem auto;
    text-align: left;
  }

  .contact-item {
    /*Layout*/
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 1rem auto;

    /*Size*/
    max-width: 90%;
}

.contact-item img {
    height: 40px;
    width: 40px;
    flex-shrink: 0;
}

.contact-item h3, .contact-item h4 {
    margin: 0;
    font-size: 20px;
    word-break: break-word;  
    overflow-wrap: break-word;
    flex: 1;
}
}
</style>
