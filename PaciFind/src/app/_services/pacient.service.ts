import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pacient } from '../_models';

@Injectable({ providedIn: 'root' })
export class PacientService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Pacient[]>(`${environment.apiUrl}/pacient`);
    }

    add(pacient: Pacient) {
        return this.http.post(`${environment.apiUrl}/pacient/register`, pacient);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/pacient/${id}`);
    }
}