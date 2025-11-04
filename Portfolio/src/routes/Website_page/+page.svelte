<script> 
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    let currentSlide = 0;

    const slides = [
        'website_home.png',
        'website_login.png',
        'website_learning.png',
        'website_options.png',
        'website_quiz.png'
    ];

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }

   
</script>

<div class="mainWrapper">
    <div class="titleBox">
        <h1>Website</h1>
    </div>

    <!-- Main Section with Slideshow and Description -->
    <div class="content-section">
        <div class="content-container">
            <!-- Slideshow (Left Side) -->
            <div class="slideshow-box" 
                role="region"
                aria-label="Image slideshow">
                <div class="slides-wrapper">
                    {#each slides as slide, index}
                        <div class="slide" class:active={currentSlide === index}>
                            <img src="{base}/{slide}" alt="Website screenshot {index + 1}" />
                        </div>
                    {/each}
                </div>

                <!-- Navigation Arrows -->
                <button class="slide-arrow prev" on:click={prevSlide} aria-label="Previous slide">
                    ‹
                </button>
                <button class="slide-arrow next" on:click={nextSlide} aria-label="Next slide">
                    ›
                </button>

                <!-- Dots Navigation -->
                <div class="dots-container">
                    {#each slides as _, index}
                        <button 
                            class="dot" 
                            class:active={currentSlide === index}
                            aria-label="Go to slide {index + 1}"
                        ></button>
                    {/each}
                </div>
            </div>

            <!-- Description (Right Side) -->
            <div class="description-box">
                <div class="text-box">
                    <p class="title">Educational Website Project</p>
                    <p>This website was created as part of a group project during the last academic year. It serves as an educational platform with interactive quizzes and informative content.</p>
                    <p class="contributions-title">My Contributions:</p>
                    <ul>
                        <li>Created and coded the search bar functionality</li>
                        <li>Designed and styled the navigation bar</li>
                        <li>Researched topics and implemented them into the website</li>
                        <li>Developed the page layout and structure</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<style>

h1 {
    font-size: 32px;  
    font-weight: 600;  
    margin: 0;        
}



p {
    margin: clamp(0.4rem, 1.5vw, 0.8rem) 0;
    font-size: clamp(13px, 2.2vw, 15px);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    line-height: 1.4;
}

ul {
    margin: clamp(0.4rem, 1.5vw, 0.8rem) 0;
    padding-left: clamp(1rem, 2vw, 1.5rem);
    font-size: clamp(13px, 2.2vw, 15px);
    line-height: 1.5;
}

ul li {
    margin: clamp(0.2rem, 0.8vw, 0.4rem) 0;
}

.mainWrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    min-height: 80vh;  
    gap: clamp(2vh, 3vw, 4vh); 
    padding-top: clamp(15px, 3vw, 30px);  
    text-align: center;
    margin-top: 0;
    padding-bottom: clamp(2rem, 4vw, 4rem);
}

.titleBox {
    background-color: #fff2aa;
    border-radius: clamp(12px, 2vw, 18px);
    padding: clamp(0.4rem, 1.5vw, 0.75rem) clamp(1.2rem, 3vw, 2rem);  
    text-align: center;
    margin: clamp(0.75rem, 2vw, 1.25rem) auto clamp(1rem, 2.5vw, 2rem);
    width: auto; 
    max-width: clamp(200px, 40vw, 320px);
    min-width: 150px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); 
    font-size: clamp(0.8rem, 1.8vw, 1rem);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
    border-style: dashed;
    border-width: 2.5px;
    border-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: fit-content;
}


.text-box {
    background-color: #fdf7d1;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
    text-align: left;
    border: 2px dashed white;
    border-radius: clamp(12px, 2.5vw, 18px);
    padding: clamp(0.75rem, 1.5vw, 1.25rem);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}



.title{
    font-weight: 600;
    font-family: 'Italiana', serif;
    font-size: clamp(16px, 2.8vw, 20px);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
    margin: 0 0 clamp(0.4rem, 1.5vw, 0.8rem) 0;
    text-decoration: underline;
}

.contributions-title {
    font-weight: 600;
    margin-top: clamp(0.5rem, 1vw, 0.8rem);
    margin-bottom: clamp(0.2rem, 0.5vw, 0.4rem);
}

/* Layout for slideshow left and description right */
.content-section {
    width: 100%;
    max-width: min(1200px, 90vw);
    margin: 0 auto;
    padding: 0 clamp(0.75rem, 2.5vw, 1.5rem);
}

.content-container {
    display: flex;
    flex-direction: row;
    gap: clamp(1rem, 2vw, 2rem);
    align-items: stretch;
}

/* Slideshow Styles */

