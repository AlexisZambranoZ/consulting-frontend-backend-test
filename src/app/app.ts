import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { apiService } from './services/api.service';
import { ApiResponse } from './interfaces/product.interfaze';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {

  data: any
  firstProduct: any

  constructor(private apiService: apiService) { }
  protected readonly title = signal('test02');


  ngOnInit(): void {
    this.apiService.getUsers().subscribe(
      (res: ApiResponse) => {
        this.data = res;
        this.firstProduct = this.data.data[0].product;
        console.log('Primer producto:', this.firstProduct);
      },
      (error) => {
        console.error(error);
      }
    );

  }
}
