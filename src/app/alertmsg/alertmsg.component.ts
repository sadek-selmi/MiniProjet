import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {ApiService} from "../shared/api.service";
import { Menu, MainMenu, EntreeItemMenu, SideItemMenu, FullMenuItems, FullMenuData } from"../model/legumes/menu";

@Component({
  selector: 'app-alertmsg',
  templateUrl: './alertmsg.component.html',
  styleUrls: ['./alertmsg.component.scss']
})
export class AlertmsgComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  // tslint:disable-next-line:max-line-length
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
  MenuResults = [];
  SideMenuResults = [];
  // tslint:disable-next-line:max-line-length
  // EntreeMenu: MainMenu = { menu: { name: undefined, img: undefined, category: undefined, cooktime: undefined, ingredients: undefined, instructions: undefined, preptime: undefined, price: undefined, servings: undefined } };
  // tslint:disable-next-line:max-line-length
  SideMenu: SideItemMenu = { name: undefined, img: undefined, category: undefined, cooktime: undefined, ingredients: undefined, instructions: undefined, preptime: undefined, price: undefined, servings: undefined };
  ViewMenu: FullMenuData[] = [{ id: undefined, name: undefined, img: undefined, category: undefined, price: undefined }];
  isEditable = false;


  ngOnInit(): void {
  }

  // grab() {
  //   this.apiService.getFood(this.recipeID).subscribe(response => {
  //     console.log(response.title);
  //     this.Food.recipe_title = response.title;
  //     this.Food.recipe_category = response.category;
  //     this.Food.recipe_cooktime = response.readyInMinutes;
  //     this.Food.recipe_image = response.image;
  //     this.Food.recipe_ingredients = response.extendedIngredients;
  //     this.Food.recipe_instructions = response.analyzedInstructions[0].steps;
  //     this.Food.recipe_servings = response.servings;
  //     this.Food.recipe_preptime = response.preptime;
  //     this.Food.recipe_price = response.price;
  //   });
  // }

  fullMenuGet() {
    this.apiService.getFullMenuItem(this.entreeItem).subscribe(response => {
      this.FullMenuResults = response.results;
    });
  }

  inputFullMenuItem(fullMenuItemID) {
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

  findMainCourse() {
    this.apiService.getMainCourse(this.mainCourse).subscribe(response => {
      this.MenuResults = response.results;
    });
  }

  findSideDish() {
    console.log(this.sideDish);
    this.apiService.getSideDish(this.sideDish).subscribe(response => {
      console.log(response);
      this.SideMenuResults = response.results;
    });
  }

  postMenu() {
    // tslint:disable-next-line:prefer-const
    let menu: MainMenu = {
      menu: {
        name: this.Food.recipe_title,
        img: this.Food.recipe_image,
        category: this.category,
        ingredients: JSON.stringify(this.Food.recipe_ingredients),
        instructions: JSON.stringify(this.Food.recipe_instructions),
        cooktime: this.Food.recipe_cooktime,
        preptime: this.Food.recipe_preptime,
        servings: this.Food.recipe_servings,
        price: this.price
      }
    };

  }

  inputMainCourseItem(entreeID) {
    this.apiService.getEntreeItem(entreeID).subscribe(response => {
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

  inputSideItem(sideItemID) {
    this.apiService.getSideItem(sideItemID).subscribe(response => {
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

  editFullMenuToggle() {
    this.showCard = false;
    this.showCard2 = false;
    this.showCard3 = false;
    this.showCard4 = true;
  }

  pullFullMenu() {
    this.apiService.getMenu().subscribe(response => {
      this.ViewMenu = response;
    });
  }

  deleteCard(cardID) {
    this.apiService.deleteMenuItem(cardID).subscribe(response => {
      this.pullFullMenu()
    })
  }

  editCard() {
    this.isEditable = true
  }

  updateMenu(updateID, productUpdate) {
    this.apiService.updateMenuItems(updateID, productUpdate).subscribe(response => {
      this.isEditable = false
      this.pullFullMenu()
    })

  }
}
