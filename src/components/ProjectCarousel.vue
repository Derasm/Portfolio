<template>
    <div class="tw-flex tw-justify-center tw-items-center tw-mx-auto lg:tw-w-full tw-p-4">
        <!-- Carousel container -->
        <div class="carousel">
            <!-- Dynamically render slides with Vue's v-for -->
            <div>
                <q-carousel
                animated
                arrows
                navigation
                infinite
                v-model="slide"

                >
                <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
                </q-carousel>
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
const slide = ref(0);
const projects = ref(projectSet);

</script>

<style scoped>
/* Carousel container styling */


/* Center image styling */

</style>
