<template>
    <div
        class="tw-relative tw-w-full tw-h-screen section-header tw-text-center"
    >
        <div
            class="tw-flex tw-justify-center tw-mx-auto tw-flex-col lg:tw-h-1/2 tw-h-2/5"
            id="introduction"
        >
            <p class="tw-font-bold tw-text-xl tw-text-violet-800">
                Software, DevOps and positivity.
            </p>
            <p class="tw-italic tw-text-lg">
                I build software that is easy to maintain, also in 6 months time
                when we've all forgotten how it works
            </p>
            <div
                class="tw-flex tw-justify-center tw-align-middle tw-mt-28 lg:tw-pt-16"
            >
                <div class="tw-rounded-full tw-w-28 tw-h-28 tw-bg-violet-700">
                    <Icon
                        svg-path="Red_Panda.svg"
                        class="tw-w-24 tw-h-24 tw-pt-3"
                        width="96"
                        height="90"
                    />
                </div>
            </div>
        </div>

        <img
            src="../assets/HeroDevices.svg"
            alt=""
            class="tw-w-full tw-absolute tw-bottom-0 lg:tw-h-1/2"
        />
    </div>
</template>
<script lang="ts" setup>
import Icon from "./Icon.vue";
</script>
<style scoped></style>
