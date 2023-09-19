<template>
    <div class="tw-w-full">
        <span class="tw-flex tw-justify-center tw-text-xl tw-mx-6">
            Tools used to build this section:
        </span>
        <div class="tw-flex tw-justify-center tw-text-center tw-w-full">
            <div class="tw-flex tw-w-3/4">
                <div
                    class="tw-text-center tw-basis-1/3 tw-p-4 tw-border-[1px] tw-border-solid tw-border-black tw-drop-shadow-md hover:tw-drop-shadow-xl tw-mx-1"
                >
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
                        <li class="tw-list-none">
                            <ul>
                                C#
                            </ul>
                            <ul>
                                Typescript
                            </ul>
                            <ul>
                                Vue.js
                            </ul>
                            <ul>
                                .NET
                            </ul>
                        </li>
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
                </div>
                <div
                    class="tw-text-center tw-basis-1/3 tw-border-[1px] tw-border-solid tw-border-red-900 tw-drop-shadow-md hover:tw-drop-shadow-xl tw-mx-1"
                >
                    2
                </div>
                <div
                    class="tw-text-center tw-basis-1/3 tw-border-[1px] tw-border-solid tw-border-black tw-drop-shadow-md hover:tw-drop-shadow-xl tw-mx-1"
                >
                    3
                </div>
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
<style scoped></style>
