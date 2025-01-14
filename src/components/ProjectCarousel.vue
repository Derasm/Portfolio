<template>
    <div class="tw-flex tw-justify-center tw-items-center tw-mx-auto lg:tw-w-full tw-p-4">
        <div class="carousel" @touchstart="DragStart" @touchend="DragEnd">
            <div class="slide tw-relative" id="left" @click="SlideCarousel('left')" >
                <img :src="leftImage.src"  />
                <div class="tw-absolute tw-bottom-0 tw tw-bg-gray-900 tw-h-1/3 tw-w-full tw-opacity-50 tw-flex tw-justify-center tw-items-center">
                    <p class="tw-text-white tw-text-center tw-text-lg tw-p-2 ">{{leftImage.text}}</p>
                </div>
            </div>
            <div class="slide center tw-relative" id="center">
                <img :src="centerImage.src" />
                <div class="tw-absolute tw-bottom-0 tw tw-bg-gray-700 tw-h-1/3 tw-w-full tw-opacity-50 tw-flex tw-justify-center tw-items-center">
                    <p class="tw-text-white tw-text-center tw-text-lg tw-p-2">{{centerImage.text}}</p>
                </div>
            </div>
            <div class="slide tw-relative" id="right" @click="SlideCarousel('right')">
                <img :src="rightImage.src"  />
                <div class="tw-absolute tw-bottom-0 tw tw-bg-gray-900 tw-h-1/3 tw-w-full tw-opacity-50 tw-flex tw-justify-center tw-items-center">
                    <p class="tw-text-white tw-text-center tw-text-lg tw-p-2 ">{{rightImage.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref, watch } from "vue";

type Image = {
    src: string;
    text: string;
    index: number;
}
const projectSet: {src: string, text: string}[] = [
    { src: '/src/assets/Red1.webp', text: '0' },
    { src: '/src/assets/Red2.webp', text: '1' },
    { src: '/src/assets/Red3.webp', text: '2' },
    { src: '/src/assets/Red4.webp', text: '3' },
    { src: '/src/assets/Red5.webp', text: '4' },
    { src: '/src/assets/ProfilePicture.jpg', text: '5' },
];

//comment what this component is about
/**Carousel of projects, with an image and a path to the github project download page, or something similar.
 * 
 */
//const props = defineProps({})

let currentIndex = ref(1); // Start from the center slide
let leftImage = ref(projectSet[0]);
let centerImage = ref(projectSet[1]); 
let rightImage = ref(projectSet[2]); 

watch(currentIndex, (newIndex) => {
    // if ( currentIndex.value < 0){
    //  leftImage.value = projectSet[projectSet.length-1]   
    // }
    // else {
    //     leftImage.value = projectSet[currentIndex.value - 1];
    //     if (currentIndex.value-1 < 0) {
    //         leftImage.value = projectSet[projectSet.length - 1];
            
    //     }
    // }
    // Shortened version of the above. 
    // This keeps it within bounds (add 3, subtract 3 negates each other, leaving just the index. Anything left over must be correct location)
    leftImage.value = projectSet[(currentIndex.value - 1 + projectSet.length) % projectSet.length];
    centerImage.value = projectSet[currentIndex.value];
    rightImage.value = currentIndex.value + 1 > projectSet.length -1 ? projectSet[0] : projectSet[currentIndex.value + 1];
});




function SlideCarousel(direction: string) {
    switch (direction) {
        case "right":
            // We are increasing the index by 1 here unless we are at the end. 
            if ( currentIndex.value === projectSet.length - 1) {
                currentIndex.value = 0;
            } else {
                currentIndex.value += 1;
            }
            break;
        case "left":
            // We are decreasing the index by 1 here unless we are at the beginning. 
            if (currentIndex.value === 0) {
                currentIndex.value = projectSet.length - 1;
            } else {
                currentIndex.value -= 1;
            }
            break;
        default:
            break;
    }
    // carousel.style.transform = `translateX(${-600 * currentIndex}px)`;
}

// Swiping functionality
let startX = 0;
function DragStart(e:TouchEvent){
    startX = e.touches[0].clientX;
}
function DragEnd(e:TouchEvent){
    let endX = e.changedTouches[0].clientX;
    if (startX > endX) {
        SlideCarousel('right');
    } else {
        SlideCarousel('left');
    }
}


</script>
<style scoped>

.carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 400px;
    transition: transform 0.5s ease-in-out;
}

.slide {
    position: absolute;
    transition: transform 0.5s ease-in-out;
    transform-origin: center;
    scroll-snap-type: x mandatory;
    width: 600px;
    height: 400px;
    box-sizing: border-box;
    border: 3px solid black;
    z-index: 1;
    opacity: 0.8;
    transform: scale(0.8); /* Smaller for side images */
    object-fit: contain;
}

/* Center slide gets special treatment */
#center {
    transform: scale(1); /* Larger for center image */
    z-index: 2;
    opacity: 1;
}

/* Left and right positioning for overlap effect */
#left {
    transform: translateX(-80%) scale(0.8);
}

#right {
    transform: translateX(80%) scale(0.8);
}

/* Small screens: Show only center */
@media (max-width: 767px) {


    #left, #right {
        display: none;
    }

    #center {
        transform: scale(1);
        z-index: 2;
    }
}

</style>