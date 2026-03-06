import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";

import LoadingPage from "./LoadingPage.jsx";

const GenericMDXPageComponent = (props) => {

    // Use require.context to dynamically import files from the pages directory
    const pageContext = require.context("./../pages", true, /\.jsx$/);

    const MDXContent = lazy(() => {
        return new Promise((resolve, reject) => {
            try {
                const component = pageContext(`./${props.filepath}/${props.filename}`);
                resolve(component);
            } catch (error) {
                reject(error);
            }
        });
    });

    return (
        <Suspense fallback={<LoadingPage />}>
            {props.title && (
                <Helmet>
                    <title>{props.title} | Ivan Neto</title>
                    <meta name="description" content={`${props.title} - Content by Ivan Neto on ivanneto.dev`} />
                </Helmet>
            )}
            <MDXContent />
        </Suspense>
    );
}

export default GenericMDXPageComponent;
