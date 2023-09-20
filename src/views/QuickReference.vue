<template>
    <div class="tw-w-full -tw-mt-24">
        <!-- Grid layout with 3 columns, centered horizontally on the screen. -->
        <div class="tw-w-3/4 tw-mx-auto tw-bg-white">
            <div
                class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3"
            >
                <section class="section">
                    <!-- icon -->
                    <div
                        class="tw-rounded-full tw-bg-green-300 tw-w-16 tw-h-16 tw-flex tw-justify-center tw-items-center"
                    >
                        <q-icon
                            name="code"
                            style="color: #141c3a"
                            size="3rem"
                        ></q-icon>
                    </div>
                    <span
                        class="tw-text-xl tw-bold tw-font-bold tw-text-indigo-600"
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
                            <li>C# / .NET</li>
                            <li>Typescript</li>
                            <li>Vue.js</li>
                            <li>Python</li>
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
                                <li>Great teams</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <!--Center portion  -->
                <section class="section">
                    <div
                        class="tw-rounded-full tw-bg-green-300 tw-w-16 tw-h-16 tw-flex tw-justify-center tw-items-center"
                    >
                        <q-icon
                            name="terminal"
                            style="color: #141c3a"
                            size="3rem"
                        ></q-icon>
                    </div>

                    <span
                        class="tw-text-xl tw-bold tw-font-bold tw-text-indigo-600"
                        >DevOps</span
                    >
                    <p class="tw-italic">
                        A pipeline should serve the company, be robust and easy
                        to maintain.
                    </p>
                    <div class="tw-pt-6">
                        <span class="tw-text-indigo-500"
                            >Technologies I thorougly enjoy</span
                        >
                        <ul class="tw-list-none">
                            <li>Github Actions</li>
                            <li>Terraform</li>
                            <li>Docker</li>
                            <li>Python</li>
                            <li>Powershell</li>
                            <li>Azure</li>
                        </ul>
                        <div class="tw-pt-6">
                            <span class="tw-text-indigo-500"
                                >Things I greatly enjoy working on</span
                            >
                            <ul>
                                <li>Performance monitoring</li>
                                <li>Task-automation</li>
                                <li>Infrastructure as Code (IAC)</li>
                                <li>APIs</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section class="section">
                    <div
                        class="tw-rounded-full tw-bg-green-300 tw-w-16 tw-h-16 tw-flex tw-justify-center tw-items-center"
                    >
                        <q-icon
                            name="interests"
                            style="color: #141c3a"
                            size="3rem"
                        ></q-icon>
                    </div>
                    <span
                        class="tw-text-xl tw-font-bold tw-bold tw-text-indigo-600"
                        >Personal</span
                    >
                    <p class="tw-italic">
                        I enjoy learning new things, slowly accruing random
                        knowledge and skills.
                    </p>
                    <div class="tw-pt-6">
                        <span class="tw-text-indigo-500">Hopes and dreams</span>
                        <ul class="tw-list-none">
                            <li>Work-life balance</li>
                            <li>Dogs, goats and an alpaca named "Al Dente"</li>
                            <li>My own homestead</li>
                        </ul>
                        <div class="tw-pt-6">
                            <span class="tw-text-indigo-500"
                                >What I do in my spare time</span
                            >
                            <ul>
                                <li>Adore red pandas</li>
                                <li>Muay Thai</li>
                                <li>Pen and Paper</li>
                                <li>Cooking.</li>
                                <li>Disc-golf</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Icon from "@/components/Icon.vue";
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
