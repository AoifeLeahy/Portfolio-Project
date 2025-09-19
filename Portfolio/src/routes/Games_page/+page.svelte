<script> 
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    onMount(() => {
        console.log("Games Page Loaded");
    });
</script>

<div class="mainWrapper">
    <div class="titleBox">
        <h1>Games</h1>
    </div>
    <div id="gamesBoxes">
        <div id="game1Box">
            <div class="background-box">
                <div class="text-box">
                    <p class="title">Crown's End</p>
                    <a href = "https://ui-programming-24-25.codeberg.page/Aoife_Leahy_C00296873-UI-Programming-Module-Project/">Live link</a><br>
                    <a href = "https://codeberg.org/UI-Programming-24-25/Aoife_Leahy_C00296873-UI-Programming-Module-Project">Link to codeberg repository</a>
                    <p>Crown's End is a game that I created during my second year module UI Programming. The goal was to capture the crown to save the village from the current King. The game was created in Javascript, HTML and Css.  </p>
                </div>
                <img src="{base}/game_1.png" alt="Game one" id="game-1-image"/>
            </div>
        </div>
    
        <div id="games2box">
            <div class="background-box">
                <div class="text-box">
                    <p class="title">Escape the Prison</p>
                    <a href = "https://github.com/KenPowerClassroom/programming-project-semester-2-AoifeLeahy">Github Repository</a><br>
                    <p>Escape the Prison is a game made in C++ for the first year module Introduction to Object Orientated Programming. To win this game, you are playing as the prisoner and must avoid all the guards to collect the key and escape.  </p>
                </div>
                <img src="{base}/game_2.png" alt="Game one" id="game-2-image" />
            </div>
        </div>
    </div>
</div>

<style>

    h1 {
    font-size: 32px;  
    font-weight: 600;  
    margin: 0;        
}

    p {
        margin: clamp(0.4rem, 1.5vw, 0.8rem) 0;
        font-size: clamp(13px, 2.2vw, 15px);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        line-height: 1.4;
    }

    a{
        margin: clamp(0.2rem, 0.8vw, 0.4rem) 0;
        font-size: clamp(13px, 2.2vw, 15px);
        color: rgb(93, 95, 164);
        text-decoration: underline;
        font-weight: 500;
    }
    
    a:hover {
        color: rgb(73, 75, 144);
        text-decoration: none;
    }
        
    .mainWrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start; 
        align-items: center;
        min-height: 80vh;  
        gap: clamp(2vh, 3vw, 4vh); 
        padding-top: clamp(15px, 3vw, 30px);  
        text-align: center;
        margin-top: 0;
    }
    
    .titleBox {
        background-color: #fff2aa;
        border-radius: clamp(12px, 2vw, 18px);
        padding: clamp(0.4rem, 1.5vw, 0.75rem) clamp(1.2rem, 3vw, 2rem);  
        text-align: center;
        margin: clamp(0.75rem, 2vw, 1.25rem) auto clamp(1rem, 2.5vw, 2rem);
        width: auto; 
        max-width: clamp(200px, 40vw, 320px);
        min-width: 150px;
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); 
        font-size: clamp(0.8rem, 1.8vw, 1rem);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
        border-style: dashed;
        border-width: 2.5px;
        border-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: fit-content;
    }

    #gamesBoxes{
        display: flex;
        flex-direction: column;
        gap: clamp(1rem, 1vw, 4rem);
        width: 100%;
        max-width: min(900px, 90vw);
        margin: 0 auto;
        padding: 0 clamp(0.75rem, 2.5vw, 1.5rem);
    }

    #game1Box, #games2box{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .text-box {
        /*color and text*/ 
        background-color: #fdf7d1;
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
        text-align: left;

        /*Border-style */ 
        border: 2px dashed white;
        border-radius: clamp(12px, 2.5vw, 18px);

        /*Layout, etc*/
        flex: 1;
        min-width: 0; /* Allows flex item to shrink below content size */
        height: fit-content;
        max-width: none;
        padding: clamp(0.75rem, 1.5vw, 1.25rem);
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .background-box {
        width: 100%;
        max-width: min(900px, 85vw);
        min-height: fit-content;
        background-color: #fff2aa;
        border-radius: clamp(12px, 2.5vw, 18px);
        box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
        margin: clamp(0.75rem, 2.5vw, 1.5rem) auto;
        padding: clamp(0.75rem, 1.5vw, 1.5rem);
        border-style: dashed;
        border-width: 2px;
        border-color: white;
        box-sizing: border-box;
        gap: clamp(0.75rem, 2.5vw, 1.5rem);
    }

    #game-1-image {
        flex: 0 0 auto;
        max-width: clamp(200px, 30vw, 320px);
        width: 100%;
        height: auto;
        max-height: clamp(140px, 18vw, 200px);
        border-style: solid;
        border-color: rgb(58, 147, 76);
        border-radius: clamp(6px, 1.5vw, 10px);
        border-width: clamp(1.5px, 0.4vw, 2.5px);
        margin: 0;
        object-fit: cover;
        align-self: flex-start;
    }

    #game-2-image {
        flex: 0 0 auto;
        max-width: clamp(200px, 30vw, 320px);
        width: 100%;
        height: auto;
        max-height: clamp(140px, 18vw, 200px);
        border-style: solid;
        border-color: rgb(58, 147, 76);
        border-radius: clamp(6px, 1.5vw, 10px);
        border-width: clamp(1.5px, 0.4vw, 2.5px);
        margin: 0;
        object-fit: cover;
        align-self: flex-start;
    }


    .title{
        font-weight: 600;
        font-family: 'Italiana', serif;
        font-size: clamp(16px, 2.8vw, 20px);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
        margin: 0 0 clamp(0.4rem, 1.5vw, 0.8rem) 0;
    }



