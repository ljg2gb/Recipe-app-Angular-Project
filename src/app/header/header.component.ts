import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navigatePages= new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  selectRecipes() {
    this.navigatePages.emit(true)
  }
  
  selectShoppingList() {
    this.navigatePages.emit(false)
  }
}
