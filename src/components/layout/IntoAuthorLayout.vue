<script>
export default {
    name: 'IntoAuthorLayout',
    methods: {
        getImageUrl(name) {
            return new URL(`../../assets/img/${name}`, import.meta.url).href
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="heading text-center">
            <h1 class="font-pt-serif">Dig A Little Deeper Into Damon Vaughn</h1>
            <h5 class="text-uppercase text_primary mt-3">Find out more about the author himself</h5>
        </div>
        <div class="row row-cols-1 row-cols-3 mt-5 gx-5">
            <div class="col">
                <div class="ms_card">
                    <div class="layover"></div>
                    <img :src="getImageUrl('box-1.jpg')" alt="">
                    <div class="content bg_white text-center p-4">
                        <h3 class="pb-2">About Me</h3>
                        <hr class="w-25 my-3">
                        <spam class="text_primary py-2">Lorem ipsum dolor sit amet.</spam>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="ms_card">
                    <div class="layover"></div>
                    <img :src="getImageUrl('box-4.jpg')" alt="">
                    <div class="content bg_white text-center p-4">
                        <h3 class="pb-2">My Latest Book</h3>
                        <hr class="w-25 my-3">
                        <spam class="text_primary py-2">Lorem ipsum dolor sit amet.</spam>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="ms_card">
                    <div class="layover"></div>
                    <img :src="getImageUrl('box-3.jpg')" alt="">
                    <div class="content bg_white text-center p-4">
                        <h3 class="pb-2">Book Signing</h3>
                        <hr class="w-25 my-3">
                        <spam class="text_primary py-2">Lorem ipsum dolor sit amet.</spam>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<style>

</style>