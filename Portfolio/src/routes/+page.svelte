<script>
// @ts-nocheck

	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let isModalOpen = false;
	let selectedImage = '';
	let selectedAlt = '';

	/**
	 * @param {string} imageSrc
	 * @param {string} altText
	 */
	function openModal(imageSrc, altText) {
		selectedImage = imageSrc;
		selectedAlt = altText;
		isModalOpen = true;
		// Prevent body scrolling when modal is open
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		isModalOpen = false;
		selectedImage = '';
		selectedAlt = '';
		// Restore body scrolling
		document.body.style.overflow = 'auto';
	}

	// Close modal when clicking outside the image
	/**
	 * @param {{ target: { classList: { contains: (arg0: string) => any; }; }; }} event
	 */
	function handleModalClick(event) {
		if (event.target.classList.contains('modal-overlay')) {
			closeModal();
		}
	}

	// Close modal with Escape key
	// @ts-ignore
	function handleKeydown(event) {
		if (event.key === 'Escape' && isModalOpen) {
			closeModal();
		}
	}

	onMount(() => {
		console.log("Home Page Loaded");
		
		// Add event listener for escape key
		window.addEventListener('keydown', handleKeydown);
		
		// Cleanup function
		return () => {
			window.removeEventListener('keydown', handleKeydown);
			// Ensure body scrolling is restored on cleanup
			document.body.style.overflow = 'auto';
		};
	});
</script>
		
		


<div class="home-page">
	<!-- Hero Section -->
	<section class="hero-section">
		<div class="hero-content">
			<h1 class="main-title">Aoife Leahy</h1>
			<p class="subtitle">Creative Portfolio</p>
			<p class="intro-text">Explore my artistic journey through three unique forms of creative expression!</p>
		</div>
	</section>

	<!-- Portfolio Preview Section -->
	<section class="portfolio-preview">
		<div class="content-grid">
			<!-- Art Preview -->
			<div class="category-preview art-preview">
				<div class="category-header">
					<h2>🎨 Art</h2>
					<p>Visual artwork & illustrations</p>
				</div>
				<div class="preview-images">
					<div class="image-showcase">
						<img src="{base}/art_1.png" alt="Art piece 1" 
							on:click={() => openModal(`${base}/art_1.png`, 'Art piece 1')}
							class="clickable-image"
						/>
						<img src="{base}/Background_dingle.png" alt="Art piece 2" 
							on:click={() => openModal(`${base}/Background_dingle.png`, 'Art piece 2')}
							class="clickable-image"
						/>
					</div>
				</div>
			</div>

			<!-- Animation Preview -->
			<div class="category-preview animation-preview">
				<div class="category-header">
					<h2>✨ Animation</h2>
					<p>Animated pieces</p>
				</div>
				<div class="preview-images">
					<div class="image-showcase">
						<img src="{base}/animation_ss_1.png" alt="Animation preview" 
							on:click={() => openModal(`${base}/animation_ss_1.png`, 'Animation preview')}
							class="clickable-image"
						/>
						<img src="{base}/animation_ss_2.png" alt="Animation character" 
							on:click={() => openModal(`${base}/animation_ss_2.png`, 'Animation character')}
							class="clickable-image"
						/>
					</div>
				</div>
			</div>

			<!-- Games Preview -->
			<div class="category-preview games-preview">
				<div class="category-header">
					<h2>🎮 Games</h2>
					<p>Interactive gaming experiences</p>
				</div>
				<div class="preview-images">
					<div class="image-showcase">
						<img src="{base}/game_1.png" alt="Game preview 1" 
							on:click={() => openModal(`${base}/game_1.png`, 'Game preview 1')}
							class="clickable-image"
						/>
						<img src="{base}/game_2.png" alt="Game preview 2" 
							on:click={() => openModal(`${base}/game_2.png`, 'Game preview 2')}
							class="clickable-image"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Navigation Guide -->
	<section class="navigation-guide">
		<div class="guide-content">
			<div class="guide-text">
				<h3>Explore More</h3>
				<p>Click the menu button (☰) on the top right to discover more of my work!</p>
				<div class="arrow-pointer">↗️</div>
			</div>
			<div class="guide-categories">
				<span class="guide-tag">🎨 Full Art Gallery</span>
				<span class="guide-tag">✨ Animation Showcase</span>
				<span class="guide-tag">🎮 Games Collection</span>
			</div>
		</div>
	</section>
</div>

