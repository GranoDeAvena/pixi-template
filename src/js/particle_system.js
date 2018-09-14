import { Particle } from './particle'
import { Assets } from './assets_manager';

class ParticleSystem {

  constructor(container, texture, number, max_number, particle_params) {

    this.container = container
    this.particles = []
    this.number = number
    this.active = 0
    this.generator
    this.generator_number = 0
    this.particles = []
    const create_asset = () => {
      return new Particle(texture, particle_params.width, particle_params.height)
    }
    this.assets = new Assets(create_asset, max_number)
    console.log(this.assets)
    // for (let i = 0; i < max_number; i++) {
    //   let p = new Particle(texture, particle_params.width, particle_params.height)
    //   this.container.addChild(p.sprite)
    //   this.particles.push(p)
    // }
  }

  start_system(num = this.number) {
    // let p = this.particles.pull()
    // this.particles.push(p)
    // p.start()
    // for (let i = 0; i < num; i++) {
    //   this.active++
    //   if (this.active === this.particles.length) {
    //     this.active = 0
    //   }
    //   this.particles[this.active].start()
    // }
  }

  start_generator(func, time) {
    this.stop_generator()
    this.generator_number = 0
    this.generator = setInterval( () => {
      func()
      if (this.generator_number++ == this.number) {
        this.stop_generator()
      }
    }, time)
  }

  stop_generator() {
    // if (this.generator) {
    //   clearInterval(this.generator)
    //   this.generator = null
    // }
  }

  remove() {
    this.stop()
    // for (let p of this.particles) {
    //   p.remove()
    // }
  }

}



export {ParticleSystem} 
