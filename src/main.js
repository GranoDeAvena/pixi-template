import css from './css/style.scss'
import * as PIXI from 'pixi.js'
import {app} from './js/canvas'
import {load, loaded} from './js/loader'
import {loop_manager} from './js/loop'
import {ParticleSystem} from './js/particle_system'
import {Particle} from './js/particle'
import {init_menu, main_menu_loop} from './js/main_menu'


// const pan_flashing = (delta) => {
//   let pan = loaded.images.pan

//   pan.position.x += 1
// }

// const pan_rotating = (delta) => {
//   let pan = loaded.images.pan

//   pan.rotation += 0.1
// }

const whenLoadSuccess = () => {

  loop_manager.init()
  // loop_manager.add(pan_flashing)
  // loop_manager.add(pan_rotating)
  // loop_manager.add(particle_loop)
  
  testtest()

  // init_menu()
}

window.addEventListener('loadSuccess', whenLoadSuccess, false)
load(new Event('loadSuccess'))


let partical_system

const click = (e) => {
  console.log('cl')
  partical_system.start(e.x, e.y)
}
window.addEventListener('click', click, false)


const testtest = () => {
  let particle_params = {
    width: 2, 
    height: 2
  }

  partical_system = new ParticleSystem (app.stage, loaded.images.smog, 10, particle_params)
  loop_manager.add (partical_system.radial, partical_system.particles)
}


