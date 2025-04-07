import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

// import components
import SideBar from "@components/SideBar";

import "highlight.js/styles/github-dark.css";

import hljs from "highlight.js";

import * as Components from "../pages";

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
                                        <HighLightOnRouteChange />
                                        <Routes>
                                                {/* Home page */}
                                                <Route path='/' element={<Components.Home />} />

                                                {/* Services Routes */}
                                                <Route path="/tutoring" element={<Components.Tutoring />} />
                                                <Route path="/development" element={<Components.Development />} />

                                                {/* Minecraft Routes */}
                                                <Route path="/hypixel" element={<Components.Hypixel />} />
                                                <Route path="/manacube" element={<Components.Manacube />} />
                                                <Route path="/modsclients" element={<Components.ModsClients />} />
                                                <Route path="/plugins" element={<Components.PluginsServers />} />
                                                <Route path="/visuals" element={<Components.Visuals />} />
                                                <Route path="/survival" element={<Components.Survival />} />
                                                <Route path="/server" element={<Components.SurvivalMultiplayer />} />
                                                <Route path="/server/valley" element={<Components.Valley />} />
                                                <Route path="/server/cherry" element={<Components.Cherry />} />
                                                <Route path="/server/cherry/ironfarm" element={<Components.CherryIronFarm />} />
                                                <Route path="/server/cherry/witherskeletonfarm/" element={<Components.WitherSkeletonFarm />} />
                                                <Route path="/server/cherry/pinkhouse" element={<Components.PinkHouse />} />
                                                <Route path="/server/cherry/netherhighway" element={<Components.NetherHighway />} />
                                                <Route path="/server/cherry/pumpkinfarm" element={<Components.CherryPumpkinFarm />} />
                                                <Route path="/server/cherry/treefarm" element={<Components.CherryTreeFarm />} />
                                                <Route path="/server/cherry/potatofarm" element={<Components.CherryPotatoFarm />} />
                                                <Route path="/server/cherry/traders" element={<Components.CherryTraders />} />
                                                <Route path="/server/cherry/autofurnace" element={<Components.CherryAutoFurnace />} />
                                                <Route path="/server/cherry/villagerbreeder" element={<Components.CherryVillagerBreeder />} />
                                                <Route path="/server/cherry/woolfarm" element={<Components.CherryWoolFarm />} />
                                                <Route path="/server/cherry/greatwall" element={<Components.CherryGreatWall />} />
                                                <Route path="/server/cherry/stable" element={<Components.CherryStable />} />
                                                <Route path="/server/cherry/treegarden" element={<Components.CherryTreeGarden />} />
                                                <Route path="/server/cherry/blazefarm" element={<Components.CherryBlazeFarm />} />
                                                <Route path="/server/cherry/drownedfarm" element={<Components.CherryDrownedFarm />} />
                                                <Route path="/server/cherry/creeperfarm" element={<Components.CherryCreeperFarm />} />

                                                {/* Freelance Routes */}
                                                <Route path="/projects" element={<Components.Projects />} />
                                                <Route path="/clientstories" element={<Components.ClientStories />} />
                                                <Route path="/tipsandtricks" element={<Components.TipsAndTricks />} />
                                                <Route path="/monetaryanalysis" element={<Components.MonetaryAnalysis />} />

                                                {/* classes Routes */}
                                                <Route path="/cs120b" element={<Components.Cs120b />} />

                                                {/* Personal Blog Routes */}
                                                <Route path="/briefentries" element={<Components.BriefEntries />} />
                                                <Route path="/longentries" element={<Components.LongEntries />} />
                                                <Route path="/thoughtsideas" element={<Components.ThoughtsIdeas />} />
                                                <Route path="/travel" element={<Components.Travel />} />
                                                <Route path="/pets" element={<Components.Pets />} />

                                                {/* Universal Route - anything other than given Routes */}
                                                <Route path="*" element={<Components.Home />} />

                                                {/* Miscellaneous Routes */}
                                                <Route path="/mdtest/" element={<Components.MarkdownTest />} />
                                                <Route path="/websiteideas" element={<Components.WebsiteIdeas />} />
                                                <Route path="/laser-engravings" element={<Components.LaserEngravings />} />
                                                <Route path="/laser-engravings/roomark" element={<Components.RoomarkSetup />} />
                                                <Route path="/laser-engravings/roomark-jigsaw-puzzle" element={<Components.RoomarkJigsawPuzzle />} />
                                        </Routes>
                                        <SideBar />
                                </BrowserRouter>
                        </div >
                </div>
        )
}

export default App;
