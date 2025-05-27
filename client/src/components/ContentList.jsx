import React, { useState, useEffect } from "react";
import { getManifestUrl } from "@utils/manifests.js";
import { getImageUrl } from "@utils/images";
import { fisherYatesShuffle } from "@utils/fisherYatesShuffle";

const ContentList = (props) => {
    const [pageInfo, setPageInfo] = useState([]);

    useEffect(() => {
        const writePageInfo = async () => {
            try {
                const res = await fetch(getManifestUrl(props.url));

                if (!res.ok) {
                    throw new Error(`Status: ${res.status}, (${getManifestUrl(props.url)})`);
                }
                const jsonData = await res.json();
                setPageInfo(props.ordered ? jsonData : fisherYatesShuffle(jsonData));
            }
            catch (error) {
                console.error("Adding data error:", error);
                setPageInfo([]);
            }
        };

        writePageInfo();
    }, [props.url, props.ordered]);

    const className = props.list ? "listgrid" : "grid";

    return (
        <div className={className}>
            {
                pageInfo.map((item) => {
                    return (
                        <a key={item.id} href={props.route + "/" + item.route} className="emphasis4 dark card">
                            <div className="titledate">
                                <h3>{item.title}</h3>
                                <p>{item.date}</p>
                            </div>
                            {
                                props.noimage ?
                                    <></> :
                                    <img className="articleImage" alt="" src={getImageUrl(item.url + "/" + item.page + "/" + item.thumbnail)}></img>}
                        </a>
                    );
                })
            }
        </div>
    );
}

export default ContentList;
