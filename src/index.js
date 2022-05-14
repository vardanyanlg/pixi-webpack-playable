import * as PIXI from 'pixi.js'
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import Preloader from "./js/PreloaderScene.js"
import Main from './js/MainScene.js';

const size = [960, 540]

const app = new PIXI.Application({
    width: size[0],
    height: size[1],
    resolution: window.devicePixelRatio,
    backgroundColor: 0x111111
})
let ratio = size[0] / size[1]
let renderer = PIXI.autoDetectRenderer(size[0], size[1], null)
document.body.appendChild(app.view)
resize()

gsap.registerPlugin(PixiPlugin)


const prld = new Preloader(app).startLoad()

const game = new Main(app)

app.loader.load(() => game.startGame() )

function resize() {
    if (window.innerWidth / window.innerHeight >= ratio) {
        let ancho = ~~(window.innerHeight * ratio)
        let alto= window.innerHeight
        app.view.style.position = 'absolute'
        app.view.style.width = ancho + 'px'
        app.view.style.height = alto + 'px'
        app.view.style.left = ~~((window.innerWidth-ancho)/2) + 'px'
        app.view.style.top = '0px'
        
    } else {
        let ancho = window.innerWidth
        let alto = ~~(window.innerWidth / ratio)
            app.view.style.position = 'absolute'
            app.view.style.width = ancho + 'px'
            app.view.style.height = alto + 'px'
            app.view.style.left = 0 + 'px'
            app.view.style.top = (window.innerHeight/2-(alto/2)) + 'px'
    }
}
window.onresize = resize