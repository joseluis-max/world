<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref } from "vue";

export type FileEventTarget = EventTarget & { files: FileList };

const content = ref();
const listImages: (string | ArrayBuffer | null)[] = [];
const listVideos: (string | ArrayBuffer | null)[] = [];

const onUploadImages = (ev: Event) => {
    const target: HTMLInputElement | null = ev.target as HTMLInputElement;
    if (target.files != null) {
        for (const file of target.files) {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
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
            fileReader.readAsArrayBuffer(file);
            fileReader.onloadend = () => {
                listVideos.push(fileReader.result);
            }
        }
    }
}

const onClickUpload = (ev: Event) => {
    ev.preventDefault();
    console.log(listImages);
    console.log(listVideos);
    console.log(content);
}

</script>

<template>
    <Header />
    
    <div class="wall">
        <div class="wall--wrapper--form">
            <form class="wall--form" action="">
                <textarea class="wall--form--text" v-model="content" name="" id="" cols="100" rows="10" placeholder="Write here... !"></textarea>
                <input class="wall-form--file button" @change="onUploadImages"  type="file" name="" id="image" accept="image/png, image/jpeg" multiple>
                <input class="wall-form--file button" @change="onUploadVideos" type="file" name="" id="videos" accept=".video/mp4" multiple>
                <button class="wall--form--button button" @click="onClickUpload"  type="submit">Upload</button>
            </form>
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
</style>