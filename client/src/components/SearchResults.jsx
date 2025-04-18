import React, { useState, useEffect } from "react";

import { getImageUrl } from "@utils/images";
import { getManifestUrl } from "../utils/manifests";
import Fuse from "fuse.js";
import { useSearchParams } from "react-router-dom";
import ResultsNotFound from "./ResultNotFound";

/*
 * In the home page, this component displays relevant articles I've written, to show
 * the user some options to where they could go! At most, I want nine articles but I may expand it in the future.
 * */
const SearchResults = () => {

    const [results, setResults] = useState([]);
    const [articles, setArticles] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const loadCherry = (response) => {
            const rows = response.map((item) => (
                {
                    name: item.title,
                    img_src: getImageUrl(`minecraftserver/cherry/${item.route}/thumbnail.png`),
                    route: `/server/cherry/${item.route}`,
                    source: "Minecraft > SMP > Cherry",
                    date: item.date,
                    target: "_self",
                }
            ));
            return rows;
        }

        const loadValley = (response) => {
            return response.map((item) => (
                {
                    name: item.title,
                    img_src: getImageUrl(`minecraftserver/valley/${item.route}/thumbnail.png`),
                    route: `/server/valley/${item.route}`,
                    source: "Minecraft > SMP > Valley",
                    date: item.date,
                    target: "_self",
                }
            ));
        }

        const loadCS120B = (response) => {
            var rows = [];
            var text = response.split("\n")
            text.forEach((elem) => {
                var items = elem.split(" -=- ");
                rows.push({
                    name: items[0],
                    img_src: `https://img.youtube.com/vi/${items[1]}/0.jpg`,
                    route: `https://youtu.be/${items[1]}`,
                    source: "Videos > CS120B",
                    date: items[2],
                    target: "_blank",
                });
            });
            return rows;
        }

        const writeArticles = async () => {
            try {

                console.log("Grabbing manifests");
                const [resCherry, resValley, resCS120B] = await Promise.all([
                    fetch(getManifestUrl("minecraftserver/cherry"))
                        .then(res => res.json())
                        .then(res => loadCherry(res)),
                    fetch(getManifestUrl("minecraftserver/valley"))
                        .then(res => res.json())
                        .then(res => loadValley(res)),
                    fetch("/text/cs120b.txt")
                        .then(res => res.text())
                        .then(res => res.trim())
                        .then(res => loadCS120B(res)),
                ]);

                const jsonData = [
                    ...resCherry,
                    ...resValley,
                    ...resCS120B,
                    {
                        name: "Roomark Laser Engraver Setup",
                        img_src: getImageUrl("miscellaneous/laser_engraving/grbl_config1.jpg"),
                        route: "/laser-engravings/roomark",
                        source: "Miscellaneous > Laser Engravings",
                        date: "03/15/2025",
                        target: "_self",
                    },
                    {
                        name: "Laser Engraver Jigsaw Puzzle",
                        img_src: getImageUrl("miscellaneous/laser_engraving/jigsawpuzzle/puzzle_outline3.jpg"),
                        route: "/laser-engravings/roomark-jigsaw-puzzle",
                        source: "Miscellaneous > Laser Engravings",
                        date: "03/15/2025",
                        target: "_self",
                    },
                ];

                setArticles(jsonData);
            }
            catch (error) {
                console.error("Adding data error:", error);
                setArticles([]);
            }
        };

        writeArticles();

    }, []);

    /* Sets the results after the articles are written */
    useEffect(() => {
        const fuse = new Fuse(articles, {
            keys: ["name", "source"],
            includeScore: true,
            threshold: 0.4,
        })

        const writeResults = () => {
            /* Checking if query is too shor! */
            if (searchParams.get("search_query").trim() === "") {
                console.log("Query is too short!");
            }
            else {
                // Does the fuzzy searching
                console.log("Searching...");
                const fuzzySearchResults = fuse.search(searchParams.get("search_query")).map((result) => result.item);
                setResults(fuzzySearchResults);
            }
        }

        writeResults();

    }, [articles, searchParams]);

    return (
        <section>
            <div className="halfgrid">
                {
                    articles.length > 0 ? (
                        results.map((item, index) => (
                            <a className="card" key={index} href={item.route} target={item.target} rel="noreferrer">
                                <div className="searchResult">
                                    <div className="searchResultImage">
                                        <img className="articleImage" src={item.img_src} alt="" />
                                    </div>
                                    <div className="titledate">
                                        <h3>{item.name}</h3>
                                        <p>{item.date}</p>
                                        <p>{item.source}</p>
                                    </div>
                                </div>
                            </a>
                        ))
                    ) : <ResultsNotFound />
                }
            </div>
        </section>
    );
}

export default SearchResults;
