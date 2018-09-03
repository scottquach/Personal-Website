<template>
    <div class="education">
        <h3 class="education__title">Education</h3>
        <div class="school">
            <div class="school__name">University of Washington Bothell</div>
            <div class="school__degree">Bachelors of Science in Computer Science and Software Engineering</div>
            <v-chip class="school__graduation-date" color="#3233CC" text-color="white">Graduating 2020</v-chip>
            <!-- <div class="school__graduation-date">Graduating 2020</div> -->
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .education {
        padding: 100px 150px;
        font-size: 1.50rem;
        font-weight: 150;
    }

    .education__title {
        margin-bottom: 25px;
        letter-spacing: 2px;
        text-transform: uppercase; 
        color: #3233CC;
    }

    .school {

    }

    .school__name {
        letter-spacing: 0.75px;
        margin-bottom: 5px;
        font-weight: 700;
    }

    .school__degree {
        font-family: 'Inconsolata', monospace;
    }

    .school__graduation-date {
        font-size: 1.20rem;
        font-weight: 500;
        margin-top: 5px;
    }
</style>
