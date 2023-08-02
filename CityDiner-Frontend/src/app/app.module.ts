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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'food', component: FoodComponent },
  { path: 'search/:searchTerm', component: FoodComponent },
  { path: 'category/:cat', component: FoodComponent },
  { path: 'food/:foodid', component: FoodViewComponent },
  { path: 'store', component: StoreComponent }
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
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
