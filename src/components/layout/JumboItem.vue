<script>
import RevItem from '../RevItem.vue';
export default {
    name: 'JumboItem',
    components: {
        RevItem,
    },
    props: {
        title: String,
        content: String,
        myKey: String,
    }
}
</script>
<template>
    <div class="jumbo">
        <h2 class="jumbo-title font-script">{{ title }}</h2>
        <rev-item v-if="myKey === 'header'"></rev-item>
        <div v-else>
            <p class="jumbo-main-p p-2">{{ content }}</p>
            <div class="btn ms_btn bg_light-blue ms_btn-large mt-4 text-white">Meet the autor</div>
        </div>


    </div>
</template>
<style>

</style>