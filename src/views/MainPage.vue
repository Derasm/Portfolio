<template>
    <main class="tw-min-h-screen">
        <MainPageHeaderSecond />
        <!-- <MainPageHeader /> -->
        <!-- <Timeline /> -->
        <Introduction />
        <DevOps />
        <div class="tw-w-full tw-h-48"></div>
    </main>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import MainPageHeader from "@/components/MainPageHeader.vue";
import MainPageHeaderSecond from "@/components/MainPageHeaderSecond.vue";
import Timeline from "@/components/Timeline.vue";
import Introduction from "@/components/Introduction.vue";
import DevOps from "./DevOps.vue";
//comment what this component is about
const props = defineProps({});
</script>
<style scoped></style>
