import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class DishService {

  constructor(
    private restangular: Restangular,
    private http: Http,
    private processHttpmsgService: ProcessHttpmsgService
  ) { }

  getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    return this.restangular.one('dishes', id);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList( {featured: true} )
      .map(dishes => dishes[0]);
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => dishes.map(dish => dish.id) );
  }
}