.slideshow-box {
    flex: 1;
    position: relative;
    background-color: #fff2aa;
    border-radius: clamp(12px, 2.5vw, 18px);
    border: 2px dashed white;
    box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
    padding: clamp(0.75rem, 1.5vw, 1.5rem);
    overflow: hidden;
    min-height: clamp(300px, 40vw, 500px);
}

.slides-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slide.active {
    opacity: 1;
    z-index: 1;
}

.slide img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: clamp(8px, 1.5vw, 12px);
    border: clamp(2px, 0.3vw, 3px) solid rgb(58, 147, 76);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.slide-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    width: clamp(35px, 5vw, 50px);
    height: clamp(35px, 5vw, 50px);
    font-size: clamp(24px, 4vw, 36px);
    font-weight: bold;
    color: #333;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.slide-arrow:hover {
    background-color: rgba(255, 255, 255, 0.95);
    transform: translateY(-50%) scale(1.1);
}

.slide-arrow.prev {
    left: clamp(8px, 1.5vw, 15px);
}

.slide-arrow.next {
    right: clamp(8px, 1.5vw, 15px);
}

.dots-container {
    position: absolute;
    bottom: clamp(10px, 2vw, 20px);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: clamp(6px, 1vw, 10px);
    z-index: 10;
}

.dot {
    width: clamp(10px, 1.5vw, 14px);
    height: clamp(10px, 1.5vw, 14px);
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    border: 2px solid rgba(255, 255, 255, 0.8);
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
}

.dot:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.2);
}

.dot.active {
    background-color: rgb(58, 147, 76);
    border-color: rgb(58, 147, 76);
}

.description-box {
    flex: 0 0 clamp(280px, 35%, 400px);
    background-color: #fdf7d1;
    border-radius: clamp(12px, 2.5vw, 18px);
    border: 2px dashed white;
    box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
    padding: clamp(1rem, 2vw, 2rem);
    display: flex;
    align-items: center;
    justify-content: center;
}



/* Large desktops */
@media (min-width: 1400px) {
    .content-section {
        max-width: 1400px;
    }
    .slideshow-box {
        min-height: clamp(500px, 35vw, 700px);
    }
    .description-box {
        flex: 0 0 clamp(360px, 28%, 520px);
    }
}

/* Large tablets and small laptops */
@media (max-width: 1024px) {
    
    .description-box {
        flex: 0 0 clamp(250px, 38%, 350px);
    }
}

/* Tablets */
@media (max-width: 768px) {
    .content-container {
        flex-direction: column;
    }
    
    .slideshow-box {
        min-height: clamp(250px, 50vw, 400px);
    }
    
    .description-box {
        flex: 1;
        width: 100%;
    }
    
    .text-box {
        width: 100%;
    }
}

/* Mobile phones */
@media (max-width: 480px) {
    .mainWrapper {
        padding-top: 16px;
        gap: clamp(1.5rem, 4vw, 2.5rem);
    }
    
    .slideshow-box {
        min-height: clamp(220px, 55vw, 350px);
        padding: clamp(0.625rem, 2vw, 1rem);
    }
    
    .slide-arrow {
        width: 32px;
        height: 32px;
        font-size: 22px;
    }
    
    .slide-arrow.prev {
        left: 5px;
    }
    
    .slide-arrow.next {
        right: 5px;
    }
    
    .dots-container {
        bottom: 8px;
        gap: 6px;
    }
    
    .dot {
        width: 9px;
        height: 9px;
        border-width: 1.5px;
    }
    
    .description-box {
        padding: clamp(0.75rem, 2.5vw, 1.25rem);
    }
    
    .text-box {
        padding: clamp(0.625rem, 2.5vw, 0.875rem);
        border-radius: clamp(10px, 2.5vw, 15px);
    }
    
    .titleBox {
        margin: clamp(0.25rem, 1.5vw, 0.75rem) auto clamp(0.25rem, 1vw, 0.5rem);
    }
}

/* Landscape phones / small-height screens */
@media (max-height: 500px) and (orientation: landscape) {
    .slideshow-box {
        min-height: 60vh;
        padding: 0.5rem;
    }
    .slide-arrow {
        width: 28px;
        height: 28px;
        font-size: 20px;
    }
}

/* Very small screens */
@media (max-width: 350px) {
    .titleBox {
        padding: 0.4rem 1rem;
        font-size: 0.75rem;
        max-width: 90vw;
    }
    
    .slideshow-box {
        min-height: 200px;
        padding: 0.5rem;
    }
    
    .slide-arrow {
        width: 28px;
        height: 28px;
        font-size: 20px;
    }
    
    .dots-container {
        bottom: 6px;
        gap: 5px;
    }
    
    .dot {
        width: 8px;
        height: 8px;
    }
    
   
    .description-box {
        padding: clamp(0.5rem, 2vw, 0.75rem);
        border-width: 2px;
    }
    
    .text-box {
        padding: clamp(0.5rem, 2vw, 0.75rem);
        border-width: 2px;
    }
}

</style>
