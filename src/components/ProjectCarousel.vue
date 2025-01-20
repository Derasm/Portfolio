<template>
    <div class="tw-flex tw-justify-center tw-items-center tw-mx-auto lg:tw-w-full tw-p-4">
        <!-- Carousel container -->
        <div class="carousel">
            <!-- Dynamically render slides with Vue's v-for -->
            <q-carousel
                animated
                v-model="slide"
                arrows
                navigation
                infinite
                swipeable
                class="tw-w-full tw-h-full"
                control-color="purple"
                >
                    <q-carousel-slide v-for="(project, index,) in projects"
                        :key="index+1"
                        :name="index+1"
                        :img-src="project.src"
                        draggable="false"
                        />

            </q-carousel>

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
const slide = ref(1);
const projects = ref(projectSet);

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


/* Center image styling */

</style>
