import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RECIPE_ROUTES } from "./recipes/recipes.routes";

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: RECIPE_ROUTES
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
