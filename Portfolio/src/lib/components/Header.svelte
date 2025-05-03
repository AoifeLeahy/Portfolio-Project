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
        padding: 0.5rem 1rem; 
        position: fixed; 
        top: 0; 
        left: 0;
        right: 0;
        z-index: 1000; 
        margin: 0; 

        /*Styling*/
        background-color: rgb(93, 95, 164); 
        color: rgb(255, 255, 255);
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15); 
        box-shadow: 0 8px 7px rgba(0, 0, 0, 0.2); 
        
        /*Animation*/
        transition: all 0.3s ease-in-out;
        
        /*Size*/
        width: 100%;
        box-sizing: border-box;
        min-height: 70px; 
        
        /*Border*/
        border: none; 

        /*Text*/
        font-family: 'Italiana', serif;

    }
   /* Larger screens */
   @media (min-width: 1200px) {
        header {
            padding: 1rem 2rem;
        }
        
    }

    /* Medium screens */
    @media (max-width: 992px) {
        header {
            padding: 1rem 1.5rem;
        }
    }

    /* Mobile: Center logo and stack items */
    @media (max-width: 768px) {
        header {
            flex-direction: column;
            text-align: center;
            padding: 1rem 0.75rem;
            gap: 1rem;
        }

    }

    /* Extra small screens */
    @media (max-width: 480px) {
        header {
            padding: 0.75rem 0.5rem;
        }
        
    }
</style>