import React, { Component } from "react";
import styled from "styled-components";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import components
import MainContent from "../components/MainContent"
import SideBar from "../components/SideBar"

import "../assets/css/main.css";

// import the pages
import "../pages/"

// Old code keep just in case
// class App extends Component {
//     render() {
//         return (
//             <div id="wrapper">
//                 <MainContent />
//                 <SideBar />
//             </div>
//         );
//     }
// }

class App extends Component {
    render() {
        return (
            <div id="wrapper">
                <BrowserRouter>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                        {/* Minecraft routes */}
                        <Route path="/hypixel">
                            <Hypixel />
                        </Route>
                        <Route path="/manacube">
                            <Manacube />
                        </Route>
                        <Route path="/modsclients">
                            <ModsClients />
                        </Route>
                        <Route path="/pluginsservers">
                            <PluginsServers />
                        </Route>

                        {/* Freelance routes */}
                        <Route path="/clientstories">
                            <ClientStories />
                        </Route>
                        <Route path="/monetaryanalysis">
                            <MonetaryAnalysis />
                        </Route>
                        <Route path="/Projects">
                            <Projects />
                        </Route>
                        <Route path="/TipsAndTricks">
                            <TipsAndTricks />
                        </Route>

                        {/* Personal blog routes */}
                        <Route path="/briefentries">
                            <BriefEntries />
                        </Route>
                        <Route path="/longentries">
                            <LongEntries />
                        </Route>
                        <Route path="/Pets">
                            <Pets />
                        </Route>
                        <Route path="/thoughtsideas">
                            <ThoughtsIdeas />
                        </Route>
                        <Route path="/travel">
                            <Travel />
                        </Route>

                        {/* Misc routes */}
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
