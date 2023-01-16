import Database from '../DatabaseRepository';
import Publication from './Domain/Publication';

export default class WallInteracator {
    database: Database;
    constructor (db: Database) {
        this.database = db;
    }
    
    async uploadPublication(content: String, date: Date, user: Number, _listImages: Array<ArrayBuffer>, _listVideos: Array<String>) {
        const publication = new Publication();
        console.log(typeof publication);
        const response = await this.database.uploadPublication(content, user, date, _listImages, _listVideos);
        return response;
    }
}