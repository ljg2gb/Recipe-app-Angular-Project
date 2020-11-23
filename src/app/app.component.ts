import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';
  recipesSelected: boolean = true

  onNavigation(isRecipe: boolean) {
    if (isRecipe === true) {
      this.recipesSelected = true
    } else {
      this.recipesSelected = false
    }
  }
}
