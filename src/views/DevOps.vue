<template>
    <main>
        <span class="tw-flex justify-center tw-text-xl tw-mx-6"
            >Tools used to build this section:</span
        >
        <div class="tw-flex tw-justify-center tw-flex-wrap">
            <div class="">
                <li>
                    <ul
                        v-for="(tool, index) in toolsUsed"
                        :key="index"
                        class="tw-list-disc"
                    >
                        {{
                            tool
                        }}
                    </ul>
                </li>
            </div>
        </div>

        <!-- <MonitoringTools /> -->
    </main>
</template>
<script lang="ts" setup>
import MonitoringTools from "@/components/MonitoringTools.vue";
import { ref } from "vue";
//comment what this component is about
const props = defineProps({});
const toolsUsed = ["Grafana", "Gitlab Actions", "Terraform", "AWS"];
</script>
<style scoped></style>
