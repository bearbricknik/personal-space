'use client'

import { useRef, useState } from 'react'
import { SignatureField } from '@/components/signature-field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function PostSigningPage() {
  const formRef = useRef(null)
  const signatureRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    const phoneInput = form.elements.namedItem('phone')
    const phone = phoneInput ? phoneInput.value : ''
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/discord', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `Post-signing: Telefonnummer ${phone} – Unterschrift erhalten.`,
        }),
      })
      const data = await res.json()
      if (data.success) {
        signatureRef.current?.clear()
        form.reset()
      }
    } catch {
      // already logged by fetch
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="h-dvh w-full overflow-y-auto">
      <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:max-w-lg">
        <form ref={formRef} className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="signature"
            className="block text-sm font-medium text-gray-700"
          >
            Unterschrift
          </label>
          <p className="mb-2 text-sm text-gray-500">
            Bitte unterschreiben Sie den Erhalt des Einschreibens.
          </p>
          <SignatureField id="signature" ref={signatureRef} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Deine Telefonnummer
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="e.g. +49 123 456789"
              className="w-full"
              required
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Wird gesendet…' : 'Senden'}
            </Button>
          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default PostSigningPage
