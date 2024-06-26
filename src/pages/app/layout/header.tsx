import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import { Dialog, DialogPortal, DialogTrigger } from "@/components/ui/dialog";
import navLinks from "@/registry/app/navLinks";
import { motion } from "framer-motion";

const Header = () => {
  const easeV = [0.43, 0.13, 0.23, 0.96];
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
  const [dark, setDark] = useState(
    localStorage.getItem("dark") === "true" ? true : false,
  );
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("dark", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("dark", "false");
    }
  }, [dark]);
  const darkModeHandler = () => {
    setDark((prevDark) => !prevDark);
  };
  return (
    <header className="sticky font-work-sans z-50 top-0 flex h-16 items-center gap-4 border-b  px-4 md:px-6 bg-background/40 backdrop-blur-lg">
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, ease: easeV }}
        className=" flex-col  items-center gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-8"
      >
        <Link
          to="/"
          className="flex space-x-3 align-items text-foreground transition-colors hover:text-foreground"
        >
          <img src="/img/logo/dpatternicon.png" className="h-6 w-6" alt="" />
          <span className="text-sm md:text-xl font-bold ">DPattern</span>
        </Link>
      </motion.nav>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, ease: easeV }}
        className="flex w-full items-center gap-4 ml-4 md:ml-auto md:gap-2 lg:gap-4"
      >
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative ">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="h-8 pr-1 pl-3">
                  <span className="mr-8">Search Pattern 🧑‍🔧 ..</span>
                  <span className="bg-accent rounded-sm p-0.5">⌘K</span>
                </Button>
              </DialogTrigger>

              <DialogPortal>
                <CommandDialog defaultOpen>
                  <CommandInput placeholder="Search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {navLinks.map((link) => (
                      <CommandGroup key={link.title} heading={link.title}>
                        {link.subLinks?.map((subLink) => (
                          <CommandItem key={subLink.title}>
                            <Link
                              to={"/patterns/" + subLink.path}
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
          <Link target="_blank" to="https://github.com/DoffuXx/DPattern">
            <GitHubLogoIcon className="h-5 w-5" />
          </Link>
        </Button>
        <Button
          onClick={darkModeHandler}
          variant="secondary"
          size="icon"
          className="rounded-full"
        >
          {dark ? <MoonIcon /> : <SunIcon />}
        </Button>
      </motion.div>
    </header>
  );
};
export default Header;
