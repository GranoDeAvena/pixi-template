import {particle} from './particle'


let particle_system = {
  particles,
  x: 0, 
  y: 0,
  alife: false,
  init,
  start,
  remove
}


function init (_sprite) {
  this.sprite = _sprite
}

// const create_particles = (texture, number) => {
//   let particles = []
//   for (let i = 0; i < number; i++) {
//     let sprite = new PIXI.Sprite(texture)
//     app.stage.addChild(sprite)  
//     sprite.position.set(100, 50)
//     sprite.anchor.set(0.5, 0.5)
//     sprite.width = sprite.height = 40
//     particles.push (sprite)
//   }
//   return particles
// }
  

function start (p, _x, _y) {

}

function remove (p) {

}



export {particle_system} 
