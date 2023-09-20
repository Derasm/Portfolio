<template>
    <div class="tw-w-full tw-h-screen section-header tw-text-center">
        <div class="tw-flex tw-justify-center tw-mx-auto tw-flex-col tw-h-1/2">
            <!-- text content -->
            <p class="tw-font-bold tw-text-xl tw-text-violet-800">
                Software, DevOps and eternal positivity.
            </p>
            <p class="tw-italic tw-text-lg">
                I build software that is easy to maintain, also in 6 months time
                when we've all forgotten how it works
            </p>
            <div class="tw-flex tw-justify-center tw-align-middle">
                <Icon
                    svg-path="Red_Panda.svg"
                    class="tw-w-24 tw-h-24"
                    width="96"
                    height="90"
                />
            </div>
        </div>

        <img
            src="../assets/HeroDevices.svg"
            alt=""
            class="tw-w-full tw-h-1/2"
        />
    </div>
</template>
<script lang="ts" setup>
import Icon from "./Icon.vue";
import { ref } from "vue";
//comment what this component is about
//const props = defineProps({})
</script>
<style scoped></style>
