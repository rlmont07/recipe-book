import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://coastguard.dodlive.mil/files/2014/04/unnamed-2.jpg'),
    new Recipe('Another Test Recipe', 'Another good recipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}