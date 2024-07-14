import { MeshReflectorMaterial,Text, Html, PivotControls, TransformControls, OrbitControls, Float } from "@react-three/drei"
import { useRef } from "react"

export default function Experience()
{

    const cubeRef = useRef()
    const sphereRef = useRef()
    const textRef = useRef()

    return <>
        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

    <PivotControls 
    anchor={[0,0,0]} 
    depthTest={false}
    lineWidth={4}
    axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
    scale={1.5}
    
    >
        <mesh ref={sphereRef} position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html 
                position={[1,1,0]}
                wrapperClass="label"
                center
                distanceFactor={6}
                occlude ={[sphereRef,cubeRef]}
            >This is a god damn sphere 👍 
            </Html>
        </mesh>
        </PivotControls>
    
        
        <mesh ref={cubeRef} position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
            
        </mesh>
        <TransformControls object={cubeRef} mode="translate"/>
      

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            {/* <meshStandardMaterial color="greenyellow" /> */}
            <MeshReflectorMaterial
                resolution={4096}
                blue={[1000,1000]}
                mixBlur={1}
                mirror={0.75}
                color="ivory"
                

            ></MeshReflectorMaterial>
        </mesh>

        <Float
        speed ={1}
        floatIntensity = {1}
        center
        >
        <Text ref={textRef}
            font="bangers-v20-latin-regular.woff"
            color="salmon"
            position-y={2.5}
            // maxWidth={0}
            textAlign="center"
        
        >I LOVE R3F</Text>
       </Float>
       <TransformControls object={textRef} mode="translate"/>

        

    </>
}