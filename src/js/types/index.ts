/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import type {GLTF} from 'three-stdlib'

export type GLTFResult = GLTF & {
  nodes: {
    ['01_office']: THREE.Mesh
    ['02_library']: THREE.Mesh
    ['03_attic']: THREE.Mesh
  }
  materials: {
    ['01']: THREE.MeshStandardMaterial
    ['02']: THREE.MeshStandardMaterial
    ['03']: THREE.MeshStandardMaterial
  }
}
