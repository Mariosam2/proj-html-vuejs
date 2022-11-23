<script>
import { store } from '../../store.js'
export default {
    name: 'CriticsItem',
    data() {
        return {
            store,
        }
    },

}
</script>
<template>
    <div class="container">
        <div class="heading d-flex">
            <div class="headers">
                <h1 class="font-pt-serif my-3">{{ store.critics.heading.title }}</h1>
                <h5 class="text-dark-blue text-uppercase my-3">{{ store.critics.heading.subtitle }}</h5>
            </div>
            <button class="btn  bg_primary text-white ms_btn-large ms-auto">{{ store.critics.heading.button }}</button>
        </div>
        <div class="row gx-5">
            <div class="col-12 col-xl-7 bg-testimonial position-relative my-3">
                <div class="layover"></div>
                <div class="content align-self-center text-white">
                    <h3 class="font-pt-serif mb-5 pb-5 border-bottom">{{ store.critics.main_card.title }}</h3>
                    <h5 class="fw-semibold">{{ store.critics.main_card.subtitle }}</h5>
                    <p v-for="paragraph in store.critics.main_card.paragraphs">{{ paragraph.content }}</p>
                    <span class="d-flex align-items-center fw-bold py-3">
                        <img class="me-3" :src="store.getImageUrl(store.critics.main_card.author.img)" alt="">
                        {{ store.critics.main_card.author.name }}
                        <span class="text-dark-blue ms-1">{{ store.critics.main_card.author.company }}</span>
                    </span>
                </div>


            </div>
            <div class="col-12 col-xl-5">
                <div class="critic" v-for="critic in store.critics.cards">
                    <div class="content text-center bg_dawn-pink p-5 my-3">
                        <h4 class="font-pt-serif">{{ critic.title }}</h4>
                        <p>{{ critic.content }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="auto" fill="currentColor"
                            class="icon bi bi-caret-down-fill text_dawn-pink" viewBox="0 0 16 16">
                            <path
                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </div>
                    <span class="d-flex align-items-center fw-bold caption py-3"><img class="me-3"
                            :src="store.getImageUrl(critic.author.img)" alt="">
                        {{ critic.author.name }}
                        <span class="text-dark fw-normal ms-1">
                            {{ critic.author.company }}
                        </span>
                    </span>
                </div>

            </div>

        </div>
    </div>

</template>
<style>

</style>