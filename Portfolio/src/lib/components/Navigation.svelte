<script>
    let isDropdownOpen = false; // Dropdown menu state (open/closed)
    import { base } from '$app/paths';
    import { page } from '$app/stores'; // Import page store for route tracking
    
    // Function to toggle the dropdown menu
    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }
    
    // Function to close the dropdown when a link is clicked
    function closeDropdown() {
        isDropdownOpen = false;
    }
</script>

<!-- recieved help from warp when a page is active -->
   
<nav class="nav">
    <!-- Left side navigation with button links -->
    <div class="main-nav">
        <ul class="main-nav-links"> 
            <li><a href="{base}/" class:active={$page.url.pathname === base || $page.url.pathname === '/'}>Home</a></li>
            <li><a href="{base}/about" class:active={$page.url.pathname === `${base}/about`}>About Me</a></li>
            <li><a href="{base}/contact" class:active={$page.url.pathname === `${base}/contact`}>Cv</a></li>
        </ul>
    </div>

    <!-- Right side hamburger menu with dropdown -->
    <div class="dropdown-menu">
        <button class="hamburger-button" on:click={toggleDropdown} aria-label="Toggle menu" aria-expanded={isDropdownOpen}>
            ☰
        </button>
        
        <!-- Dropdown content with animation -->
        <div class="dropdown-content" class:active={isDropdownOpen}>
            <a href="{base}/animation" on:click={closeDropdown} class:active={$page.url.pathname === `${base}/animation`}>Animation</a>
            <a href="{base}/art" on:click={closeDropdown} class:active={$page.url.pathname === `${base}/art`}>Art</a>
            <a href="{base}/games" on:click={closeDropdown} class:active={$page.url.pathname === `${base}/games`}>Games</a>
        </div>
    </div>
</nav>

<style>
    /* Base Navigation Styling */
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0;
        position: relative;
        min-height: 55px; 
        max-width: 100%; 
        margin: 0 auto; 
    }
    
    /* Left side navigation styling */
    .main-nav {
        display: flex;
        align-items: center;
    }
    
    .main-nav-links {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: flex-start;
    }
    
    .main-nav-links li {
        margin-right: 40px;
    }
    
    .main-nav-links a {
        color: rgb(0, 0, 0); 
        text-decoration: none;
        font-size: 18px;
        font-weight: 600;
        padding: 8px 16px;
        border-radius: 16px;
        transition: all 0.3s ease;
        background-color: #aebdd7; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
        display: block;
    }
    
    .main-nav-links a:hover {
        background-color: #ffee8b; 
        color: rgb(0, 0, 0); 
        transform: scale(1.05); 
    }
    
    .main-nav-links a.active {
        font-weight: 600; 
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
        background-color: #ffee8b; 
    }
    .dropdown-menu {
        position: relative;
        display: flex;
        align-items: center;
        margin-left: auto; 
        margin-right: 0; 
        z-index: 20; 
    }
    
    .hamburger-button {
        background: #aebdd7; 
        border: none;
        cursor: pointer;
        padding: 8px; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40px; 
        height: 40px; 
        transition: all 0.3s ease;
        outline: none; 
        position: relative; 
        z-index: 30; 
        border-radius: 4px; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
        font-size: 18px;
        border-radius: 12px;
    }
    
    .hamburger-button:hover {
        background-color: #ffee8b; 
        transform: scale(1.05); 
    }
    
 
    /* Dropdown content styling */
    .dropdown-content {
        position: absolute;
        top: calc(100% + 10px); 
        right: 0;
        width: 180px;
        background-color: #ffee8b;
        border-radius: 16px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); 
        overflow: hidden;
        z-index: 25; 
        
        /* Animation properties */
        max-height: 0;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s ease-in-out;
        pointer-events: none; 
    }
    
    /* Dropdown content active state */
    .dropdown-content.active {
        max-height: 200px;
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto; 
    }
    
    /* Dropdown content links */
    .dropdown-content a {
        display: block;
        padding: 12px 16px;
        color: rgb(0, 0, 0);
        text-decoration: none;
        text-align: left;
        font-size: 16px;
        transition: background-color 0.2s ease;
    }
    
    .dropdown-content a:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    
    /* Add dividers between dropdown items */
    .dropdown-content a:not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    /* Style for hovering and active dropdown items */
    .dropdown-content a:hover, .dropdown-content a.active {
        background-color: rgba(255, 255, 255, 0.2);
    }
</style>