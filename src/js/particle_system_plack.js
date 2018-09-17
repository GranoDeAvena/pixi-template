import {ParticleSystem} from './particle_system'

const 
  start_width = 2, 
  start_height = 2,
  delta_widtth = 0.5,
  delta_height = 0.5,
  delta_alpha = -0.02,
  acceleration = 0.9,
  number = 10,
  max_number = 400

class Plack extends ParticleSystem {

  constructor(container, texture) {
    super(container, texture, number, max_number, {width: start_width, height: start_height})
  }

  start(x, y) {
    for (let i = 0; i < this.number; i++) {
      let p = this.assets.pull()
      
      const direction = Math.random() * Math.PI * 2
      const start_speed = 1 + Math.random() * 2
      const x_velocity = Math.sin(direction) * start_speed,
            y_velocity = Math.cos(direction) * start_speed
      
      p.start()
      p.init(x, y, x_velocity, y_velocity)
      this.particles.push(p)
    }
  }

  is_dead (particle) {
    return particle.sprite.alpha <= 0
  }

  loop (delta, particle_system) { // not use "this"! use particle_system 

    let particles = particle_system.particles
    for (let i = particles.length-1; i >= 0; i--) {
      let p = particles[i]
      if (p.alife) {
        p.sprite.x += p.vx
        p.sprite.y += p.vy

        p.vx *= acceleration
        p.vy *= acceleration

        p.sprite.width  += delta_widtth
        p.sprite.height += delta_height

        p.sprite.alpha  += delta_alpha

        if (particle_system.is_dead(p)) {
          particles.splice(i, 1)
          particle_system.remove(p)
        }
      }
    }
  }

}



export {Plack} 
