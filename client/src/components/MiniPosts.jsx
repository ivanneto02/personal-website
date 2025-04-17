import React, { useState, useEffect } from "react";

import { getImageUrl } from "@utils/images";
import { getManifestUrl } from "../utils/manifests";
import { fisherYatesShuffle } from "@utils/fisherYatesShuffle";

/* Sets all the potential images that can be found on the sidebar */
/* 
 * In this component, `posts` have a format
 * {
 *		id: int
 *		name: String
 *      route: String
 * }
 *
 * */

const MiniPosts = () => {

    const [threePosts, setThreePosts] = useState([]);

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

        const writeThreePosts = async () => {
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
                        route: "/laser-engravings/roomark",
                        source: "Miscellaneous > Laser Engravings",
                        date: "03/15/2025",
                        target: "_self",
                    },
                ];

                const indexes = Array.from({ length: jsonData.length }, (_, idx) => idx);

                console.log("Shuffling for 3 posts")
                const shuffled = fisherYatesShuffle(indexes);
                const threePostsData = [jsonData[shuffled[0]], jsonData[shuffled[1]], jsonData[shuffled[2]]];
                setThreePosts(threePostsData);
            }
            catch (error) {
                console.error("Adding data error:", error);
                setThreePosts([]);
            }
        };

        writeThreePosts();
    }, []);

    return (
        <section>
            <div className="mini-posts">
                {
                    threePosts.map((item, index) => (
                        <article key={index}>
                            <a href={item.route} className="image" target={item.target} rel="noreferrer"><img src={item.img_src} alt="" /></a>
                            <p>{item.source} {" > "} {item.name}</p>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}

export default MiniPosts;
