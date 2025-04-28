<script>
    //import Navigation.svelte from lib folder
    import Navigation from '$lib/components/Navigation.svelte';
    
</script>

<header>
    <!-- Navigation directly in header -->
    <Navigation />
</header>

<style>
    header {
        display: flex; /* Use flex for layout */
        background-color: rgb(93, 95, 164); 
        color: rgb(255, 255, 255);
        padding: 0.5rem 1rem; /* Slightly reduced padding */
        transition: all 0.3s ease-in-out;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15); /* Shadow for depth */
        position: fixed; /* Fixed position at top */
        top: 0; /* Start exactly at the top */
        left: 0;
        right: 0;
        z-index: 1000; /* Very high z-index to ensure it stays on top */
        width: 100%;
        box-sizing: border-box;
        min-height: 70px; 
        align-items: center;
        margin: 0; 
        border: none; 
        font-family: 'Italiana', serif;
        box-shadow: 0 8px 7px rgba(0, 0, 0, 0.2); 

    }
    @media (max-width: 768px) {
        header {
            padding: 0.4rem; /* Consistent padding all around */
            position: fixed; /* Fixed position on mobile for better UX */
            top: 0;
            left: 0;
            right: 0;
        }
    }
</style>