<script>
import Jumbotron from './JumboItem.vue'
import LogosList from './LogosList.vue'
import BannerItem from './BannerItem.vue'
import CriticsItem from './CriticsItem.vue'
import EventsLayout from './EventsLayout.vue'
import IntoAuthorLayout from './IntoAuthorLayout.vue'
import ArticlesItem from './ArticlesItem.vue'
import { store } from '../../store.js'
export default {
    name: 'AppMain',
    components: {
        Jumbotron, LogosList, BannerItem, CriticsItem, EventsLayout, IntoAuthorLayout, ArticlesItem
    },
    data() {
        return {
            store,
            jumbo: {
                title: 'More About Damon Vaughn',
                content: 'Damon Vaughn is a professor of psychology at the University of Toronto, a clinical psychologist and the author of the multi-million copy bestseller "The story of my life"',
                myKey: 'main',
            },
            first_banner: {
                title: 'New AudioBook',
                subtitle: 'No time to read? No problem. Listen to it',
                paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquid ratione enim labore repellat molestiae hic perspiciatis sed, ab dolorem.',
                myKey: 'first'
            },
            second_banner: {
                title: 'Subscribe To My Newsletter',
                subtitle: 'Be notified about book signing tour dates',
                paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquid ratione.',
                myKey: 'second'
            },
        }
    }
}
</script>
<template>
    <main id="site_main">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center my-5">
                    <jumbotron :title="jumbo.title" :content="jumbo.content" :myKey="jumbo.myKey">
                    </jumbotron>
                </div>
            </div>
        </div>
        <section class="bg_dawn-pink py-5 mt-5">
            <logos-list></logos-list>
        </section>
        <section class="first_banner  position-relative">
            <banner-item :banner="first_banner" :myKey="first_banner.myKey"></banner-item>
        </section>
        <section class="critics my-5">
            <critics-item></critics-item>
        </section>
        <section class="upcoming-events bg_dawn-pink py-5">
            <events-layout></events-layout>
        </section>
        <section class="second_banner position-relative">
            <banner-item :banner="second_banner" :myKey="second_banner.myKey"></banner-item>
        </section>
        <section class="into-author py-5 my-5">
            <into-author-layout></into-author-layout>
        </section>
        <section class="articles py-5 bg_dawn-pink">
            <articles-item></articles-item>
        </section>
    </main>
</template>
<style>

</style>