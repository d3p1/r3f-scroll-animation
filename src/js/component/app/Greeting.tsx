/**
 * @description Greeting
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Scroll, useScroll} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import {useRef} from 'react'

export const Greeting = () => {
  const firstMessageRef = useRef<HTMLDivElement | null>(null)
  const secondMessageRef = useRef<HTMLDivElement | null>(null)
  const thirdMessageRef = useRef<HTMLDivElement | null>(null)

  const scroll = useScroll()

  useFrame(() => {
    if (
      !firstMessageRef.current ||
      !secondMessageRef.current ||
      !thirdMessageRef.current
    )
      return

    const firstMessageOpacity = 1 - scroll.range(0, 1 / 3)
    const secondMessageOpacity = scroll.range(0, 1 / 3)
    const thirdMessageOpacity = scroll.range(1 / 3, 1 / 3)

    firstMessageRef.current.style.opacity = `${firstMessageOpacity}`
    secondMessageRef.current.style.opacity = `${secondMessageOpacity}`
    thirdMessageRef.current.style.opacity = `${thirdMessageOpacity}`
  })

  return (
    <Scroll html={true}>
      <div className="w-screen h-screen grid place-items-center">
        <div
          ref={firstMessageRef}
          className="absolute w-60 h-20 rounded-2xl flex justify-center items-center font-black backdrop-blur-xs bg-glass-200 text-secondary-900 hover:bg-glass-500 transition-colors duration-500"
        >
          Welcome!
        </div>
        <div
          ref={secondMessageRef}
          className="absolute top-[100vh] w-60 h-20 rounded-2xl flex justify-center items-center font-black backdrop-blur-xs bg-glass-200 text-secondary-900 hover:bg-glass-500 transition-colors duration-500"
        >
          Hey!
        </div>
        <div
          ref={thirdMessageRef}
          className="absolute top-[200vh] w-60 h-20 rounded-2xl flex justify-center items-center font-black backdrop-blur-xs bg-glass-200 text-secondary-900 hover:bg-glass-500 transition-colors duration-500"
        >
          Hello!
        </div>
      </div>
    </Scroll>
  )
}