/* Large tablets and small laptops */
@media (max-width: 1024px) {
    .background-box {
        max-width: 90vw;
        gap: clamp(0.75rem, 1.8vw, 1.25rem);
    }
    
    #game-1-image, #game-2-image {
        max-width: clamp(180px, 28vw, 260px);
    }
}

/* Tablets */
@media (max-width: 768px) {
    .background-box {
        flex-direction: column;
        align-items: center;
        max-width: 85vw;
        padding: clamp(1.25rem, 3.5vw, 1.75rem);
        gap: clamp(0.75rem, 2.5vw, 1.25rem);
    }
    
    .text-box {
        width: 100%;
        max-width: none;
        margin: 0;
    }
    
    #game-1-image, #game-2-image {
        max-width: clamp(200px, 55vw, 320px);
        width: 100%;
        align-self: center;
    }
    
    #gamesBoxes {
        gap: clamp(1.5rem, 4vw, 3rem);
        padding: 0 clamp(0.4rem, 1.8vw, 0.8rem);
    }
}

/* Mobile phones */
@media (max-width: 480px) {
    .mainWrapper {
        padding-top: 16px;
        gap: clamp(1.5rem, 4vw, 2.5rem);
    }
    
    .background-box {
        max-width: 92vw;
        padding: clamp(0.875rem, 2.5vw, 1.25rem);
    }
    
    .text-box {
        padding: clamp(0.625rem, 2.5vw, 0.875rem);
        border-radius: clamp(10px, 2.5vw, 15px);
    }
    
    #game-1-image, #game-2-image {
        max-width: 100%;
        max-height: clamp(130px, 32vw, 180px);
        border-radius: clamp(5px, 1.8vw, 8px);
    }
    
    .titleBox {
        margin: clamp(0.25rem, 1.5vw, 0.75rem) auto clamp(0.25rem, 1vw, 0.5rem);
    }
}

/* Very small screens */
@media (max-width: 350px) {
    .titleBox {
        padding: 0.4rem 1rem;
        font-size: 0.75rem;
        max-width: 90vw;
    }
    
    .background-box {
        padding: clamp(0.75rem, 3vw, 1rem);
        gap: clamp(0.75rem, 2vw, 1rem);
        border-width: 2px;
    }
    
    .text-box {
        padding: clamp(0.5rem, 2vw, 0.75rem);
        border-width: 2px;
    }
    
    #game-1-image, #game-2-image {
        max-height: clamp(120px, 30vw, 160px);
        border-width: 2px;
    }
}


</style>