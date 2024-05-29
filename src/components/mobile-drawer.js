import { MenuContent } from '@/components/menu-content'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { PanelTopClose } from 'lucide-react'

export function MobileDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex rounded-lg bg-gray-100">
          <Button variant="ghost" size={"icon"} title="Toggle menu">
            <PanelTopClose size={18} />
          </Button>
          <Button className="gap-1" variant="ghost">
            <span>Dominik Huber</span>
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
