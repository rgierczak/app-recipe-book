import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
import { Observable } from "rxjs/Rx";

//Type your firebase link here.
const firebaseLink = '';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'http://tinyurl.com/jzmeuv5', [
            new Ingredient('French Fries', 2),
            new Ingredient('Pork Meat', 1)
        ]),
        new Recipe('Summer Salad', 'Okayish', 'http://tinyurl.com/hzjofoz', [])
    ];

    constructor(private http: Http) {}

    getRecipies() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

    editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    }

    storeData(): Observable<any> {
        const body = JSON.stringify(this.recipes);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.post(`${firebaseLink}/recipes.json`, body, { headers });
    }

    fetchData() {

    }
}
