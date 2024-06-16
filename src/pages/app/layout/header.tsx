import { Link } from "react-router-dom";

import { CircleUser, Menu, Package2, Search, Users } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog";
import navLinks from "@/registry/app/navLinks";

const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <header className="sticky font-work-sans z-50 top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <div className="text-foreground transition-colors hover:text-foreground  ">
          <Link to="" className="flex space-x-3 align-items">
            <img src="/img/logo/dpatternicon.png" className="h-6 w-6" alt="" />
            <span className="hidden text-xl font-bold md:inline-block">
              DPattern
            </span>
          </Link>
        </div>
      </nav>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative ">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Search Pattern 🧑‍🔧.. ⌘K</Button>
              </DialogTrigger>

              <DialogPortal>
                <CommandDialog defaultOpen>
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {navLinks.map((link) => (
                      <CommandGroup key={link.title} heading={link.title}>
                        {link.subLinks?.map((subLink) => (
                          <CommandItem key={subLink.title}>
                            <Link
                              to={subLink.path}
                              className="flex items-center "
                            >
                              <subLink.icon className="w-5 h-5 me-2" />
                              {subLink.title}
                            </Link>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    ))}
                  </CommandList>
                </CommandDialog>
              </DialogPortal>
            </Dialog>
          </div>
        </form>
        <Button variant="secondary" size="icon" className="rounded-full">
          <Link to="https://github.com/DoffuXx/DPattern">
            <GitHubLogoIcon className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
export default Header;
