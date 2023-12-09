import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  title = 'Hospital Pediatrico';

  visible(){
    var ul:any=document.querySelector(".dropdown");
    ul.classList.toggle("ul_visible");
  }
  salir(){
    var ul:any=document.querySelector(".dropdown");
    ul.classList.remove("ul_visible");
  }

}
