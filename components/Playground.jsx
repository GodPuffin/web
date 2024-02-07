import { useEffect, useRef } from 'react'
import { Engine, Render, Bodies, World, Mouse, MouseConstraint, Query } from 'matter-js'

function Playground (props) {
  const scene = useRef()
  const isPressed = useRef(false)
  const engine = useRef(Engine.create())
  const mouseConstraint = useRef(null)

  useEffect(() => {
    const cw = scene.current.parentNode.clientWidth
    const ch = scene.current.parentNode.clientHeight

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent'
      }
    })

    const mouse = Mouse.create(render.canvas)
    mouseConstraint.current = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    })

    World.add(engine.current.world, mouseConstraint.current)

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
    ])

    Engine.run(engine.current)
    Render.run(render)

    return () => {
      Render.stop(render)
      World.clear(engine.current.world)
      Engine.clear(engine.current)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
    }
  }, [])

  const handleDown = () => {
    isPressed.current = true
  }

  const handleUp = e => {
    if (isPressed.current) {
      const rect = e.target.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const bodies = Query.point(engine.current.world.bodies, { x: x, y: y })

      if (bodies.length === 0) {
        const colors = ['#9580ff', '#8aff80', '#ff80bf', '#ffff80', '#ff9580']
        const randomColor = colors[Math.floor(Math.random() * colors.length)]

        const body = Bodies.polygon(
          x,
          y,
          3 + Math.floor(Math.random() * 8),
          20 + Math.random() * 30,
          {
            mass: 10,
            restitution: 0.9,
            friction: 0.005,
            render: {
              fillStyle: randomColor
            }
          }
        )

        World.add(engine.current.world, [body])
      }
    }
    isPressed.current = false
  }


  return (
    <div
    onMouseDown={handleDown}
    onMouseUp={handleUp}
    style={{ width: '100%', position: 'relative', paddingTop: '75%' }}
  >
    <div ref={scene} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
  </div>
  )
}

export default Playground
