import { useEffect, useRef, useState } from "react";
import "@styles/OptimizedImage.css";

const EMPTY_IMAGE_SRC = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";

const OptimizedImage = ({
    alt = "",
    decoding = "async",
    fetchPriority,
    loading = "lazy",
    rootMargin = "300px 0px",
    src,
    wrapperClassName = "",
    ...props
}) => {
    const imageRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(loading === "eager");
    const [isLoaded, setIsLoaded] = useState(false);

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

    useEffect(() => {
        setIsLoaded(false);
    }, [src, shouldLoad]);

    const resolvedFetchPriority = fetchPriority ?? (loading === "eager" ? "high" : "auto");
    const shouldShowSpinner = shouldLoad && !isLoaded && Boolean(src);
    const resolvedWrapperClassName = ["optimizedImageWrapper", wrapperClassName].filter(Boolean).join(" ");

    return (
        <span className={resolvedWrapperClassName}>
            <span className={shouldShowSpinner ? "optimizedImageSpinner" : "optimizedImageSpinner optimizedImageSpinner--hidden"} aria-hidden="true"></span>
            <img
                ref={imageRef}
                alt={alt}
                decoding={decoding}
                loading={loading}
                onLoad={(event) => {
                    if (shouldLoad && event.currentTarget.currentSrc === src) {
                        setIsLoaded(true);
                    }
                }}
                src={shouldLoad ? src : EMPTY_IMAGE_SRC}
                fetchpriority={resolvedFetchPriority}
                {...props}
            />
        </span>
    );
};

export default OptimizedImage;
