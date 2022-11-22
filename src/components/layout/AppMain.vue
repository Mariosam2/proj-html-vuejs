<script>
import Jumbotron from '../JumboItem.vue'
import BannerItem from './BannerItem.vue'
export default {
    name: 'AppMain',
    components: {
        Jumbotron, BannerItem
    }
}
</script>
<template>
    <main id="site_main">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center my-5">
                    <jumbotron :title="'More About Damon Vaugh'" :content="`Damon Vaugh is a professor of psychology at the University of Toronto, a clinical psychologist and the author of the multi-million copy bestseller '
                    The story of my life'`" :myKey="'main'"></jumbotron>
                </div>
            </div>
        </div>
        <section class="bg_dawn-pink py-5 mt-5">
            <div class="container">
                <div class="row row-cols-1 row-cols-xl-4 logos">
                    <div class="col logo">
                        <img src="../../assets/img/ebay-logotan-2x-600x197.png" alt="" />
                    </div>
                    <div class="col logo">
                        <img src="../../assets/img/audible-logotan-2x-600x197.png" alt="" />
                    </div>
                    <div class="col logo">
                        <img src="../../assets/img/bb-logotan-2x-600x197.png" alt="" />
                    </div>
                    <div class="col logo">
                        <img src="../../assets/img/kindlefire-logotan-2x-600x197.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section class="first_banner pt-5">
            <banner-item></banner-item>
        </section>
        <section class="critics">
            <div class="container">
                <div class="row"></div>
            </div>
        </section>


    </main>
</template>
<style>

</style>