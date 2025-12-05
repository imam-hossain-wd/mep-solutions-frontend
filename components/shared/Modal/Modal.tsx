// app/components/ui/modal.tsx
"use client";

import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export type ModalDirection = "left" | "right" | "top" | "bottom" | "center";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  direction?: ModalDirection;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showCloseButton?: boolean;
  className?: string;
  title?: string;
  description?: string;
  showHeader?: boolean;
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full w-full",
};

const directionClasses: Record<ModalDirection, string> = {
  left: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
  right: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
  top: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
  bottom: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
  center: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
};

export function Modal({
  isOpen,
  onClose,
  children,
  direction = "center",
  size = "md",
  showCloseButton = true,
  className,
  title,
  description,
  showHeader = false,
}: ModalProps) {
  const directionStyle = direction === "center" ? "" : directionClasses[direction];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          sizeClasses[size],
          direction === "center" ? "" : "fixed inset-y-0",
          direction === "left" ? "left-0 top-0 h-full rounded-r-xl rounded-l-none" : "",
          direction === "right" ? "right-0 top-0 h-full rounded-l-xl rounded-r-none" : "",
          direction === "top" ? "top-0 inset-x-0 rounded-b-xl rounded-t-none" : "",
          direction === "bottom" ? "bottom-0 inset-x-0 rounded-t-xl rounded-b-none" : "",
          directionStyle,
          "border-0 shadow-2xl",
          className
        )}
        onInteractOutside={(e) => e.preventDefault()}
      >
        {showCloseButton && (
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        )}
        
        {showHeader && (title || description) && (
          <DialogHeader className="mb-4">
            {title && <DialogTitle className="text-xl">{title}</DialogTitle>}
            {description && (
              <DialogDescription className="text-muted-foreground">
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
        )}
        
        <div className={cn("overflow-y-auto max-h-[calc(100vh-4rem)]", contentClassName)}>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Optional: Create specialized modal variants
export function LeftModal(props: Omit<ModalProps, "direction">) {
  return <Modal {...props} direction="left" />;
}

export function RightModal(props: Omit<ModalProps, "direction">) {
  return <Modal {...props} direction="right" />;
}

export function TopModal(props: Omit<ModalProps, "direction">) {
  return <Modal {...props} direction="top" />;
}

export function BottomModal(props: Omit<ModalProps, "direction">) {
  return <Modal {...props} direction="bottom" />;
}

export function CenterModal(props: Omit<ModalProps, "direction">) {
  return <Modal {...props} direction="center" />;
}