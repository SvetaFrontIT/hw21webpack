import $ from 'jquery';

export class GeneralView {
    createGalleryContainer() {
        const $main = $('.main')
        return $main.prepend(`<div class="container">
                    <div class="row">
                        <div class="col-4">
                            <div class="list-group js-album-list"></div>
                        </div>
                        <div class="col-6 js-gallery"></div>
                    </div>
                </div>`);
    }

}