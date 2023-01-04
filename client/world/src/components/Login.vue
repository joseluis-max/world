<script setup lang="ts">

</script>

<template>
    <div class="login">
        <h1 class="login--title">World</h1>
        <form class="login--form" action="">
            <h4 class="login--form--title">Login</h4>
            <input class="login--form--input login--form--input--text" type="login_email" name="login_email" id="login_email" placeholder="Email">
            <input class="login--form--input login--form--input--text" type="password" name="login_password" id="login_password" placeholder="Password">
            <button class="login--form--button" type="submit">Sign In</button>
        </form>

        <div class="login--info">
            <div class="login--info--content">
                <h3 class="login--info--content-title">Welcome to World !</h3>
                <p class="login--info--content-text">World is a social network for share and know new things with all the world,
                    every post that you make is global and all the world can see it.
                    Enjoy discover new things, and new people !
                </p>
            </div>
            <figure>
                <img src="@/components/icons/world.svg" alt="">
            </figure>
        </div>
    </div>
</template>

<style scoped>
@import '../assets/base.css';
.login {
    width: 70%;
}

.login--title {
    margin: 20px;
    font-weight: bold;
    text-decoration: underline;
}

.login--form {    
    margin: 20px 20px;
}

.login--form--title {
    font-weight: bold;
    margin: 20px 0px;
}

.login--form--input {
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid gray;
}

.login--form--input--text {
    width: 300px;
    margin-right: 20px;
}

.login--form--button {
    padding: 10px 20px;
    background-color: var(--color-primary);
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 10px gray;
    margin: 0px auto;
    margin: 10px 0px;
}

.login--info--content {
    position: absolute;
    bottom: 20%;
    left: 5%;
    width: 200px ;
    z-index: 1;
}

.login--info--content-title {
    margin: 10px 0px;
    font-weight: bold;
    color: white;
}
.login--info--content-text {
    color: white;
}

.login--info {
    padding: 0px 20px;
}


</style>