import { Component, createRef } from 'react'
import '../../assets/style/About.scss'
import { Canvas } from '@react-three/fiber'
import { Physics, Debug, usePlane, useBox } from '@react-three/cannon'
import { OrbitControls } from '@react-three/drei'

class About extends Component {
  constructor(props) {
    super(props)
    this.cRef = createRef()
    this.aspect = window.innerWidth / window.innerHeight
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <section>
        <Canvas
          className='canvas'
          camera={{
            fov: 60,
            aspect: this.aspect,
            near: 1,
            far: 1000,
            position: [0, 0, 8],
            rotation: [0, 0, 0],
          }}
          gl={{ alpha: true, antialias: true }}
        >
          <Expirience />
        </Canvas>
      </section>
    )
  }
}

export default About

function Plane(props) {
  const [ref] = usePlane(() => ({
    args: [15, 15],
    ...props,
  }))
  return (
    <mesh ref={ref}>
      <planeGeometry args={[15, 15]} />
      <meshStandardMaterial color='white' transparent opacity={0.1} />
    </mesh>
  )
}

function Cube(props) {
  const boxsize = [2, 0.5, 0.5]
  const [ref] = useBox(() => ({
    mass: 0.01,
    args: boxsize,
    ...props,
  }))
  return (
    <mesh ref={ref}>
      <boxGeometry args={boxsize} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  )
}

function Expirience() {
  return (
    <>
      <ambientLight color='#ffffff' intensity={5} />
      {/* <OrbitControls /> */}
      <Physics>
        <Debug>
          <Plane position={[0, -4.4, 0]} rotation={[-Math.PI / 2, 0, 0]} />
          <Plane position={[0, 30, 0]} rotation={[Math.PI / 2, 0, 0]} />
          <Plane position={[-1.1, 5, 0]} rotation={[0, Math.PI / 2, 0]} />
          <Plane position={[1.1, 5, 0]} rotation={[0, -Math.PI / 2, 0]} />
          <Plane position={[0, 5, -0.26]} rotation={[0, 0, 0]} />
          <Plane position={[0, 5, 0.26]} rotation={[0, Math.PI, 0]} />
          {[...Array(18)].map((_, i) => (
            <Cube
              key={i}
              position={[0, i * 1.5 + 0.5, 0]}
              color={`hsl(${i * 20}, 100%, 50%)`}
            />
          ))}
        </Debug>
      </Physics>
    </>
  )
}
