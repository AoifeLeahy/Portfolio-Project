<script> 
    import { onMount } from 'svelte';

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
            <img src="/art_1.png" alt="First artwork" class="art1"/>
        </div>
        <div class="description-box">
            <p>26-11-2024</p>
            <p class="description">This assignment consisted of designing and creating are own character. I then had to draw the character facing in different directions.</p>
        </div> 
    </div>

    <div class="art-and-description">
        <div class="art-background-box">
            <img src="/art_2.png" alt="Second artwork" class="art2"/>
        </div>
        <div class="description-box2">
            <p>25-09-2024</p>
            <p class="description">I had to draw rough sketches of a character created by me in different poses. I had to pick the best pose and then design and do a final piece.</p>
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
    padding-top: 40px;  
    margin-top: 0; 

    /*Size*/
    min-height: 80vh;  
    
    /*Text*/
    text-align: center;
   
}

.art-text-box {
    /*Styling*/
    background-color: #fff2aa;
    box-shadow: 0 8px 7px rgba(0, 0, 0, 0.2);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 

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
    
    /*Font*/
    font-size: 13px;

    /*Size*/
    width: auto; 
    max-width: 300px; 
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

    /*Styling*/
    background-color: #fff2aa;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);

    /*Border*/
    border-radius: 25px; 
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
    
    /*Layout*/
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -250px;
}

.description-box, .description-box2 {
    /*Size*/
    width: 500px;
    height: 113px;

    /*Styling*/
    background-color: #fdf7d1;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

    /*Border*/
    border-radius: 25px;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
    
    /*Layout*/
    margin-bottom: 100px;
    display: flex;
    justify-content: left;
    align-items: left;
    padding-top: 0px; 
    
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
    margin-top: 40px;
    margin-left: -110px;
    
    /*Size*/
    width: 95%;

    /*Styling*/
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
}



@media (max-width: 1268px) {
    
   .description {
    margin-top: 60px;
   }
    .art-text-box {
        margin-top: 40rem;
    }

    .container {
        margin-top: -550px;
        margin-bottom: 100px;         
    }

    .art-and-description {
        /*Size*/
        width: 100%;
        height: auto;

        /*Layout*/
        padding: 15px;
    }

    .art-background-box,
    .description-box {
        /*Size*/
        width: 100%;
        height: 70%;
        max-width: 500px;
        
        /*Layout*/
        margin: 0 auto;   
    }

    .description-box2{
        /*Size*/
        width: 100%;
        height: 12px;
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

    

    @media (max-width: 522px) {
    .art-box-container {
        flex-direction: column;
        align-items: center;
    }

    .art-background-box,
    .description-box {
        width: 90vw;           
        height: 300px;          
        max-width: none;
    }

    .description-box {
        height: 120px; 
        height: auto;         
    }

    .art1,
    .art2 {
        height: 85%;
        height: auto;
        width: 85%;
        object-fit: cover;
    }

    .description {
        margin-left: -6rem;       
        width: 90%;
    }

    p {
        font-size: 16px;
        padding: 0 10px;
    }
}

    

   
}

</style>