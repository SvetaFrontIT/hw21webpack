import $ from 'jquery';

export class PhotosView {
    constructor(config) {
        this.config = config;
        this.$gallery = $('.js-gallery');
    }
    getPhotoItem(photo) {
        return `<div class="card" album-id = "${photo.albumId} "id="${photo.id}"><img src="${photo.url}" class="card-img-top" alt="..."></div>`;
    }
    renderPhotos(response) {
        const photos = response.map(photo => this.getPhotoItem(photo));
        this.$gallery.html(photos);
    }
    clearPhotos() {
        this.$gallery.html('');
    }
}