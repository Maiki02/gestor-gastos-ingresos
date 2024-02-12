import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rutas } from 'rutas';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {
  }

}