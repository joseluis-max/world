export default class Publication {
    id: Number;
    content: String;
    user: Number;
    images: Array<any>;
    videos: Array<any>;

    constructor (id: Number, content: String, user: Number, images: Array<any>, videos: Array<any>) {
        this.id = id;
        this.content = content;
        this.user = user;
        this.images = images;
        this.videos = videos;
    }
}
