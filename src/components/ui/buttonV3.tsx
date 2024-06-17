import { cn } from "@/utils/utils";
import { Button } from "./button";

interface Buttonv3Props {
  children: React.ReactNode;
  size: "default" | "sm" | "lg" | "icon" | null | undefined;
}
export const Buttonv3 = ({ children, size }: Buttonv3Props) => {
  return (
    <Button
      size={size}
      className={cn(
        "relative overflow-hidden group hover:ring-2 hover:ring-offset-2 ease-out hover:bg-gradient-to-r",
        // light mode
        "bg-zinc-900 hover:from-zinc-800 hover:to-zinc-700 text-zinc-50 hover:ring-zinc-900",
        // dark mode
        "dark:bg-zinc-50 dark:hover:from-zinc-50 dark:hover:to-zinc-100 dark:text-zinc-800 dark:hover:ring-white dark:ring-offset-black",
      )}
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white dark:bg-zinc-900 opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative">{children}</span>
    </Button>
  );
};
