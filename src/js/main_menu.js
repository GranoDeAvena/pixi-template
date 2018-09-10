import {app} from './canvas'
import {loaded} from './loader'
import {init_button} from './button'

let menu = {
  container: {}
}

let button_width = 120,
    button_height = 40

let buttons = {
  a: {
    x: 100,
    y: 100,
    width: button_width,
    height: button_height,
    text: '1-1-1',
    container: {},
    graphics: {},
    click: a_click
  },
  b: {
    x: 100,
    y: 150,
    width: button_width,
    height: button_height,
    text: '2-2-2',
    container: {},
    graphics: {},
    click: b_click
  }
}

function a_click (event) {
  console.log('a', this.parent)
  menu.container.scale.x -= 0.2
  menu.container.scale.y -= 0.2
}

function b_click (event) {
  console.log('b', menu)
  menu.container.scale.x += 0.2
  menu.container.scale.y += 0.2
}


const init_menu = () => {
  menu.container = new PIXI.Container()
  app.stage.addChild(menu.container)

  init_button(buttons.a)
  menu.container.addChild(buttons.a.container)

  init_button(buttons.b)
  menu.container.addChild(buttons.b.container)
}


function createProgram() {
  const shaders = getShaders();
  const GL = app.renderer

  PROGRAM = GL.createProgram();

  GL.attachShader(PROGRAM, shaders.vertex);
  GL.attachShader(PROGRAM, shaders.fragment);
  GL.linkProgram(PROGRAM);

  GL.useProgram(PROGRAM);
}


const main_menu_loop = () => {
  loaded.images.pan.rotation += 0.01
}


export {
  init_menu,
  main_menu_loop
}