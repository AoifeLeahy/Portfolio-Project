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

<div class="top-box-wrapper">
    <div class="box-background"></div>
    <div class="top-box">
        <p class="title">Crown's End</p> 
        <p>Crown's End is a game that I created during my second year module UI Programming. The goal was to capture the crown to save the village from the current King. The game was created in Javascript, HTML and Css.  </p>
    </div> 
    <a href = "https://ui-programming-24-25.codeberg.page/Aoife_Leahy_C00296873-UI-Programming-Module-Project/">Public link</a><br>
    <a href = "https://codeberg.org/UI-Programming-24-25/Aoife_Leahy_C00296873-UI-Programming-Module-Project">Link to codeberg repository</a>
   
</div>
 <img src="/game_1.png" alt="Game one" class="game_1"/>


 <div class="top-box-wrapper2">
    <div class="top-box-background2"></div>
    <div class="top-box2">
        <p class="title2">Escape the Prison</p> 
        <p class="p2">Escape the Prison is a game made in C++ for the first year module Introduction to Object Orientated Programming. To win this game, you are playing as the prisoner and must avoid all the guards to collect the key and escape.  </p>
    </div> 
    <a href = "https://github.com/KenPowerClassroom/programming-project-semester-2-AoifeLeahy">Github Repository</a><br>
   
   
</div>
 <img src="/game_1.png" alt="Game one" class="game_1"/>
 <img src="/game_2.png" alt="Game two" class="game_2"/>

<style>

.top-box-wrapper {
    position: relative;
    width: 420px;
    height: 133px;
    margin-top: -220px;
    margin-bottom: 100px;
    margin-left: 390px; 
}

.top-box-wrapper2 {
    position: relative;
    width: 420px;
    height: 133px;
    margin-top: -220px;
    margin-bottom: 250px;
    margin-left: 390px; 
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
    margin: -220px auto 100px auto;  /* The background box stays in place */
    margin-top: -200px;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -160px;
}

.top-box2 {
    width: 420px;
    height: 175px;
    background-color: #fdf7d1;
    border-radius: 25px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    margin: -220px auto 100px auto;  /* The background box stays in place */
    margin-top: -200px;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -160px;
}

.box-background {
    width: 850px;
    height: 210px;
    background-color: #fff2aa;
    border-radius: 25px;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    margin-left: -175px;
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
    margin-left: -175px;
    margin-top: 350px;
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
}

.title {
    margin-left: 20px;
    margin-top: -120px;
    font-weight: 600;
    font-family: 'Italiana', serif;
    font-size: 17px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
    width: 500px;
}

.title2 {
    margin-left: 20px;
    margin-top: -100px;
    font-weight: 600;
    font-family: 'Italiana', serif;
    font-size: 17px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
    width: 500px;
}

a {
    margin-top: -225px; 
    margin-left: -140px;
    display: block; 
    margin-bottom: 170px;
    font-family: 'Italiana', serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
    font-weight: 600;
}

.game_1 {
    width: 320px;
    height: 170px;
    position: absolute;  
    left: 700px;  
    top: 247px;  
    z-index: 100; 
    border-style: solid;
    border-color: rgb(58, 147, 76);
    border-radius: 10px;
}

.game_2 {
    width: 320px;
    height: 170px;
    position: absolute;  
    left: 700px;  
    top: 517px;  
    z-index: 100; 
    border-style: solid;
    border-color: rgb(19, 20, 20);
    border-radius: 10px;
}

p {
    margin-top: 80px;
    margin-left: -150px;
    font-size: 16px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

</style>