import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

// import components
import SideBar from "@components/SideBar";
import GenericImagePageComponent from "@components/GenericImagePageComponent";
import { BlankPage, GenericMDXPageComponent } from "@components";

import { getManifestUrl } from "@utils/manifests";

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

    const [valleyRoutes, setValleyRoutes] = useState([]);
    const [cherryRoutes, setCherryRoutes] = useState([]);

    useEffect(() => {

        const writeValleyRoutes = async () => {
            try {
                const res = await fetch(getManifestUrl("minecraftserver/valley"));

                if (!res.ok) {
                    throw new Error("Failed to fetch valley manifest.json");
                }

                setValleyRoutes(await res.json());

            } catch (error) {
                console.log(error);
            }
        };

        const writeCherryRoutes = async () => {
            try {
                const res = await fetch(getManifestUrl("minecraftserver/cherry"));

                if (!res.ok) {
                    throw new Error("Failed to fetch cherry manifest.json");
                }

                setCherryRoutes(await res.json());

            } catch (error) {
                console.log(error);
            }
        };

        writeValleyRoutes();
        writeCherryRoutes();
    }, []);

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

                        {/*
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
                        <Route path="/server/cherry/endermanfarm" element={<Components.CherryEndermanFarm />} />
                        <Route path="/server/cherry/skeletonfarm" element={<Components.CherrySkeletonFarm />} />
                        <Route path="/server/cherry/slimefarm" element={<Components.CherrySlimeFarm />} />
                        <Route path="/server/cherry/zombiefarm" element={<Components.CherryZombieFarm />} />
                        <Route path="/server/cherry/bamboofarm" element={<Components.CherryBambooFarm />} />
                        <Route path="/server/cherry/armorhall" element={<Components.CherryArmorHall />} />
						*/}

                        {/* Set the routes for /server/cherry based on fetch from S3 */}
                        {
                            cherryRoutes.map((item) => (
                                <Route key={item.key} path={`/server/cherry/${item.route}`} element={<GenericMDXPageComponent filepath={`minecraft/SurvivalMultiplayer/Cherry/${item.page}`} filename={item.filename} title={item.title} pageBaseUrl={item.url} page={item.page} />} />
                            ))
                        }

                        {/* Set the routes for /server/valley based on fetch from S3 */}
                        {
                            valleyRoutes.map((item) => (
                                <Route key={item.key} path={`/server/valley/${item.route}`} element={<GenericImagePageComponent title={item.title} pageBaseUrl={item.url} page={item.page} />} />
                            ))
                        }

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
                        <Route path="*" element={<BlankPage />} />

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
