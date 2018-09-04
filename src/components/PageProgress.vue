<template>
<div v-scroll="onScroll" class="page-progress">
    <v-progress-circular color="#3233cc" :width="5" :size="50" :value="scroll"></v-progress-circular>
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


