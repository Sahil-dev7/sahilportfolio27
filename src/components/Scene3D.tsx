import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const AnimatedSphere = ({ scrollY }: { scrollY: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + scrollY * 0.001;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3 - scrollY * 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[2.5, 0, 0]}>
        <MeshDistortMaterial
          color="#dc2626"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedTorus = ({ scrollY }: { scrollY: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4 + scrollY * 0.002;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      meshRef.current.position.x = -3 + Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
      <Torus ref={meshRef} args={[0.8, 0.3, 32, 64]} position={[-3, 1, -1]}>
        <meshStandardMaterial
          color="#991b1b"
          metalness={0.9}
          roughness={0.1}
          emissive="#450a0a"
          emissiveIntensity={0.5}
        />
      </Torus>
    </Float>
  );
};

const AnimatedIcosahedron = ({ scrollY }: { scrollY: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.x = scrollY * 0.003;
      meshRef.current.position.y = -1.5 + Math.cos(state.clock.elapsedTime * 0.4) * 0.3;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.8}>
      <Icosahedron ref={meshRef} args={[0.6, 1]} position={[3.5, -1.5, -2]}>
        <meshStandardMaterial
          color="#f87171"
          metalness={0.7}
          roughness={0.2}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
};

const FloatingCubes = ({ scrollY }: { scrollY: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  const cubes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4 - 3,
      ] as [number, number, number],
      scale: Math.random() * 0.3 + 0.1,
      rotationSpeed: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollY * 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.5}>
          <Box args={[cube.scale, cube.scale, cube.scale]} position={cube.position}>
            <meshStandardMaterial
              color="#7f1d1d"
              metalness={0.8}
              roughness={0.3}
              transparent
              opacity={0.6}
            />
          </Box>
        </Float>
      ))}
    </group>
  );
};

interface Scene3DProps {
  scrollY: number;
  className?: string;
}

const Scene3D = ({ scrollY, className = "" }: Scene3DProps) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff4444" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff8888" />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          color="#dc2626"
          castShadow
        />
        
        <AnimatedSphere scrollY={scrollY} />
        <AnimatedTorus scrollY={scrollY} />
        <AnimatedIcosahedron scrollY={scrollY} />
        <FloatingCubes scrollY={scrollY} />
        
        <fog attach="fog" args={["#0a0a0a", 5, 15]} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
