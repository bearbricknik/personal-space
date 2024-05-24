import { MenuContent } from '@/components/menu-content'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { PanelRightClose } from 'lucide-react'

export function MobileDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex gap-1 rounded-lg bg-gray-100">
          <Button variant="ghost" title="Toggle menu">
            <PanelRightClose size={18} />
          </Button>
          <Button className="gap-1" variant="ghost">
            <span>Dominik Huber</span>
            <span>|</span>
            <span>Portfolio</span>
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-4/5">
        <div className="overflow-y-auto p-4">
          <MenuContent />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
