import $ from 'jquery';

export class AlbumsView {
    constructor(config) {
        this.config = config;
        this.$albumsList = $('.js-album-list');
    }
    getAlbumItem(album) {
        return `<a href="#" class="list-group-item list-group-item-action list-group-item-primary js-album" id="${album.id}">${album.title}</a>`
    }
    renderAlbums(response) {
        const album = response.map(album => this.getAlbumItem(album));
        this.$albumsList.html(album);
    }
}