<template>
    <div class="tw-bg-[#231f28] tw-min-h-screen tw-text-white q-pa-xl">
        <!-- Timeline -->
        <q-timeline
            layout="loose"
            v-for="entry in timelineData"
            color="primary"
        >
            <q-timeline-entry
                :title="entry.position"
                tag="h3"
                :subtitle="entry.date"
            >
                <div>
                    <p>{{ entry.takeaway }}</p>
                    <span> {{ entry.tools }}</span>
                </div></q-timeline-entry
            >
        </q-timeline>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
//comment what this component is about
interface TimelineData {
    date: string;
    position: string;
    tools: string;
    takeaway: string;
}
/**
 * Timeline component showing visually jobexperience and what i learned plus tools used.
 */
// const props = defineProps({});
const timelineData: TimelineData[] = [
    {
        date: "Jun 2021 - Present",
        position: "Ecological - Senior Software Developer",
        tools: "Skills: C#, .NET, VueJS, Typescript, Agile",
        takeaway:
            "Consultancy focused on: Mentoring of junior developers, working with various teams to provide maximum ROI for the company.",
    },
    {
        date: "Jun 2021 - Present",
        position: "Senior Software Developer",
        tools: "Skills: C#, .NET, VueJS, Typescript, Agile",
        takeaway:
            "Mentoring of junior developers, working with various teams to provide maximum ROI for the company.",
    },
    {
        date: "Jun 2021 - Present",
        position: "Senior Software Developer",
        tools: "Skills: C#, .NET, VueJS, Typescript, Agile",
        takeaway:
            "Mentoring of junior developers, working with various teams to provide maximum ROI for the company.",
    },
    {
        date: "Jun 2021 - Present",
        position: "Senior Software Developer",
        tools: "Skills: C#, .NET, VueJS, Typescript, Agile",
        takeaway:
            "Mentoring of junior developers, working with various teams to provide maximum ROI for the company.",
    },
    {
        date: "Jun 2021 - Present",
        position: "Senior Software Developer",
        tools: "Skills: C#, .NET, VueJS, Typescript, Agile",
        takeaway:
            "Mentoring of junior developers, working with various teams to provide maximum ROI for the company.",
    },
];
</script>
<style scoped></style>
