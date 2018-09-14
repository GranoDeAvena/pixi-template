import {app} from './canvas'

class Assets {

  constructor(asset, number) {
    this.assets = []
    this.length = number
    for (let i = 0; i < number; i++) {
      this.assets.push(asset())
    }
  }

  put(asset) {
    this.length++
    this.assets.push(asset)
  }

  pull() {
    if (this.length == 0) {
      console.log('Need more Assets!!!')
    }
    else {
      this.length--
      return this.assets.pop()
    }
  }
}



export {Assets} 