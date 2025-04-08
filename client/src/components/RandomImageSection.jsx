import React, { useState, useEffect } from "react"
import { getImageUrl } from "@utils/images";
import { getAllImagesUnderDirectory } from "@utils/getAllImagesUnderDirectory";

const RandomImageSection = (props) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const writeImages = async () => {
            // Grabs all the image paths and sets it to the state variables
            try {
                const res = await fetch(getAllImagesUnderDirectory(`${props.pageBaseUrl}/${props.page}`));

                if (!res.ok) {
                    throw new Error("Fetching failed");
                }

                setImages(await res.json());
            } catch (error) {
                console.log(error);
                setImages([{ path: "img-placeholder.png" }]);
            }
        };
        writeImages();
    }, [props.page, props.pageBaseUrl]);


    return (
        <div className="grid">
            {
                images.map((item) => {
                    return (
                        <img key={item.id} className="griditem emphasis4 dark card" src={getImageUrl(item.path)} alt=""></img>
                    )
                })
            }
        </div>
    )
}

export default RandomImageSection;
