<template>
    <div class="tw-min-h-screen tw-w-full tw-text-black tw-p-6 tw-px-24">
        <div class="tw-flex tw-justify-center tw-pb-6">
            <q-btn @click="isDevOps = false" color="deep-orange-10" outline
                >Software Engineering</q-btn
            >
            <q-btn @click="isDevOps = true" color="deep-orange-10" outline
                >DevOps</q-btn
            >
        </div>
        <!-- Timeline -->
        <q-timeline
            layout="comfortable"
            v-for="(entry, index) in timelineData"
            color="red"
        >
            <q-timeline-entry
                :title="entry.position"
                tag="h3"
                :subtitle="entry.date"
                class="tw-pt-4"
            >
                <div v-if="!isDevOps">
                    <p>{{ entry.takeaway }}</p>
                    <div>
                        <div class="tw-text-slate-400">DevOps Tasks:</div>
                        <span class="tw-italic">{{ entry.DevOps }}</span>
                    </div>
                </div>
                <div v-else>
                    <p>{{ entry.DevOpsTakeaway }}</p>

                    <div>
                        <div class="tw-text-slate-600">Technologies:</div>
                        <span class="tw-italic">{{ entry.Software }}</span>
                    </div>
                </div>
            </q-timeline-entry>
        </q-timeline>
    </div>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
//comment what this component is about
interface TimelineData {
    date: string;
    position: string;
    Software: string;
    takeaway: string;
    DevOps?: string;
    DevOpsTakeaway?: string;
}
//if it should be programming or devops
let isDevOps = ref(false);
// const props = defineProps({});
const timelineData: TimelineData[] = [
    {
        date: "Jun 2021 - Present",
        position: "Senior Software Developer - Ecological",
        Software: "C#, .NET, VueJS, Typescript, Agile",
        DevOps: "Terraform (IaC), Azure, Docker, Kubernetes, CI/CD, GitOps",
        takeaway:
            "Consultancy focused on mentoring of junior developers, providing maximum ROI through innovative solutions, management of junior developers, upskilling teams in current best practises.",
        DevOpsTakeaway:
            "Implementation of Terraform, Octopus for release management and GitOps for CI/CD with automated testing setup. Introduction of branching strategies for code-security, loadsharing and caching for performance.",
    },
    {
        date: "Oct 2021- May 2022",
        position: "Software Developer - Nordjyske Mediehus",
        Software: " C#, Blazor, Github Actions, CI/CD .NET, Agile, GPT",
        takeaway:
            "Implementation of ad-based metrics, usability and performance improvements, as well as improvement of CI/CD pipelines",
        DevOps: "Octopus for handling online releases of newsletter, newspaper and managing testrealm, Github Actions for code coverage and quality, as well as automated testing. ",
        DevOpsTakeaway:
            "Handling of multiple platforms and stakeholders, integrations of multi-faceted pipeline with live and test environments, ensuring reliability of site and fallback options",
    },
    {
        date: "Aug 2020 - OCt 2021",
        position: "Webdeveloper - Tric Solutions",
        Software: " VueJS, Docker, Azure, Kanban, Typescript, Jest",
        takeaway:
            "Development of in-house CRM platform with focus on usability, performance and security. Implementation of CI/CD pipelines, as well as containerization of the platform. Heading Knowledge-sharing of VueJS and Typescript with rest of team",
        DevOps: "Octopus for handling online releases of newsletter, newspaper and managing testrealm, Github Actions for code coverage and quality, as well as automated testing. ",
        DevOpsTakeaway:
            "Handling of user authentication, security measures for horizontal and vertical privilege attacks, tokenization and CI/CD pipelines for automated testing and deployment including branching strategies for modularity of system",
    },
    {
        date: "Feb 2019 - Jul 2020",
        position: "Backend Developer - Heat-wear Solutions",
        Software: " C#, .NET, VueJS, Typescript, Agile",
        takeaway:
            "Development of physical product for heat-wear solutions, as well as development of backend for data collection and analysis. ",
        DevOps: "Github Actions for deployment, Octopus for multiple releases, GIT for version control, Azure for hosting and CI/CD pipelines",
        DevOpsTakeaway: "Mainly CI/CD deployments and monitoring of services. ",
    },
];
</script>
<style scoped></style>
