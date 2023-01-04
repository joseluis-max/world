<script setup lang="ts">

</script>

<template>
    <div class="signIn">
        <h1 class="signIn--title">Sign In</h1>
        <form class="signIn--form" action="">
            <input class="signIn--form--input signIn--form--input--text" type="text" name="" id="" placeholder="First Name">
            <input class="signIn--form--input signIn--form--input--text" type="text" name="" id="" placeholder="Last Name">
            <input class="signIn--form--input signIn--form--input--text" type="text" name="" id="" placeholder="Email">
            <input class="signIn--form--input signIn--form--input--text" type="text" name="" id="" placeholder="User Name">
            <input class="signIn--form--input signIn--form--input--text" type="password" name="" id="" placeholder="Password">
            <input class="signIn--form--input signIn--form--input--text" type="password" name="" id="" placeholder="Repeat Password">
            <div class="signIn--from--wrapper">
                <label class="signIn--form--label" for="birthDate">Birth Date</label>
                <input class="signIn--form--date signIn--form--input" type="date" name="" id="birthDate">
            </div>
            <div class="signIn--from--wrapper">
                <label class="" for="gender">Gender</label>
                <div>
                    <label class="signIn--form--input" for="M">Male</label>
                    <input class="signIn--form--input" type="radio" name="gender" value="m" id="M">
                    <label class="signIn--form--input" for="F">Female</label>
                    <input class="signIn--form--input" type="radio" name="gender" value="f" id="F">
                </div>
            </div>
            <button class="signIn--form--button" type="submit">Crate Account</button>
        </form>
    </div>
</template>

<style scoped>
@import '../assets/base.css';
.signIn {
    width: 30%;
    height: 100vh;
    padding: 20px;
    text-align: center;
    color: var(--color-text);
    background-color: var(--color-background-light);
    box-sizing: border-box;
}

.signIn--title {
    font-weight: bold;
    margin-bottom: 30px;
}

.signIn--form--input {
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    border: none;
}

.signIn--form--input--text {
    width: 100%;
    margin-bottom: 20px;
}

.signIn--from--wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.signIn--form--date {
    width: 50%;
}

.signIn--form--button {
    padding: 10px 20px;
    background-color: var(--color-primary);
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 10px gray;
    margin: 0px auto;
    margin: 20px 0px;
}

</style>