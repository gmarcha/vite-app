import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { ActionIcon } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import '@fontsource-variable/roboto-mono'

import './App.css'
import Isometric from './Isometric'

function App() {

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh' }}>
        <div style={{ margin: '1.2rem 2.4rem', fontFamily: 'Roboto Mono Variable', fontWeight: 300, fontSize: '2rem', position: 'absolute', top: 0, left: 0, zIndex: 1000 }}>
          gmarcha's room
        </div>
        <div style={{ margin: '1.2rem 2.4rem', position: 'absolute', bottom: 0, left: 0, zIndex: 1000 }}>
          <a href="https://github.com/gmarcha" target="_blank" rel="noreferrer">
            <ActionIcon size="xl" radius="xl" variant="unstyled">
              <IconBrandGithub color="white" />
            </ActionIcon>
          </a>
        </div>
      </div>


      <div style={{ width: '100%', height: '100vh' }}>

      <Canvas shadows camera={{ zoom: 3, fov: 30, position: [50, 70, 50] }}>
        {/* <CameraControls makeDefault /> */}
        <OrbitControls enablePan={true} enableZoom={false} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.8} />
        <ambientLight intensity={0.05} />
        {/* <hemisphereLight intensity={0.125} color="#8040df" groundColor="red" /> */}
        {/* <spotLight castShadow color="orange" intensity={2} position={[-50, 50, 40]} angle={0.25} penumbra={1} shadow-mapSize={[128, 128]} shadow-bias={0.00005} /> */}
        <directionalLight color={'#FFEECC'} intensity={2} position={[2, 4, 6]} castShadow shadow-mapSize={2048} shadow-bias={-0.001}>
          <orthographicCamera attach="shadow-camera" args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]} />
        </directionalLight>
        <Suspense fallback={null}>
          <Isometric />
          <EffectComposer>
            {/* <Bloom intensity={0.1} luminanceThreshold={0.01} />
            <Bloom intensity={1} luminanceThreshold={0.1} /> */}
            <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0} intensity={10} />
            <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={200} />
            {/* <SSAO /> */}
            {/* <Glitch delay={[1, 3]} duration={[0.5, 0.01]} ratio={1} strength={[0.03, 0.06]} /> */}
          </EffectComposer>
          {/* <Environment background preset="sunset" /> */}
        </Suspense>
      </Canvas>
      </div>

      
    </>
  )
}

export default App
