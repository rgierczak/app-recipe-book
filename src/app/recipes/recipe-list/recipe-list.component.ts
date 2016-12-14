import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe';

@Component({
    selector: 'rb-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'http://tinyurl.com/jzmeuv5', []),
        new Recipe('Summer Salad', 'Okayish', 'http://tinyurl.com/hzjofoz', [])
    ];
    @Output() recipeSelected = new EventEmitter<Recipe>();

    constructor() {}
    ngOnInit() {}

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }
}
