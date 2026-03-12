import { useEffect, useRef, useState } from "react";

const EMPTY_IMAGE_SRC = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";

const OptimizedImage = ({
    alt = "",
    decoding = "async",
    fetchPriority,
    loading = "lazy",
    rootMargin = "300px 0px",
    src,
    ...props
}) => {
    const imageRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(loading === "eager");

    useEffect(() => {
        if (loading === "eager") {
            setShouldLoad(true);
            return undefined;
        }

        const imageElement = imageRef.current;

        if (!imageElement || !src) {
            return undefined;
        }

        if (!("IntersectionObserver" in window)) {
            setShouldLoad(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        observer.observe(imageElement);

        return () => observer.disconnect();
    }, [loading, rootMargin, src]);

    const resolvedFetchPriority = fetchPriority ?? (loading === "eager" ? "high" : "auto");

    return (
        <img
            ref={imageRef}
            alt={alt}
            decoding={decoding}
            fetchPriority={resolvedFetchPriority}
            loading={loading}
            src={shouldLoad ? src : EMPTY_IMAGE_SRC}
            {...props}
        />
    );
};

export default OptimizedImage;
