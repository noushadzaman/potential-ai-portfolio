import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative overflow-hidden rounded-full bg-s6 h-[12px]",
      className
    )}
    {...props}>
    <ProgressPrimitive.Indicator
      className="h-full flex-1 bg-primary rounded-none transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)`, background: '#FD6F00' }} />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
