<script> 
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Cv Page Loaded");
    });
</script>

<div class="cv-container">
    <div class="cv-text-box">
        <h1>My Cv</h1>
    </div>
    <img src="/cv_1.png" alt="Cv page 1" class="cv_page1"/>
    <img src="/cv_2.png" alt="Cv page 2" class="cv_page2"/>
</div>

<style>

    .cv-container {
        /**Layout*/
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 40px;
        /**Size*/
        min-height: 100vh; 
    }

    .cv-text-box {
        /*Border**/
        border-radius: 18px;
        border-style: dashed;
        border-width: 2.5px;
        border-color: white;
        /*Styling*/
        box-shadow: 0 8px 7px rgba(0, 0, 0, 0.2); 
        background-color: #fff2aa;
        /**Layout*/
        padding: 0.5rem 2rem;  
        text-align: center;
        width: auto; 
        max-width: 300px;  
        margin-bottom: 23px; 
        margin-top: 80px;
        /*Font*/
        font-size: 13px;
    }

    .cv_page1 {
        /*Styling*/
        box-shadow: 0 12px 14px rgba(0, 0, 0, 0.2);
        /*Size*/
        width: 80%;  
        max-width: 600px; 
        /*Layout*/
        margin-bottom: 20px; /* Space between the first and second image */
    }

    .cv_page2 {
        /*Styling*/
        box-shadow: 0 12px 14px rgba(0, 0, 0, 0.2);
        /*Size*/
        width: 80%;  
        max-width: 600px; 
        /*Layout*/
        margin-bottom: 100px;
    }

   
</style>
