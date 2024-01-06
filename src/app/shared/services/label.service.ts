import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rutas } from 'rutas';
import { Label } from '../interfaces/label.interface';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private http:HttpClient) { }

  createLabel(label:Label){
    return this.http.post(rutas.label.create, label);
  }
}
