import {app} from './canvas'
import {create_rect_body} from './physics'

class Box {
  constructor (params) {
    // this.position = params.position
    this.sprite = params.sprite
    this.sprite.width = params.width
    this.sprite.height = params.height
    this.sprite.anchor.set(0.5, 0.5)
    app.stage.addChild(this.sprite)
    this.body = create_rect_body({
      x: params.position.x + params.width/2, 
      y: params.position.y + params.height/2, 
      width: params.width, 
      height: params.height,
      isStatic: params.isStatic
    })
  }

  update (delta, box) {
    physics_position(box)
  }
}

const physics_position = (box) => {
  box.sprite.position.x = box.body.position.x
  box.sprite.position.y = box.body.position.y
  // box.sprite.rotation = box.body.rotation
  box.sprite.width = box.body.width
  box.sprite.height = box.body.height
  box.sprite.rotation = box.body.angle
}

export {Box}