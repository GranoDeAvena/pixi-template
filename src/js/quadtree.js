class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}



class Rectangle {
  constructor (x, y, w, h) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
  }

  contains (point) {
    return (
      point.x > this.x - this.width  &&
      point.x < this.x + this.width  &&
      point.y > this.y - this.height &&
      point.y < this.y + this.height
    )
  }
}


class QuadTree {
  constructor (boundary, n) {
    this.boundary = boundary
    this.capacity = n
    this.points = []
  }

  subdivide() {
    this.divided = true
    let x = this.x,
        y = this.y,
        w = this.width,
        h = this.height,
        half_w = this.width/2,
        half_h = this.height/2

    this.top_right =    new QuadTree(x + half_w, y, half_w, half_h, this.capacity)
    this.bottom_right = new QuadTree(x + half_w, y + half_h, half_w, half_h, this.capacity)
    this.top_left =     new QuadTree(x, y, half_w, half_h, this.capacity)
    this.bottom_left =  new QuadTree(x, y + half_h, half_w, half_h, this.capacity)
  }

  insert(point) {
    if (!this.boundary.contains(point)) {
      return
    }

    if (this.points.length < this.capacity) {
      this.points.push(point)
    }
    else {
      if (!this.divided) {
        this.subdivide()
      }
      // this.top_right.insert(point)
      // this.bottom_right.insert(point)
      // this.top_left.insert(point)
      // this.bottom_left.insert(point)
    }
  }
}

export {
  Point,
  Rectangle,
  QuadTree
}