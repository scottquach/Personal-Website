<template>
    <div class="experience">
        <h3 class="experience__title">Experience</h3> 

        <div class="experience-jobs-list">
            <div class="job"> 
                <div class="job-company-time">
                    <div class="job__company">Novo Nordisk</div>
                    <div>June - August 2018</div>
                </div>
                <div class="job__position">Device Connectivity Intern</div>
                <div class="job__skills-chip">
                    <v-chip small>AWS IoT</v-chip>
                    <v-chip small>Sigfox Network</v-chip>
                    <v-chip small>Cypress PSoC 4</v-chip>
                    <v-chip small>Vue.js</v-chip>
                </div>
            </div>

            <div class="job"> 
                <div class="job-company-time">
                    <div class="job__company">Accolade</div>
                    <div>June - August 2017</div>
                </div>
                <div class="job__position">Android Mobile Developer Intern</div>
                <div class="job__skills-chip"> 
                    <v-chip small>Java</v-chip>
                    <v-chip small>Android Studio</v-chip>
                    <v-chip small>GitHub</v-chip>
                    <v-chip small>JIRA</v-chip>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

    .experience {
        padding: 100px 150px;
        font-size: 1.50rem;
        font-weight: 150;   
    }

    .experience__title {
        margin-bottom: 25px;
        text-transform: uppercase; 
    }

    .experience-jobs-list {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .job {
        margin-bottom: 25px;
        line-height: 1.25;
        font-size: 1.25rem;
    }

    .job-company-time {
        width: 50%;
        display: flex;
        justify-content: space-between;
    }

    .job__company {
        font-weight: 700;
    }

    .job__position {
        font-weight: 100;
    }

    .job__description {

    }

    .job__skills-chip {
        margin: 0px;
    }


</style>
