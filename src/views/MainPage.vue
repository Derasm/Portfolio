<template>
    <main class="tw-bg-[#231f28] tw-min-h-screen">
        <MainPageHeader />
        <Timeline />
        <DevOps />
    </main>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import MainPageHeader from "@/components/MainPageHeader.vue";
import Timeline from "@/components/Timeline.vue";
import DevOps from "./DevOps.vue";
//comment what this component is about
const props = defineProps({});
</script>
<style scoped></style>
