<script>
export default {
    name: 'LogosList',
    methods: {
        getImageUrl(name) {
            return new URL(`../../assets/img/${name}`, import.meta.url).href
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-xl-4 logos">
            <div class="col logo">
                <img :src="getImageUrl('ebay-logotan-2x-600x197.png')" alt="" />
            </div>
            <div class="col logo">
                <img :src="getImageUrl('audible-logotan-2x-600x197.png')" alt="" />
            </div>
            <div class="col logo">
                <img :src="getImageUrl('bb-logotan-2x-600x197.png')" alt="" />
            </div>
            <div class="col logo">
                <img :src="getImageUrl('kindlefire-logotan-2x-600x197.png')" alt="" />
            </div>
        </div>
    </div>
</template>
<style>

</style>