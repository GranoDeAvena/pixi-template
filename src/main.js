import css from './css/style.scss'
import * as PIXI from 'pixi.js'
import {app} from './js/canvas'
import {load, loaded} from './js/loader'
import {loop_manager} from './js/loop'
// import {
//   Point,
//   Rectangle,
//   QuadTree} from './js/quadtree'
import {ParticleSystem} from './js/particle_system'
import {Plack} from './js/particle_system_plack'
// import {init_menu, main_menu_loop} from './js/main_menu'


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
  // alert('asd')
  partical_system.start(e.x, e.y)
}
const touch = (e) => {
  // alert('asd')
  // console.log(e.touches[0])
  let t = e.touches[e.touches.length-1]
  partical_system.start(t.clientX, t.clientY)
}
window.addEventListener('click', click, false)
window.addEventListener('touchstart', touch, false)

const add_particle_system = () => {
  partical_system = new Plack (app.stage, loaded.images.circle)

  loop_manager.add (partical_system.loop, partical_system)
}


const testtest = () => {
  add_particle_system()
}


