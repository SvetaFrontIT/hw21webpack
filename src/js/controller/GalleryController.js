import $ from 'jquery';
import { AlbumsModel } from '../model/AlbumsModel.js'
import { PhotosModel } from '../model/PhotosModel.js'
import { GeneralView } from '../view/GeneralView.js'
import { AlbumsView } from '../view/AlbumsView.js'
import { PhotosView } from '../view/PhotosView.js'

export class GalleryController {
    constructor() {
        this.generalView = new GeneralView();
        this.init();
        this.photosView = new PhotosView();
        this.albumsView = new AlbumsView();
        this.photosModel = new PhotosModel();
        this.albumsModel = new AlbumsModel();
        this.$albumsList = $('.js-album-list');

    }
    async init() {
        await this.generalView.createGalleryContainer()
        this.getAlbums();
        this.createAlbumEventListener();
    }

    async getAlbums() {
        const request = await this.albumsModel.sendAlbumsRequest();
        this.albumsView.renderAlbums(request);
        this.getFirstAlbum()
    }

    async getFirstAlbum() {
        const $album = $('.js-album:first');
        this.getPhotos($album.attr('id'))
    }

    async getPhotos(albumID) {
        const photos = await this.photosModel.sendPhotosRequest(albumID);
        this.photosView.renderPhotos(photos);
    }
    async createAlbumEventListener() {
        this.$albumsList.on('click', (event) => {
            if (event.target.classList.contains('js-album')) {
                this.photosView.clearPhotos();
                this.getPhotos(event.target.id);
            }
        });
    }
}