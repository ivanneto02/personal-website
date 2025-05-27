import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

// import components
import SideBar from "@components/SideBar";

import { PageNotFound, GenericMDXPageComponent } from "@components";

import { getManifestUrl } from "@utils/manifests";

import "highlight.js/styles/github-dark.css";

import hljs from "highlight.js";

import * as Pages from "../pages";

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
    const [cybersecurityBanditRoutes, setCybersecurityBanditRoutes] = useState([]);

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

        const writeCybersecurityBanditRoutes = async () => {
            try {
                const res = await fetch(getManifestUrl("learning/cybersecurity/bandit"));

                if (!res.ok) {
                    throw new Error("Failed to fetch cybersecurity/bandit manifest.json");
                }

                setCybersecurityBanditRoutes(await res.json());

            } catch (error) {
                console.log(error);
            }
        };

        writeValleyRoutes();
        writeCherryRoutes();
        writeCybersecurityBanditRoutes();
    }, []);

    return (
        <div className="wrapper">
            <div id="wrapper">
                <BrowserRouter>
                    <HighLightOnRouteChange />

                    <Routes>
                        {/* Home page */}
                        <Route path='/' element={<Pages.Home />} />

                        {/* Learning Routes */}
                        <Route path="/tutoring" element={<Pages.Tutoring />} />
                        <Route path="/cybersecurity" element={<Pages.Cybersecurity />} />

                        {/* Minecraft Routes */}
                        <Route path="/hypixel" element={<Pages.Hypixel />} />
                        <Route path="/manacube" element={<Pages.Manacube />} />
                        <Route path="/modsclients" element={<Pages.ModsClients />} />
                        <Route path="/plugins" element={<Pages.PluginsServers />} />
                        <Route path="/visuals" element={<Pages.Visuals />} />
                        <Route path="/survival" element={<Pages.Survival />} />
                        <Route path="/server" element={<Pages.SurvivalMultiplayer />} />
                        <Route path="/server/valley" element={<Pages.Valley />} />
                        <Route path="/server/cherry" element={<Pages.Cherry />} />

                        {/* Set the routes for /server/cherry based on fetch from S3 */}
                        {
                            cherryRoutes.map((item) => (
                                <Route key={item.key} path={`/server/cherry/${item.route}`} element={<GenericMDXPageComponent filepath={`minecraft/SurvivalMultiplayer/Cherry/${item.page}`} filename={item.filename} title={item.title} pageBaseUrl={item.url} page={item.page} />} />
                            ))
                        }

                        {/* Set the routes for /server/valley based on fetch from S3 */}
                        {
                            valleyRoutes.map((item) => (
                                <Route key={item.key} path={`/server/valley/${item.route}`} element={<GenericMDXPageComponent filepath={`minecraft/SurvivalMultiplayer/Valley/${item.page}`} filename={item.filename} title={item.title} pageBaseUrl={item.url} page={item.page} />} />
                            ))
                        }

                        {/* Route for /cybersecurity/bandit */}
                        <Route path={"/cybersecurity/bandit"} element={<Pages.Bandit />} />

                        {/* Set the routes for /cybersecurity/bandit/{level} based on fetch from S3 */}
                        {
                            cybersecurityBanditRoutes.map((item) => (
                                <Route key={item.id} path={`/cybersecurity/bandit/${item.route}`} element={<GenericMDXPageComponent filepath={`learning/cybersecurity/bandit/${item.page}`} filename={item.filename} />} />
                            ))
                        }

                        {/* Freelance Routes */}
                        <Route path="/projects" element={<Pages.Projects />} />
                        <Route path="/clientstories" element={<Pages.ClientStories />} />
                        <Route path="/tipsandtricks" element={<Pages.TipsAndTricks />} />
                        <Route path="/monetaryanalysis" element={<Pages.MonetaryAnalysis />} />

                        {/* classes Routes */}
                        <Route path="/cs120b" element={<Pages.Cs120b />} />

                        {/* Personal Blog Routes */}
                        <Route path="/briefentries" element={<Pages.BriefEntries />} />
                        <Route path="/longentries" element={<Pages.LongEntries />} />
                        <Route path="/thoughtsideas" element={<Pages.ThoughtsIdeas />} />
                        <Route path="/travel" element={<Pages.Travel />} />
                        <Route path="/pets" element={<Pages.Pets />} />

                        {/* Miscellaneous Routes */}
                        <Route path="/mdtest/" element={<Pages.MarkdownTest />} />
                        <Route path="/websiteideas" element={<Pages.WebsiteIdeas />} />
                        <Route path="/laser-engravings" element={<Pages.LaserEngravings />} />
                        <Route path="/laser-engravings/roomark" element={<Pages.RoomarkSetup />} />
                        <Route path="/laser-engravings/roomark-jigsaw-puzzle" element={<Pages.RoomarkJigsawPuzzle />} />

                        {/* Search Routes */}
                        <Route path="/results/" element={<Pages.Results />} />

                        {/* Wild route to catch anything else */}
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                    <SideBar />
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;
