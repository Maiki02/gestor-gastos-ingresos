import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { UserI } from '../interfaces/user.interface';
import { rutas } from 'rutas';
import { ResponseBackEnd } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabaseUrl = 'https://ebhpwqvjvojivuzhmeiy.supabase.co'; // Reemplaza con la URL de tu proyecto Supabase
  private supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViaHB3cXZqdm9qaXZ1emhtZWl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNjI0NTYsImV4cCI6MjAyMjczODQ1Nn0.JJx3paHupP5wJzFgQ0_swlV-MMafMOfrQ7FEtV2HbfU'; // Reemplaza con la clave de acceso de tu proyecto Supabase
  private supabase: SupabaseClient;

  constructor(private http:HttpClient) {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  async login(email: string, password: string) {
    return await this.supabase.auth.signInWithPassword({
      email: email,
      password: password
    });
  }

  async register(email: string, password: string) {
    return await this.supabase.auth.signUp({
      email: email,
      password: password
    });
  }

  registerAndGetToken(user:UserI){
    return this.http.post<ResponseBackEnd>(rutas.login.registerAndGetToken, user);
  }

  loginAndGetToken(access_token:string){
    return this.http.post<ResponseBackEnd>(rutas.login.email, access_token);
  }

  loginGoogleAndGetToken(access_token:string){
    return this.http.post<ResponseBackEnd>(rutas.login.google, access_token);
  }

}