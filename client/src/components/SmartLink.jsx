import { Link } from "react-router-dom";

const EXTERNAL_PROTOCOL_PATTERN = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

const SmartLink = ({ children, href, ...props }) => {
    const isHashLink = typeof href === "string" && href.startsWith("#");
    const isExternalLink = typeof href === "string" && EXTERNAL_PROTOCOL_PATTERN.test(href);

    if (!href || isHashLink || isExternalLink) {
        return <a href={href} {...props}>{children}</a>;
    }

    const resolvedHref = href.startsWith("/")
        ? href
        : new URL(href, window.location.href).pathname;

    return <Link to={resolvedHref} {...props}>{children}</Link>;
};

export default SmartLink;
