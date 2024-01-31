import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent implements OnInit{
  toggled: any = 1;
  constructor(){
  }

  ngOnInit(): void {
    
  }
  toggle(){
    const sidebarElement = document.getElementById('sidebar');
    if (sidebarElement) {
      if (this.toggled) {
        sidebarElement.style.width = '0';
        this.toggled = 0;
      } else {
        sidebarElement.style.width = '240px';
        this.toggled = 1;
      }
    }

  }

}
