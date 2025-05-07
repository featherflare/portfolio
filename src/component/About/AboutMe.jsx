import { Component, createRef } from 'react'
import '../../assets/style/About.scss'

class About extends Component {
  constructor(props) {
    super(props)
    this.cRef = createRef()
    this.symbols = []
    this.animationFrameId = null
  }

  componentDidMount() {
    this.initCanvas()
    this.animate()
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrameId)
  }

  initCanvas() {
    const canvas = this.cRef.current
    if (canvas) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const ctx = canvas.getContext('2d')
      this.ctx = ctx

      // Generate symbols randomly
      const colors = ['#ff5f6d', '#ffc371', '#47fced', '#fff']
      const count = 5
      const boxHeight = canvas.height * 0.06
      const boxwidth = canvas.width * 0.2

      for (let i = 0; i < count; i++) {
        const x = canvas.width / 2 - boxwidth / 2
        const y = 0 + boxHeight * i
        const color = colors[Math.floor(Math.random() * colors.length)]
        this.symbols.push(new Box({ x, y, color, ctx, boxHeight, boxwidth }))
      }
    }
  }

  animate = (time) => {
    const canvas = this.cRef.current
    const ctx = this.ctx
    if (canvas && ctx) {
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.save()

      this.symbols.forEach((symbol, index) => {
        const otherBoxes = this.symbols.filter((_, i) => i !== index)
        symbol.update(otherBoxes)
      })
    }

    this.animationFrameId = requestAnimationFrame(this.animate)
  }

  render() {
    return (
      <section>
        <div>
          <canvas ref={this.cRef}></canvas>
        </div>
      </section>
    )
  }
}

export default About
class Box {
  constructor({ x, y, color, ctx, boxHeight, boxwidth }) {
    this.x = x
    this.y = y
    this.velocity = {
      x: 0,
      y: Math.random() * 5,
    }
    this.color = color
    this.ctx = ctx
    this.boxHeight = boxHeight
    this.boxwidth = boxwidth
    this.stopped = false
  }

  draw() {
    const c = this.ctx

    c.strokeStyle = this.color
    c.lineWidth = 2
    c.beginPath()
    c.moveTo(0 + this.x, 0 + this.y)
    c.lineTo(0 + this.x, this.boxHeight + this.y)
    c.lineTo(this.boxwidth + this.x, this.boxHeight + this.y)
    c.lineTo(this.boxwidth + this.x, 0 + this.y)
    c.closePath()
    c.stroke()
  }

  update(others) {
    if (!this.stopped) {
      // Check collision with canvas bottom
      if (this.y + this.boxHeight >= innerHeight) {
        this.stopped = true
        this.velocity.y = 0
      }

      // Check collision with other boxes
      for (let other of others) {
        if (other === this || !other.stopped) continue
        const hasCollided = resolveCollision(
          this.x,
          this.y + this.velocity.y, // projected next Y
          other.x,
          other.y,
          other.boxwidth,
          other.boxHeight
        )
        if (hasCollided) {
          this.stopped = true
          this.velocity.y = 0
          break
        }
      }

      this.y += this.velocity.y
      this.x += this.velocity.x
    }
    this.draw()
  }
}

// ===== Utils =====
function easeInOutQuint(x) {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2
}

function resolveCollision(x1, y1, x2, y2, width1, height2) {
  return (
    x2 + width1 >= x1 &&
    x2 <= x1 + width1 &&
    y2 <= y1 + height2 &&
    y2 + height2 >= y1
  )
}
