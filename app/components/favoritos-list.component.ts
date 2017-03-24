import { Component } from '@angular/core';

@Component({
    selector: 'favoritos-list',
    templateUrl: 'app/views/favoritos-list.html'
})

export class FavoritosListComponent {
    public title: string;
    public favoritos: Array<string>;
    public favoritosVisibles: boolean;
    public color: string;

    constructor(){
        this.title = 'Listado de marcadores';
        this.favoritos = ['google.com', 'youtube.com', 'twitter.com', 'facebook.com'];
        this.favoritosVisibles = false;
    }

    showFavoritos() {
        this.favoritosVisibles = true;
    }

    hideFavoritos() {
        this.favoritosVisibles = false;
    }

    changeColor() {
        this.color = "red"
    }
}