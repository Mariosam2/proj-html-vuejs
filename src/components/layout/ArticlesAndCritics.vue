<script>
export default {
    name: 'ArticlesAndCritics',
    methods: {
        getImageUrl(name) {
            return new URL(`../../assets/img/${name}`, import.meta.url).href
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="heading d-flex">
            <div class="headers">
                <h1 class="font-pt-serif my-3">What The Critics Say</h1>
                <h5 class="text-dark-blue text-uppercase my-3">Testimonials from around the world</h5>
            </div>
            <button class="btn  bg_primary text-white ms_btn-large ms-auto">Read All Testimonials</button>
        </div>



        <div class="row gx-5">
            <div class="col-12 col-xl-7 bg-testimonial position-relative d-flex">
                <div class="layover"></div>
                <div class="content align-self-center">
                    <h3 class="font-pt-serif mb-5 pb-5 border-bottom">Best Author of His Generation</h3>
                    <h5 class="fw-semibold">This book will change your perspective on life</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptatibus ducimus
                        quasi
                        doloremque totam dicta tenetur enim quo veritatis! Iusto!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est pariatur quibusdam!
                        Minus
                        quibusdam itaque blanditiis deleniti nostrum ab nulla.</p>
                    <span class="d-flex align-items-center fw-bold py-3"><img class="me-3"
                            :src="getImageUrl('nytimes-logo-white-xsmall.png')" alt="">Justine
                        Kilpatrick, <span class="text-dark-blue ms-1">The
                            New York Times</span></span>
                </div>

            </div>
            <div class="col-12 col-xl-5">
                <div class="critic text-center bg_dawn-pink p-5 my-3">
                    <h4 class="font-pt-serif">A True Masterpiece, Bravo!</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, sunt maiores! Mollitia
                        accusantium eligendi aliquam dolores eum officiis neque, incidunt sunt doloremque ex
                        est, possimus in! Id voluptas a fuga facilis reprehenderit quidem odit, deleniti, culpa
                        magni, quae ad eos explicabo doloribus sint libero at molestias ab asperiores voluptates
                        reiciendis?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="auto" fill="currentColor"
                        class="icon bi bi-caret-down-fill text_dawn-pink" viewBox="0 0 16 16">
                        <path
                            d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </div>
                <span class="d-flex align-items-center fw-bold caption py-3"><img class="me-3"
                        :src="getImageUrl('theguardian-xsmall.png')" alt="">Gerald Hendley, <span
                        class="text-dark fw-normal ms-1">The Guardian</span></span>
                <div class="critic text-center bg_dawn-pink p-5 my-3">
                    <h4 class="font-pt-serif">A Unique View On The World</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, sunt maiores! Mollitia
                        accusantium eligendi aliquam dolores eum officiis neque, incidunt sunt doloremque ex
                        est, possimus in! Id voluptas a fuga facilis reprehenderit quidem odit, deleniti, culpa
                        magni, quae ad eos explicabo doloribus sint libero at molestias ab asperiores voluptates
                        reiciendis?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="auto" fill="currentColor"
                        class="icon bi bi-caret-down-fill text_dawn-pink" viewBox="0 0 16 16">
                        <path
                            d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </div>
                <span class="d-flex align-items-center fw-bold py-3 caption"><img class="me-3"
                        :src="getImageUrl('globe-xsmall.png')" alt="">Mary Maxey, <span
                        class="text-dark fw-normal ms-1">The Globe And Mail</span></span>
            </div>

        </div>
    </div>
</template>
<style>

</style>