<!-- Modal Overlay -->
{#if isModalOpen}
	<!-- svelte-ignore a11y_interactive_supports_focus -->
	<div 
		class="modal-overlay" 
		on:click={handleModalClick}
		on:keydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-label="Image preview"
	>
		<div class="modal-content">
			<button 
				class="modal-close" 
				on:click={closeModal}
				aria-label="Close image preview"
			>
				×
			</button>
			<img 
				src={selectedImage} 
				alt={selectedAlt}
				class="modal-image"
			/>
			<p class="modal-caption">{selectedAlt}</p>
		</div>
	</div>
{/if}

<style>

/* ===== BASE STYLES ===== */
.home-page {
	background: linear-gradient(135deg, rgb(233, 243, 255) 0%, rgb(245, 250, 255) 100%);
	min-height: 100vh;
	padding: 2rem 1rem;
}

/* ===== HERO SECTION ===== */
.hero-section {
	text-align: center;
	padding: 2rem 0 3rem 0;
}

.hero-content {
	max-width: 800px;
	margin: 0 auto;
}

.main-title {
	font-family: 'Italiana', serif;
	font-size: clamp(2.5rem, 6vw, 4rem);
	color: #000000;
	margin: 0 0 0.5rem 0;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
	font-weight: 400;
}

.subtitle {
	font-family: 'Italiana', serif;
	font-size: clamp(1.2rem, 3vw, 1.8rem);
	color: #000000;
	margin: 0 0 1rem 0;
	font-weight: 300;
	letter-spacing: 0.5px;
}

.intro-text {
	font-size: clamp(1rem, 2.5vw, 1.3rem);
	color: #000000;
	margin: 0;
	line-height: 1.5;
	font-weight: 300;
}

/* ===== PORTFOLIO PREVIEW SECTION ===== */
.portfolio-preview {
	padding: 2rem 0;
}

.content-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 2rem;
	max-width: 1400px;
	margin: 0 auto;
	padding: 0 1rem;
}

