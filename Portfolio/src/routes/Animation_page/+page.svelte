<script> 
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Animation Page Loaded");
    });
</script>

<div class="cv-container">
    <div class="box">
        <h1>Animation</h1>
    </div>
</div>

<div class="box-container">
    <div class="background-box"></div>
    <div class="background-box"></div>
</div>


<style>

.cv-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align items to the top */
    align-items: center;
    min-height: 80vh;  /* Reduced from 100vh */
    padding-top: 40px;  /* Add some space from top */
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
    }

.box-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 0px;
}

.background-box {
    width: 500px;
    height: 280px;
    background-color: #fff2aa;
    border-radius: 25px;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
    margin-top: -250px;
    margin-bottom: 100px;
}


</style>