<template>
    <div class="tw-flex tw-justify-center tw-min-h-full tw-text-white">
        <figure
            class="tw-flex tw-bg-slate-100 tw-rounded-xl tw-p-6 dark:tw-bg-slate-800 tw-border-2 tw-border-orange-800"
        >
            <div>
                <!-- image and links -->
                <img
                    class="tw-rounded-full tw-mx-1 sm:tw-w-auto sm:tw-h-auto tw-max-h-[10rem] tw-max-w-[10rem]]"
                    src="@/assets/ProfilePic.jpg"
                    alt=""
                />
                <span class="tw-flex tw-ml-4">
                    <a
                        href="mailto:RasmussenDennisB@gmail.com"
                        target="_blank"
                        class="tw-mx-1 tw-mt-2"
                    >
                        <q-icon
                            name="email"
                            size="2.2rem"
                            color="white"
                            class="hover:tw-fill-black"
                        ></q-icon>
                    </a>
                    <a
                        href="https://gitlab.com/Deras"
                        target="_blank"
                        class="tw-mx-1"
                    >
                        <Icon :svg-path="'git.svg'" class="tw-w-12 tw-h-12" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dennis-b-rasmussen/"
                        target="_blank"
                        class="tw-mx-1 tw-mt-2"
                    >
                        <Icon
                            :svg-path="'linkedin.svg'"
                            class="tw-w-8 tw-h-8 tw-fill-white hover:tw-fill-slate-500"
                        />
                    </a>
                </span>
            </div>
            <div class="tw-flex">
                <div class="tw-pl-4 tw-space-y-4">
                    <p class="tw-text-lg tw-font-medium">
                        Experienced Software Developer with DevOps and
                        <br />
                        managerial experience.
                    </p>
                    <ul class="tw-list-disc tw-ml-6">
                        <li class="">CRM / POS / PWA / SPA</li>
                        <li class="">
                            VueJS, C#, .NET, Typescript, Python, Powershell.
                        </li>
                        <li class="">
                            AWS, Azure, GCP, Docker, Kubernetes, Terraform.
                        </li>
                    </ul>
                </div>
            </div>
        </figure>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import LinkedIn from "@/assets/LinkedIn.svg";
import Icon from "./Icon.vue";
//comment what this component is about
</script>
<style scoped></style>
