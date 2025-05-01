<script> 
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About me Page Loaded");
    });
</script>

<div class="cv-container">

    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img src="/picture.jpg" alt="Photo of Aoife" class="picture"/>
   
    <div class="background-box"></div>

    <div class="picture-box"></div>
    <div class="picture-box2"></div>

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
    position: absolute;
    top: 170px; 
    right: 170px; 
    width: 200px; 
    height: 260px;
    z-index: 2; 
    padding: 30px; 
    object-fit: cover; 
    border-radius: 20px; 
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1); 
}

.picture-box2 {
    position: absolute;
    top: 184px; 
    right: 182px; 
    width: 175px; 
    height: 230px;
    z-index: 1; 
    padding: 30px; 
    object-fit: cover; 
    border-radius: 20px;
    background-color: #fdf7d1; 
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2); 
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
    
}

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
    top: 170px; 
    right: 170px; 
    width: 200px;
    height: 260px;
    background-color: #fff2aa;  
    border-radius: 25px;
    z-index: 0; 
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1); 
    padding: 30px; 
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
}

.background-box {
    position: absolute;
    top: 170px; 
    left: 90px; 
    width: 650px; 
    height: 260px;
    background-color: #fff2aa;
    border-radius: 25px; 
    z-index: 0; 
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1); 
    padding: 30px; 
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
}

.box {
    background-color: #fff2aa; 
    border-radius: 18px;
    padding: 0.1rem 1rem;  
    text-align: center;
    width: auto; 
    max-width: 220px; 
    box-shadow: 0 8px 7px rgba(0, 0, 0, 0.1); 
    font-size: 13px;
    margin-bottom: 23px; 
    margin-top: 80px;
    margin-left: 90px;
    z-index: 1;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
}

.box2 {
    background-color: #fdf7d1;
    border-radius: 18px;
    padding: 0.1rem 1rem;  
    text-align: center;
    width: auto; 
    max-width: 640px; 
    box-shadow: 0 8px 7px rgba(0, 0, 0, 0.2); 
    font-size: 13px;
    margin-bottom: 30px; 
    margin-top: 20px;
    margin-left: 110px;
    z-index: 1;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
}

h1 {
    font-weight: 600;
    font-size: 25px;
}

h2 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
    margin-left: 100px;
    text-align: left;
}

p {
    font-size: 16px;
    font-family: 'Italiana', serif;
  
}

.logo1 {
    margin-top: 0px;
    height: 50px;
    width: 70px;
    margin-left: -1000px;
}

h3 {
    font-size: 23px;
    font-weight: 100;
    margin-top: -38px;
    margin-bottom: 0px;
    margin-left: 190px;
    text-align: left;
    max-width: 90%;
    word-break: break-word;
    overflow-wrap: break-word;
}

.logo2 {
    margin-top: -50px; 
    margin-left: -2rem; 
    height: 50px;  
    width: 70px;   
    margin-bottom: 100px;
}

h4 {
    margin-top: -130px;
    height: 50px;
    width: 300px;
    margin-bottom: 100px;
    margin-left: 680px;
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
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    margin: 2.5rem auto;
    width: 150px;
    height: 190px;
    padding: 0;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
  }

  .picture-box,
  .picture-box2 {
    display: none; /* hide extra framing on small screens */
  }

  .background-box {
    display: none; /* or adjust to wrap text if preferred */
  }

  .box {
    margin: 1rem auto;
    max-width: 80%;
    font-size: 20px;
    padding: 0.5rem 1rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  .box2 {
    margin: 1rem auto;
    max-width: 90%;
    font-size: 16px;
    padding: 1rem;
    border-radius: 20px;
    background-color: #fdf7d1;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
    text-align: left;
  }

  .background-box {
    margin: 1rem auto;
    max-width: 100%;
    font-size: 16px;
    padding: 1rem;
    border-radius: 20px;
    background-color: #fdf7d1;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
    text-align: left;
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
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 1rem auto;
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
    word-break: break-word;  /* ensure long lines break */
    overflow-wrap: break-word;
    flex: 1;
}
 
 
}


</style>
