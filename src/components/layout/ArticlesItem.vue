<script>
export default {
    name: 'ArticlesItem',
}
</script>
<template>
    <div class="container">
        <div class="heading d-flex">
            <div class="headers">
                <h1 class="font-pt-serif my-3">Recent Articles</h1>
                <h5 class="text-dark-blue text-uppercase my-3">Read the latest entries</h5>
            </div>
            <button class="btn  bg_primary text-white ms_btn-large ms-auto">All Articles</button>
        </div>
        <div class="row gx-5">
            <div class="col-12 col-xl-8">
                <div class="content ms_card">
                    <img src="../../assets/img/20-Tips-1200x706.jpg" alt="">
                    <h4>20 Creativity Tips</h4>
                    <small class=" d-block py-3 caption">By <span class="text-black">admin </span>| October 24th, 2019 |
                        Categories: <span class="text-black"> Event, Tips & Tricks</span></small>
                    <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est pariatur
                        quibusdam!
                        Minus
                        quibusdam itaque blanditiis deleniti nostrum ab nulla.</p>

                </div>


            </div>
            <div class="col-12 col-xl-4">
                <div class="ms_card">
                    <img src="../../assets/img/thumb-13-2x-700x441.jpg" alt="">
                    <h4>What's On Your Booklist?</h4>
                    <small class="caption">October 24th, 2019 | <span class="text-black">0 Comments</span></small>
                </div>
                <div class="ms_card">
                    <img src="../../assets/img/thumb-08-2x-700x441.jpg" alt="">
                    <h4>Istanbul Travel Guide</h4>
                    <small class="caption">October 24th, 2019 | <span class="text-black">0 Comments</span></small>
                </div>

            </div>

        </div>
    </div>

</template>
<style>

</style>