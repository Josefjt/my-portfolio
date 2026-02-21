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
          "bg-black text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300",
        variant === "ghost" &&
          "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100",
        className
      )}
      {...props}
    />
  )
}
