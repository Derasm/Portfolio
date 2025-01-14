<template>
    <div class="tw-flex tw-justify-center tw-items-center tw-mx-auto lg:tw-w-full tw-p-4">
        <!-- Carousel container -->
        <div class="carousel" @touchstart="DragStart" @touchend="DragEnd">
            <!-- Dynamically render slides with Vue's v-for -->
            <div 
                v-for="(project, index) in projects" 
                :key="index" 
                :class="['slide', getSlideClass(index)]"
                @click="SlideCarousel(index === (currentIndex + 1) % projects.length ? 'right' : 'left')"
            >
                <!-- Image -->
                <img :src="project.src" class="tw-w-full tw-h-full tw-object-cover" />
                
                <!-- Overlay Text -->
                <div class="tw-absolute tw-bottom-0 tw-bg-gray-900 tw-h-1/3 tw-w-full tw-opacity-50 tw-flex tw-justify-center tw-items-center">
                    <p class="tw-text-white tw-text-center tw-text-lg tw-p-2">{{ project.text }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// Project data
const projectSet = [
    { src: '/src/assets/Red1.webp', text: '0' },
    { src: '/src/assets/Red2.webp', text: '1' },
    { src: '/src/assets/Red3.webp', text: '2' },
    { src: '/src/assets/Red4.webp', text: '3' },
    { src: '/src/assets/Red5.webp', text: '4' },
    { src: '/src/assets/ProfilePicture.jpg', text: '5' }
];

const projects = ref(projectSet);
const currentIndex = ref(1); 

/**
 * Dynamically assigns the slide position class based on the current index.
 */
const getSlideClass = (index: number) => {
    if (index === currentIndex.value) {
        return "center";
    } else if ((index + 1) % projectSet.length === currentIndex.value) {
        return "left";
    } else if ((index - 1 + projectSet.length) % projectSet.length === currentIndex.value) {
        return "right";
    } else {
        return "fadeout"; // Hides non-visible slides
    }
};

/**
 * Moves the carousel in the specified direction.
 */
function SlideCarousel(direction: string) {
    if (direction === "right") {
        currentIndex.value = (currentIndex.value + 1) % projectSet.length;
    } else if (direction === "left") {
        currentIndex.value = (currentIndex.value - 1 + projectSet.length) % projectSet.length;
    }
}

/**
 * Swipe functionality
 */
let startX = 0;
function DragStart(e: TouchEvent) {
    startX = e.touches[0].clientX;
}
function DragEnd(e: TouchEvent) {
    let endX = e.changedTouches[0].clientX;
    if (startX > endX) {
        SlideCarousel('right');
    } else {
        SlideCarousel('left');
    }
}
/**
 * Transition Hooks for Controlling When Items Leave and Reappear
 */
 function beforeLeave(el: Element) {
    (el as HTMLElement).style.transform = 'scale(1)';
    (el as HTMLElement).style.opacity = '1';
}

function afterLeave(el: Element) {
    (el as HTMLElement).style.transform = 'scale(0.5)';
    (el as HTMLElement).style.opacity = '0';
}
</script>

<style scoped>
/* Carousel container styling */
.carousel {
    width: 600px;
    height: 400px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Shared slide styling */
.slide {
    position: absolute;
    transition: transform 0.5s ease-in-out;
    transform-origin: center;
    width: 600px;
    height: 400px;
    border: 3px solid black;
    opacity: 0.8;
    z-index: 1;
}

/* Center image styling */
.center {
    transform: translateX(0) scale(1);
    z-index: 2;
    opacity: 1;
}

/* Left image positioning */
.left {
    transform: translateX(-80%) scale(0.8);
    z-index: 1;
    opacity: 1;
}

/* Right image positioning */
.right {
    transform: translateX(80%) scale(0.8);
    z-index: 1;
    opacity: 1;
}

/* Hide slides with a delay after the transition completes */
.fadeout {
    transform: scale(0.5);
    opacity: 0;
    transition: transform 0.1s ease-in-out, opacity 0.5s ease-in-out;
    pointer-events: none;
}


/* Small screen optimization: Only show center slide */
@media (max-width: 767px) {
    .left, .right {
        display: none;
    }

    .center {
        transform: scale(1);
        z-index: 2;
    }
}
</style>
