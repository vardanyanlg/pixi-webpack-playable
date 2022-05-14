import * as PIXI from 'pixi.js'
import { sound } from '@pixi/sound';

import logoI from '../img/logo.png';
import sound_fxA from '../audio/sound_fx.mp3';

let app;

export default class Preloader {
    constructor (application) {
        app = application
    }

    startLoad() {
        console.log('%c  %c PreloaderScene ', 'background:#d6cc28','color: #d6cc28; background: #000; font-size:10pt')

        app.loader
            .add('logo', logoI)
        
        sound
            .add('sound_fx', sound_fxA)

    }
}

