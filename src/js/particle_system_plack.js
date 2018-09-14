import {ParticleSystem} from './particle_system'

class Plack extends ParticleSystem {

  constructor(container, texture, particle_params) {
    const number = 4
    const max_number = 400
    super(container, texture, number, max_number, particle_params)
    this.number = number
    this.max_number = max_number
  }

  init(x, y) {
    for (let i = 0; i < this.number; i++) {
      let p = this.assets.pull()
      p.init(x, y, x_velocity, y_velocity)
      
      let rnd = Math.random() * Math.PI * 2
      let multiply = 1 + Math.random() * 2
      let x_velocity = Math.sin(rnd) * multiply,
      y_velocity = Math.cos(rnd) * multiply
      
      p.start()
      this.particles.push(p)

      p.init(x, y, x_velocity, y_velocity)
    }
  }

  start(x, y) {
    // this.init(x, y)
    this.start_generator(() => {
      this.init(x, y)
    }, 100)
  }

  radial (delta, particle_system) {

    let ps = particle_system.particles
    for (let i = ps.length-1; i >= 0; i--) {
      let p = ps[i]
      if (p.alife) {
        p.sprite.x += p.vx
        p.sprite.y += p.vy

        p.vx *= 0.95
        p.vy *= 0.95

        p.sprite.width  += 0.4
        p.sprite.height += 0.4
        p.sprite.alpha -= 0.04
        if (p.sprite.alpha <= 0) {

          particle_system.assets.put(p)
          ps.splice(i, 1)
          p.remove()
        }
      }
    }
  }

}



export {Plack} 
