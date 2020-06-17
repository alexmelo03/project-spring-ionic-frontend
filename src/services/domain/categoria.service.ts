import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { findLocaleData } from "@angular/common/src/i18n/locale_data_api";
import { API_CONFIG } from "../../config/api.config";
import { CategoriaDTO } from "../../models/categoria.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CategoriaService {

    constructor(public http: HttpClient) {

    }

    findAll() : Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }

}

