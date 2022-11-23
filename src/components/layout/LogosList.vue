<script>
import { store } from '../../store.js'
export default {
    name: 'LogosList',
    data() {
        return {
            store,
            logos: [
                {
                    image: 'ebay-logotan-2x-600x197.png'
                },
                {
                    image: 'audible-logotan-2x-600x197.png'
                },
                {
                    image: 'bb-logotan-2x-600x197.png'
                },
                {
                    image: 'kindlefire-logotan-2x-600x197.png'
                },
            ]
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-xl-4 logos">
            <div class="col logo" v-for="logo in logos">
                <img :src="store.getImageUrl(logo.image)" alt="" />
            </div>
        </div>
    </div>
</template>
<style>

</style>