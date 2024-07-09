import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PCFButtonComponent } from './app/pcfbutton/pcfbutton.component';
import { createApplication } from "@angular/platform-browser";
import { createCustomElement } from '@angular/elements';
// bootstrapApplication(PCFButtonComponent, appConfig)
//   .catch((err) => console.error(err));

(async () => {

  const app = createApplication(appConfig);

  const customPCFButtonComponent = createCustomElement(PCFButtonComponent, {
    injector: (await app).injector
  });

  customElements.define('app-pcfbutton', customPCFButtonComponent);

})();