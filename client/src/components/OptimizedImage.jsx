const OptimizedImage = ({
    alt = "",
    loading = "lazy",
    decoding = "async",
    fetchPriority,
    ...props
}) => {
    const resolvedFetchPriority = fetchPriority ?? (loading === "eager" ? "high" : "auto");

    return (
        <img
            alt={alt}
            decoding={decoding}
            fetchPriority={resolvedFetchPriority}
            loading={loading}
            {...props}
        />
    );
};

export default OptimizedImage;
