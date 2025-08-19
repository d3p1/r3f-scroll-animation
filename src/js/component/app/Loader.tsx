/**
 * @description Loader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Html, useProgress} from '@react-three/drei'

export const Loader = () => {
  const {progress} = useProgress()
  return (
    <Html
      style={{
        fontSize: '0.75rem',
        fontWeight: 'bold',
      }}
    >
      {progress}%
    </Html>
  )
}
