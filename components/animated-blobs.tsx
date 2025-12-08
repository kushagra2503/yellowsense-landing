"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function AnimatedBlobs({ position = "left" }: { position?: "left" | "right" }) {
  const [pos, setPos] = useState([0, 0])
  const screenRef = useRef([0, 0])

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setPos([e.clientX - screenRef.current[0] / 2, e.clientY - screenRef.current[1] / 2])
    }

    if (typeof window !== "undefined") {
      screenRef.current = [window.innerWidth, window.innerHeight]
      document.addEventListener("mousemove", handleMove)
    }

    return () => {
      document.removeEventListener("mousemove", handleMove)
    }
  }, [])

  if (position === "right") {
    return (
      <motion.div
        animate={{ opacity: 0.6 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute right-[-20%] bottom-0 rotate-180 hidden lg:flex pointer-events-none"
      >
        <motion.div
          animate={{ x: pos[0] / 10, y: pos[1] / 10 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="size-[20vw] absolute border bottom-0 translate-y-1/2 border-amber-300/90 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 20, y: pos[1] / 20 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="size-[30vw] absolute border bottom-0 translate-y-1/2 border-yellow-300 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 30, y: pos[1] / 30 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="size-[40vw] absolute border bottom-0 translate-y-1/2 border-amber-200/80 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 45, y: pos[1] / 45 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="size-[45vw] absolute border bottom-0 translate-y-1/2 border-yellow-200/70 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 70, y: pos[1] / 70 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="size-[50vw] absolute border bottom-0 translate-y-1/2 border-amber-100/60 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 100, y: pos[1] / 100 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="size-[60vw] absolute border bottom-0 translate-y-1/2 border-yellow-100/40 rounded-full"
        />
      </motion.div>
    )
  }

  return (
    <>
      {/* Mobile blobs */}
      <motion.div
        animate={{ opacity: 0.8 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute left-[-30%] flex lg:hidden pointer-events-none"
      >
        <motion.div
          animate={{ x: pos[0] / 20, y: pos[1] / 20 }}
          className="size-[400px] absolute border bottom-0 translate-y-1/2 border-yellow-100/40 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 30, y: pos[1] / 30 }}
          className="size-[500px] absolute border bottom-0 translate-y-1/2 border-amber-100/60 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 45, y: pos[1] / 45 }}
          className="size-[550px] absolute border bottom-0 translate-y-1/2 border-yellow-200/65 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 50, y: pos[1] / 50 }}
          className="size-[600px] absolute border bottom-0 translate-y-1/2 border-amber-200/70 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 70, y: pos[1] / 70 }}
          className="size-[600px] absolute border bottom-0 translate-y-1/2 border-yellow-300/80 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 90, y: pos[1] / 90 }}
          className="size-[600px] absolute border bottom-0 translate-y-1/2 border-amber-300 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 100, y: pos[1] / 100 }}
          className="size-[800px] absolute border bottom-0 translate-y-1/2 border-yellow-400/90 rounded-full"
        />
      </motion.div>

      {/* Desktop blobs */}
      <motion.div
        animate={{ opacity: 0.9 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute left-[-10%] z-[1] hidden lg:flex pointer-events-none"
      >
        <motion.div
          animate={{ x: pos[0] / 10, y: pos[1] / 10 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="size-[20vw] z-20 absolute border bottom-0 translate-y-1/2 border-yellow-400/90 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 20, y: pos[1] / 20 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="size-[30vw] z-20 absolute border bottom-0 translate-y-1/2 border-amber-300 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 30, y: pos[1] / 30 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="size-[40vw] z-20 absolute border bottom-0 translate-y-1/2 border-yellow-300/80 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 45, y: pos[1] / 45 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="size-[45vw] z-20 absolute border bottom-0 translate-y-1/2 border-amber-200/65 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 50, y: pos[1] / 50 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="size-[50vw] backdrop-blur-[2px] z-[15] absolute border bottom-0 translate-y-1/2 border-yellow-200/60 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 100, y: pos[1] / 100 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="size-[60vw] backdrop-blur-[2px] absolute border bottom-0 translate-y-1/2 border-amber-300 rounded-full"
        />
      </motion.div>
    </>
  )
}

export function FooterSpiral() {
  const [pos, setPos] = useState([0, 0])
  const screenRef = useRef([0, 0])

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setPos([e.clientX - screenRef.current[0] / 2, e.clientY - screenRef.current[1] / 2])
    }

    if (typeof window !== "undefined") {
      screenRef.current = [window.innerWidth, window.innerHeight]
      document.addEventListener("mousemove", handleMove)
    }

    return () => {
      document.removeEventListener("mousemove", handleMove)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left spiral - Light Yellow/Amber */}
      <motion.div
        animate={{ opacity: 0.5 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute left-[-20%] top-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ x: pos[0] / 50, y: pos[1] / 50 }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
          className="size-[15vw] absolute border border-yellow-400/60 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 60, y: pos[1] / 60 }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
          className="size-[25vw] absolute border border-amber-300/50 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 70, y: pos[1] / 70 }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
          className="size-[35vw] absolute border border-yellow-300/40 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 80, y: pos[1] / 80 }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
          className="size-[45vw] absolute border border-amber-200/30 rounded-full"
        />
        <motion.div
          animate={{ x: pos[0] / 90, y: pos[1] / 90 }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
          className="size-[55vw] absolute border border-yellow-200/20 rounded-full"
        />
      </motion.div>

      {/* Right spiral - Light Orange/Amber */}
      <motion.div
        animate={{ opacity: 0.4 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute right-[-30%] top-0"
      >
        <motion.div
          animate={{ x: -pos[0] / 40, y: -pos[1] / 40 }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
          className="size-[20vw] absolute border border-amber-300/50 rounded-full"
        />
        <motion.div
          animate={{ x: -pos[0] / 50, y: -pos[1] / 50 }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
          className="size-[30vw] absolute border border-yellow-300/40 rounded-full"
        />
        <motion.div
          animate={{ x: -pos[0] / 60, y: -pos[1] / 60 }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
          className="size-[40vw] absolute border border-amber-200/30 rounded-full"
        />
        <motion.div
          animate={{ x: -pos[0] / 70, y: -pos[1] / 70 }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
          className="size-[50vw] absolute border border-yellow-200/20 rounded-full"
        />
      </motion.div>
    </div>
  )
}
