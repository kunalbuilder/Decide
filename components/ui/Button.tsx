import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                    {
                        "bg-black text-white hover:bg-zinc-800": variant === "primary",
                        "bg-zinc-100 text-zinc-900 hover:bg-zinc-200": variant === "secondary",
                        "border border-zinc-200 hover:bg-zinc-100": variant === "outline",
                        "hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900": variant === "ghost",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-10 px-6": size === "md",
                        "h-12 px-8 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
