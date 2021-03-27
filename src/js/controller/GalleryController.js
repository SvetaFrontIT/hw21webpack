import $ from 'jquery';
import { AlbumsModel } from '../model/AlbumsModel.js'
import { PhotosModel } from '../model/PhotosModel.js'
import { GeneralView } from '../view/GeneralView.js'
import { AlbumsView } from '../view/AlbumsView.js'
import { PhotosView } from '../view/PhotosView.js'

export class GalleryController {
    constructor() {
        this.generalView = new GeneralView();
        this.photosModel = new PhotosModel();
        this.albumsModel = new AlbumsModel();
        this.init();
        this.photosView = new PhotosView();
        this.albumsView = new AlbumsView({
            clearPhotos: () => this.clearPhotos(),
            getPhotos: (albumID) => this.getPhotos(albumID),
        });
        this.$albumsList = $('.js-album-list');
        this.albumsView.createAlbumEventListener();
    }
    init() {
        this.generalView.createGalleryContainer()
        this.getAlbums();
    }

    async getAlbums() {
        const albums = await this.albumsModel.sendAlbumsRequest();
        this.albumsView.renderAlbums(albums);
        this.getFirstAlbum()
    }

    getFirstAlbum() {
        const $album = $('.js-album:first');
        this.getPhotos($album.attr('id'))
    }

    async getPhotos(albumID) {
        const potos = await this.photosModel.sendPhotosRequest(albumID);
        this.photosView.renderPhotos(potos);
    }

    clearPhotos() {
        this.photosView.clearPhotos();
        this.photosModel.clearPhotos();
    }
}