import { bootstrapApplication } from '@angular/platform-browser';
import { PCFButtonComponent } from './app/pcfbutton/pcfbutton.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(PCFButtonComponent, config);

export default bootstrap;
