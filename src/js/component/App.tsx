/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Canvas} from '@react-three/fiber'
import {OrbitControls, ScrollControls} from '@react-three/drei'
import {Suspense} from 'react'
import {Loader} from './app/Loader.tsx'
import {Office} from './app/Office.tsx'

export const App = () => {
  return (
    <>
      <Canvas camera={{position: [2, 0, 2]}}>
        <OrbitControls makeDefault={true} enableZoom={false} />

        <ambientLight intensity={1} />

        <ScrollControls
          pages={3}
          damping={0.4}
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor:
              'var(--color-accent-primary) var(--color-accent-secondary)',
          }}
        >
          <Suspense fallback={<Loader />}>
            <Office />
          </Suspense>
        </ScrollControls>
      </Canvas>
    </>
  )
}
