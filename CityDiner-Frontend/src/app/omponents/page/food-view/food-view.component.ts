import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServService } from 'src/app/service/cart-serv.service';
import { FoodService } from 'src/app/service/food.service';
import { Food } from 'src/app/shared/models/Interface';

@Component({
  selector: 'app-food-view',
  templateUrl: './food-view.component.html',
  styleUrls: ['./food-view.component.scss']
})
export class FoodViewComponent implements OnInit {

  foods: any
  loading: boolean = true

  imageUrl = 'https://stormid.com/university-study/static/img/ppc-st-andrews.jpg'

  constructor(private foodServ: FoodService, activateRoute: ActivatedRoute,
    private cartService: CartServService, private route: Router) {
    activateRoute.params.subscribe(params => {
      this.foodServ.getFoodbyId(params['foodid']).subscribe((res: Food) => {
        this.foods = res
        this.loading = false

      })
    })
  }

  ngOnInit() {
  }

  /**@description Function for add Food  to cart and navigate to Store page */
  AddToCart() {
    this.cartService.addToCart(this.foods)
    this.route.navigateByUrl('/store')
  }

}
