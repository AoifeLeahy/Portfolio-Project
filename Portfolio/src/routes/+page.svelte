<script> 
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Home Page Loaded");
    });
</script>

<div class="home-page">
    <div class="box-container">
        <div class="box1">
            <h1>Aoife Leahy</h1>
        </div>
        
        <div class="box2">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="/background.png" alt="Forest Image" />
        </div>
    </div>
</div>

<style>
    /* Container styling */
    .home-page {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        margin-top: 30px; /* Space for fixed header */
        padding: 2rem 0;
        width: 100%;
        height: 35rem;
    }
    
    .box-container {
        width: 85%;
        max-width: 1200px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 180px; /* Spacing between boxes */
        padding: 0 20px;
    }
   
    /* Box 1 - Name box */
    .box1 {
        background-color: #fff2aa;
        border-radius: 18px;
        padding: 1.5rem 2.5rem;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        transition: transform 0.35s ease, box-shadow 0.35s ease;
        width: auto;
        margin-left: 70px;
        box-shadow: 0 8px 7px rgba(0, 0, 0, 0.2); 
        border-style: dashed;
        border-width: 2.5px;
        border-color: white;
    }
    
    .box1:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    }
    
    /* Box 2 - Image box */
    .box2 {
        flex: 1;
        background-color: #fff2aa;
        border-radius: 18px;
        padding: 0;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 270px;
        min-width: 200px;
        transition: transform 0.35s ease, box-shadow 0.35s ease;
        box-shadow: 0 8px 7px rgba(0, 0, 0, 0.2); 
        border-style: dashed;
        border-width: 2.5px;
        border-color: white;
    }
    
    .box2:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    }
    
    /* Typography with custom fonts */
    h1 {
        color: #000;
        font-size: 2.7rem;
        margin: 0;
        padding: 0;
        font-weight: 400; 
        letter-spacing: 0.01em;
        font-family: 'Italiana', serif;
    }

    .box2 img {
        width: 80%;
        height: 80%;
        border-radius: 18px; /* Match the box's rounded corners */
    }
    
   
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .home-page {
            padding: 1rem 0;
            margin-top: 80px;
        }
        
        .box-container {
            flex-direction: column;
            width: 100%;
            gap: 40px;
        }
        
        .box1 {
            padding: 1rem 2rem;
            margin-bottom: 20px;
        }
        
        .box2 {
            width: 100%;
            padding: 0;
            min-height: 180px;
        }
        
        h1 {
            font-size: 2.5rem;
        }
        
       
    }
</style>
