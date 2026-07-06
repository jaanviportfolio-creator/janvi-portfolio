import { useGLTF } from "@react-three/drei";

export default function Avatar() {
  const { scene } = useGLTF("/models/Avatar.glb");

  return (
    <primitive
      object={scene}
      scale={0.01}
      position={[0, -1, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

useGLTF.preload("/models/Avatar.glb");