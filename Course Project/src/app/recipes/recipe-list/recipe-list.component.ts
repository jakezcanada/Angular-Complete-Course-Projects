import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.kikkoman.com/homecook/search/recipe/img/00005163.jpg'),
    new Recipe('A Test Recipe', 'This is a test', 'https://www.kikkoman.com/homecook/search/recipe/img/00005163.jpg')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
