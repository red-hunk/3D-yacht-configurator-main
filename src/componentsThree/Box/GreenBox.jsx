export default function GreenBox() {
  return (
    <mesh scale={2}>
      <boxGeometry args={[3, 2, 2]} />
      <meshStandardMaterial color={'#00ff00'} />
    </mesh>
  )
}
