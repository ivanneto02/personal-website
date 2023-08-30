import React, { Component } from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import components
import SideBar from "../components/SideBar"

import "./../assets/css/main.css";

// import the pages
import {
    Home, Hypixel, Manacube, ModsClients, PluginsServers,
    ClientStories, MonetaryAnalysis, Projects, TipsAndTricks,
    BriefEntries, LongEntries, Pets,ThoughtsIdeas, Travel,
    Visuals
} from "../pages/";

// Old code keep just in case
class App extends Component {
    render() {
        return (
            <div className="wrapper">
                {/* <h1>Marine Mammals</h1> */}
                <BrowserRouter>
                    <div id="wrapper">
                        <Routes>
                    
                            {/* Home page */}
                            <Route path='/' element={<Home/>} />

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

                            {/* Personal Blog */}
                            <Route path="/briefentries" element={<BriefEntries/>} />
                            <Route path="/longentries" element={<LongEntries/>} />
                            <Route path="/thoughtsideas" element={<ThoughtsIdeas/>} />
                            <Route path="/travel" element={<Travel/>} />
                            <Route path="/pets" element={<Pets/>} />

                            {/* Universal Route - anything other than given Routes */}
                            <Route path="*" element={<Home/>} />

                        </Routes>
                        <SideBar />
                    </div>
                </BrowserRouter>
          </div>
        );
    }
}

// class App extends Component {
//     render() {
//         return (
//             <div id="wrapper">
//                 <BrowserRouter>
//                     <Routes>
//                         <Route path="/">
//                             <Home />
//                         </Route>
//                         {/* Minecraft routes */}
//                         <Route path="/hypixel">
//                             <Hypixel />
//                         </Route>
//                         <Route path="/manacube">
//                             <Manacube />
//                         </Route>
//                         <Route path="/modsclients">
//                             <ModsClients />
//                         </Route>
//                         <Route path="/pluginsservers">
//                             <PluginsServers />
//                         </Route>

//                         {/* Freelance routes */}
//                         <Route path="/clientstories">
//                             <ClientStories />
//                         </Route>
//                         <Route path="/monetaryanalysis">
//                             <MonetaryAnalysis />
//                         </Route>
//                         <Route path="/Projects">
//                             <Projects />
//                         </Route>
//                         <Route path="/TipsAndTricks">
//                             <TipsAndTricks />
//                         </Route>

//                         {/* Personal blog routes */}
//                         <Route path="/briefentries">
//                             <BriefEntries />
//                         </Route>
//                         <Route path="/longentries">
//                             <LongEntries />
//                         </Route>
//                         <Route path="/Pets">
//                             <Pets />
//                         </Route>
//                         <Route path="/thoughtsideas">
//                             <ThoughtsIdeas />
//                         </Route>
//                         <Route path="/travel">
//                             <Travel />
//                         </Route>

//                         {/* Misc routes */}
//                     </Routes>
//                 </BrowserRouter>
//             </div>
//         );
//     }
// }

export default App;
