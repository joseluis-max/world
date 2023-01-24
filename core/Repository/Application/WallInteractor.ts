import Database from '../DatabaseRepository';
import Publication from './Domain/Publication';

export default class WallInteracator {
    database: Database;
    constructor (db: Database) {
        this.database = db;
    }

    async uploadPublication(content: String, date: Date, user: Number, listImages: Array<ArrayBuffer>, listVideos: Array<ArrayBuffer>) {
        let response = await this.database.uploadPublication(content, user, date, listImages, listVideos);
        return response;
    }

    async listPublication() {
        let listPublication = [];
        let rows = [];
        let images;
        let videos;

        let response = await this.database.getPublication();
        rows = response.rows;

        for (const row of rows) {
            let response = await this.database.getImages(row.id);
            images = response.rows;
            response = await this.database.getVideos(row.id);
            videos = response.rows;
            
            let publication = new Publication(row.id, row.content, row.user, images, videos);
            listPublication.push(publication);
        }
        return listPublication;
    }
}
