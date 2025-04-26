import React from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Sidebar } from "./sidebar";
import { Avatar, AvatarFallback } from "../ui/avatar";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center px-4 sm:px-6">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mr-4">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
            <h5>Jasmin Bhesaniya</h5>
          </div>
        </div>
      </div>
    </header>
  );
};
