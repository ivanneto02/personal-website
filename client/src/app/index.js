import React, { Component } from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import components
import SideBar from "../components/SideBar";

import "./../styles/main.css";

// import the pages
import {
    Home, Hypixel, Manacube, ModsClients, PluginsServers,
    ClientStories, MonetaryAnalysis, Projects, TipsAndTricks,
    BriefEntries, LongEntries, Pets,ThoughtsIdeas, Travel,
    Visuals, Tutoring, Development, MarkdownTest
} from "../pages/";

// Old code keep just in case
class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <BrowserRouter>
                    <div id="wrapper">

                        <Routes>
                            {/* Test markdown */}
                            <Route path="/mdtest/" element={<MarkdownTest/>}/>
                    
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

                        </Routes>
                        <SideBar/>
                    </div>
                    
                </BrowserRouter>
          </div>
        );
    }
}

export default App;
