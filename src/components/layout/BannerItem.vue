<script>
import { store } from '../../store.js'
export default {
    name: 'BannerItem',
    props: {
        myKey: String,
        banner: Object,
    },
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <div class="layover"></div>
    <div class="container pb-3 pb-xl-0">
        <div class="row gy-3 content justify-content-center">
            <div v-if="myKey === 'first'" class="col-12 col-xl-6 pt-5 d-flex justify-content-start">
                <img class="banner_img" :src="store.getImageUrl(banner.image)" alt="">
            </div>
            <div class="col-12 col-xl-5 text-center d-flex flex-column justify-content-center">
                <h1 class="font-pt-serif text-white mb-3">{{ banner.title }}</h1>
                <h5 class="text-uppercase text_primary">{{ banner.subtitle }}</h5>
                <div v-if="myKey === 'second'" class="email d-flex py-4">
                    <input type="email" name="" id="" class="form-control mx-3" placeholder="example@domain.com">
                    <button class="btn ms_btn ms_btn-large bg_light-blue text-white">Subscribe</button>

                </div>
                <p class="caption px-3 py-2">{{ banner.paragraph }}</p>
                <div v-if="myKey === 'first'" class="logos d-flex justify-content-center">
                    <div v-for="logo in banner.logos" class="logo">
                        <img :src="store.getImageUrl(logo.image)" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.banner_img {
    max-width: 80%;
}
</style>