<script>
import { store } from '../../store.js'
export default {
    name: 'LogosList',
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-xl-4 logos">
            <div class="col logo">
                <img :src="store.getImageUrl('ebay-logotan-2x-600x197.png')" alt="" />
            </div>
            <div class="col logo">
                <img :src="store.getImageUrl('audible-logotan-2x-600x197.png')" alt="" />
            </div>
            <div class="col logo">
                <img :src="store.getImageUrl('bb-logotan-2x-600x197.png')" alt="" />
            </div>
            <div class="col logo">
                <img :src="store.getImageUrl('kindlefire-logotan-2x-600x197.png')" alt="" />
            </div>
        </div>
    </div>
</template>
<style>

</style>