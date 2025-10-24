import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "../interfaces/product.interfaze";

@Injectable({
    providedIn: 'root'
})

export class apiService {

    constructor(
        private httclient: HttpClient
    ) { }

    getUsers(): Observable<ApiResponse> {
        return this.httclient.get<ApiResponse>("https://da-pw.tupide.mx/api/menu-mc/products/restaurant/10446");
    }

}
