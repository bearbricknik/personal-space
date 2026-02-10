'use client'
import { useRouter, usePathname } from 'next/navigation'
import { ScrollArea } from '@/components/scroll-area'
import { useKeyPress } from '@/hooks/useKeyPress'
import { cn } from '@/lib/utils'

const keyCodePathnameMapping = {
  Digit1: '/',
  Digit2: '/cv',
  Digit3: '/projects',
  Digit4: '/open-source',
  Digit5: '/stack'
}

export const SideMenu = ({ children, title, isInner }) => {
  const router = useRouter()
  const pathname = usePathname()
  useKeyPress(onKeyPress, Object.keys(keyCodePathnameMapping))

  function onKeyPress(event) {
    const active = document.activeElement
    const isTyping = active && (
      active.tagName === 'INPUT' ||
      active.tagName === 'TEXTAREA' ||
      active.tagName === 'SELECT' ||
      active.isContentEditable
    )
    if (isTyping) return

    const key = event.code
    const targetPathname = keyCodePathnameMapping[key]
    if (targetPathname && targetPathname !== pathname) router.push(targetPathname)
  }

  if (pathname.startsWith('/love-story') || pathname.startsWith('/post-signing')) return null

  return (
    <ScrollArea
      className={cn(
        'hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r',
        isInner ? 'lg:w-80 xl:w-96' : 'lg:w-60 xl:w-72'
      )}
    >
      {title && (
        <div className="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold tracking-tight">{title}</span>
          </div>
        </div>
      )}
      <div className="bg-zinc-50 p-3">{children}</div>
    </ScrollArea>
  )
}
