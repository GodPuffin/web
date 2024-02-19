import { useEffect, useRef, useState } from 'react'
import { Engine, Render, Bodies, World, Mouse, MouseConstraint, Query, Runner } from 'matter-js'

function Playground (props) {
  const scene = useRef()
  const isPressed = useRef(false)
  const engine = useRef(Engine.create())
  const mouseConstraint = useRef(null)
  const rect = scene.current ? scene.current.getBoundingClientRect() : { width: 0, height: 0 }
  const [dimensions, setDimensions] = useState({ width: rect.width, height: rect.height });

  useEffect(() => {

      let render;
      let runner;
      const updateDimensions = () => {
        const rect = scene.current.parentNode.getBoundingClientRect();
        setDimensions({ 
          width: rect.width, 
          height: rect.height 
        })
  
        if (render) {
          Render.stop(render)
          Runner.stop(runner)
          World.clear(engine.current.world)
          Engine.clear(engine.current)
          render.canvas.remove()
          render.canvas = null
          render.context = null
          render.textures = {}
        }
  
        render = Render.create({
          element: scene.current,
          engine: engine.current,
          options: {
            width: rect.width,
            height: rect.height,
            wireframes: false,
            background: 'transparent'
          }
        })
  
        runner = Runner.create();
        Runner.run(runner, engine.current);

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
      Bodies.rectangle(rect.width / 2, -10, rect.width, 20, { isStatic: true }),
      Bodies.rectangle(-10, rect.height / 2, 20, rect.height, { isStatic: true }),
      Bodies.rectangle(rect.width / 2, rect.height + 10, rect.width, 20, { isStatic: true }),
      Bodies.rectangle(rect.width + 10, rect.height / 2, 20, rect.height, { isStatic: true })
    ])

    Render.run(render)
  }

  window.addEventListener('resize', updateDimensions)
  updateDimensions()

  return () => {
    window.removeEventListener('resize', updateDimensions)
    if (render) {
      Render.stop(render)
      Runner.stop(runner)
    }
  }
}, [])

const handleStart = (e) => {
  isPressed.current = true;
  handleMove(e);
};

const handleEnd = () => {
  isPressed.current = false;
};

const handleMove = (e) => {
  if (!isPressed.current) return;

  const rect = scene.current.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  const x = clientX - rect.left;
  const y = clientY - rect.top;

  const bodies = Query.point(engine.current.world.bodies, { x: x, y: y });

  if (bodies.length === 0) {
    const colors = ['#9580ff', '#8aff80', '#ff80bf', '#ffff80', '#ff9580'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

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
    );

    World.add(engine.current.world, [body]);
  }
};

return (
  <div
    onMouseDown={handleStart}
    onMouseUp={handleEnd}
    onMouseMove={handleMove}
    onTouchStart={handleStart}
    onTouchEnd={handleEnd}
    onTouchMove={handleMove}
    style={{ width: '100%', position: 'relative', paddingTop: '75%' }}
  >
    <div ref={scene} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
  </div>
);
}

export default Playground;