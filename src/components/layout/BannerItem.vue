<script>
export default {
    name: 'BannerItem',
    methods: {
        getImageUrl(name) {
            return new URL(`../../assets/img/${name}`, import.meta.url).href
        }
    }
}
</script>
<template>
    <div class="container pb-3 pb-xl-0">
        <div class="row justify-content-between gy-3">
            <div class="col-12 col-xl-6 pt-5 d-flex justify-content-end">
                <img class="banner_img" :src="getImageUrl('audible-app-2x-800x837.png')" alt="">
            </div>
            <div class="col-12 col-xl-5 text-center d-flex flex-column justify-content-center">
                <h1 class="font-pt-serif text-white mb-3">New Audiobook</h1>
                <h4 class="text-uppercase text_primary">No time to read? No problem. Listen to it</h4>
                <p class="caption px-3 py-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium
                    aliquid
                    ratione enim labore repellat molestiae hic perspiciatis sed, ab dolorem.</p>
                <div class="logos d-flex justify-content-center">
                    <div class="logo">
                        <img :src="getImageUrl('audible-logo.png')" alt="" />
                    </div>
                    <div class="logo">
                        <img :src="getImageUrl('bn-logo-tall.png')" alt="" />
                    </div>
                    <div class="logo">
                        <img :src="getImageUrl('kindle-logo-tall.png')" alt="" />
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