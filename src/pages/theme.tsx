import React, { useEffect, useState } from "react";
import { useTheme } from "../components/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { Check } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";

const themes = [
  {
    name: "Gray",
    value: "gray",
    color: "#6b7280",
  },
  {
    name: "Blue",
    value: "blue",
    color: "#3b82f6",
  },
  {
    name: "Red",
    value: "red",
    color: "#fb2c36",
  },
];

function Theme() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Theme Settings</h1>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            Select Theme
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {themes.map((t) => (
            <DropdownMenuItem
              key={t.value}
              onClick={() => setTheme(t.value as any)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: t.color }}
                />
                <span>{t.name}</span>
              </div>
              {theme === t.value && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu> */}

      <ToggleGroup
        type="single"
        value={theme}
        onValueChange={(value) => value && setTheme(value as any)}
        className="gap-2"
      >
        {themes.map((t) => (
          <ToggleGroupItem
            key={t.value}
            value={t.value}
            className="flex items-center gap-2 px-4 cursor-pointer border py-2 data-[state=on]:bg-muted data-[state=on]:text-primary rounded-md"
          >
            <div className="flex items-center gap-2">
              <div
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: t.color }}
              />
              <span>{t.name}</span>
            </div>
            {theme === t.value}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="mt-2 p-4 bg-primary-500 text-primary border rounded">
        test theme
      </div>
    </div>
  );
}

export default Theme;
