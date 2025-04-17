import React, { useState, useEffect } from "react";

import { getImageUrl } from "@utils/images";
import { getManifestUrl } from "../utils/manifests";
import { fisherYatesShuffle } from "@utils/fisherYatesShuffle";
/*
 * In the home page, this component displays relevant articles I've written, to show
 * the user some options to where they could go! At most, I want nine articles but I may expand it in the future.
 * */
const RelevantArticles = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        const loadCherry = (response) => {
            console.log("cherry");
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
            console.log("valley");
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
            text.forEach((elem, idx) => {
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

                console.log("Grabbing Cherry manifest");
                const resCherry = await fetch(getManifestUrl("minecraftserver/cherry"))
                    .then(res => res.json())
                    .then(res => loadCherry(res));

                console.log("Grabbing Valley manifest");
                const resValley = await fetch(getManifestUrl("minecraftserver/valley"))
                    .then(res => res.json())
                    .then(res => loadValley(res));

                const resCS120B = await fetch("/text/cs120b.txt")
                    .then(res => res.text())
                    .then(res => res.trim())
                    .then(res => loadCS120B(res));

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

                console.log("Shuffling for 9 posts")
                const shuffled = fisherYatesShuffle(jsonData);
                const ninePosts = shuffled.slice(0, 12);
                setArticles(ninePosts);
            }
            catch (error) {
                console.error("Adding data error:", error);
                setArticles([]);
            }
        };

        writeArticles();
    }, []);

    return (
        <section>
            <header className="major">
                <h2>Articles</h2>
            </header>
            <div className="grid">
                {
                    articles.map((item, index) => (
                        <a className="card" key={index} href={item.route} target={item.target} rel="noreferrer">
                            <img className="articleImage" src={item.img_src} alt="" />
                            <div className="bottomtitledate">
                                <h3>{item.name}</h3>
                                <p>{item.date}</p>
                            </div>
                            <p className="source">{item.source}</p>
                        </a>
                    ))
                }
            </div>
        </section>
    );
}

export default RelevantArticles;
