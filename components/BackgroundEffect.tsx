import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";


function  Background() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            <mesh>
                <sphereGeometry args={[5, 64, 64]} />
                <meshBasicMaterial wireframe color="#1E3A8A" />
            </mesh>
        </>
    )
}
const BackgroundEffect = () => {
    return (
       <Canvas camera={{position: [0, 0, 10]}}>
           <OrbitControls enableZoom={false} />
           <Background />
       </Canvas>
    )
}
export default BackgroundEffect
