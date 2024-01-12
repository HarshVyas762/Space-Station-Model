/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 station.gltf 
Author: re1monsen (https://sketchfab.com/re1monsen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/space-station-3-a7a6ad10261149cab31aa394bfcf8940
Title: Space Station 3
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/station.gltf')
  const { actions } = useAnimations(animations, group)


  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-2.044, -0.213, -0.061]} scale={2.701}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="SpaceStation_low_0">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.spacestation_main2} />
              </group>
              <group name="SpaceStation001_low_1">
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.spacestation_smalllights} />
              </group>
              <group name="SpaceStation002_low_2">
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.spacestation_main2} />
              </group>
              <group name="SpaceStation003_low_3">
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.spacestation_main2} />
              </group>
              <group name="SpaceStation004_low_4">
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.spacestation_main} />
              </group>
              <group name="SpaceStation005_low_5">
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.spacestation_main} />
              </group>
              <group name="SpaceStation006_low_6" rotation={[Math.PI, -0.545, Math.PI]}>
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.spacestation_main} />
              </group>
              <group name="SpaceStation007_low_7">
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.spacestation_main} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/station.gltf')
