export class AlbumsModel {
    constructor() {
        this.albums = [];
    }
    async sendAlbumsRequest() {
        return fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((albums) => this.albums = albums);
    }
}