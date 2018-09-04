import {app} from './canvas'

class Particle {

  constructor(texture, w, h) {
    this.texture = texture
    this.sprite = new PIXI.Sprite(texture) 
    this.width = this.sprite.width = w
    this.height = this.sprite.height = h
    this.sprite.anchor.set(0.5, 0.5)
    app.stage.addChild(this.sprite)

    this.vx = 0
    this.vy = 0
    // this.target = {x: 0, y: 0}
    this.sprite.alpha = 0.2


    this.alife = false
  }

  start(x, y, vx, vy) {
    this.alife = true
    this.sprite.visible = true
    this.sprite.alpha = 1
    this.sprite.width = this.width
    this.sprite.height = this.height

    this.sprite.position.x = x
    this.sprite.position.y = y

    this.vx = vx
    this.vy = vy
  }

  remove() {
    this.alife = false
    this.sprite.visible = false
  }
}



export {Particle} 