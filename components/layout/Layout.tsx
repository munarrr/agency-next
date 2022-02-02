import {LayoutProps} from "./Layout.props";
import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = ({children}:LayoutProps):JSX.Element => {
    return (
        <div className="page-wraper">
            <Header />
            <div>{children}</div> 
            <Footer />
         </div>
  
 )
}

export const WithLayout = <T extends Record<string,unknown>>(Component:React.FunctionComponent<T>) => {
    return function WithLayoutComponent(props:T):JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
       )
    }
}