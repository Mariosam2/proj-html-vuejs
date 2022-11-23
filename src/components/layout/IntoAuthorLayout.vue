<script>
import { store } from '../../store.js'
export default {
    name: 'IntoAuthorLayout',
    data() {
        return {
            store,
        }
    },

}
</script>
<template>
    <div class="container">
        <div class="heading text-center">
            <h1 class="font-pt-serif">{{ store.into_author.heading.title }}</h1>
            <h5 class="text-uppercase text_primary mt-3">{{ store.into_author.heading.subtitle }}</h5>
        </div>
        <div class="row row-cols-1 row-cols-3 mt-5 gx-5">
            <div class="col" v-for="card in store.into_author.cards">
                <div class="ms_card">
                    <div class="layover"></div>
                    <img :src="store.getImageUrl(card.img)" alt="">
                    <div class="content bg_white text-center p-4">
                        <h3 class="pb-2">{{ card.title }}</h3>
                        <hr class="w-25 my-3">
                        <span class="text_primary py-2">{{ card.subtitle }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<style>

</style>