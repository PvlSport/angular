import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  dishErrMess: string;
  promoErrMess: string;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
      .subscribe(featuredDish => this.dish = featuredDish,
        errMess => this.dishErrMess = errMess);

    this.promotionservice.getFeaturedPromotion()
      .subscribe(featuredPromotion => this.promotion = featuredPromotion,
        errMess => this.promoErrMess = errMess);
  }

}
