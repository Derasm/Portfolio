<template>
    <svg :class="props.class" ref="svg"></svg>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
//comment what this component is about
/**
 * Basic icon functionality, as Quasar is being a right cunt and Tailwind too. Fuck em.
 */
const svg = ref(null);
const props = defineProps({
    class: {
        type: String,
        default: "tw-w-6 tw-h-6 tw-fill-white",
    },
    svgPath: {
        type: String,
        required: true,
    },
});
onMounted(async () => {
    let response = null;
    if (import.meta.env.DEV) {
        response = await fetch("Portfolio/src/assets/" + props.svgPath);
    }
    // when they are included in prod, they use base url, not assets url
    if (import.meta.env.PROD) {
        response = await fetch(props.svgPath);
    }

    const data = await response.text();
    svg.value.innerHTML = data;
});
</script>
<style></style>
