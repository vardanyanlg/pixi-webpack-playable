import * as PIXI from 'pixi.js'
import { sound } from '@pixi/sound';
import { Sprite  } from '@pixi/sprite';

import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

let app;
let music;

export default class Main {
    constructor (application) {
        app = application;
    }
    startGame() {
            console.log('%c  %c MainScene ', 'background:#219039','color: #219039; background: #000; font-size:10pt')

            const logo = Sprite .from('logo')
            logo.anchor.set(0.5) 
            app.stage.addChild(logo)
    
            logo.x = app.screen.width * 0.5
            logo.y = app.screen.height * 0.5
    
            gsap.to(logo.scale, {
                x: 1.1, y: 1.1, duration: 0.5, repeat: -1, yoyo: true, ease: 'Quad.InOut'
            })

            music =  sound.play('sound_fx');
    }
}