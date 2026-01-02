'use client'

import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export const DateSelector = ({ question = 'Willst du mit mir ausgehen?', onAnswer }) => {
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        if (selected === 'ja') {
            const duration = 2 * 1000
            const animationEnd = Date.now() + duration
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 }

            const randomInRange = (min, max) =>
                Math.random() * (max - min) + min

            // Create heart emoji shape - check if shapeFromText is available
            let heartEmoji
            try {
                if (typeof confetti.shapeFromText === 'function') {
                    heartEmoji = confetti.shapeFromText({ text: '❤️' })
                }
            } catch (e) {
                // Fallback if shapeFromText is not available
                console.warn('shapeFromText not available, using default shapes')
            }

            const interval = window.setInterval(() => {
                const timeLeft = animationEnd - Date.now()

                if (timeLeft <= 0) {
                    clearInterval(interval)
                    // Reset selected state after animation completes
                    setSelected(null)
                    return
                }

                const particleCount = 50 * (timeLeft / duration)
                const confettiOptions = {
                    ...defaults,
                    particleCount,
                    scalar: 2,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                }

                if (heartEmoji) {
                    confettiOptions.shapes = [heartEmoji]
                }

                confetti(confettiOptions)

                const confettiOptions2 = {
                    ...defaults,
                    particleCount,
                    scalar: 2,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                }

                if (heartEmoji) {
                    confettiOptions2.shapes = [heartEmoji]
                }

                confetti(confettiOptions2)
            }, 250)

            return () => {
                clearInterval(interval)
            }
        } else if (selected === 'nein') {
            const duration = 2 * 1000
            const animationEnd = Date.now() + duration
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 }

            const randomInRange = (min, max) =>
                Math.random() * (max - min) + min

            // Create sad emoji shape - check if shapeFromText is available
            let sadEmoji
            try {
                if (typeof confetti.shapeFromText === 'function') {
                    sadEmoji = confetti.shapeFromText({ text: '🙁' })
                }
            } catch (e) {
                // Fallback if shapeFromText is not available
                console.warn('shapeFromText not available, using default shapes')
            }

            const interval = window.setInterval(() => {
                const timeLeft = animationEnd - Date.now()

                if (timeLeft <= 0) {
                    clearInterval(interval)
                    // Reset selected state after animation completes
                    setSelected(null)
                    return
                }

                const particleCount = 50 * (timeLeft / duration)
                const confettiOptions = {
                    ...defaults,
                    particleCount,
                    scalar: 2,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                }

                if (sadEmoji) {
                    confettiOptions.shapes = [sadEmoji]
                }

                confetti(confettiOptions)

                const confettiOptions2 = {
                    ...defaults,
                    particleCount,
                    scalar: 2,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                }

                if (sadEmoji) {
                    confettiOptions2.shapes = [sadEmoji]
                }

                confetti(confettiOptions2)
            }, 250)

            return () => {
                clearInterval(interval)
            }
        }
    }, [selected])

    const handleAnswer = (answer) => {
        setSelected(answer)
        onAnswer(answer)
    }

    return (
        <div className='flex w-full items-center justify-center rounded-lg border p-4'>
            <div className="flex flex-col items-center gap-2">
                <Label htmlFor="date-question" className="text-lg">
                    {question}
                </Label>
                <div className="flex w-full flex-wrap gap-4">
                    <Button
                        onClick={() => handleAnswer('ja')}
                        variant={selected === 'ja' ? 'default' : 'outline'}
                        className="min-w-[120px] flex-1"
                    >
                        Ja
                    </Button>
                    <Button
                        onClick={() => handleAnswer('ja')}
                        variant={selected === 'ja' ? 'default' : 'outline'}
                        className="min-w-[120px] flex-1"
                    >
                        Ja auf jeden Fall
                    </Button>
                    <Button
                        onClick={() => handleAnswer('ja')}
                        variant={selected === 'ja' ? 'default' : 'outline'}
                        className="min-w-[120px] flex-1"
                    >
                        Definitiv
                    </Button>
                    <Button
                        onClick={() => handleAnswer('ja')}
                        variant={selected === 'ja' ? 'default' : 'outline'}
                        className="min-w-[120px] flex-1"
                    >
                        Ganz sicher
                    </Button>
                    {/* <Button
                        onClick={() => setSelected('nein')}
                        variant={selected === 'nein' ? 'default' : 'outline'}
                    >
                        Nein
                    </Button> */}
                </div>
            </div>
        </div>
    )
}

