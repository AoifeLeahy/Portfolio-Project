<script> 
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About me Page Loaded");
    });
</script>

<div class="cv-container">
    <div class="box">
        <h1>My Cv</h1>
    </div>
    <img src="/cv_1.png" alt="Cv page 1" class="cv_page1"/>
    <img src="/cv_2.png" alt="Cv page 2" class="cv_page2"/>
</div>

<style>

    .cv-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh; 
        text-align: center;
        margin-top: 40px;
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
        margin-bottom: 23px; 
        margin-top: 80px;
    }

    .cv_page1 {
        box-shadow: 0 12px 14px rgba(0, 0, 0, 0.2);
        width: 80%;  
        max-width: 600px; 
        margin-bottom: 20px; /* Space between the first and second image */
    }

    .cv_page2 {
        box-shadow: 0 12px 14px rgba(0, 0, 0, 0.2);
        width: 80%;  
        max-width: 600px; 
        margin-bottom: 100px;
    }
</style>
