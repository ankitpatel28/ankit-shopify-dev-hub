
import React from 'react';
import Logo from './Logo';
import { Menu, Search } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-sand-200/70 backdrop-blur-sm border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        <nav className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-gold hover:text-gold-dark transition-colors">
                <Search size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full">
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Type to search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>About Us</CommandItem>
                    <CommandItem>Services</CommandItem>
                    <CommandItem>Portfolio</CommandItem>
                    <CommandItem>Contact</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <button className="text-gold hover:text-gold-dark transition-colors">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-lg hover:text-gold transition-colors">
                  Home
                </a>
                <a href="#about" className="text-lg hover:text-gold transition-colors">
                  About
                </a>
                <a href="#services" className="text-lg hover:text-gold transition-colors">
                  Services
                </a>
                <a href="#shopify" className="text-lg hover:text-gold transition-colors">
                  Shopify Expertise
                </a>
                <a href="#portfolio" className="text-lg hover:text-gold transition-colors">
                  Portfolio
                </a>
                <a href="#process" className="text-lg hover:text-gold transition-colors">
                  Process
                </a>
                <a href="#technologies" className="text-lg hover:text-gold transition-colors">
                  Technologies
                </a>
                <a href="#testimonials" className="text-lg hover:text-gold transition-colors">
                  Testimonials
                </a>
                <a href="#contact" className="text-lg hover:text-gold transition-colors">
                  Contact
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Header;
