<template>
    <div class="story">
        <h3 class="story__title">My Story</h3> 
        <p class="story__content">
            Currently I am a <span class="story__content--bold">student</span> learning from some of the most interesting and talented people in the field.

        </p>
        <p class="story__content">
            Motivated by <span class="story__content--bold">turning ideas into reality</span>, I was drawn to softwares low barrier of entry and absurd amount of learning material outside of traditional schooling. 
            As I continue to <span class="story__content--bold">learn through passion projects</span> my focus has been to gain a <span class="story__content--bold">full stack</span> understanding of how to provide the user with the best experience from the UI to 
            the cloud backend. 
        </p>

        <p class="story__content">
            When StackOverflow searches go nowhere, I enjoy playing video games and a casual round of tennis. With a sip of <span class="story__content--bold">boba</span> 🥤 to top it all off. 
        </p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .story {
        padding: 100px 150px;
        font-size: 1.5rem;
        font-weight: 150;    
    }

    .story__title{
        margin-bottom: 25px;
        letter-spacing: 2px;
        text-transform: uppercase; 
        color: #3233CC;
    }

    .story__content {
        max-width: 60%;
        font-size: 1.60rem;
        font-weight: 300;
        /* line-height: 1.25; */
    }

    .story__content--bold {
        /* font-weight: 700; */
        /* padding: 2px; */
        background-color: #DBE2E7;
    }
</style>
