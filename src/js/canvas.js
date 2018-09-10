// import Application from 'pixi.js'

let app = new PIXI.Application({ 
  width: 256,         // default: 800
  height: 256,        // default: 600
  antialias: true,    // default: false
  transparent: false, // default: false
  // forceCanvas: true,
  resolution: 1       // default: 1
})

app.renderer.backgroundColor = 0x061639
app.renderer.view.style.position = "absolute"
app.renderer.view.style.display = "block"
app.renderer.autoResize = true
app.renderer.resize(window.innerWidth, window.innerHeight)

document.body.appendChild(app.view)

const risezeWindow = (event) => {
  app.renderer.resize(event.target.innerWidth, event.target.innerHeight)
}

window.addEventListener("resize", risezeWindow)




export {app}