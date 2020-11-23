import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ListComponent } from './shopping-list/list/list.component';
import { EditListComponent } from './shopping-list/edit-list/edit-list.component';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';
import { RecipeComponent } from './recipe-book/recipes/recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ListComponent,
    EditListComponent,
    RecipesComponent,
    RecipeComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
