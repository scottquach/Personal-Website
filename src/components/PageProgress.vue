<template>
<div v-scroll="onScroll" class="page-progress">
    <v-progress-circular :value="scroll"></v-progress-circular>
</div>
</template>

<script>
export default {

    data: function() {
        return {
            scroll: 0
        }
    },


    methods: {
        onScroll (e) {
            this.scroll = 100 / (((document.body.scrollHeight - window.innerHeight) / document.documentElement.scrollTop)) 
            console.log(document.body.scrollHeight - window.innerHeight + "   " + document.documentElement.scrollTop + "   " + this.scroll);
        }
    }
}
</script>

<style scoepd>
    .page-progress {
        position: fixed;
        bottom: 25px;
        right: 25px;
    }
</style>


