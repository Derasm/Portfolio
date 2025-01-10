<template>
    <div class="tw-flex tw-justify-center tw-items-center tw-mx-auto lg:tw-w-full tw-p-4">
        <div class="carousel" @touchstart="DragStart" @touchend="DragEnd">
            <div class="slide tw-relative" id="left" @click="SlideCarousel('left')" >
                <img :src="rightImage.src"  />
                <div class="tw-absolute tw-bottom-0 tw tw-bg-gray-900 tw-h-1/3 tw-w-full tw-opacity-50 tw-flex tw-justify-center tw-items-center">
                    <p class="tw-text-white tw-text-center tw-text-lg tw-p-2 ">{{leftImage.text}}</p>
                </div>
            </div>
            <div class="center tw-relative" id="center">
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
import { computed, ref } from "vue";

type Image = {
    src: string;
    text: string;
    index: number;
}
const images = ref([
    { src: 'https://placehold.co/600x400', text: 'Slide 1', index: 0 },
    { src: 'https://placehold.co/600x400', text: 'Slide 2', index: 1 },
    { src: 'https://placehold.co/600x400', text: 'Slide 3', index: 2 },
])

//comment what this component is about
/**Carousel of projects, with an image and a path to the github project download page, or something similar.
 * 
 */
//const props = defineProps({})

let leftImage = computed(() => {
    //If currentIndex is 0, we wrap around to the last image
    return currentIndex - 1 < 0 ?  images.value[currentIndex-1] : images.value[0];
});
let centerImage = computed(()=> {
    return images.value[currentIndex];
});
let rightImage = computed(() => {
    //If currentIndex is the last image, we wrap around to the first image
    return currentIndex + 1 > images.value.length -1 ? images.value[0] : images.value[currentIndex + 1];
});

let currentIndex = 1; // Start from the center slide

function SlideCarousel(direction) {
    console.log("Sliding carousel", direction);
    
    if (direction === 'right') {
        //If we are at the end, we wrap around
        if (currentIndex == images.value.length-1) {
            currentIndex = 0;
        }
        currentIndex = (currentIndex + 1);
    } else {
        if (currentIndex == 0) {
            currentIndex = images.value.length - 1; 
        }
        currentIndex = currentIndex - 1;
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
    width: 1800px; /* 3 slides * 600px */
    transition: transform 0.5s ease-in-out;
}

.slide {
    width: 600px;
    height: 400px;
    border: 3px solid black;
    margin-top: 50px;
    box-sizing: border-box;
    zoom: 80%;
}

</style>