<script>
   
    import  Navigation  from '$lib/components/Navigation.svelte';
    
</script>

<header>
    <!-- Navigation directly in header -->
    <Navigation />
</header>

<style>
    header {
        /*Layout*/
        display: flex; 
        padding: clamp(0.5rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem); 
        position: fixed; 
        top: 0; 
        left: 0;
        right: 0;
        z-index: 1000; 
        margin: 0; 

        /*Styling*/
        background-color: rgb(93, 95, 164); 
        color: rgb(255, 255, 255);
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15), 0 8px 7px rgba(0, 0, 0, 0.2); 
        
        /*Animation*/
        transition: all 0.3s ease-in-out;
        
        /*Size*/
        width: 100%;
        box-sizing: border-box;
        min-height: clamp(60px, 12vw, 80px); 
        
        /*Border*/
        border: none; 

        /*Text*/
        font-family: 'Italiana', serif;

    }
   /* Ultra-wide screens */
   @media (min-width: 1400px) {
        header {
            padding: 1.25rem 3rem;
            min-height: 85px;
        }
    }

   /* Large screens */
   @media (min-width: 1200px) {
        header {
            padding: 1rem 2.5rem;
            min-height: 80px;
        }
    }

    /* Medium laptops and tablets */
    @media (max-width: 1024px) {
        header {
            padding: 0.875rem 2rem;
            min-height: 75px;
        }
    }

    /* Tablets */
    @media (max-width: 768px) {
        header {
            padding: 0.75rem 1.5rem;
            min-height: 70px;
        }
    }

    /* Small tablets and large phones */
    @media (max-width: 600px) {
        header {
            flex-direction: column;
            text-align: center;
            padding: 0.75rem 1rem;
            gap: 0.75rem;
            min-height: auto;
        }
    }

    /* Mobile phones */
    @media (max-width: 480px) {
        header {
            padding: 0.625rem 0.75rem;
            gap: 0.625rem;
        }
    }

    /* Very small screens */
    @media (max-width: 350px) {
        header {
            padding: 0.5rem;
            gap: 0.5rem;
        }
    }
</style>