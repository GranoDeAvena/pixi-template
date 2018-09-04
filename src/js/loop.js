import {app} from './canvas'


const init = () => {
  app.ticker.add((delta) => looping(delta))
}

const add = (loop, params) => {
  loop_manager.loops.push({loop, params})
}


const remove = (rem_loop) => {
  let new_arr = []
  for (let loop of loop_manager.loops) {
    if (loop != rem_loop) {
      new_arr.push(loop)
    }
  }
  loop_manager.loops = new_arr
}


const remove_all = () => {
  loop_manager.loops = []
}


const looping = (delta) => {
  for (let loop_obj of loop_manager.loops) {
    loop_obj.loop(delta, loop_obj.params)
  }
}


let loop_manager = {
  loops: [],
  init,
  add,
  remove,
  remove_all
}


export {loop_manager}