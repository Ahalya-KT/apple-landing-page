import React from 'react'
import useMacBookStore from '../store'
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import MacModel14 from './models/Macbook-14';


function ProductViewer() {
 
    const {color,scale,setColor,setScale} =useMacBookStore();

  return (
    <section id='product-viewer'>
        <h2>Take a closer look</h2>
        <div className='controls'>
          <p className='info'>MacbookPro {scale} in {color}</p>

          <div className='flex-center gap-5 mt-5'>
            <div className='color-control'>
            <div onClick={()=>setColor('#adb5bd')} 
            className=
            {clsx('bg-neutral-300',color === '#abd5bd' && 'active')}
            />
 <div onClick={()=>setColor('#2e2c2e')} 
            className=
            {clsx('bg-neutral-900',color === '#2e2c2e' && 'active')}
            />
            </div>

            <div className='size-control'>
                <div onClick={()=>setScale('0.08')} 
            className=
            {clsx('bg-neutral-300',scale === '0.08' ? 'bg-white text-black':'bg-transparent')}
            >
              <p>16"</p>
            </div>
                              <div><p>16"</p></div>

            </div>

          </div>
        </div>
         
         <Canvas id="canvas" camera={{position:[0,2,5],fov:50,near:0.1,far:100}} >
            
            <ambientLight intensity={1}/>

            <MacModel14 scale={0.06} position={[0,0,0]}/>

           <OrbitControls enableZoom={false}/>
         </Canvas>
      
    </section>
  )
}

export default ProductViewer