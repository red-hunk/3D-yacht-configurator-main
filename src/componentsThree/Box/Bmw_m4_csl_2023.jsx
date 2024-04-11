import { useRef } from 'react'
import { PerspectiveCamera, useGLTF } from '@react-three/drei'
import { useAngle, useCarSpeed, useDirection } from '@/store/Controls'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export function Bmw_m4_csl_2023(props) {
  const { camera } = useThree()
  const refs = {
    frontLeft: useRef(),
    frontRight: useRef(),
    backLeft: useRef(),
    backRight: useRef(),
    carRef: useRef()
  }
  const ref = useRef()
  const speed = useCarSpeed((state) => state.speed)
  const angle = useAngle((state) => state.angle)
  const incrementAngle = useAngle((state) => state.increment)
  const decrementAngle = useAngle((state) => state.decrement)
  const direction = {
    right: useDirection((state) => state.right),
    left: useDirection((state) => state.left)
  }

  const orbitRef = useRef()

  useFrame((_, delta) => {
    // refs.frontLeft.current.rotation.x += speed * delta;
    // refs.frontRight.current.rotation.x += speed * delta;
    // refs.backLeft.current.rotation.x += speed * delta;
    // refs.backRight.current.rotation.x += speed * delta;
    ref.current.position.z += speed * Math.cos(angle) * delta
    ref.current.position.x += speed * Math.sin(angle) * delta
    orbitRef.current.target.z += speed * Math.cos(angle) * delta
    orbitRef.current.target.x += speed * Math.sin(angle) * delta
    camera.position.z += speed * Math.cos(angle) * delta
    camera.position.x += speed * Math.sin(angle) * delta
    if (speed > 0 && direction.right) {
      ref.current.rotation.y -= Math.PI / 1800
    } else if (speed > 0 && direction.left) {
      ref.current.rotation.y += Math.PI / 1800
    }
  })

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}>
      {/* <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_exhaust_M4xNME_mechanical_0.geometry}
            material={materials.M4xNME_mechanical}
          />
          <mesh
            geometry={nodes.M4xNME_exhaust_M4xNME_silver_0.geometry}
            material={materials.M4xNME_silver}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_radiator_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={nodes.M4xNME_radiator_M4xNME_Grille7_0.geometry}
            material={materials.M4xNME_Grille7}
          />
        </group>
        <group
          position={[35.886, 87.794, 13.072]}
          rotation={[-1.214, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.M4xNME_steer_stitch_M4xNME_stitch_0.geometry}
            material={materials.M4xNME_stitch}
          />
          <mesh
            geometry={nodes.M4xNME_steer_stitch_M4xNME_Buttons2_0.geometry}
            material={materials.M4xNME_Buttons2}
          />
          <mesh
            geometry={nodes.M4xNME_steer_stitch_M4xNME_Buttons_0.geometry}
            material={materials.M4xNME_Buttons}
          />
          <mesh
            geometry={nodes.M4xNME_steer_stitch_M4xNME_Carbon1_0.geometry}
            material={materials.M4xNME_Carbon1}
          />
          <mesh
            geometry={nodes.M4xNME_steer_stitch_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={nodes.M4xNME_steer_stitch_M4xNME_Leather_0.geometry}
            material={materials.M4xNME_Leather}
          />
          <mesh
            geometry={nodes.M4xNME_steer_stitch_M4xNME_Badge_0.geometry}
            material={materials.M4xNME_Badge}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_headlight_L_yellow_M4xNME_Lights_0.geometry}
            material={materials.M4xNME_Lights}
          />
          <mesh
            geometry={nodes.M4xNME_headlight_L_yellow_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={
              nodes.M4xNME_headlight_L_yellow_M4xNME_runningY_0.geometry
            }
            material={materials.M4xNME_runningY}
          />
          <mesh
            geometry={nodes.M4xNME_headlight_L_yellow_M4xNME_fog_0.geometry}
            material={materials.M4xNME_fog}
          />
          <mesh
            geometry={
              nodes.M4xNME_headlight_L_yellow_M4xNME_highbeam_0.geometry
            }
            material={materials.M4xNME_highbeam}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_headlight_R_yellow_M4xNME_Lights_0.geometry}
            material={materials.M4xNME_Lights}
          />
          <mesh
            geometry={nodes.M4xNME_headlight_R_yellow_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={
              nodes.M4xNME_headlight_R_yellow_M4xNME_runningY_0.geometry
            }
            material={materials.M4xNME_runningY}
          />
          <mesh
            geometry={nodes.M4xNME_headlight_R_yellow_M4xNME_fog_0.geometry}
            material={materials.M4xNME_fog}
          />
          <mesh
            geometry={
              nodes.M4xNME_headlight_R_yellow_M4xNME_highbeam_0.geometry
            }
            material={materials.M4xNME_highbeam}
          />
        </group>
        <group
          position={[74.255, 36.159, 128.394]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={108.649}
        >
          <mesh
            ref={refs.frontLeft}
            geometry={nodes.M4xNME_wheels_enkeif_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={nodes.M4xNME_wheels_enkeif_M4xNME_silver_0.geometry}
            material={materials.M4xNME_silver}
          />
        </group>
        <group
          position={[46.22, 88.848, 21.564]}
          rotation={[-Math.PI / 2, 0.176, 0.143]}
          scale={100}
        >
          <mesh
            geometry={nodes.M4xNME_turn_signal_stalk_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={nodes.M4xNME_turn_signal_stalk_M4xNME_Buttons_0.geometry}
            material={materials.M4xNME_Buttons}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_strutbrace_F_M4xNME_EngineB_0.geometry}
            material={materials.M4xNME_EngineB}
          />
          <mesh
            geometry={nodes.M4xNME_strutbrace_F_M4xNME_EngineA_0.geometry}
            material={materials.M4xNME_EngineA}
          />
        </group>
        <group position={[3.252, 64.359, 4.756]} rotation={[-1.614, 0, 0]}>
          <mesh
            geometry={nodes.M4xNME_shifter_console_A_M4xNME_Leather_0.geometry}
            material={materials.M4xNME_Leather}
          />
          <mesh
            geometry={nodes.M4xNME_shifter_console_A_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={nodes.M4xNME_shifter_console_A_M4xNME_Buttons_0.geometry}
            material={materials.M4xNME_Buttons}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_mirror_R_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={nodes.M4xNME_mirror_R_mirror_0.geometry}
            material={materials.mirror}
          />
          <mesh
            geometry={nodes.M4xNME_mirror_R_M4xNME_GlassClear_0.geometry}
            material={materials.M4xNME_GlassClear}
          />
          <mesh
            geometry={nodes.M4xNME_mirror_R_M4xNME_signal_R_0.geometry}
            material={materials.M4xNME_signal_R}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_mirror_L_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={nodes.M4xNME_mirror_L_M4xNME_GlassClear_0.geometry}
            material={materials.M4xNME_GlassClear}
          />
          <mesh
            geometry={nodes.M4xNME_mirror_L_mirror_0.geometry}
            material={materials.mirror}
          />
          <mesh
            geometry={nodes.M4xNME_mirror_L_M4xNME_signal_L_0.geometry}
            material={materials.M4xNME_signal_L}
          />
        </group>
        <group
          position={[25.9, 38.897, 64.72]}
          rotation={[-1.609, 0, 0]}
          scale={[0.936, 1, 1.011]}
        >
          <mesh
            geometry={nodes.M4xNME_gaspedal_M4xNME_Buttons_0.geometry}
            material={materials.M4xNME_Buttons}
          />
          <mesh
            geometry={nodes.M4xNME_gaspedal_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_fender_R_M4xNME_Paint_0.geometry}
            material={materials.M4xNME_Paint}
          />
          <mesh
            geometry={nodes.M4xNME_fender_R_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_fender_L_M4xNME_Paint_0.geometry}
            material={materials.M4xNME_Paint}
          />
          <mesh
            geometry={nodes.M4xNME_fender_L_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_enginebay_M4xNME_EngineB_0.geometry}
            material={materials.M4xNME_EngineB}
          />
          <mesh
            geometry={nodes.M4xNME_enginebay_M4xNME_EngineA_0.geometry}
            material={materials.M4xNME_EngineA}
          />
          <mesh
            geometry={nodes.M4xNME_enginebay_M4xNME_Grille3_0.geometry}
            material={materials.M4xNME_Grille3}
          />
          <mesh
            geometry={nodes.M4xNME_enginebay_M4xNME_Paint_0.geometry}
            material={materials.M4xNME_Paint}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_doorpanel_FR_M4xNME_Grille4_0.geometry}
            material={materials.M4xNME_Grille4}
          />
          <mesh
            geometry={nodes.M4xNME_doorpanel_FR_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={nodes.M4xNME_doorpanel_FR_M4xNME_Colorable1_0.geometry}
            material={materials.M4xNME_Colorable1}
          />
          <mesh
            geometry={nodes.M4xNME_doorpanel_FR_M4xNME_Buttons_0.geometry}
            material={materials.M4xNME_Buttons}
          />
          <mesh
            geometry={nodes.M4xNME_doorpanel_FR_M4xNME_Paint2_0.geometry}
            material={materials.M4xNME_Paint2}
          />
          <mesh
            geometry={nodes.M4xNME_doorpanel_FR_M4xNME_Leather_0.geometry}
            material={materials.M4xNME_Leather}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_doorpanel_FL_M4xNME_silver_0.geometry}
            material={materials.M4xNME_silver}
          />
          <mesh
            geometry={nodes.M4xNME_doorpanel_FL_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={nodes.M4xNME_doorpanel_FL_M4xNME_Paint2_0.geometry}
            material={materials.M4xNME_Paint2}
          />
          <mesh
            geometry={nodes.M4xNME_doorpanel_FL_M4xNME_Colorable1_0.geometry}
            material={materials.M4xNME_Colorable1}
          />
          <mesh
            geometry={nodes.M4xNME_doorpanel_FL_M4xNME_Buttons_0.geometry}
            material={materials.M4xNME_Buttons}
          />
          <mesh
            geometry={nodes.M4xNME_doorpanel_FL_M4xNME_Grille4_0.geometry}
            material={materials.M4xNME_Grille4}
          />
          <mesh
            geometry={nodes.M4xNME_doorpanel_FL_M4xNME_Leather_0.geometry}
            material={materials.M4xNME_Leather}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_door_FR_M4xNME_Paint_0.geometry}
            material={materials.M4xNME_Paint}
          />
          <mesh
            geometry={nodes.M4xNME_door_FR_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_door_FL_M4xNME_Paint_0.geometry}
            material={materials.M4xNME_Paint}
          />
          <mesh
            geometry={nodes.M4xNME_door_FL_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_bumper_R_M4xNME_Paint_0.geometry}
            material={materials.M4xNME_Paint}
          />
          <mesh
            geometry={nodes.M4xNME_bumper_R_M4xNME_fogred_0.geometry}
            material={materials.M4xNME_fogred}
          />
          <mesh
            geometry={nodes.M4xNME_bumper_R_M4xNME_GlassClear_0.geometry}
            material={materials.M4xNME_GlassClear}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_bumper_F_M4xNME_Paint_0.geometry}
            material={materials.M4xNME_Paint}
          />
          <mesh
            geometry={nodes.M4xNME_bumper_F_M4xNME_Badge_0.geometry}
            material={materials.M4xNME_Badge}
          />
          <mesh
            geometry={nodes.M4xNME_bumper_F_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_body_M4xNME_Paint_0.geometry}
            material={materials.M4xNME_Paint}
          />
          <mesh
            geometry={nodes.M4xNME_body_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={nodes.M4xNME_body_M4xNME_brake_0.geometry}
            material={materials.M4xNME_brake}
          />
          <mesh
            geometry={nodes.M4xNME_body_M4xNME_Grille5_0.geometry}
            material={materials.M4xNME_Grille5}
          />
          <mesh
            geometry={nodes.M4xNME_body_mirror_0.geometry}
            material={materials.mirror}
          />
          <mesh
            geometry={nodes.M4xNME_body_M4xNME_mechanical_0.geometry}
            material={materials.M4xNME_mechanical}
          />
          <mesh
            geometry={nodes.M4xNME_body_M4xNME_Blackint_0.geometry}
            material={materials.M4xNME_Blackint}
          />
        </group>
        <group
          position={[75.058, 36.159, 128.394]}
          rotation={[Math.PI / 2, -0.035, Math.PI]}
          scale={[112.663, 96.688, 96.688]}
        >
          <mesh
            geometry={nodes.amdb11_brakedisc_FR003_amdb11_brake002_0.geometry}
            material={materials["amdb11_brake.002"]}
          />
          <mesh
            geometry={
              nodes.amdb11_brakedisc_FR003_amdb11_misc_chrome002_0.geometry
            }
            material={materials["amdb11_misc_chrome.002"]}
          />
          <mesh
            geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc002_0.geometry}
            material={materials["amdb11_misc.002"]}
          />
          <mesh
            geometry={nodes.amdb11_brakedisc_FR003_amdb11_caliper002_0.geometry}
            material={materials["amdb11_caliper.002"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_interior_csl_M4xNME_Black002_0.geometry}
            material={materials["M4xNME_Black.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_interior_csl_M4xNME_Leather002_0.geometry}
            material={materials["M4xNME_Leather.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_interior_csl_M4xNME_silver001_0.geometry}
            material={materials["M4xNME_silver.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_interior_csl_M4xNME_Buttons2001_0.geometry}
            material={materials["M4xNME_Buttons2.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_interior_csl_mirror001_0.geometry}
            material={materials["mirror.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_interior_csl_M4xNME_Paint2002_0.geometry}
            material={materials["M4xNME_Paint2.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_interior_csl_M4xNME_stitch001_0.geometry}
            material={materials["M4xNME_stitch.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_interior_csl_M4xNME_net_0.geometry}
            material={materials.M4xNME_net}
          />
          <mesh
            geometry={nodes.M4xNME_interior_csl_M4xNME_Buttons002_0.geometry}
            material={materials["M4xNME_Buttons.002"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_console_csl_M4xNME_Colorable1002_0.geometry}
            material={materials["M4xNME_Colorable1.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_console_csl_M4xNME_stitch001_0.geometry}
            material={materials["M4xNME_stitch.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_console_csl_M4xNME_Black006_0.geometry}
            material={materials["M4xNME_Black.006"]}
          />
          <mesh
            geometry={nodes.M4xNME_console_csl_M4xNME_Carbon1001_0.geometry}
            material={materials["M4xNME_Carbon1.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_console_csl_M4xNME_Buttons2001_0.geometry}
            material={materials["M4xNME_Buttons2.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_console_csl_M4xNME_silver001_0.geometry}
            material={materials["M4xNME_silver.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_console_csl_M4xNME_red001_0.geometry}
            material={materials["M4xNME_red.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_console_csl_M4xNME_Leather002_0.geometry}
            material={materials["M4xNME_Leather.002"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_grille_F_csl_M4xNME_Black002_0.geometry}
            material={materials["M4xNME_Black.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_grille_F_csl_M4xNME_Carbon1001_0.geometry}
            material={materials["M4xNME_Carbon1.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_grille_F_csl_M4xNME_Paint2002_0.geometry}
            material={materials["M4xNME_Paint2.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_grille_F_csl_M4xNME_badge_csl_0.geometry}
            material={materials.M4xNME_badge_csl}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_hood_csl_M4xNME_Paint_0.geometry}
            material={materials.M4xNME_Paint}
          />
          <mesh
            geometry={nodes.M4xNME_hood_csl_M4xNME_Carbon1001_0.geometry}
            material={materials["M4xNME_Carbon1.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_hood_csl_M4xNME_Paint2002_0.geometry}
            material={materials["M4xNME_Paint2.002"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_roofline_csl_M4xNME_Paint2002_0.geometry}
            material={materials["M4xNME_Paint2.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_roofline_csl_M4xNME_Black002_0.geometry}
            material={materials["M4xNME_Black.002"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_seat_L_csl_M4xNME_Carbon1001_0.geometry}
            material={materials["M4xNME_Carbon1.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_seat_L_csl_M4xNME_Leather002_0.geometry}
            material={materials["M4xNME_Leather.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_seat_L_csl_M4xNME_stitch001_0.geometry}
            material={materials["M4xNME_stitch.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_seat_L_csl_M4xNME_silver001_0.geometry}
            material={materials["M4xNME_silver.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_seat_L_csl_M4xNME_Colorable1002_0.geometry}
            material={materials["M4xNME_Colorable1.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_seat_L_csl_M4xNME_Black002_0.geometry}
            material={materials["M4xNME_Black.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_seat_L_csl_M4xNME_Paint2002_0.geometry}
            material={materials["M4xNME_Paint2.002"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_seat_R_csl_M4xNME_Leather002_0.geometry}
            material={materials["M4xNME_Leather.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_seat_R_csl_M4xNME_Colorable1002_0.geometry}
            material={materials["M4xNME_Colorable1.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_seat_R_csl_M4xNME_silver001_0.geometry}
            material={materials["M4xNME_silver.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_seat_R_csl_M4xNME_Black002_0.geometry}
            material={materials["M4xNME_Black.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_seat_R_csl_M4xNME_Carbon1001_0.geometry}
            material={materials["M4xNME_Carbon1.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_seat_R_csl_M4xNME_stitch001_0.geometry}
            material={materials["M4xNME_stitch.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_seat_R_csl_M4xNME_Paint2002_0.geometry}
            material={materials["M4xNME_Paint2.002"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_splitter_F_csl_M4xNME_Carbon1001_0.geometry}
            material={materials["M4xNME_Carbon1.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_splitter_F_csl_M4xNME_Paint2002_0.geometry}
            material={materials["M4xNME_Paint2.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_splitter_F_csl_M4xNME_silver001_0.geometry}
            material={materials["M4xNME_silver.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_splitter_F_csl_M4xNME_Black002_0.geometry}
            material={materials["M4xNME_Black.002"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_tailgatelight_csl_M4xNME_Black002_0.geometry}
            material={materials["M4xNME_Black.002"]}
          />
          <mesh
            geometry={
              nodes.M4xNME_tailgatelight_csl_M4xNME_taillight_top001_0.geometry
            }
            material={materials["M4xNME_taillight_top.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_tailgatelight_csl_M4xNME_LS8001_0.geometry}
            material={materials["M4xNME_LS8.001"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_taillight_L_csl_M4xNME_Black002_0.geometry}
            material={materials["M4xNME_Black.002"]}
          />
          <mesh
            geometry={
              nodes.M4xNME_taillight_L_csl_M4xNME_taillight_top001_0.geometry
            }
            material={materials["M4xNME_taillight_top.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_taillight_L_csl_M4xNME_brake002_0.geometry}
            material={materials["M4xNME_brake.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_taillight_L_csl_M4xNME_LS8001_0.geometry}
            material={materials["M4xNME_LS8.001"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_taillight_R_csl_M4xNME_Black002_0.geometry}
            material={materials["M4xNME_Black.002"]}
          />
          <mesh
            geometry={
              nodes.M4xNME_taillight_R_csl_M4xNME_taillight_top001_0.geometry
            }
            material={materials["M4xNME_taillight_top.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_taillight_R_csl_M4xNME_brake002_0.geometry}
            material={materials["M4xNME_brake.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_taillight_R_csl_M4xNME_LS8001_0.geometry}
            material={materials["M4xNME_LS8.001"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_trunk_csl_M4xNME_Paint_0.geometry}
            material={materials.M4xNME_Paint}
          />
          <mesh
            geometry={nodes.M4xNME_trunk_csl_M4xNME_lowhighbeam001_0.geometry}
            material={materials["M4xNME_lowhighbeam.001"]}
          />
          <mesh
            geometry={nodes.M4xNME_trunk_csl_M4xNME_Badge_0.geometry}
            material={materials.M4xNME_Badge}
          />
          <mesh
            geometry={nodes.M4xNME_trunk_csl_M4xNME_Black002_0.geometry}
            material={materials["M4xNME_Black.002"]}
          />
        </group>
        <group
          position={[74.255, 36.159, -141.418]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={108.649}
        >
          <mesh
            ref={refs.backLeft}
            geometry={nodes.M4xNME_wheels_enkeif001_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={nodes.M4xNME_wheels_enkeif001_M4xNME_silver_0.geometry}
            material={materials.M4xNME_silver}
          />
        </group>
        <group
          position={[75.058, 36.159, -141.418]}
          rotation={[Math.PI / 2, -0.035, Math.PI]}
          scale={[112.663, 96.688, 96.688]}
        >
          <mesh
            geometry={nodes.amdb11_brakedisc_FR001_amdb11_brake002_0.geometry}
            material={materials["amdb11_brake.002"]}
          />
          <mesh
            geometry={
              nodes.amdb11_brakedisc_FR001_amdb11_misc_chrome002_0.geometry
            }
            material={materials["amdb11_misc_chrome.002"]}
          />
          <mesh
            geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc002_0.geometry}
            material={materials["amdb11_misc.002"]}
          />
          <mesh
            geometry={nodes.amdb11_brakedisc_FR001_amdb11_caliper002_0.geometry}
            material={materials["amdb11_caliper.002"]}
          />
        </group>
        <group
          position={[-73.985, 36.159, 128.394]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-108.649, 108.649, 108.649]}
        >
          <mesh
            ref={refs.frontRight}
            geometry={nodes.M4xNME_wheels_enkeif002_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={nodes.M4xNME_wheels_enkeif002_M4xNME_silver_0.geometry}
            material={materials.M4xNME_silver}
          />
        </group>
        <group
          position={[-74.788, 36.159, 128.394]}
          rotation={[Math.PI / 2, 0.035, -Math.PI]}
          scale={[-112.663, 96.688, 96.688]}
        >
          <mesh
            geometry={nodes.amdb11_brakedisc_FR002_amdb11_brake002_0.geometry}
            material={materials["amdb11_brake.002"]}
          />
          <mesh
            geometry={
              nodes.amdb11_brakedisc_FR002_amdb11_misc_chrome002_0.geometry
            }
            material={materials["amdb11_misc_chrome.002"]}
          />
          <mesh
            geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc002_0.geometry}
            material={materials["amdb11_misc.002"]}
          />
          <mesh
            geometry={nodes.amdb11_brakedisc_FR002_amdb11_caliper002_0.geometry}
            material={materials["amdb11_caliper.002"]}
          />
        </group>
        <group
          position={[-73.985, 36.159, -141.418]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-108.649, 108.649, 108.649]}
        >
          <mesh
            ref={refs.backRight}
            geometry={nodes.M4xNME_wheels_enkeif003_M4xNME_Black_0.geometry}
            material={materials.M4xNME_Black}
          />
          <mesh
            geometry={nodes.M4xNME_wheels_enkeif003_M4xNME_silver_0.geometry}
            material={materials.M4xNME_silver}
          />
        </group>
        <group
          position={[-74.788, 36.159, -141.418]}
          rotation={[Math.PI / 2, 0.035, -Math.PI]}
          scale={[-112.663, 96.688, 96.688]}
        >
          <mesh
            geometry={nodes.amdb11_brakedisc_FR004_amdb11_brake002_0.geometry}
            material={materials["amdb11_brake.002"]}
          />
          <mesh
            geometry={
              nodes.amdb11_brakedisc_FR004_amdb11_misc_chrome002_0.geometry
            }
            material={materials["amdb11_misc_chrome.002"]}
          />
          <mesh
            geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc002_0.geometry}
            material={materials["amdb11_misc.002"]}
          />
          <mesh
            geometry={nodes.amdb11_brakedisc_FR004_amdb11_caliper002_0.geometry}
            material={materials["amdb11_caliper.002"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_roof_carbon_M4xNME_Carbon1002_0.geometry}
            material={materials["M4xNME_Carbon1.002"]}
          />
          <mesh
            geometry={nodes.M4xNME_roof_carbon_M4xNME_Black003_0.geometry}
            material={materials["M4xNME_Black.003"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.M4xNME_dash_M4xNME_hud2003_0.geometry}
            material={materials["M4xNME_hud2.003"]}
          />
          <mesh
            geometry={nodes.M4xNME_dash_M4xNME_Leather005_0.geometry}
            material={materials["M4xNME_Leather.005"]}
          />
          <mesh
            geometry={nodes.M4xNME_dash_M4xNME_Colorable1005_0.geometry}
            material={materials["M4xNME_Colorable1.005"]}
          />
          <mesh
            geometry={nodes.M4xNME_dash_M4xNME_Black005_0.geometry}
            material={materials["M4xNME_Black.005"]}
          />
          <mesh
            geometry={nodes.M4xNME_dash_M4xNME_Carbon1004_0.geometry}
            material={materials["M4xNME_Carbon1.004"]}
          />
          <mesh
            geometry={nodes.M4xNME_dash_M4xNME_Grille3003_0.geometry}
            material={materials["M4xNME_Grille3.003"]}
          />
          <mesh
            geometry={nodes.M4xNME_dash_M4xNME_Grille2003_0.geometry}
            material={materials["M4xNME_Grille2.003"]}
          />
          <mesh
            geometry={nodes.M4xNME_dash_M4xNME_Buttons005_0.geometry}
            material={materials["M4xNME_Buttons.005"]}
          />
          <mesh
            geometry={nodes.M4xNME_dash_M4xNME_silver004_0.geometry}
            material={materials["M4xNME_silver.004"]}
          />
          <mesh
            geometry={nodes.M4xNME_dash_M4xNME_GlassClear004_0.geometry}
            material={materials["M4xNME_GlassClear.004"]}
          />
        </group>
        <mesh
          geometry={nodes.M4xNME_fenderint_M4xNME_Blackint_0.geometry}
          material={materials.M4xNME_Blackint}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_bumperbar_F_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_reinforcement_R_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_unused_M4xNME_Black_0.geometry}
          material={materials.M4xNME_Black}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_intercooler_M4xNME_Grille7_0.geometry}
          material={materials.M4xNME_Grille7}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_diff_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_diff_F_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_driveshaft_F_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          position={[-12.401, 30.804, 32.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={91.298}
        />
        <mesh
          geometry={nodes.M4xNME_driveshaft_R_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          position={[1.408, 33.448, -54.875]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.913}
        />
        <mesh
          geometry={nodes.M4xNME_driveshaft_RF_awd_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          position={[1.407, 33.554, -1.479]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.913}
        />
        <mesh
          geometry={nodes.M4xNME_fueltank_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_halfshaft_F_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_halfshaft_R_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_heatshield_M4xNME_Black_0.geometry}
          material={materials.M4xNME_Black}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_hub_F_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_hub_R_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_lowerarm_F_a_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_lowerarm_F_b_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_lowerarm_R_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_lowerarm_R_a_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_radsupport_M4xNME_Black_0.geometry}
          material={materials.M4xNME_Black}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_shock_R_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_spring_R_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_steeringbox_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_strut_F_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_subframe_F_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_subframe_R_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_swaybar_F_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_swaybar_links_F_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_swaybar_links_R_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_swaybar_R_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_tierod_F_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_tierod_R_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_transfercase_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_transmission_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={
            nodes.M4xNME_transmission_support_M4xNME_mechanical_0.geometry
          }
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_tubs_M4xNME_Black_0.geometry}
          material={materials.M4xNME_Black}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_undertray_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_upperarm_R_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_upperarm_R_a_M4xNME_mechanical_0.geometry}
          material={materials.M4xNME_mechanical}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={
            nodes.M4xNME_taillightglass_R_custom_M4xNME_GlassClear005_0.geometry
          }
          material={materials["M4xNME_GlassClear.005"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_taillightframe_R_M4xNME_Black_0.geometry}
          material={materials.M4xNME_Black}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_tailgateframe_M4xNME_Black_0.geometry}
          material={materials.M4xNME_Black}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_taillightframe_L_M4xNME_Black_0.geometry}
          material={materials.M4xNME_Black}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_windshield_M4xNME_GlassClear_0.geometry}
          material={materials.M4xNME_GlassClear}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_trunkint_M4xNME_Black_0.geometry}
          material={materials.M4xNME_Black}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_sideskirt_M4xNME_Black_0.geometry}
          material={materials.M4xNME_Black}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_sideglass_R_M4xNME_GlassClear_0.geometry}
          material={materials.M4xNME_GlassClear}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_sideglass_L_M4xNME_GlassClear_0.geometry}
          material={materials.M4xNME_GlassClear}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_intake_M4xNME_EngineB_0.geometry}
          material={materials.M4xNME_EngineB}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_headlightglass_R_M4xNME_GlassClear_0.geometry}
          material={materials.M4xNME_GlassClear}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_headlightglass_L_M4xNME_GlassClear_0.geometry}
          material={materials.M4xNME_GlassClear}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={
            nodes.M4xNME_exhaust_double_straight_M4xNME_Black_0.geometry
          }
          material={materials.M4xNME_Black}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_engine_M4xNME_EngineB_0.geometry}
          material={materials.M4xNME_EngineB}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_doorglass_FR_M4xNME_GlassClear_0.geometry}
          material={materials.M4xNME_GlassClear}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_doorglass_FL_M4xNME_GlassClear_0.geometry}
          material={materials.M4xNME_GlassClear}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_diffuser_M4xNME_Black_0.geometry}
          material={materials.M4xNME_Black}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_brakepedal_M4xNME_Black_0.geometry}
          material={materials.M4xNME_Black}
          position={[38.147, 63.352, 71.429]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.936, 1, 1.011]}
        />
        <mesh
          geometry={nodes.M4xNME_backlight_M4xNME_GlassClear_0.geometry}
          material={materials.M4xNME_GlassClear}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes["Object_4003_Scene_-_Root002_0"].geometry}
          material={materials["Scene_-_Root.002"]}
          position={[76.063, 36.159, 128.394]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[127.027, 104.296, 104.296]}
        />
        <mesh
          geometry={nodes.M4xNME_bumperline_R_csl_M4xNME_Paint2002_0.geometry}
          material={materials["M4xNME_Paint2.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_diffuserline_csl_M4xNME_Paint2002_0.geometry}
          material={materials["M4xNME_Paint2.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_sideskirtline_csl_M4xNME_Paint2002_0.geometry}
          material={materials["M4xNME_Paint2.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes["Object_4001_Scene_-_Root002_0"].geometry}
          material={materials["Scene_-_Root.002"]}
          position={[76.063, 36.159, -141.418]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[127.027, 104.296, 104.296]}
        />
        <mesh
          geometry={nodes["Object_4002_Scene_-_Root002_0"].geometry}
          material={materials["Scene_-_Root.002"]}
          position={[-75.793, 36.159, 128.394]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-127.027, 104.296, 104.296]}
        />
        <mesh
          geometry={nodes["Object_4004_Scene_-_Root002_0"].geometry}
          material={materials["Scene_-_Root.002"]}
          position={[-75.793, 36.159, -141.418]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-127.027, 104.296, 104.296]}
        />
        <mesh
          geometry={nodes.M4xNME_console_csl001_M4xNME_Leather002_0.geometry}
          material={materials["M4xNME_Leather.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_shifter_console_A001_M4xNME_Leather_0.geometry}
          material={materials.M4xNME_Leather}
          position={[3.252, 64.359, 4.756]}
          rotation={[-1.614, 0, 0]}
        />
        <mesh
          geometry={nodes.M4xNME_steer_stitch001_M4xNME_Badge_0.geometry}
          material={materials.M4xNME_Badge}
          position={[35.886, 87.794, 13.072]}
          rotation={[-1.214, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.M4xNME_grille_F_csl001_M4xNME_Paint2002_0.geometry}
          material={materials["M4xNME_Paint2.002"]}
          position={[20.23, 59.537, 207.005]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group> */}
      <mesh scale={2}>
        <boxGeometry args={[3, 2, 1]} />
        <meshStandardMaterial />
      </mesh>
      {/* <Yacht /> */}
      <OrbitControls
        ref={orbitRef}
        enablePan={false}
        makeDefault
      />
    </group>
  )
}

useGLTF.preload('/bmw_m4_csl_2023.glb')
