export class PhotosModel {
    sendPhotosRequest(albumID) {
        return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`)
            .then((response) => response.json());
    }
}