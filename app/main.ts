import 'reflect-metadata'
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './init';
bootstrap(AppComponent);