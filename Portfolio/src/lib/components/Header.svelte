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
        display: flex; /* Change to flex for better layout control */
        background-color: rgb(93, 95, 164);
        color: rgb(255, 255, 255);
        padding: 0.7rem 1rem; /* Increased padding for better spacing */
        transition: all 0.3s ease-in-out;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
        position: relative;
        z-index: 10; /* Simplified z-index */
        width: 100%;
        box-sizing: border-box; /* Ensure padding is included in width calculation */
        min-height: 70px; /* Increased minimum height for better visibility */
        align-items: center; /* Center items vertically */
    }
    /* Remove nav-container since we're directly using Navigation in header */
    
    /* Responsive adjustments for mobile */
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
