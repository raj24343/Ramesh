import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = Dialog.Root;
const SheetTrigger = Dialog.Trigger;
const SheetClose = Dialog.Close;

function SheetContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Content>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
      <Dialog.Content
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm border-l border-zinc-800 bg-[#111214] p-6 shadow-2xl",
          className
        )}
        {...props}
      >
        {children}
        <SheetClose className="absolute right-4 top-4 rounded-md text-zinc-400 hover:text-zinc-100">
          <X className="h-5 w-5" />
        </SheetClose>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export { Sheet, SheetClose, SheetContent, SheetTrigger };
