<script>
import Jumbotron from '../JumboItem.vue'
import LogosList from './LogosList.vue'
import BannerItem from './BannerItem.vue'
import ArticlesAndCritics from './ArticlesAndCritics.vue';
export default {
    name: 'AppMain',
    components: {
        Jumbotron, LogosList, BannerItem, ArticlesAndCritics
    },
    data() {
        return {
            jumbo: {
                title: 'More About Damon Vaugh',
                content: 'Damon Vaugh is a professor of psychology at the University of Toronto, a clinical psychologist and the author of the multi-million copy bestseller "The story of my life"',
                myKey: 'main',
            }
        }
    }
}
</script>
<template>
    <main id="site_main">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center my-5">
                    <jumbotron :title="jumbo.title" :content="jumbo.content" :myKey="jumbo.myKey"></jumbotron>
                </div>
            </div>
        </div>
        <section class="bg_dawn-pink py-5 mt-5">
            <logos-list></logos-list>
        </section>
        <section class="first_banner pt-5">
            <banner-item></banner-item>
        </section>
        <section class="critics mt-5">
            <articles-and-critics></articles-and-critics>
        </section>
        <section class="upcoming-events bg_dawn-pink py-5">
            <div class="container">
                <div class="heading text-center">
                    <h1 class="font-pt-serif">Upcoming Events</h1>
                    <h5 class="text-uppercase text_primary mt-3">meet the author in person</h5>
                </div>
                <div class="row row-cols-1 row-cols-3">
                    <div class="col"></div>
                    <div class="col"></div>
                    <div class="col"></div>
                </div>
            </div>
        </section>



    </main>
</template>
<style>

</style>