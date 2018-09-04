
const init_button = (b) => {
  b.container = new PIXI.Container()
  b.container.position.set(b.x, b.y)

  draw_button(b)
  add_label(b)

  b.container.buttonMode = true
  b.container.interactive = true
  b.container.on('click', b.click)
}


const add_label = (button) => {  
  let text_style = new PIXI.TextStyle({
    fontFamily: "Courier New",
    fontSize: 32,
    fill: "white",
    dropShadow: true
  })
  let label =  new PIXI.Text(button.text, text_style)
  label.anchor.set(0.5, 0.5)
  label.scale.set(0.5, 0.5)
  button.container.addChild(label)
  return label
}


const draw_button = (b) => {
  b.graphics = new PIXI.Graphics()
  b.container.addChild(b.graphics)
  b.graphics.beginFill(0x660000)
  b.graphics.drawRect(-b.width/2, -b.height/2, b.width, b.height)  
  b.graphics.endFill()
}


export {
  init_button
}