import { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "@styles/OptimizedImage.css";
import MarkdownImageContext from "./MarkdownImageContext";

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
    const enableMarkdownLightbox = useContext(MarkdownImageContext);
    const imageRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(loading === "eager");
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

    useEffect(() => {
        if (!isLightboxOpen) {
            return undefined;
        }

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsLightboxOpen(false);
            }
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isLightboxOpen]);

    const resolvedFetchPriority = fetchPriority ?? (loading === "eager" ? "high" : "auto");
    const shouldShowSpinner = shouldLoad && !isLoaded && Boolean(src);
    const resolvedWrapperClassName = ["optimizedImageWrapper", wrapperClassName].filter(Boolean).join(" ");
    const canOpenLightbox = enableMarkdownLightbox && Boolean(src);

    const imageMarkup = (
        <>
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
        </>
    );

    return (
        <>
            <span className={resolvedWrapperClassName}>
                {canOpenLightbox ? (
                    <button
                        type="button"
                        className="optimizedImageButton"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        {imageMarkup}
                    </button>
                ) : imageMarkup}
            </span>
            {isLightboxOpen && createPortal(
                <div
                    className="optimizedImageLightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={alt || "Expanded image"}
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <button
                        type="button"
                        className="optimizedImageLightboxClose"
                        aria-label="Close image"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        x
                    </button>
                    <div
                        className="optimizedImageLightboxInner"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            className="optimizedImageLightboxImage"
                            src={src}
                            alt={alt}
                        />
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default OptimizedImage;
