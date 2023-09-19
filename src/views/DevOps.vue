<template>
    <div class="tw-w-full">
        <span class="tw-flex tw-justify-center tw-text-xl tw-mx-6">
            Tools used to build this section:
        </span>
        <!-- Grid layout with 3 columns, centered horizontally on the screen. -->
        <div class="tw-w-3/4 tw-mx-auto">
            <div
                class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3"
            >
                <section class="section">
                    <span class="tw-text-xl tw-bold tw-text-indigo-600"
                        >Software Development</span
                    >
                    <p class="tw-italic">
                        Good code isn't complex, its simple. I value simple,
                        robust code over the latest and the greatest.
                    </p>
                    <div class="tw-pt-6">
                        <span class="tw-text-indigo-500"
                            >Languages/ Frameworks i thoroughly enjoy
                            using</span
                        >
                        <ul class="tw-list-none">
                            <li>C#</li>
                            <li>Typescript</li>
                            <li>Vue.js</li>
                            <li>.NET</li>
                        </ul>
                        <div class="tw-pt-6">
                            <span class="tw-text-indigo-500"
                                >Things I greatly enjoy working on</span
                            >
                            <ul>
                                <li>Innovative products</li>
                                <li>high-performant code</li>
                                <li>dashboards and data-visualization</li>
                                <li>APIs</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <!--Center portion  -->
                <section class="section">
                    <div class="tw-flex tw-flex-col tw-items-center">
                        <span class="tw-text-xl tw-bold tw-text-indigo-600"
                            >DevOps</span
                        >
                    </div>
                </section>
                <section class="section">
                    <div class="tw-flex tw-flex-col tw-items-center">
                        <span class="tw-text-xl tw-bold tw-text-indigo-600"
                            >Personal</span
                        >
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
//comment what this component is about
// const props = defineProps({});
const toolsUsed = ["Grafana", "Gitlab Actions", "Terraform", "AWS"];
</script>
<style scoped>
.section {
    @apply tw-flex
    tw-flex-col tw-items-center tw-border-gray-100 tw-border-2 tw-border-solid tw-p-4 tw-text-center tw-drop-shadow-xl hover:tw-drop-shadow-md;
}
</style>
