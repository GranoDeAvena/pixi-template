import css from './css/style.scss'
import * as PIXI from 'pixi.js'
import {app} from './js/canvas'
import {load, loaded} from './js/loader'
import {loop_manager} from './js/loop'
import {
  Point,
  Rectangle,
  QuadTree} from './js/quadtree'
import {ParticleSystem} from './js/particle_system'
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

const add_particle_system = () => {
  let particle_params = {
    width: 3, 
    height: 3
  }

  partical_system = new ParticleSystem (app.stage, loaded.images.smog, 100, particle_params)
  loop_manager.add (partical_system.radial, partical_system.particles)
}


const init_quadtree = () => {
  let width = 200,
      height = 200
  let boundary = new Rectangle(200, 200, 200, 200)
  let qt = new QuadTree(boundary, 4)

  for(let i = 0; i < 1; i++) {
    let x = Math.floor(Math.random() * width),
        y = Math.floor(Math.random() * height)
    let p = new Point(x, y)
    qt.insert(p)
  }
  console.log(qt)
}

const testtest = () => {
  add_particle_system()


}


