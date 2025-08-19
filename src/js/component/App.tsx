/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {Office} from './app/Office.tsx'

export const App = () => {
  return (
    <>
      <Canvas camera={{position: [0, 1, 3]}}>
        <OrbitControls makeDefault={true} />

        <ambientLight intensity={1} />

        <Office />
      </Canvas>
    </>
  )
}
