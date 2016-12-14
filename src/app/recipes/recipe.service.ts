import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'http://tinyurl.com/jzmeuv5', []),
        new Recipe('Summer Salad', 'Okayish', 'http://tinyurl.com/hzjofoz', [])
    ];

    constructor() {}

    getRecipies() {
        return this.recipes;
    }
}
