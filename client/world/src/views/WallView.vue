<script setup lang="ts">
/// <reference path="../../typings/index.d.ts" />
import Header from "../components/Header.vue";
import { ref, onMounted } from "vue";

export type FileEventTarget = EventTarget & { files: FileList };

const content = ref();
let listPublication = ref();
const listImages: (string | ArrayBuffer | null)[] = [];
const listVideos: (string | ArrayBuffer | null)[] = [];
let token = sessionStorage.getItem('token');

const onUploadImages = (ev: Event) => {
    const target: HTMLInputElement | null = ev.target as HTMLInputElement;
    if (target.files != null) {
        for (const file of target.files) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onloadend = () => {
                listImages.push(fileReader.result);
            }
        }
    }
}

const onUploadVideos = (ev: Event) => {
    const target: HTMLInputElement | null = ev.target as HTMLInputElement;
    if (target.files != null) {
        for (const file of target.files) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onloadend = () => {
                listVideos.push(fileReader.result);
            }
        }
    }
}

const onClickUpload = async (ev: Event) => {
    ev.preventDefault();
    const headers = new Headers();
    if (token === null) token = "";
    headers.append('Content-Type', 'application/json');
    headers.append('authorization', token);
    const response = await fetch('http://localhost:3000/world/api/v1/publication/upload', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            content: content.value,
            user: 3,
            date: new Date(),
            listImages: listImages,
            listVideos: listVideos
        }),
    });
    console.log(response);
}

try {
    onMounted(async () => {
        const headers = new Headers();
        if (token === null) token = "";
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', token);
            const response = await fetch('http://localhost:3000/world/api/v1/publication/list', {
                method: 'GET',
                headers: headers,
        });
        console.log(response);
        const data = await response.json();
        console.dir(data);
        listPublication.value = data;

    });
} catch (error) {
    console.log(error);
}

</script>

<template>
    <Header />
    <div class="wall">
        <div class="wall--wrapper--form">
            <form class="wall--form">
                <textarea
                    class="wall--form--text"
                    v-model="content"
                    name=""
                    id=""
                    cols="100"
                    rows="10"
                    placeholder="Write here... !"
                ></textarea>
                <input
                    class="wall-form--file button"
                    @change="onUploadImages"
                    type="file"
                    name="images"
                    id="image"
                    accept="image/png, image/jpeg"
                    multiple
                >
                <input
                    class="wall-form--file button"
                    @change="onUploadVideos"
                    type="file"
                    name="videos"
                    id="videos"
                    accept=".video/mp4"
                    multiple
                >
                <input
                    class="wall--form--button button"
                    @click="onClickUpload"
                    type="submit"
                    value="Upload"
                />
            </form>
        </div>
        <div class="wall--wrapper--list">
            <div class="wall--list--publication" v-for="publication of listPublication" :key="publication.id">
                <div class="list--publication--media">
                    <div v-for="image of publication.images">
                        <img v-bind:src="`${image}`" alt="Image">
                    </div>
                    <div v-for="video of publication.videos">
                        <video controls>
                            <source v-bind:src="`${video}`" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="list--publication--content">
                    <h1>Title Publication</h1>
                    {{ publication.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wall {
    display: block;
}

.wall--wrapper--form {
    display: flex;
    justify-content: center;
    align-items: center;
}
.wall-form {
    display: block;
}

.wall--form--text {
    display: block;
    resize: none;
    margin-bottom: 10px;
}

.wall-form--file {
    margin-right: 10px;
}

input[type="file"]::file-selector-button {
    font-weight: bold;
    padding: 3px 5px;
}


.wall--form--button {
    margin-left: 156px;
    padding: 5px 15px;
}

.wall--wrapper--list {
    margin: 20px 280px;
}

.wall--list--publication {
    border-radius: 15px;
    width: 100%;
    margin: 10px 0px;
    display: flex;
    box-shadow: 0px 0px 20px gray;
    overflow: hidden;
}

.list--publication--media {

}

.list--publication--media div {
    height: 100%;
}
.list--publication--media img {
    max-width: 200px;
    min-height: 100%;
    object-fit: cover;
    display: block;
}

.list--publication--media video {
    width: 400px;
    height: 300px;
}

.list--publication--media img{
    widows: 150px;
    height: 150px;
}

.list--publication--content {
    padding: 10px;
}
</style>