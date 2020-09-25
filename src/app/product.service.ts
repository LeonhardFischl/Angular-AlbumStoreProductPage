import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
// import { Album } from './album';

@Injectable()
export class ProductService {

private _albumUrl = '../assets/album.json';
private album: any;

  constructor(private _http: Http) { }

  getAlbum(id: number) {
    this._http.get(this._albumUrl).map((response) => {
      this.album = response.json();
      return this.album;
    });
  }

}
