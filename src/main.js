import css from './css/style.scss'
import * as PIXI from 'pixi.js'
import {app} from './js/canvas'
import {load, loaded} from './js/loader'
import {loop_manager} from './js/loop'
import {ParticleSystem} from './js/particle_system'
import {Plack} from './js/particle_system_plack'
import {Box} from './js/box'

import {engine, world, init_physics, create_rect_body} from './js/physics'

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

  let b = new Box({
    position: {
      x: e.x-10,
      y: e.y-10,
    },
    width: 20,
    height: 20,
    sprite: new PIXI.Sprite(loaded.images.wood),
  })
  loop_manager.add (b.update, b)

  // b1.body.force.x = -0.006
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
  partical_system = new Plack (app.stage, loaded.images.smog)
  loop_manager.add (partical_system.loop, partical_system)
}




const testtest = () => {
  add_particle_system()


  init_physics()

  let b1 = new Box({
    position: {
      x: 550,
      y: 480,
    },
    width: 20,
    height: 20,
    sprite: new PIXI.Sprite(loaded.images.wood),
  })
  b1.body.force.x = -0.006
  console.log(b1);

  let b2 = new Box({
    position: {
      x: 1,
      y: 600,
    },
    width: 400,
    height: 120,
    sprite: new PIXI.Sprite(loaded.images.wood),

    isStatic: true
  })

  loop_manager.add (b1.update, b1)
  loop_manager.add (b2.update, b2)

  // console.log(ground)
  // let box1 = create_box({x: 200, y: 100, width: 10, height: 10})
  // let graphics = new PIXI.Graphics()
  // app.stage.addChild(graphics)
  
  // const ph_loop = () => {
  //   graphics.clear()
  //   graphics.beginFill(0x660010)
  //   graphics.drawRect(box1.position.x, box1.position.y, box1.width, box1.height)  
  //   graphics.drawRect(ground.position.x, ground.position.y, ground.width, ground.height)  
  //   graphics.endFill()
  // }
  // loop_manager.add (ph_loop)
  
}


