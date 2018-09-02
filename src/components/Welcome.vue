<template>
    <div class="welcome">
        <h1 class="welcome__title">Hello there!</h1>

        <h2 class="welcome__summary">
            I'm
            <span id="name">Scott Quach</span>,
             a Software Engineer with a passion for 
            Android development focused on building cross platform solutions
        </h2>

        <h3 class="welcome__contact">
            Care to chat?
            <a href="mailto:scottqglobal@gmail.com" target="_blank">scottqglobal@gmail.com</a>
            </h3>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .welcome {
        padding: 120px 150px;
        margin: 0px;
        height: 100vh;
        text-align: start;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 2rem;
    }

    .welcome__title {
        font-weight: 250;
    }

    .welcome__summary {
        max-width: 750px;
        font-weight: 250;
        line-height: 1.25;
    }

    .welcome__title {
        font-weight: 250
    }

    .welcome__contact {
        font-weight: 250;
    }

    #name {
        font-weight: 700;
    }
</style>

