'use client'

import { useRef, useCallback, useEffect, useImperativeHandle, forwardRef } from 'react'
import { cn } from '@/lib/utils'

function getPointFromEvent(e, canvas) {
  const rect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / rect.width
  const scaleY = canvas.height / rect.height
  let clientX
  let clientY
  if ('touches' in e) {
    const touch = e.touches[0] ?? e.changedTouches?.[0]
    if (!touch) return null
    clientX = touch.clientX
    clientY = touch.clientY
  } else {
    clientX = e.clientX
    clientY = e.clientY
  }
  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY
  }
}

export const SignatureField = forwardRef(function SignatureField(
  { id, className, onSignatureChange, clearSignature = true },
  ref
) {
  const canvasRef = useRef(null)
  const isDrawingRef = useRef(false)
  const lastPointRef = useRef(null)
  const hasDrawnRef = useRef(false)
  const strokeStartRef = useRef(null)
  const didDrawThisStrokeRef = useRef(false)

  const clear = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    lastPointRef.current = null
    hasDrawnRef.current = false
    strokeStartRef.current = null
    didDrawThisStrokeRef.current = false
    onSignatureChange?.(true)
  }, [onSignatureChange])

  useImperativeHandle(ref, () => ({ clear }), [clear])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio ?? 1 : 1
    const rect = canvas.getBoundingClientRect()
    const w = Math.floor(rect.width * dpr)
    const h = Math.floor(rect.height * dpr)
    canvas.width = w
    canvas.height = h
    ctx.strokeStyle = '#171717'
    ctx.lineWidth = 2 * dpr
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
  }, [])

  const startDrawing = useCallback((e) => {
    e.preventDefault()
    const canvas = canvasRef.current
    if (!canvas) return
    const point = getPointFromEvent(e, canvas)
    if (!point) return
    isDrawingRef.current = true
    lastPointRef.current = point
    strokeStartRef.current = point
    didDrawThisStrokeRef.current = false
  }, [])

  const draw = useCallback(
    (e) => {
      if (!isDrawingRef.current) return
      const canvas = canvasRef.current
      if (!canvas) return
      const point = getPointFromEvent(e, canvas)
      if (!point) return
      didDrawThisStrokeRef.current = true
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      const last = lastPointRef.current
      ctx.beginPath()
      if (last) {
        ctx.moveTo(last.x, last.y)
        ctx.lineTo(point.x, point.y)
      } else {
        ctx.moveTo(point.x, point.y)
        ctx.lineTo(point.x, point.y)
      }
      ctx.stroke()
      lastPointRef.current = point
      hasDrawnRef.current = true
      onSignatureChange?.(false)
    },
    [onSignatureChange]
  )

  const stopDrawing = useCallback(() => {
    if (!didDrawThisStrokeRef.current && strokeStartRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas?.getContext('2d')
      if (ctx) {
        const point = strokeStartRef.current
        const dpr = typeof window !== 'undefined' ? window.devicePixelRatio ?? 1 : 1
        const radius = 2 * dpr
        ctx.beginPath()
        ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI)
        ctx.fillStyle = ctx.strokeStyle
        ctx.fill()
        onSignatureChange?.(false)
      }
    }
    isDrawingRef.current = false
    lastPointRef.current = null
    strokeStartRef.current = null
  }, [onSignatureChange])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const preventScroll = (e) => e.preventDefault()
    canvas.addEventListener('touchmove', preventScroll, { passive: false })
    return () => canvas.removeEventListener('touchmove', preventScroll)
  }, [])

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="relative touch-none select-none rounded-md border border-gray-200 bg-gray-50/50">
        <canvas
          ref={canvasRef}
          id={id}
          className="block h-[300px] w-full cursor-crosshair rounded-md"
          style={{ touchAction: 'none' }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          onTouchCancel={stopDrawing}
          aria-label="Signature field — draw your signature with your finger or mouse"
        />
      </div>
      {clearSignature && (
        <button
          type="button"
          onClick={clear}
          className="self-end text-sm text-gray-500 underline underline-offset-2 hover:text-gray-700"
        >
          Feld zurücksetzen
        </button>
      )}
    </div>
  )
})
