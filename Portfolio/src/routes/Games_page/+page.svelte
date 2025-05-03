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

    p {
        margin-left: 0.5rem;
        font-size: 16px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }

    a{
        margin-left: 0.5rem;
    }
        
    .mainWrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start; 
        align-items: center;
        min-height: 80vh;  
        gap: 10vh; 
        padding-top: 40px;  
        text-align: center;
        margin-top: 0;
    }
    
    .titleBox {
        background-color: #fff2aa;
        border-radius: 18px;
        padding: 0.5rem 2rem;  
        text-align: center;
        margin-top: 4rem;
        margin-bottom: 15rem;
        width: auto; 
        max-width: 300px; 
        box-shadow: 0 8px 7px rgba(0, 0, 0, 0.2); 
        font-size: 1rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
        border-style: dashed;
        border-width: 2.5px;
        border-color: white;
    }

    #gamesBoxes{
        display: grid;
        flex-direction: column;
        gap: 20rem;
        margin-top: -100px; 
    }

    #game1Box{
        margin-top: 20vh; 
        display: grid;
        flex-direction: column;
    }

    .text-box {
        /*color and text*/ 
        background-color: #fdf7d1;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        text-align: left;

        /*Border-style */ 
        border: 2.5px dashed white;
        border-radius: 25px;

        /*Layout, etc*/
        width: fit-content;
        height: fit-content;
        max-width: 50rem;
        padding: 0.5rem;
        margin: 1.4rem;
    }

    .background-box {
        max-width: 100vh;
        max-height: 60vh;
        background-color: #fff2aa;
        border-radius: 25px;
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: -250px;
        border-style: dashed;
        border-width: 2.5px;
        border-color: white;
}

    #game-1-image {
        width: 50vh;
        border-style: solid;
        border-color: rgb(58, 147, 76);
        border-radius: 10px;
        margin: 0.5rem;
        height: 15rem;
        width: 18.5rem;
    }

    #game-2-image {
        width: 50vh;
        border-style: solid;
        border-color: rgb(58, 147, 76);
        border-radius: 10px;
        margin: 0.5rem;
        height: 15rem;
        width: 18.5rem;
    }


    .title{
        font-weight: 600;
        font-family: 'Italiana', serif;
        font-size: 17px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
}



@media (max-width: 935px) {
    .background-box {
        width: 80vh;
        justify-content: center;
        align-items: center;
    }

    #game-1-image, #game-2-image {
        width: 40vh;
    }
}


@media (max-width: 752px) {

.mainWrapper {
    align-items: center; /* Ensures everything inside is centered */
}

#gamesBoxes {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    margin-top: 2rem;
    padding: 1rem;
}

.background-box {
    width: 100%;
    height: auto;
    max-height: 500px;
    max-width: 400px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
}

.text-box {
    width: 80%;
    max-width: 400px;
    margin: 1rem auto;
    margin-top: 20px;
}

#game-1-image,
#game-2-image {
    width: 80%;
    max-width: 350px;
    height: auto;
    margin-top: 1rem;
}

.titleBox {
    margin-bottom: 3rem;
}
}


</style>