import $ from 'jquery';
export class AlbumsView {
    constructor(config) {
        this.config = config;
        this.$albumsList = $('.js-album-list');
        this.createAlbumEventListener();
    }
    getAlbumItem(album) {
        return `<a href="#" class="list-group-item list-group-item-action list-group-item-primary js-album" id="${album.id}">${album.title}</a>`
    }
    renderAlbums(response) {
        const album = response.map(album => this.getAlbumItem(album));
        this.$albumsList.html(album);
    }
    createAlbumEventListener() {
        this.$albumsList.on('click', (event) => {
            if (event.target.classList.contains('js-album')) {
                this.config.clearPhotos();
                this.config.getPhotos(event.target.id);
            }
        });
    }
}