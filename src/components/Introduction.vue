<template>
    <div
        class="tw-w-full tw-bg-violet-800 tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-text-center tw-text-white tw-align-middle tw-pb-64 tw-pt-8"
    >
        <!-- Text Section -->
        <div class="tw-w-1/2  tw-pt-24 tw-p-4 tw-mx-24">
            <span class="tw-text-2xl tw-font-bold tw-text-white">Hi, I'm Dennis.</span>
            <div class="tw-text-white">
            <p class="tw-text-lg">
                <br />
                I got started writing software back around 2014/15 as a backend, then
                slowly moved around the stack until i fell in love with Cloud, Backend and DevOps.
            </p>
            <p class="tw-text-lg">
                I've built products for the maritime sector, robotics for
                hospitals, CI pipelines for complex setups and mentored new employees across sectors. <br>
                I am currently working on Fintech projects for the Hotel sector.
            </p>
            <q-separator dark />
            <p class="tw-text-lg">
                Projects I have headed / been main driving force on:
            </p>
            </div>

                <ol class="tw-text-lg tw-text-left tw-list-disc tw-w-3/4 tw-mx-auto ">
                    <li>VueJS based CMS for a maritime company, with massive focus on performance / size of application</li>
                        <div class="tw-ml-12 tw-text-gray-300 tw-text-sm">
                            <ol  style="list-style-type: lower-alpha; padding-bottom: 0;">
                                <li>Reduced load time from 7s to 2s on startup</li>
                                <li>Reduced initial bundle size from 2.3mb to 840kb using chunking and lazy-load, as well as pruning</li>
                                <li>implemented smart lazy-load on most crucial components</li>
                            </ol>
                     </div>
                    <li>Ci/CD Pipeline migration from Octopus + Jenkins + Teamcity to Gitlab CI for simplification across 50+ projects.</li>
                        <div class="tw-ml-12 tw-text-gray-300 tw-text-sm">
                            <ol style="list-style-type: lower-alpha; padding-bottom: 0;">
                                <li>Simplified CI/CD by making components, including: SemVer, Var Substitution, File Transform, Build / Test, Deployment to AWS Lambda</li>
                            </ol>
                        </div>
                    <li>Setup multi-environment Containerized CI pipeline for easy testing and deployment across dotnet Framework / Core / NetCore2.0</li>
                    <div class="tw-ml-12 tw-text-gray-300 tw-text-sm">
                            <ol style="list-style-type: lower-alpha; padding-bottom: 0;">
                                <li>Created Dockerfiles, multiple environments and the rules for deploying / spinning up the correct environment for QA / Test / Prod</li>
                                <li>Implemented caching for branches to speed up subsequent builds, as well as artifact handling for monitoring later</li>
                            </ol>
                        </div>
                    <li>Improved backend-performance of crucial REST API to handle more than 150.000 events a minute.</li>
                    <div class="tw-ml-12 tw-text-gray-300 tw-text-sm">
                            <ol style="list-style-type: lower-alpha; padding-bottom: 0;">
                                <li>Used Profiler to identify bottlenecks in code and fix it.</li>
                                <li>Used LinQPad to test and identify slow LinQ statements, then optimized them.</li>
                                <li>Improved SQL statements through better indexing and querying, taking the average call below 4ms</li>
                                <li>Implemented REDIS cache for most commonly used data with high immutability</li>
                            </ol>
                        </div>
                    <li>Increased ad-based revenue 44% over 3 months, as well as improved Lighthouse performance for better ranking</li>
                    <div class="tw-ml-12 tw-text-gray-300 tw-text-sm">
                            <ol style="list-style-type: lower-alpha; padding-bottom: 0;">
                                <li>Improved GPT implementation, bundle size and CLS through better implementation of modern web-standards</li>
                            </ol>
                        </div>
                </ol>

            
        </div>

        <!-- Profile Picture Section -->
        <div class="tw-flex tw-justify-center tw-w-1/2 tw-mx-auto lg:tw-pt-24 lg:tw-p-4">
            <q-img 
                src="/src/assets/ProfilePicture.jpg"
                spinner-color="white"
                loading="lazy"
                fit="contain"
                width="500px"
            ></q-img>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>

<style scoped></style> 
