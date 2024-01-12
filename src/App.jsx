import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei'
import Station from '../public/Station'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Canvas>
      <ambientLight />
      <OrbitControls enableZoom={false}/>
      <Suspense fallback={null}>
      <Station />
      </Suspense>
      <Environment preset='sunset' />
    </Canvas>
    </>
  )
}

export default App
