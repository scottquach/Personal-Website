<template>
    <div class="footer">
        <div>
            <div class="footer__created">Created by Scott Quach 2018 ✏️</div>
            <div class="footer__inspired">Inspired by Brittany Chiang 💡</div>
        </div>

        <div class="footer-links">
            <a href="mailto:scottqglobal@gmail.com" target="_blank">email</a>
            <a href="https://www.linkedin.com/in/scott-quach/" target="_blank">LinkedIn</a>
            <a href="https://github.com/scottquach" target="_blank">GitHub</a>
            <a href="https://play.google.com/store/apps/dev?id=8413458930040454334" target="_blank">Play Store</a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
    .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 50px;
    padding-left: 150px;
    padding-right: 150px;
    margin-top: 50px;
    font-size: 1.15rem;
    line-height: 1.5;
    }

    .footer__created {
    font-weight: 700;
    }

    .footer__inspired {
    font-weight: 700;
    }

    .footer__links {
    display: flex;
    justify-content: space-around;
    justify-self: flex-end;
    }

    a {
    color: #3233cc;
    margin: 15px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    }
</style>
