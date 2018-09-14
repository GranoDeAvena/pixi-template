// import Sprite from 'pixi.js'
// import loader from 'pixi.js'

// import * as PIXI from 'pixi.js'

let resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite

const assets = [
  {
    name 
  }
]

let load_event,
    loaded = {}

const load = (_load_event) => {
  load_event = _load_event

  PIXI.loader
  .add(["src/assets/images/pan.png"])
  .add(["src/assets/images/smog.png"])
  .add(["src/assets/images/circle.svg"])
  .load(loadSuccess)
}


const loadSuccess = () => {
  let pan = new Sprite(resources["src/assets/images/pan.png"].texture)

  loaded = {
    images: {
      pan: resources["src/assets/images/pan.png"].texture,
      smog: resources["src/assets/images/smog.png"].texture,
      circle: resources["src/assets/images/circle.svg"].texture
    }
  }

  window.dispatchEvent(load_event)
}

export {load, loaded}