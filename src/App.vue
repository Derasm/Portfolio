<template>
    <!-- top-bar with navigation  -->
    <q-toolbar class="tw-flex tw-justify-center tw-bg-[#231f28]">
        <q-btn class="tw-mx-1" to="/portfolio" outline color="deep-orange-10">
            Main page
        </q-btn>
        <q-btn class="" to="/devops" outline color="deep-orange-10">
            Monitoring
        </q-btn>
    </q-toolbar>
    <!-- router-view -->
    <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style>
.q-img__content > div {
    padding: 0;
    background: none;
}
</style>
