import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface HeaderProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement>  {
      children?: ReactNode
}