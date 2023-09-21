<template>
    <main class="tw-min-h-screen">
        <MainPageHeader />

        <Introduction />
        <QuickReference />
        <div class="tw-w-full tw-h-48"></div>
    </main>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import MainPageHeader from "@/components/MainPageHeader.vue";
import Introduction from "@/components/Introduction.vue";
import QuickReference from "./QuickReference.vue";
//comment what this component is about
const props = defineProps({});
</script>
<style scoped></style>
