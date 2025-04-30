<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
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

<Footer />
<style>
    :global(html, body) {
        margin: 0;
        padding: 0;
        height: 100%;
        box-sizing: border-box;
        height: 100%;
    }
    
    :global(h1, h2, h3, h4, h5, h6) {
        font-family: 'Italiana', serif;
        font-weight: 400;
    }
    
    main {
        min-height: 100vh;
        background-color: rgb(244, 250, 255);
    }
</style>