.category-preview {
	background: linear-gradient(145deg, #fff2aa 0%, #ffee8b 100%);
	border: 3px dashed white;
	border-radius: 20px;
	padding: 1.5rem;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	position: relative;
	overflow: hidden;
}

.category-preview:hover {
	transform: translateY(-5px);
	box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.category-header {
	text-align: center;
	margin-bottom: 1.5rem;
}

.category-header h2 {
	font-family: 'Italiana', serif;
	font-size: clamp(1.5rem, 3vw, 2rem);
	color: #000000;
	margin: 0 0 0.5rem 0;
	font-weight: 600;
}

.category-header p {
	font-size: clamp(0.9rem, 2vw, 1.1rem);
	color: #000000;
	margin: 0;
	font-style: italic;
}

.preview-images {
	position: relative;
}

.image-showcase {
	display: flex;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}

.image-showcase img {
	width: clamp(120px, 45%, 180px);
	height: clamp(120px, 45%, 180px);
	object-fit: cover;
	border-radius: 12px;
	border: 2px solid white;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease;
}

.clickable-image {
	cursor: pointer;
	position: relative;
}

.clickable-image:hover {
	transform: scale(1.05);
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.clickable-image:active {
	transform: scale(1.02);
}

/* ===== NAVIGATION GUIDE SECTION ===== */
.navigation-guide {
	padding: 3rem 0 2rem 0;
	text-align: center;
}

.guide-content {
	max-width: 800px;
	margin: 0 auto;
	padding: 2rem;
	background: linear-gradient(145deg, #fff2aa);
	border-radius: 20px;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
	border: 2px dashed white;
	position: relative;
}

.guide-text {
	margin-bottom: 1.5rem;
	position: relative;
}

.guide-text h3 {
	font-family: 'Italiana', serif;
	font-size: clamp(1.5rem, 3vw, 2rem);
	color: #000000;
	margin: 0 0 1rem 0;
	font-weight: 600;
}

.guide-text p {
	font-size: clamp(1rem, 2.5vw, 1.2rem);
	color: #000000;
	margin: 0 0 1rem 0;
	line-height: 1.5;
	font-weight: 500;
}

.arrow-pointer {
	font-size: clamp(2rem, 4vw, 3rem);
	position: absolute;
	top: -0.5rem;
	right: 10%;
	animation: bounce 2s infinite;
}

@keyframes bounce {
	0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
	40% { transform: translateY(-10px); }
	60% { transform: translateY(-5px); }
}

.guide-categories {
	display: flex;
	gap: 1rem;
	justify-content: center;
	flex-wrap: wrap;
}

.guide-tag {
	background: rgba(105, 105, 103, 0.3);
	padding: 0.5rem 1rem;
	border-radius: 20px;
	font-size: clamp(0.8rem, 2vw, 1rem);
	color: #2c3e50;
	font-weight: 500;
	border: 1px solid rgba(255, 255, 255, 0.5);
	transition: all 0.3s ease;
}

.guide-tag:hover {
	background: rgba(255, 255, 255, 0.6);
	transform: scale(1.05);
}

/* ===== MODAL STYLES ===== */
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.9);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	padding: 2rem;
	box-sizing: border-box;
	animation: modalFadeIn 0.3s ease-out;
}

@keyframes modalFadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.modal-content {
	position: relative;
	max-width: 90vw;
	max-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	animation: modalScaleIn 0.3s ease-out;
}

@keyframes modalScaleIn {
	from {
		transform: scale(0.7);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
}

.modal-close {
	position: absolute;
	top: -15px;
	right: -15px;
	background: #fff;
	border: none;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	font-size: 24px;
	font-weight: bold;
	color: #333;
	cursor: pointer;
	z-index: 1001;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;
}

.modal-close:hover {
	background: #f0f0f0;
	transform: scale(1.1);
}

.modal-close:active {
	transform: scale(0.95);
}

.modal-image {
	max-width: 100%;
	max-height: 80vh;
	width: auto;
	height: auto;
	object-fit: contain;
	border-radius: 8px;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	border: 3px solid white;
}

.modal-caption {
	color: white;
	font-size: 1.1rem;
	margin-top: 1rem;
	text-align: center;
	font-weight: 500;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	max-width: 600px;
}

/* ===== RESPONSIVE DESIGN ===== */

/* Large screens */
@media (min-width: 1200px) {
	.content-grid {
		grid-template-columns: repeat(3, 1fr);
		gap: 2.5rem;
	}
	
	.category-preview {
		padding: 2rem;
	}
}

/* Tablets */
@media (max-width: 768px) {
	.home-page {
		padding: 1.5rem 0.5rem;
	}
	
	.content-grid {
		grid-template-columns: 1fr;
		gap: 1.5rem;
		padding: 0 0.5rem;
	}
	
	.category-preview {
		padding: 1.25rem;
	}
	
	.image-showcase {
		flex-direction: column;
		gap: 0.75rem;
	}
	
	.image-showcase img {
		width: clamp(150px, 60%, 200px);
		height: clamp(150px, 60%, 200px);
	}
	
	.arrow-pointer {
		right: 5%;
	}
	
	.guide-categories {
		flex-direction: column;
		align-items: center;
	}
}

/* Mobile phones */
@media (max-width: 480px) {
	.hero-section {
		padding: 1.5rem 0 2rem 0;
	}
	
	.portfolio-preview {
		padding: 1.5rem 0;
	}
	
	.content-grid {
		gap: 1.25rem;
	}
	
	.category-preview {
		padding: 1rem;
		border-width: 2px;
	}
	
	.category-header {
		margin-bottom: 1rem;
	}
	
	.image-showcase img {
		width: clamp(100px, 45%, 140px);
		height: clamp(100px, 45%, 140px);
	}
	
	.navigation-guide {
		padding: 2rem 0 1.5rem 0;
	}
	
	.guide-content {
		padding: 1.5rem;
		margin: 0 0.5rem;
	}
	
	.arrow-pointer {
		position: static;
		margin-top: 0.5rem;
	}
	
	/* Modal responsive styles */
	.modal-overlay {
		padding: 1rem;
	}
	
	.modal-close {
		width: 35px;
		height: 35px;
		font-size: 20px;
	}
	
	.modal-image {
		max-height: 70vh;
	}
	
	.modal-caption {
		font-size: 1rem;
		margin-top: 0.75rem;
	}
}

/* Very small screens */
@media (max-width: 320px) {
	.home-page {
		padding: 1rem 0.25rem;
	}
	
	.category-preview {
		padding: 0.75rem;
	}
	
	.image-showcase {
		gap: 0.5rem;
	}
	
	.image-showcase img {
		width: clamp(80px, 40%, 120px);
		height: clamp(80px, 40%, 120px);
	}
	
	.guide-content {
		padding: 1rem;
	}
	
	.guide-tag {
		padding: 0.4rem 0.8rem;
		font-size: 0.8rem;
	}
	
	/* Modal responsive styles for very small screens */
	.modal-overlay {
		padding: 0.5rem;
	}
	
	.modal-close {
		width: 30px;
		height: 30px;
		font-size: 18px;
		top: -10px;
		right: -10px;
	}
	
	.modal-image {
		max-height: 60vh;
		border-width: 2px;
	}
	
	.modal-caption {
		font-size: 0.9rem;
		margin-top: 0.5rem;
	}
}

</style>
