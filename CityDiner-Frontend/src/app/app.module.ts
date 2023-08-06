import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './omponents/parts/header/header.component';
import { HomeComponent } from './omponents/page/home/home.component';
import { SearchbarComponent } from './omponents/parts/searchbar/searchbar.component';
import { FoodComponent } from './omponents/page/food/food.component';
import { FilterComponent } from './omponents/parts/filter/filter.component';
import { FoodViewComponent } from './omponents/page/food-view/food-view.component';
import { StoreComponent } from './omponents/page/store/store.component';
import { TitleComponent } from './omponents/parts/title/title.component';
import { NotFoundComponent } from './omponents/parts/not-found/not-found.component';
import { LoginModule } from './login/login.module';
import { UserRegisterComponent } from './omponents/page/user-register/user-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './omponents/parts/loading/loading.component';
import { RestaurantComponent } from './omponents/page/restaurant/restaurant.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'food', component: FoodComponent },
  { path: 'search/:searchTerm', component: FoodComponent },
  { path: 'category/:cat', component: FoodComponent },
  { path: 'food/:foodid', component: FoodViewComponent },
  { path: 'store', component: StoreComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'login', loadChildren: () => LoginModule },
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchbarComponent,
    FoodComponent,
    FilterComponent,
    FoodViewComponent,
    TitleComponent,
    StoreComponent,
    NotFoundComponent,
    UserRegisterComponent,
    LoadingComponent,
    RestaurantComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
