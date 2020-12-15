import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {FullMenuData, FullMenuItems, Menu} from "../model/menu";

@Component({
  selector: 'app-apirecipe',
  templateUrl: './apirecipe.component.html',
  styleUrls: ['./apirecipe.component.scss']
})
export class ApirecipeComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  Food: Menu = { recipe_title: undefined, recipe_category: undefined, recipe_cooktime: undefined, recipe_image: undefined, recipe_ingredients: undefined, recipe_instructions: undefined, recipe_preptime: undefined, recipe_price: undefined, recipe_servings: undefined };
  FullMenuResults: FullMenuItems[] = [{ id: undefined, title: undefined, image: undefined }];
  showCard = false;
  showCard2 = false;
  showCard3 = false;
  showCard4 = false;
  recipeID: string;
  mainCourse: string;
  sideDish: string;
  price: string;
  category: string;
  entreeItem: string;

  ViewMenu: FullMenuData[] = [{ id: undefined, name: undefined, img: undefined, category: undefined, price: undefined }];
  isE = false;
  isEd = false;


  ngOnInit(): void {
  }



  fullMenuGet() {
    this.isEd = true;

    this.apiService.getFullMenuItem(this.entreeItem).subscribe(response => {
      this.FullMenuResults = response.results;
    });
  }

  inputFullMenuItem(fullMenuItemID) {
    this.isE = true;
    this.apiService.getFood(fullMenuItemID).subscribe(response => {
      this.Food.recipe_title = response.title;
      this.Food.recipe_category = response.category;
      this.Food.recipe_cooktime = response.readyInMinutes;
      this.Food.recipe_image = response.image;
      this.Food.recipe_ingredients = response.extendedIngredients;
      this.Food.recipe_instructions = response.analyzedInstructions[0].steps;
      this.Food.recipe_servings = response.servings;
      this.Food.recipe_preptime = response.preptime;
      this.Food.recipe_price = response.price;
    });
  }







  fullMenuToggle() {

    this.showCard = true;
    this.showCard2 = false;
    this.showCard3 = false;
    this.showCard4 = false;
  }

  entreeMenuToggle() {
    this.showCard = false;
    this.showCard2 = true;
    this.showCard3 = false;
    this.showCard4 = false;
  }

  sideItemToggle() {
    this.showCard = false;
    this.showCard2 = false;
    this.showCard3 = true;
    this.showCard4 = false;
  }



}
