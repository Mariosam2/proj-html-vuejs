<script>
import { store } from '../../store.js'
export default {
    name: 'ArticlesItem',
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="heading d-flex">
            <div class="headers">
                <h1 class="font-pt-serif my-3">{{ store.articles.heading.title }}</h1>
                <h5 class="text-dark-blue text-uppercase my-3">{{ store.articles.heading.subtitle }}</h5>
            </div>
            <button class="btn  bg_primary text-white ms_btn-large ms-auto">{{ store.articles.heading.button }}</button>
        </div>
        <div class="row gx-5 my-3">
            <div class="col-12 col-xl-8">
                <div class="content ms_card">
                    <img :src="store.getImageUrl(store.articles.main_card.img)" alt="">
                    <h4>{{ store.articles.main_card.title }}</h4>
                    <small class=" d-block py-3 caption">By
                        <span class="text-black">{{ store.articles.main_card.info.author }} </span> |
                        {{ store.articles.main_card.info.date }} |
                        Categories:
                        <span class="text-black">{{ store.articles.main_card.info.categories }}</span></small>
                    <p class="fs-5">{{ store.articles.main_card.content }}</p>

                </div>


            </div>
            <div class="col-12 col-xl-4 d-flex flex-column">
                <div class="ms_card" v-for="card in store.articles.cards">
                    <img :src="store.getImageUrl(card.img)" alt="">
                    <h4>{{ card.title }}</h4>
                    <small class="caption">{{ card.info.date }} |
                        <span class="text-black">{{ card.info.comments }} Comments</span>
                    </small>
                </div>


            </div>

        </div>
    </div>

</template>
<style lang="scss" scoped>
.ms_card {
    flex-grow: 1;
}
</style>