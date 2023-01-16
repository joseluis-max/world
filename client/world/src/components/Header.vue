<script setup lang="ts">
import router from '@/router';

const handlerLogOut = async () => {
    const token: string = sessionStorage.getItem('token');
    try {
        const response: Response = await fetch('http://localhost:3000/world/api/v1/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token,
            },
        });

        if (response.status === 200 && response.ok) {
            const data = await response.json();
            localStorage.setItem('user', data.user);
            sessionStorage.setItem('token', data.jsonwebtoken);
            router.push('/');
        } else {
            console.log("Invalid credentials !");
        }
    } catch (err) {
        console.log("🚀 ~ file: Header.vue:7 ~ handlerLogOut ~ err", err)
        
    }
};

</script>

<template>
    <header class="header">
        <h1 class="header--title title">World</h1>
        
        <nav class="header--menu">
            <li class="header--link">
                <RouterLink to="/wall">Wall</RouterLink>
            </li>
            <li class="header--link">
                <RouterLink to="/profile">profile</RouterLink>
            </li>
        </nav>

        <button @click="handlerLogOut" type="button" class="header--logout">Log Out</button>

    </header>

</template>

<style scoped>
@import '../assets/base.css';

.header {
    display: flex;
    height: 70px;
}

.header--title {
    width: 100px;
    height: 50px;
    text-align: center;
    margin: 10px 0px 10px 50px;
}
.header--menu {
    display: flex;
    margin-left: 350px;
    align-items: center;
}

.header--link {
    list-style: none;
    margin: 0px 30px;
    color: var(--color-text-dark);
}

.header--link:hover {
    text-decoration: underline;
    cursor: pointer;
    color: var(--color-text-dark);
}


</style>