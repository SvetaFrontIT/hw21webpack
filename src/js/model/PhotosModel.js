export class PhotosModel {
    constructor() {
        this.photos = [];
    }
    sendPhotosRequest(albumID) {
        return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`)
            .then((response) => response.json())
            .then((photos) => this.photos = photos);
    }
    clearPhotos() {
        this.photos = [];
    }
}