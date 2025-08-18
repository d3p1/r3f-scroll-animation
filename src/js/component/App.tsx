/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Canvas} from '@react-three/fiber'
import {Float, OrbitControls, Text} from '@react-three/drei'
import {Leva, useControls} from 'leva'
import {Perf} from 'r3f-perf'

export const App = () => {
  const {isPerfVisible} = useControls('perf', {
    isPerfVisible: false,
  })

  const {
    floatSpeed,
    floatIntensity,
    fontSize,
    fontColor,
    isTextVisible,
    content,
  } = useControls('text', {
    floatSpeed: {
      value: 2,
      min: 0,
      max: 10,
      step: 0.1,
    },
    floatIntensity: {
      value: 4,
      min: 0,
      max: 10,
      step: 0.1,
    },
    fontSize: {
      value: 0.2,
      min: 0.1,
      max: 4,
      step: 0.01,
    },
    fontColor: '#000000',
    isTextVisible: true,
    content: {
      options: ['🤪', '🕹', '😎'],
    },
  })

  return (
    <>
      <Leva collapsed={true} />
      <Canvas camera={{position: [0, 1, 3]}}>
        {isPerfVisible && <Perf position="top-left" />}

        <OrbitControls makeDefault={true} />

        {isTextVisible && (
          <Float speed={floatSpeed} floatIntensity={floatIntensity}>
            <Text fontSize={fontSize} color={fontColor}>
              {content}
            </Text>
          </Float>
        )}
      </Canvas>
    </>
  )
}
