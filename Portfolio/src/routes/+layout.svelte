<script>
    import Header from '$lib/components/Header.svelte';
    import '$lib/styles/responsive-utils.css';
</script>
<svelte:head>
    <!-- Google Fonts Import -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" >
    <link href="https://fonts.googleapis.com/css2?family=Italiana&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<Header />

<!-- Page Content-->
<main>
    <slot />
</main>

<style>
    :global(html, body) {
        margin: 0;
        padding: 0;
        height: 100%;
        box-sizing: border-box;
        height: 100%;
        background-color: rgb(233, 243, 255);
        font-size: clamp(14px, 2.5vw, 18px);
        line-height: 1.6;
    }
    
    :global(*, *::before, *::after) {
        box-sizing: border-box;
    }
    
    :global(h1, h2, h3, h4, h5, h6) {
        font-family: 'Italiana', serif;
        font-weight: 400;
        line-height: 1.2;
        margin: 0;
    }
    
    :global(h1) {
        font-size: clamp(1.8rem, 5vw, 3rem);
    }
    
    :global(h2) {
        font-size: clamp(1.5rem, 4vw, 2.5rem);
    }
    
    :global(h3) {
        font-size: clamp(1.3rem, 3.5vw, 2rem);
    }
    
    :global(h4) {
        font-size: clamp(1.1rem, 3vw, 1.5rem);
    }
    
    :global(h5) {
        font-size: clamp(1rem, 2.5vw, 1.25rem);
    }
    
    :global(h6) {
        font-size: clamp(0.9rem, 2vw, 1.1rem);
    }
    
    main {
        min-height: 100vh;
        background-color: rgb(233, 243, 255);
        padding-top: clamp(55px, 8vw, 75px); /* Account for fixed header */
        position: relative;
        box-sizing: border-box;
    }
    
    /* Responsive main content padding to match header heights */
    @media (min-width: 1600px) {
        main {
            padding-top: 95px;
        }
    }
    
    @media (min-width: 1200px) and (max-width: 1599px) {
        main {
            padding-top: 85px;
        }
    }
    
    @media (min-width: 900px) and (max-width: 1199px) {
        main {
            padding-top: 75px;
        }
    }
    
    @media (min-width: 768px) and (max-width: 899px) {
        main {
            padding-top: 70px;
        }
    }
    
    @media (min-width: 600px) and (max-width: 767px) {
        main {
            padding-top: 75px;
        }
    }
    
    @media (min-width: 480px) and (max-width: 599px) {
        main {
            padding-top: clamp(90px, 15vw, 120px); /* Taller for column layout */
        }
    }
    
    @media (min-width: 350px) and (max-width: 479px) {
        main {
            padding-top: clamp(85px, 14vw, 110px);
        }
    }
    
    @media (max-width: 349px) {
        main {
            padding-top: clamp(80px, 13vw, 100px);
        }
    }
    
    /* Add smooth scrolling for better UX */
    :global(html) {
        scroll-behavior: smooth;
    }
    
    /* Improve focus accessibility */
    :global(*:focus) {
        outline: 2px solid rgb(93, 95, 164);
        outline-offset: 2px;
    }
    
    /* Container utility class for consistent max-widths */
    :global(.container) {
        max-width: min(1200px, 90vw);
        margin: 0 auto;
        padding: 0 clamp(1rem, 3vw, 2rem);
    }
</style>
