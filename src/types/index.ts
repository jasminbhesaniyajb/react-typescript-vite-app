import React from "react";

export type Theme = "blue" | "gray" | "red" | "system";

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export type Student = {
  id: string
  firstName: string
  lastName: string
  email: string
  mobile: string
  studentClass: "A" | "B" | "C"
}

export interface StudentsTableProps {
  students: Student[]
}