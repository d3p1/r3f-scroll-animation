/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Canvas} from '@react-three/fiber'
import {Float, OrbitControls, Text} from '@react-three/drei'

export const App = () => {
  return (
    <Canvas camera={{position: [0, 1, 3]}}>
      <OrbitControls makeDefault={true} />

      <Float speed={2} floatIntensity={4}>
        <Text fontSize={0.2} color="black">
          Scroll Animation Coming Soon 🕹
        </Text>
      </Float>
    </Canvas>
  )
}
