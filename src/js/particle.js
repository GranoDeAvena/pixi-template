import {app} from './canvas'

class Particle {

  constructor(texture, x, y, w, h) {
    this.texture = texture
    this.sprite = new PIXI.Sprite(texture) 
    this.width = this.sprite.width = w
    this.height = this.sprite.height = h
    app.stage.addChild(this.sprite)

    this.vx = 0
    this.vy = 0

    this.alife = false
  }

  start(x, y, vx, vy) {
    this.alife = true
    this.sprite.visible = true

    this.sprite.position.x = x
    this.sprite.position.y = y
  }

  remove() {
    this.alife = false
    this.sprite.visible = false
  }
}



export {Particle} 