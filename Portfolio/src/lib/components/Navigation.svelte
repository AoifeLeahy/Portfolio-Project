<script>
    let isDropdownOpen = false; // Dropdown menu state (open/closed)
    // @ts-ignore
    import { base } from '$app/paths';
    // @ts-ignore
    import { page } from '$app/stores'; 
    
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

    <div class="main-nav">
        <ul class="main-nav-links"> 
            <li><a href={base + '/'} class:active={$page.url.pathname === base || $page.url.pathname === '/'}>Home</a></li>
            <li><a href={base + '/About_me'} class:active={$page.url.pathname === base + '/About_me'}>About Me</a></li>
            <li><a href={base + '/Cv'} class:active={$page.url.pathname === base + '/Cv'}>Cv</a></li>
        </ul>
    </div>

    <div class="dropdown-menu">
        <button class="hamburger-button" on:click={toggleDropdown} aria-label="Toggle menu" aria-expanded={isDropdownOpen}>
            ☰
        </button>
        
        <div class="dropdown-content" class:active={isDropdownOpen}>
            <a href={base + '/Animation_page'} on:click={closeDropdown} class:active={$page.url.pathname === base + '/animation'}>Animation</a>
            <a href={base + '/Art_page'} on:click={closeDropdown} class:active={$page.url.pathname === base + '/Art_page'}>Art</a>
            <a href={base + '/Games_page'} on:click={closeDropdown} class:active={$page.url.pathname === base + '/Games_page'}>Games</a>
        </div>
    </div>
</nav>

<style>
    .nav {
        /*Layout*/
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        position: relative;
        margin: 0 auto;

        /*Size*/
        width: 100%;
        min-height: 55px; 
        width: 100%; 
    }
    
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
        margin-right: clamp(20px, 4vw, 40px);
    }
    
    .main-nav-links a {
        /*Text*/
        color: rgb(0, 0, 0); 
        text-decoration: none;
        font-size: clamp(14px, 2vw, 18px);
        font-weight: 600;
        white-space: nowrap;

        /*Layout*/
        padding: clamp(6px, 1.5vw, 10px) clamp(12px, 3vw, 18px);
        display: block;

        /*Border*/
        border-radius: 16px;

        /*Animation*/
        transition: all 0.3s ease;

        /*Styling*/
        background-color: #aebdd7; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
        
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
        /*Styling*/
        background: #aebdd7; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 

        /*Border*/
        border: none;
        border-radius: 12px;

        /*Layout*/
        padding: clamp(6px, 1.5vw, 8px); 
        z-index: 30;
        cursor: pointer;

        /*Size*/
        width: clamp(36px, 8vw, 44px); 
        height: clamp(36px, 8vw, 44px); 

        /*Animation*/
        transition: all 0.3s ease;
        
        /*Text*/
        font-size: clamp(16px, 3vw, 20px);
        
    }
    
    .hamburger-button:hover {
        background-color: #ffee8b; 
        transform: scale(1.05); 
    }
    
 
    /* Dropdown content styling */
    .dropdown-content {
        /*Layout*/
        position: absolute;
        top: calc(100% + 10px); 
        right: 0;
        overflow: hidden;
        z-index: 25;
        transform: translateY(-10px);

        /*Size*/
        width: clamp(160px, 30vw, 200px);
        max-height: 0;

        /*Styling*/
        background-color: #ffee8b;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); 

        /*Border*/
        border-radius: 16px;
        
        /*Animation*/
        transition: all 0.3s ease-in-out;
    }
    
    /* Dropdown content active state */
    .dropdown-content.active {
        max-height: 200px;
        opacity: 1;
        transform: translateY(0);
      
    }
    
    /* Dropdown content links */
    .dropdown-content a {
        /*Layout*/
        display: block;
        padding: clamp(10px, 2vw, 14px) clamp(12px, 3vw, 18px);

        /*Text*/
        color: rgb(0, 0, 0);
        text-decoration: none;
        text-align: center;
        font-size: clamp(14px, 2.5vw, 16px);
        font-weight: 600;
        white-space: nowrap;

        /*Animation*/
        transition: background-color 0.2s ease;
    }
    
    .dropdown-content a:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    
    /* Add dividers between dropdown items */
    .dropdown-content a:not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.779);
    }
    
    /* Style for hovering and active dropdown items */
    .dropdown-content a:hover, .dropdown-content a.active {
        background-color: rgba(255, 255, 255, 0.2);
    }

/* Large screens - enhance spacing */
@media (min-width: 1200px) {
    .main-nav-links li {
        margin-right: 50px;
    }
    
    .main-nav-links a {
        font-size: 19px;
        padding: 10px 20px;
    }
    
    .hamburger-button {
        width: 48px;
        height: 48px;
        font-size: 22px;
    }
    
    .dropdown-content {
        width: 220px;
    }
}

/* Medium tablets */
@media (max-width: 768px) {
    .nav {
        padding: 8px;
        min-height: 60px;
    }
    
    .main-nav-links {
        gap: 8px;
    }
    
    .main-nav-links li {
        margin-right: 15px;
    }
    
    .main-nav-links a {
        font-size: 16px;
        padding: 8px 12px;
    }
    
    .dropdown-content {
        width: 160px;
        top: calc(100% + 8px);
    }
}

/* Small tablets and large phones */
@media (max-width: 600px) {
    .nav {
        flex-direction: column;
        align-items: center;
        padding: 8px;
        gap: 12px;
    }
    
    .main-nav {
        order: 2;
        width: 100%;
        justify-content: center;
    }
    
    .dropdown-menu {
        order: 1;
        margin: 0;
    }
    
    .main-nav-links {
        justify-content: center;
        flex-wrap: wrap;
        gap: 8px;
    }
    
    .main-nav-links li {
        margin: 0;
    }
    
    .dropdown-content {
        top: calc(100% + 5px);
        right: 50%;
        transform: translateX(50%) translateY(-10px);
        width: 140px;
    }
    
    .dropdown-content.active {
        transform: translateX(50%) translateY(0);
    }
}

/* Mobile phones */
@media (max-width: 480px) {
    .nav {
        padding: 6px;
        min-height: 70px;
    }
    
    .main-nav-links a {
        font-size: 15px;
        padding: 6px 10px;
        border-radius: 12px;
    }
    
    .hamburger-button {
        width: 38px;
        height: 38px;
        font-size: 18px;
    }
    
    .dropdown-content {
        width: 130px;
        max-height: 180px;
    }
    
    .dropdown-content a {
        font-size: 14px;
        padding: 8px 12px;
    }
}

/* Very small screens */
@media (max-width: 350px) {
    .nav {
        gap: 8px;
        min-height: 65px;
    }
    
    .main-nav-links {
        gap: 4px;
    }
    
    .main-nav-links a {
        font-size: 13px;
        padding: 5px 8px;
        border-radius: 10px;
    }
    
    .hamburger-button {
        width: 34px;
        height: 34px;
        font-size: 16px;
    }
    
    .dropdown-content {
        width: 120px;
    }
    
    .dropdown-content a {
        font-size: 13px;
        padding: 6px 8px;
    }
}

    
</style>