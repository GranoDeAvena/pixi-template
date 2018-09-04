import css from './css/style.scss'
import * as PIXI from 'pixi.js'
import {app} from './js/canvas'
import {load, loaded} from './js/loader'
import {loop_manager} from './js/loop'
import {Particle} from './js/particle'
import {init_menu, main_menu_loop} from './js/main_menu'


const pan_flashing = (delta) => {
  let pan = loaded.images.pan

  pan.position.x += 1
}

const pan_rotating = (delta) => {
  let pan = loaded.images.pan

  pan.rotation += 0.1
}

const whenLoadSuccess = () => {

  loop_manager.init()
  // loop_manager.add(pan_flashing)
  // loop_manager.add(pan_rotating)
  
  testtest()

  // init_menu()
}

window.addEventListener('loadSuccess', whenLoadSuccess, false)
load(new Event('loadSuccess'))


let ps = []


const testtest = () => {
  for (let i = 0; i < 10; i++) {
    ps.push(new Particle(loaded.images.smog, 100, 100, 40, 40))
  }

  // p1.
}


