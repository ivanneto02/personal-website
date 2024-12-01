import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

// import components
import SideBar from "../components/SideBar";

import "highlight.js/styles/github-dark.css";

import hljs from "highlight.js";

// import the pages
import {
    Home, Hypixel, Manacube, ModsClients, PluginsServers,
    ClientStories, MonetaryAnalysis, Projects, TipsAndTricks,
    BriefEntries, LongEntries, Pets,ThoughtsIdeas, Travel,
    Visuals, Tutoring, Development, MarkdownTest, WebsiteIdeas
} from "../pages/";

const HighLightOnRouteChange = () => {

    const loc = useLocation();

    useEffect(() => {
        hljs.highlightAll();
    }, [loc]);

    return null;
}

const App = () => {

    return (
        <div className="wrapper">
            <div id="wrapper">
                <BrowserRouter>
                    <HighLightOnRouteChange/>
                    <Routes>
                        {/* Home page */}
                        <Route path='/' element={<Home/>} />

                        {/* Services Routes */}
                        <Route path="/tutoring" element={<Tutoring/>} />
                        <Route path="/development" element={<Development/>}/>

                        {/* Minecraft Routes */}
                        <Route path="/hypixel" element={<Hypixel/>} />
                        <Route path="/manacube" element={<Manacube/>} />
                        <Route path="/modsclients" element={<ModsClients/>} />
                        <Route path="/plugins" element={<PluginsServers/>} />
                        <Route path="/visuals" element={<Visuals/>} />

                        {/* Freelance Routes */}
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/clientstories" element={<ClientStories/>} />
                        <Route path="/tipsandtricks" element={<TipsAndTricks/>} />
                        <Route path="/monetaryanalysis" element={<MonetaryAnalysis/>} />

                        {/* Personal Blog Routes */}
                        <Route path="/briefentries" element={<BriefEntries/>} />
                        <Route path="/longentries" element={<LongEntries/>} />
                        <Route path="/thoughtsideas" element={<ThoughtsIdeas/>} />
                        <Route path="/travel" element={<Travel/>} />
                        <Route path="/pets" element={<Pets/>} />

                        {/* Universal Route - anything other than given Routes */}
                        <Route path="*" element={<Home/>} />

                        {/* Test markdown */}
                        <Route path="/mdtest/" element={<MarkdownTest/>}/>
                        <Route path="/websiteideas" element={<WebsiteIdeas/>}/>

                    </Routes>
                    <SideBar/>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;
