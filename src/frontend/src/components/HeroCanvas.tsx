import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 200;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      [0.769, 0.584, 0.416],
      [0.831, 0.651, 0.498],
      [0.906, 0.847, 0.718],
      [0.545, 0.369, 0.235],
    ];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c[0];
      col[i * 3 + 1] = c[1];
      col[i * 3 + 2] = c[2];
    }
    return [pos, col];
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.03;
    meshRef.current.rotation.x = Math.sin(t * 0.02) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingShape({
  position,
  shape,
  speed = 1,
  wireframe,
}: {
  position: [number, number, number];
  shape: "torus" | "icosahedron" | "octahedron" | "dodecahedron";
  speed?: number;
  wireframe: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed;
    meshRef.current.rotation.x = t * 0.4;
    meshRef.current.rotation.y = t * 0.6;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      {shape === "torus" && <torusGeometry args={[0.5, 0.18, 16, 40]} />}
      {shape === "icosahedron" && <icosahedronGeometry args={[0.45, 0]} />}
      {shape === "octahedron" && <octahedronGeometry args={[0.5, 0]} />}
      {shape === "dodecahedron" && <dodecahedronGeometry args={[0.45, 0]} />}
      <meshStandardMaterial
        color={new THREE.Color("#C4956A")}
        transparent
        opacity={0.65}
        roughness={0.3}
        metalness={0.6}
        wireframe={wireframe}
      />
    </mesh>
  );
}

function Scene() {
  const shapes: Array<{
    position: [number, number, number];
    shape: "torus" | "icosahedron" | "octahedron" | "dodecahedron";
    speed: number;
  }> = [
    { position: [-4, 2, -2], shape: "torus", speed: 0.5 },
    { position: [4, -1, -3], shape: "icosahedron", speed: 0.7 },
    { position: [-2, -3, -1], shape: "octahedron", speed: 0.4 },
    { position: [3, 3, -4], shape: "dodecahedron", speed: 0.6 },
    { position: [-5, 0, -5], shape: "torus", speed: 0.3 },
    { position: [5, 2, -2], shape: "icosahedron", speed: 0.8 },
    { position: [0, -4, -3], shape: "octahedron", speed: 0.55 },
    { position: [-3, 4, -6], shape: "dodecahedron", speed: 0.45 },
  ];

  return (
    <>
      <fog attach="fog" args={["#F5EDE0", 8, 25]} />
      <ambientLight intensity={0.4} color={"#E8D5B7"} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        color={"#C4956A"}
      />
      <directionalLight
        position={[-5, -3, -5]}
        intensity={0.5}
        color={"#D4A574"}
      />
      <Particles />
      {shapes.map((s, idx) => (
        <FloatingShape
          key={`${s.shape}-${s.position[0]}-${s.position[1]}`}
          position={s.position}
          shape={s.shape}
          speed={s.speed}
          wireframe={idx % 2 === 0}
        />
      ))}
      <OrbitControls enabled={false} />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  );
}
