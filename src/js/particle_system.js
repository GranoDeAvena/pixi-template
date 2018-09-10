import {Particle} from './particle'

class ParticleSystem {

  constructor(container, texture, number, particle_params) {

    this.container = container
    this.particles = []
    for (let i = 0; i < number; i++) {
      let p = new Particle(texture, particle_params.width, particle_params.height)
      this.container.addChild(p.sprite)
      this.particles.push(p)
    }
  }

  start(x, y) {
    // this.container.visible = true
    for (let p of this.particles) {
      let rnd = Math.random() * Math.PI * 2
      let multiply = 1 + Math.random() * 3
      let x_velocity = Math.sin(rnd) * multiply,
          y_velocity = Math.cos(rnd) * multiply
      p.start(x, y, x_velocity, y_velocity)
    }
  }

  remove() {
    for (let p of this.particles) {
      p.alife = false
    }
    // this.container.visible = false
  }


  radial (delta, particles) {
    for (let p of particles) {
      if (p.alife) {

        p.sprite.x += p.vx
        p.sprite.y += p.vy

        p.vx *= 0.92
        p.vy *= 0.92

        p.sprite.width += 1
        p.sprite.height += 1
        
        p.sprite.alpha -= 0.02
        
        if (p.sprite.alpha <= 0) {
          p.remove()
        }
      }
    }
  }

}



export {ParticleSystem} 
