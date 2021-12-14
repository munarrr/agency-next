import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import RouteLink from "./RouteLink";

function Layout(props) {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className="layout">
                    <Sidebar {...props} />
                    <div className="layout_content">
                        <div className="layout__content-main">
                            <RouteLink />
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    );
}

export default Layout;