import { ComponentPropsWithoutRef } from "react"
import clsx from "clsx"

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "ghost"
}

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition",
        variant === "primary" &&
          "bg-black text-white hover:bg-gray-800",
        variant === "ghost" &&
          "text-gray-600 hover:text-black",
        className
      )}
      {...props}
    />
  )
}
