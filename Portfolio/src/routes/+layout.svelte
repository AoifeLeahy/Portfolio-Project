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
        background-color: rgb(255, 255, 255);
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
        background-color: rgb(255, 255, 255);
        padding-top: clamp(60px, 12vw, 80px); /* Account for fixed header */
        position: relative;
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
