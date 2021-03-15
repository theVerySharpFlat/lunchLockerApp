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
    this.storage.get('prefersDarkTheme')
      .then(value => {
        if(value != undefined){
          this._prefersDarkTheme = value;
          console.log(`in constructor, prefersDarkTheme is ${this.prefersDarkTheme}`)
        }else {
          this._prefersDarkTheme = false;
        }
      },
        reason => console.log(reason));
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

  async loadSettings(): Promise<void> {

    await this.storage.get('prefersDarkTheme')
      .then((value) => this.prefersDarkTheme=value, (reason) => console.log(`ERROR SETTING DARK THEME: ${reason}`));

    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }
}
