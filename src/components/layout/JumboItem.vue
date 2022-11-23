<script>
export default {
    name: 'JumboItem',
    props: {
        title: String,
        content: String,
        myKey: String,
    }
}
</script>
<template>
    <div class="jumbo">
        <h2 class="jumbo-title font-script">{{ title }}</h2>
        <p :class="myKey === 'header' ? 'jumbo-header-p text-white font-pt-serif' : 'jumbo-main-p p-2'">{{ content }}
        </p>
        <span v-if="myKey === 'header'" class="caption d-block">
            <i>- The New York Times</i>
        </span>
        <div v-if="myKey === 'header'" class="next-prev d-flex mt-2">
            <div class="btn ms_btn-jumbo-header prev  my-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
            </div>
            <div class="btn ms_btn-jumbo-header next my-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </div>
        </div>
        <div class="btn ms_btn-jumbo-main ms_btn-large mt-4" v-else>Meet the autor</div>

    </div>
</template>
<style>

</style>