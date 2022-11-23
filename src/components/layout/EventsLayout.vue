<script>
import { store } from '../../store.js'
export default {
    name: 'EventsLayout',
    data() {
        return {
            store,
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../../assets/img/${name}`, import.meta.url).href
        }
    }
}
</script>
<template>
    <div class="ms_container-large">
        <div class="heading text-center">
            <h1 class="font-pt-serif">{{ store.events.heading.title }}</h1>
            <h5 class="text-uppercase text_primary mt-3">{{ store.events.heading.subtitle }}</h5>
        </div>
        <div class="row row-cols-1 row-cols-3 mt-5">
            <div class="col ms_card d-flex flex-column" v-for="card in store.events.cards">
                <img :src="getImageUrl(card.img)" alt="">
                <div class="content bg_white text-center p-4">
                    <h3 class="pb-4 border-bottom">{{ card.title }}</h3>
                    <p class="caption py-2">{{ card.content }}</p>
                </div>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
.content {
    flex-grow: 1;
}
</style>