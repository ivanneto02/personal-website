import React, { Suspense, lazy } from "react";

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
            <MDXContent />
        </Suspense>
    );
}

export default GenericMDXPageComponent;
