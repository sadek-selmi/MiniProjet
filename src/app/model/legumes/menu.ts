export interface Menu {
  id?: number;
  recipe_title?: string;
  recipe_image?: string;
  recipe_category?: string;
  recipe_ingredients?: any[]; // Json stringify to make a Json next Json parse for user
  recipe_instructions?: any[]; // Json stringify to make a Json next Json parse for user
  recipe_cooktime?: number;
  recipe_preptime?: number;
  recipe_servings?: number;
  recipe_price?: string;
}

export interface MainMenu {
  menu: MenuItem;
}

export interface SideMenu {
  combomenu: SideItemMenu;
}

export interface MenuItem {
  name: string;
  img: string;
  category: string;
  ingredients: string;
  instructions: string;
  cooktime: number;
  preptime: number;
  servings: number;
  price: string;

}

export interface MainMenuResults {
  results?: any[];
}

export interface EntreeItemMenu {
  name: string;
  img: string;
  category: string;
  ingredients: string;
  instructions: string;
  cooktime: number;
  preptime: number;
  servings: number;
  price: string;
}

export interface SideItemMenu {
  name: string;
  img: string;
  category: string;
  ingredients: string;
  instructions: string;
  cooktime: number;
  preptime: number;
  servings: number;
  price: string;
}

export interface FullMenuItems {
  id: number;
  title: string;
  image: string;
}

export interface FullMenuData {
  id: number;
  name: string;
  img: string;
  category: string;
  price: number;
}
