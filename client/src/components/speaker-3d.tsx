import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'

interface Speaker3DProps {
  isExploded: boolean
  selectedPart: string | null
  onPartClick: (partId: string) => void
  completedSteps: number[]
}

export function Speaker3D({ isExploded, selectedPart, onPartClick, completedSteps }: Speaker3DProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const speakerPartsRef = useRef<{ [key: string]: THREE.Mesh }>({})
  const animationFrameRef = useRef<number>()
  const [isLoaded, setIsLoaded] = useState(false)

  const speakerParts = [
    { id: 'cabinet', name: 'Cabinet Base', color: 0x8B4513, position: [0, 0, 0] },
    { id: 'woofer', name: 'Woofer Driver', color: 0x2C2C2C, position: [0, 0, 0.1] },
    { id: 'tweeter', name: 'Tweeter', color: 0xC0C0C0, position: [0, 0.3, 0.12] },
    { id: 'crossover', name: 'Crossover', color: 0x006400, position: [0, -0.3, -0.1] },
    { id: 'port', name: 'Port', color: 0x1C1C1C, position: [0, -0.2, 0.1] },
    { id: 'baffle', name: 'Front Baffle', color: 0x3C3C3C, position: [0, 0, 0.15] }
  ]

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1a1a1a)
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(2, 1, 2)
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xFFD700, 0.8)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    scene.add(directionalLight)

    const spotLight = new THREE.SpotLight(0xDAA520, 0.5)
    spotLight.position.set(-3, 3, 3)
    spotLight.angle = Math.PI / 6
    spotLight.penumbra = 0.1
    spotLight.castShadow = true
    scene.add(spotLight)

    // Create speaker parts
    speakerParts.forEach((partData, index) => {
      let geometry: THREE.BufferGeometry

      switch (partData.id) {
        case 'cabinet':
          geometry = new THREE.BoxGeometry(1, 1.5, 0.8)
          break
        case 'woofer':
          geometry = new THREE.CylinderGeometry(0.35, 0.35, 0.1, 32)
          break
        case 'tweeter':
          geometry = new THREE.SphereGeometry(0.08, 16, 16)
          break
        case 'crossover':
          geometry = new THREE.BoxGeometry(0.3, 0.2, 0.05)
          break
        case 'port':
          geometry = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 16)
          break
        case 'baffle':
          geometry = new THREE.BoxGeometry(1.02, 1.52, 0.05)
          break
        default:
          geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
      }

      const material = new THREE.MeshPhongMaterial({
        color: partData.color,
        transparent: true,
        opacity: 0.9
      })

      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(partData.position[0], partData.position[1], partData.position[2])
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.userData = { id: partData.id, name: partData.name, originalPosition: partData.position }

      scene.add(mesh)
      speakerPartsRef.current[partData.id] = mesh
    })

    // Add ground plane
    const groundGeometry = new THREE.PlaneGeometry(10, 10)
    const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x0D0D0D })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -1
    ground.receiveShadow = true
    scene.add(ground)

    // Raycaster for mouse interactions
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const handleMouseClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(Object.values(speakerPartsRef.current))

      if (intersects.length > 0) {
        const clickedObject = intersects[0].object as THREE.Mesh
        const partId = clickedObject.userData.id
        onPartClick(partId)
      }
    }

    renderer.domElement.addEventListener('click', handleMouseClick)

    // Mouse controls for camera
    let isMouseDown = false
    let mouseX = 0
    let mouseY = 0

    const handleMouseDown = (event: MouseEvent) => {
      isMouseDown = true
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const handleMouseUp = () => {
      isMouseDown = false
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!isMouseDown) return

      const deltaX = event.clientX - mouseX
      const deltaY = event.clientY - mouseY

      const spherical = new THREE.Spherical()
      spherical.setFromVector3(camera.position)
      spherical.theta -= deltaX * 0.01
      spherical.phi += deltaY * 0.01
      spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi))

      camera.position.setFromSpherical(spherical)
      camera.lookAt(0, 0, 0)

      mouseX = event.clientX
      mouseY = event.clientY
    }

    renderer.domElement.addEventListener('mousedown', handleMouseDown)
    renderer.domElement.addEventListener('mouseup', handleMouseUp)
    renderer.domElement.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)

      // Update part positions based on exploded state
      Object.entries(speakerPartsRef.current).forEach(([partId, mesh], index) => {
        const targetY = isExploded ? (index - 2.5) * 0.8 : mesh.userData.originalPosition[1]
        mesh.position.y += (targetY - mesh.position.y) * 0.1

        // Highlight selected part
        const material = mesh.material as THREE.MeshPhongMaterial
        if (selectedPart === partId) {
          material.color.setHex(0xFFD700)
          material.emissive.setHex(0x333300)
        } else if (completedSteps.includes(index)) {
          material.color.setHex(0xDAA520)
          material.emissive.setHex(0x000000)
        } else {
          material.color.setHex(speakerParts[index].color)
          material.emissive.setHex(0x000000)
        }
      })

      renderer.render(scene, camera)
    }

    animate()
    setIsLoaded(true)

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', handleResize)
      renderer.domElement.removeEventListener('click', handleMouseClick)
      renderer.domElement.removeEventListener('mousedown', handleMouseDown)
      renderer.domElement.removeEventListener('mouseup', handleMouseUp)
      renderer.domElement.removeEventListener('mousemove', handleMouseMove)
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  // Update exploded state and selected part
  useEffect(() => {
    // Effect is handled in animation loop
  }, [isExploded, selectedPart, completedSteps])

  return (
    <div className="relative w-full h-full">
      <div ref={mountRef} className="w-full h-full" />
      
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-warm-gray dark:bg-deep-black">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-4 border-gold-accent border-t-transparent rounded-full"
          />
        </div>
      )}
      
      <div className="absolute bottom-4 left-4 text-xs text-platinum dark:text-soft-white/80 bg-jet-black/50 px-3 py-1 rounded">
        Click parts to select • Drag to rotate • Scroll to zoom
      </div>
    </div>
  )
}