export default function RedBox() {
  return (
    <mesh scale={2}>
      <boxGeometry args={[3, 2, 1]} />
      <meshStandardMaterial color={'#ff0000'} />
    </mesh>
  )
}
