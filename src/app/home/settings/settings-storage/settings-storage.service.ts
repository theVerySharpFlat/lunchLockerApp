import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SettingsStorageService {

  private _prefersDarkTheme: Boolean;
  private renderer: Renderer2;
  constructor(protected storage: Storage, private rendererFactory: RendererFactory2 ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  get prefersDarkTheme(): Boolean{
    return this._prefersDarkTheme;
  }

  set prefersDarkTheme(value: Boolean) {
    this._prefersDarkTheme = value;
    this.storage.set('prefersDarkTheme', value);

    if(this.prefersDarkTheme){
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
      console.log("prefers dark theme");
    }else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
      console.log("prefers light theme");
    }
  }

  async loadSettings() {

    this.prefersDarkTheme = await this.storage.get('prefersDarkTheme')


  }
}

let sleep = (milliseconds) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
