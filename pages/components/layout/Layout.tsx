import {LayoutProps} from "./Layout.props";
import React from "react";

export const Layout = ({children}:LayoutProps):JSX.Element => {
 return (
     <div>{children}</div>
 )
}