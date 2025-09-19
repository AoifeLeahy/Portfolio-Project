<script> 
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    onMount(() => {
        console.log("About me Page Loaded");
    });
</script>

<div class="cv-container">

    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img src="{base}/picture.jpg" alt="Photo of Aoife" class="picture"/>
   
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
    <div class="contact-section">
        <h2>You can find me below:</h2> 
        
        <div class="contact-items-row">
            <!-- Gmail (not clickable) -->
            <div class="contact-item">
                <img src="{base}/gmail.png" alt="Gmail logo" class="contact-logo" />
                <span class="contact-text">aoifeleahy.kk@gmail.com</span>
            </div>

            <!-- LinkedIn (clickable) -->
            <a href="https://www.linkedin.com/in/aoife-leahy-507760354" class="contact-item clickable" target="_blank" rel="noopener noreferrer">
                <img src="{base}/linkedIn.webp" alt="LinkedIn logo" class="contact-logo" />
                <span class="contact-text">www.linkedin.com/in/aoife-leahy-507760354</span>
            </a>

            <!-- GitHub (clickable) -->
            <a href="https://github.com/AoifeLeahy" class="contact-item clickable" target="_blank" rel="noopener noreferrer">
                <img src="{base}/github.png" alt="Github logo" class="contact-logo" />
                <span class="contact-text">https://github.com/AoifeLeahy</span>
            </a>
        </div>
    </div>

</div>
<style>

.contact-item:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease;
}

.contact-item:focus {
    outline: none;
}

.picture {
    /*Layout*/
    position: absolute;
    top: clamp(120px, 12vw, 150px); 
    right: clamp(100px, 12vw, 170px);  
    z-index: 2; 
    padding: clamp(20px, 3vw, 30px); 
    object-fit: cover;

    /*Size*/
    width: clamp(150px, 15vw, 200px); 
    height: clamp(180px, 18vw, 210px);

    /*Border*/
    border-radius: 20px;
    
    /*Styling*/
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1); 
}

.picture-box2 {
    /*Layout*/
    position: absolute;
    top: clamp(134px, 13vw, 164px); 
    right: clamp(112px, 13vw, 182px); 
    z-index: 1; 
    padding: clamp(20px, 3vw, 30px); 
    object-fit: cover; 

    /*Size*/
    width: clamp(130px, 14vw, 175px); 
    height: clamp(155px, 16vw, 185px);

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
    margin-top: 5px;
    position: relative;

    /*Size*/
    min-height: 100vh; 
}

.picture-box {
    /*Layout*/
    position: absolute;
    top: clamp(120px, 12vw, 150px); 
    right: clamp(100px, 12vw, 170px); 
    z-index: 0; 
    padding: clamp(20px, 3vw, 30px); 

    /*Size*/
    width: clamp(150px, 35vw, 200px);
    height: clamp(180px, 18vw, 210px);

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
    top: clamp(120px, 12vw, 150px); 
    left: clamp(60px, 8vw, 90px); 
    z-index: 0; 
    padding: clamp(20px, 3vw, 30px); 

    /*Size*/
    width: clamp(500px, 60vw, 680px); 
    height: clamp(260px, 48vw, 380px);

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
    margin-bottom: clamp(15px, 2vw, 23px); 
    margin-top: clamp(60px, 8vw, 80px);
    margin-left: clamp(60px, 8vw, 90px);
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
    margin-bottom: clamp(20px, 3vw, 30px); 
    margin-top: clamp(15px, 2vw, 20px);
    margin-left: clamp(80px, 10vw, 110px);
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


/* Contact Section Styles */
.contact-section {
    /*Layout*/
    margin-top: 1rem;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-items-row {
    /*Layout*/
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.contact-item {
    /*Layout*/
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    text-decoration: none;
    color: inherit;
    max-width: 400px;
    
    /*Styling*/
    background-color: #fff2aa; 
    border-radius: 18px;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
    
    
    transition: all 0.2s ease;
}

.contact-item.clickable {
    cursor: pointer;
}

.contact-item.clickable:hover {
    background-color: #fdf7d1;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-logo {
    /*Size*/
    height: 40px;
    width: 40px;
    min-width: 40px;
    
    /*Styling*/
    object-fit: contain;
}

.contact-text {
    /*Text*/
    font-size: 18px;
    font-weight: 400;
    word-break: break-word;
    overflow-wrap: break-word;
    line-height: 1.4;
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
    height: 150px;

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
    text-align: center;
  }

  .contact-section {
    padding: 0 20px;
  }

  .contact-items-row {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .contact-item {
    /*Layout*/
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-direction: row;
    margin: 0 auto;
    padding: 0.4rem;

    /*Size*/
    max-width: 95%;
    min-width: 280px;
  }

  .contact-logo {
    height: 35px;
    width: 35px;
    min-width: 35px;
    flex-shrink: 0;
  }

  .contact-text {
    font-size: 16px;
  }

}
</style>
