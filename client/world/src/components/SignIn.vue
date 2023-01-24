<script setup lang="ts">
import { ref, type Ref } from "vue";

const firstName: Ref<string> = ref('');
const lastName: Ref<string> = ref('');
const email: Ref<string> = ref('');
const userName: Ref<string> = ref('');
const password: Ref<string> = ref('');
const birthDate: Ref<string> = ref('');
const gender: Ref<string> = ref('');

const handlerRegistration = async (ev: Event) => {
    ev.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/world/api/v1/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                userName: userName.value,
                password: password.value,
                birthDate: birthDate.value,
                gender: gender.value,
                age: new Date().getFullYear() - parseInt(birthDate.value.split("/")[0])
            })
        })

        if (response.status === 200 && response.ok) {
            const data = await response.json();
            console.log(data.msg);
        } else {
            const data = await response.json();
            console.log(data.msg);
        }
    } catch (error) {
        console.log(error);
        console.log('Service not found !')
    }
};

</script>

<template>
    <div class="signIn">
        <h1 class="signIn--title">Sign In</h1>
        <form class="signIn--form" action="">
            <input
                class="signIn--form--input signIn--form--input--text"
                type="text"
                v-model="firstName"
                name=""
                id=""
                placeholder="First Name"
            >
            <input
                class="signIn--form--input signIn--form--input--text"
                type="text"
                name=""
                v-model="lastName"
                id=""
                placeholder="Last Name"
            >
            <input
                class="signIn--form--input signIn--form--input--text"
                type="text"
                v-model="email"
                name=""
                id=""
                placeholder="Email"
            >
            <input
                class="signIn--form--input signIn--form--input--text"
                type="text"
                v-model="userName"
                name=""
                id=""
                placeholder="User Name"
            >
            <input
                class="signIn--form--input signIn--form--input--text"
                type="password"
                v-model="password"
                name=""
                id=""
                placeholder="Password"
            >
            <!-- <input
                class="signIn--form--input signIn--form--input--text"
                type="password"
                name=""
                id=""
                placeholder="Repeat Password"
            > -->
            <div
                class="signIn--from--wrapper">
                <label class="signIn--form--label" for="birthDate">Birth Date</label>
                <input class="signIn--form--date signIn--form--input" v-model="birthDate" type="date" name="" id="birthDate">
            </div>
            <div class="signIn--from--wrapper">
                <label class="" for="gender">Gender</label>
                <div>
                    <label class="signIn--form--input" for="M">Male</label>
                    <input class="signIn--form--input" v-model="gender" type="radio" name="gender" value="m" id="M">
                    <label class="signIn--form--input" for="F">Female</label>
                    <input class="signIn--form--input" v-model="gender" type="radio" name="gender" value="f" id="F">
                </div>
            </div>
            <button class="signIn--form--button" @click="handlerRegistration" type="submit">Crate Account</button>
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