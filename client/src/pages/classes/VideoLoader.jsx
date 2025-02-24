import { React } from "react";
import { useState, useEffect } from "react";

function VideoLoader() {
        const [data, setData] = useState([]);

        const load = (response) => {
                var rows = [];
                var text = response.split("\n")
                text.forEach((elem) => {
                        var items = elem.split(" -=- ");
                        rows.push({
                                name: items[0],
                                id: items[1],
                                date: items[2],
                        });
                });
                return rows;
        }

        useEffect(() => {
                fetch("/text/cs120b.txt")
                        .then(response => response.text())
                        .then(response => response.trim())
                        .then(response => load(response))
                        .then(response => setData(response))
        }, []);

        return (
                <div className="grid">
                        {data.map((item) => (
                                <a href={"https://youtu.be/" + item.id} target="_blank" rel="noreferrer" className="griditem emphasis4 card dark">
                                        <h3>{item.name}</h3>
                                        <p>Posted: {item.date}</p>
                                        <img alt={item.name} className="articleImage" src={"http://img.youtube.com/vi/" + item.id + "/0.jpg"}></img>

                                </a>
                        ))}
                </div>
        );
} 

export default VideoLoader;
