import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

//Type your firebase link here.
const firebaseLink = '';

@Injectable()
export class RecipeService {
    recipesChanged = new EventEmitter<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'http://tinyurl.com/jzmeuv5', [
            new Ingredient('French Fries', 2),
            new Ingredient('Pork Meat', 1)
        ]),
        new Recipe('Summer Salad', 'Okayish', 'http://tinyurl.com/hzjofoz', [])
    ];

    constructor(private http: Http) {
    }

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

        return this.http.put(`${firebaseLink}/recipes.json`, body, {headers});
    }

    fetchData(): any {
        return this.http.get(`${firebaseLink}/recipes.json`)
            .map((response: Response) => response.json())
            .subscribe(
                (data: Recipe[]) => {
                    this.recipes = data;
                    this.recipesChanged.emit(this.recipes);
                }
            );
    }
}
