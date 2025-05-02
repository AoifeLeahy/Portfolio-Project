<script> 
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Games Page Loaded");
    });
</script>

<div class="cv-container">
    <div class="box">
        <h1>Games</h1>
    </div>
</div>

<div class="wrapper">
    <div class="top-box-wrapper">
        <div class="box-background"></div>
        <div class="top-box">
            <p class="title">Crown's End</p> 
            <p>Crown's End is a game that I created during my second year module UI Programming. The goal was to capture the crown to save the village from the current King. The game was created in Javascript, HTML and Css.  </p>
        </div> 
        <a href = "https://ui-programming-24-25.codeberg.page/Aoife_Leahy_C00296873-UI-Programming-Module-Project/" class="link1">Public link</a><br>
        <a href = "https://codeberg.org/UI-Programming-24-25/Aoife_Leahy_C00296873-UI-Programming-Module-Project" class="link2">Link to codeberg repository</a>
        <img src="/game_1.png" alt="Game one" class="game_1"/>
    </div>
 

 <div class="top-box-wrapper2">
    <div class="top-box-background2"></div>
    <div class="top-box2">
        <p class="title2">Escape the Prison</p> 
        <p class="p2">Escape the Prison is a game made in C++ for the first year module Introduction to Object Orientated Programming. To win this game, you are playing as the prisoner and must avoid all the guards to collect the key and escape.  </p>
    </div> 
    <a href = "https://github.com/KenPowerClassroom/programming-project-semester-2-AoifeLeahy" class="link3">Github Repository</a><br>
   <img src="/game_2.png" alt="Game two" class="game_2"/>
    </div>
</div> 
 

<style>

.top-box-wrapper, .top-box-wrapper2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}



.cv-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    min-height: 80vh;  
    padding-top: 40px;  
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
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
}

.top-box {
    width: 420px;
    height: 175px;
    background-color: #fdf7d1;
    border-radius: 25px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    margin-top: -215px;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
    margin-left: -380px;
    
    
}

.top-box2 {
    width: 420px;
    height: 175px;
    background-color: #fdf7d1;
    border-radius: 25px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    margin-top: -215px;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
    margin-left: -380px;
}

.box-background {
    width: 150vh;
    height: 210px;
    background-color: #fff2aa;
    border-radius: 25px;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    margin-top: -250px;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
}

.top-box-background2 {
    width: 850px;
    height: 210px;
    background-color: #fff2aa;
    border-radius: 25px;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    margin-top: -5px;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
}

.title, .title2 {
    margin-left: 20px;
    margin-top: 10px;
    font-weight: 600;
    font-family: 'Italiana', serif;
    font-size: 17px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
    width: 500px;
}

.link1 {
    margin-top: -160px; 
    margin-left: -685px;
    display: block; 
    margin-bottom: 150px;
    font-family: 'Italiana', serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
    font-weight: 600;
}

.link2, .link3 {
    margin-top: -190px; 
    margin-left: -560px;
    display: block; 
    margin-bottom: 150px;
    font-family: 'Italiana', serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
    font-weight: 600;
}

.link3 {
    margin-top: -160px; 
    margin-left: -633px;
    display: block; 
    margin-bottom: 150px;
    font-family: 'Italiana', serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
    font-weight: 600;
}



.game_1 {
    width: 320px;
    height: 170px;
    margin-left: 450px;  
    margin-top: -245px;  
    z-index: 100; 
    border-style: solid;
    border-color: rgb(58, 147, 76);
    border-radius: 10px;
}

.game_2 {
    width: 320px;
    height: 170px;
    position: absolute;  
    margin-left: 450px;  
    margin-top: 15px;  
    z-index: 100; 
    border-style: solid;
    border-color: rgb(19, 20, 20);
    border-radius: 10px;
}

p {
    margin-top: 50px;
    margin-left: 20px;
    font-size: 16px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1268px) {
    .wrapper {
        margin-top: -300px;
        margin-bottom: 100px;
        align-items: center;
        flex-direction: column;
    }

    .top-box-wrapper, .top-box-wrapper2 {
        max-width: 30%;
        align-items: center;
        height: auto;
        padding: 15px;
    }
}

@media (max-width: 870px) {
    .box-background {
        height: 400px;
        max-width: 500px;
        width: 100%;
    }

    .game_1 {
        margin-top: -440px;
        margin-left: 10px;
        max-width: 400px;
        width: 80%;
    }

    .game_2 {
        margin-top: 170px;
        margin-left: 0px;
        max-width: 400px;
        width: 80%;
    }

    .top-box, .top-box2 {
        margin-top: -215px ;
        margin-left: 10px;
        max-width: 400px;
        width: 80%;
    }

    .link1, .link2  {
        margin-left: 35px;
        max-width: 400px;
        width: 70%;
    }

    .link3 {
        margin-left: -240px;
    }


    .top-box-background2 {
        height: 400px;
        max-width: 500px;
        width: 100%;
        margin-top: 150px;
    }



@media (max-width: 522px) {
      

      

    }
}

</style>