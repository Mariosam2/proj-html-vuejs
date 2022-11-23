<script>
export default {
    name: 'NavItem',
    data() {
        return {
            links: [
                {
                    link: '#',
                    name: 'Home',
                    icon: null,

                },
                {
                    link: '#',
                    name: 'About Me',
                    icon: null,
                },
                {
                    link: '#',
                    name: 'Testimonials',
                    icon: null,
                },
                {
                    link: '#',
                    name: 'My Blog',
                    icon: null,
                },
                {
                    link: '#',
                    name: 'Meetups',
                    icon: null,
                },
                {
                    link: '#',
                    name: 'Shop',
                    icon: null,
                },
                {
                    link: '#',
                    name: 'Contact Me',
                    icon: null,
                },
                {
                    link: '#',
                    name: null,
                    icon: {
                        path: 'M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z',
                        class: 'bi bi-cart-fill',
                    },
                },
            ]


        }
    }
}
</script>
<template>
    <nav class="navbar navbar-expand-lg ms_nav pe-5 pt-0">
        <div class="container-fluid">
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li v-for="link in links" class="nav-item ms_nav-item d-flex align-items-center">
                        <a v-if="link.name" class="nav-link active" aria-current="page" :href="link.link">{{ link.name
                        }}</a>
                        <a v-else class="nav-link active icon" aria-current="page" :href="link.link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                :class="link.icon.class" viewBox="0 0 16 16">
                                <path :d="link.icon.path" />
                            </svg>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
    <!-- /.ms_nav -->
</template>
<style>

</style>