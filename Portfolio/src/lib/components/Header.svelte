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
        padding: clamp(0.4rem, 1.5vw, 1.2rem) clamp(0.8rem, 2.5vw, 2.5rem); 
        position: fixed; 
        top: 0; 
        left: 0;
        right: 0;
        z-index: 1000; 
        margin: 0; 
        align-items: center;
        justify-content: center;

        /*Styling*/
        background-color: rgb(93, 95, 164); 
        color: rgb(255, 255, 255);
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1); 
        
        /*Animation*/
        transition: all 0.3s ease-in-out;
        
        /*Size*/
        width: 100%;
        box-sizing: border-box;
        min-height: clamp(55px, 8vw, 75px); 
        max-height: clamp(75px, 10vw, 90px);
        
        /*Border*/
        border: none; 

        /*Text*/
        font-family: 'Italiana', serif;

    }
    /* Ultra-wide screens (1600px+) */
    @media (min-width: 1600px) {
        header {
            padding: 1.4rem clamp(3rem, 5vw, 5rem);
            min-height: 85px;
            max-height: 95px;
        }
    }

    /* Large screens (1200px - 1599px) */
    @media (min-width: 1200px) and (max-width: 1599px) {
        header {
            padding: 1.2rem clamp(2rem, 4vw, 3.5rem);
            min-height: 75px;
            max-height: 85px;
        }
    }

    /* Medium laptops (900px - 1199px) */
    @media (min-width: 900px) and (max-width: 1199px) {
        header {
            padding: 1rem clamp(1.5rem, 3vw, 2.5rem);
            min-height: 65px;
            max-height: 75px;
        }
    }

    /* Tablets (768px - 899px) */
    @media (min-width: 768px) and (max-width: 899px) {
        header {
            padding: 0.9rem clamp(1.2rem, 2.5vw, 2rem);
            min-height: 60px;
            max-height: 70px;
        }
    }

    /* Large mobile/Small tablets (600px - 767px) */
    @media (min-width: 600px) and (max-width: 767px) {
        header {
            padding: 0.8rem clamp(1rem, 2vw, 1.5rem);
            min-height: 65px;
            max-height: 75px;
            flex-direction: row;
        }
    }

    /* Mobile phones (480px - 599px) */
    @media (min-width: 480px) and (max-width: 599px) {
        header {
            flex-direction: column;
            padding: 0.7rem 1rem;
            gap: 0.6rem;
            min-height: auto;
            max-height: none;
        }
    }

    /* Small mobile (350px - 479px) */
    @media (min-width: 350px) and (max-width: 479px) {
        header {
            flex-direction: column;
            padding: 0.6rem 0.8rem;
            gap: 0.5rem;
            min-height: auto;
            max-height: none;
        }
    }

    /* Very small screens (below 350px) */
    @media (max-width: 349px) {
        header {
            flex-direction: column;
            padding: 0.5rem 0.6rem;
            gap: 0.4rem;
            min-height: auto;
            max-height: none;
        }
    }
</style>