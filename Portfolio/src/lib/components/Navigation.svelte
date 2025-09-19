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
        flex-wrap: nowrap;

        /*Size*/
        width: 100%;
        min-height: clamp(50px, 8vw, 65px); 
        max-width: 1400px;
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
        margin-right: clamp(12px, 3vw, 35px);
    }
    
    .main-nav-links li:last-child {
        margin-right: 0;
    }
    
    .main-nav-links a {
        /*Text*/
        color: rgb(0, 0, 0); 
        text-decoration: none;
        font-size: clamp(13px, 1.8vw, 17px);
        font-weight: 600;
        white-space: nowrap;
        line-height: 1.2;

        /*Layout*/
        padding: clamp(5px, 1.2vw, 9px) clamp(10px, 2.5vw, 16px);
        display: block;

        /*Border*/
        border-radius: clamp(12px, 2vw, 16px);

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
        border-radius: clamp(10px, 1.5vw, 12px);

        /*Layout*/
        padding: clamp(4px, 1vw, 6px); 
        z-index: 30;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        /*Size*/
        width: clamp(32px, 6vw, 42px); 
        height: clamp(32px, 6vw, 42px); 

        /*Animation*/
        transition: all 0.3s ease;
        
        /*Text*/
        font-size: clamp(14px, 2.5vw, 18px);
        
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

/* Ultra-wide screens (1600px+) */
@media (min-width: 1600px) {
    .nav {
        max-width: 1500px;
    }
    
    .main-nav-links li {
        margin-right: 45px;
    }
    
    .main-nav-links a {
        font-size: 18px;
        padding: 10px 18px;
    }
    
    .hamburger-button {
        width: 44px;
        height: 44px;
        font-size: 20px;
    }
    
    .dropdown-content {
        width: 200px;
    }
}

/* Large screens (1200px - 1599px) */
@media (min-width: 1200px) and (max-width: 1599px) {
    .main-nav-links li {
        margin-right: 38px;
    }
    
    .main-nav-links a {
        font-size: 17px;
        padding: 9px 16px;
    }
    
    .hamburger-button {
        width: 42px;
        height: 42px;
        font-size: 19px;
    }
    
    .dropdown-content {
        width: 190px;
    }
}

/* Medium laptops (900px - 1199px) */
@media (min-width: 900px) and (max-width: 1199px) {
    .main-nav-links li {
        margin-right: 28px;
    }
    
    .main-nav-links a {
        font-size: 16px;
        padding: 8px 14px;
    }
    
    .hamburger-button {
        width: 40px;
        height: 40px;
        font-size: 17px;
    }
    
    .dropdown-content {
        width: 170px;
    }
}

/* Tablets (768px - 899px) */
@media (min-width: 768px) and (max-width: 899px) {
    .nav {
        min-height: 55px;
    }
    
    .main-nav-links li {
        margin-right: 20px;
    }
    
    .main-nav-links a {
        font-size: 15px;
        padding: 7px 12px;
    }
    
    .hamburger-button {
        width: 38px;
        height: 38px;
        font-size: 16px;
    }
    
    .dropdown-content {
        width: 155px;
        top: calc(100% + 6px);
    }
}

/* Large mobile/Small tablets (600px - 767px) */
@media (min-width: 600px) and (max-width: 767px) {
    .nav {
        min-height: 50px;
    }
    
    .main-nav-links li {
        margin-right: 15px;
    }
    
    .main-nav-links a {
        font-size: 14px;
        padding: 6px 10px;
        border-radius: 12px;
    }
    
    .hamburger-button {
        width: 36px;
        height: 36px;
        font-size: 15px;
    }
    
    .dropdown-content {
        width: 145px;
        top: calc(100% + 5px);
    }
}

/* Mobile phones (480px - 599px) */
@media (min-width: 480px) and (max-width: 599px) {
    .nav {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        min-height: auto;
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
    
    .main-nav-links a {
        font-size: 14px;
        padding: 6px 10px;
        border-radius: 12px;
    }
    
    .hamburger-button {
        width: 36px;
        height: 36px;
        font-size: 16px;
    }
    
    .dropdown-content {
        top: calc(100% + 5px);
        right: 50%;
        transform: translateX(50%) translateY(-10px);
        width: 135px;
    }
    
    .dropdown-content.active {
        transform: translateX(50%) translateY(0);
    }
}

/* Small mobile (350px - 479px) */
@media (min-width: 350px) and (max-width: 479px) {
    .nav {
        flex-direction: column;
        gap: 8px;
        min-height: auto;
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
        gap: 6px;
    }
    
    .main-nav-links li {
        margin: 0;
    }
    
    .main-nav-links a {
        font-size: 13px;
        padding: 5px 8px;
        border-radius: 10px;
    }
    
    .hamburger-button {
        width: 34px;
        height: 34px;
        font-size: 15px;
    }
    
    .dropdown-content {
        width: 125px;
        right: 50%;
        transform: translateX(50%) translateY(-10px);
    }
    
    .dropdown-content.active {
        transform: translateX(50%) translateY(0);
    }
    
    .dropdown-content a {
        font-size: 13px;
        padding: 6px 8px;
    }
}

/* Very small screens (below 350px) */
@media (max-width: 349px) {
    .nav {
        flex-direction: column;
        gap: 6px;
        min-height: auto;
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
        gap: 4px;
    }
    
    .main-nav-links li {
        margin: 0;
    }
    
    .main-nav-links a {
        font-size: 12px;
        padding: 4px 7px;
        border-radius: 8px;
    }
    
    .hamburger-button {
        width: 32px;
        height: 32px;
        font-size: 14px;
    }
    
    .dropdown-content {
        width: 115px;
        right: 50%;
        transform: translateX(50%) translateY(-10px);
    }
    
    .dropdown-content.active {
        transform: translateX(50%) translateY(0);
    }
    
    .dropdown-content a {
        font-size: 12px;
        padding: 5px 6px;
    }
}

    
</style>