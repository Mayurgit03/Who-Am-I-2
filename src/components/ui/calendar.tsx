import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

// Define the props type directly based on what DayPicker accepts
export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      className={cn("p-3", className)}
      classNames={{
        root: "",
        months: "",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "",
        nav: "",
        nav_button: "",
        nav_button_previous: "",
        nav_button_next: "",
        table: "",
        head_row: "",
        head_cell: "",
        row: "",
        day: "",
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-accent text-accent-foreground",
        outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        disabled: "text-muted-foreground opacity-50",
        range_start: "",
        range_end: "",
        range_middle: "",
        hidden: "",
        ...(
          classNames
            ? Object.fromEntries(
                Object.entries(classNames).filter(
                  ([, value]) => typeof value === "string"
                )
              )
            : {}
        ),
      }}
      components={{
        Chevron: (props) => {
          if (props.orientation === "left") {
            return <ChevronLeft className={cn("h-4 w-4")} {...props} />;
          }
          return <ChevronRight className={cn("h-4 w-4")} {...props} />;
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
