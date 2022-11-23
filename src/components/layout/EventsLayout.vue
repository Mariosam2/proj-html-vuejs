<script>
export default {
    name: 'EventsLayout',
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
            <h1 class="font-pt-serif">Upcoming Events</h1>
            <h5 class="text-uppercase text_primary mt-3">meet the author in person</h5>
        </div>
        <div class="row row-cols-1 row-cols-3 mt-5">
            <div class="col ms_card d-flex flex-column">
                <img :src="getImageUrl('event-05-1200x719.jpg')" alt="">
                <div class="content bg_white text-center p-4">
                    <h3 class="pb-4 border-bottom">Chicago Book Signin</h3>
                    <p class="caption py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, ex.
                        Pariatur blanditiis perferendis vitae iure perspiciatis velit nisi similique sunt.</p>
                </div>
            </div>
            <div class="col ms_card d-flex flex-column">
                <img :src="getImageUrl('event-04-1200x719.jpg')" alt="">
                <div class="content bg_white text-center p-4">
                    <h3 class="pb-4 border-bottom">Meet & Greet With Amanda</h3>
                    <p class="caption py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, ex.
                        Pariatur blanditiis perferendis vitae iure perspiciatis velit nisi similique sunt.</p>
                </div>
            </div>
            <div class="col ms_card d-flex flex-column">
                <img :src="getImageUrl('event-07-1200x719.jpg')" alt="">
                <div class="content bg_white text-center p-4">
                    <h3 class="pb-4 border-bottom">Open Book: Dialogues</h3>
                    <p class="caption py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, ex.
                        Pariatur blanditiis perferendis vitae iure perspiciatis velit nisi similique sunt.</p>
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