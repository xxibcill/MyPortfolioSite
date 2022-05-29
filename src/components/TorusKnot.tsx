import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'


function Box(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => {
        if(ref.current.rotation.y%Math.PI > 0 && ref.current.rotation.y%Math.PI < 1){
            ref.current.rotation.y += 0.005
        }
        else{
            ref.current.rotation.y += 0.05
        }
    });

    return (
        <mesh
        ref={ref}
        scale={1.2}
        >
        <torusKnotGeometry args={[1.2, 0.4, 64, 8, 3, 4]} />
        <meshStandardMaterial color={'#12043E'} />
        </mesh>
    )
}

export default Box