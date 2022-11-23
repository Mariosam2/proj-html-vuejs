<script>
export default {
    name: 'ReviewsItem',
    data() {
        return {
            reviews: [
                {
                    content: 'Damon Vaughn is a professor of psychology at the University of Toronto, a clinical psychologist and the author of the multi-million copy bestseller "The story of my life"',
                    author: '- The New York Times'
                },
                {
                    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit fuga nemo molestiae ullam distinctio velit perferendis nihil sunt dicta obcaecati.',
                    author: '- The Guardian '
                },
                {
                    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit fuga nemo molestiae ullam distinctio velit perferendis nihil sunt dicta obcaecati.',
                    author: '- The Globe And Mail'
                },
            ],
            activeReview: 0,

        }
    },
    methods: {
        next() {
            let elements = this.$refs.reviews;
            this.activeReview++
            if (this.activeReview > elements.length - 1) {
                this.activeReview = 0;
            }
            elements[this.activeReview].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        },
        prev() {
            let elements = this.$refs.reviews;
            this.activeReview--
            if (this.activeReview < 0) {
                this.activeReview = elements.length - 1;
            }
            elements[this.activeReview].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
    },
    mounted() {
    }
}
</script>
<template>

    <div class="carousel_container">
        <div class="row flex-nowrap">
            <div v-for="review in reviews" ref="reviews" class="ms_carousel col-12">
                <p class="jumbo-header-p text-white font-pt-serif">
                    {{ review.content }}
                </p>

                <span class="caption d-block">
                    <i>{{ review.author }}</i>
                </span>
            </div>
        </div>

        <div class="next-prev d-flex mt-2">
            <div class="btn ms_btn-jumbo-header prev  my-3" @click="prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
            </div>
            <div class="btn ms_btn-jumbo-header next my-3" @click="next">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
.carousel_container {
    .row {
        overflow-x: scroll;
        scroll-snap-type: x mandatory;

        .ms_carousel {
            scroll-snap-align: end;
        }

    }

    .row::-webkit-scrollbar {
        display: none;
    }




}
</style>