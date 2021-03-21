export class AlbumsModel {
    async sendAlbumsRequest() {
        return fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json());
    }
}