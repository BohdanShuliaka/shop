import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private configs = {
    id: null,
    login: null,
    email: null
  };
  constructor() { }
  getId() {
    return this.configs.id;
  }
  setId(val) {
    this.configs.id = val;
  }
  getLogin() {
    return this.configs.login;
  }
  setLogin(val) {
    this.configs.login = val;
  }
  getEmail() {
    return this.configs.email;
  }
  setEmail(val) {
    this.configs.email = val;
  }
}
