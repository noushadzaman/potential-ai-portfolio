import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        `flex border-input disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed
        bg-transparent transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground h-[49px] lg:h-[75px] font-[400] rounded-[14px] placeholder-s5 bg-s7 pl-[26px] border-s5 border w-[100%]`,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }