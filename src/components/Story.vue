<template>
    <div class="story">
        <h3 class="story__title">My Story</h3> 
        <p class="story__content">
            Currently I am a student at the <a href="https://www.uwb.edu/">University of Washington Bothell</a> obtaining my
            Bachelors of Science in Computer Science and Software Engineering.

        </p>
        <p class="story__content">
            Motivated by turning ideas into reality, I was drawn to softwares low barrier of entry and absurd amount of learning material outside of traditional schooling. 
            As I continue to learn through passion projects my focus has been to gain a full stack understanding of how to provide the user with the best experience from the UI to 
            the cloud backend. 
        </p>

        <p class="story__content">
            When StackOverflow searches go nowhere, I enjoy playing video games and a casual round of tennis. 
        </p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .story {
        padding-left: 150px;
        font-size: 1.50rem;
        font-weight: 150;    
    }

    .story__title{
        margin-bottom: 25px;
        text-transform: uppercase; 
    }

    .story__content {
        max-width: 750px;
        font-weight: 150;
        font-size: 1.25rem;
        line-height: 1.35;
    }
</style>
