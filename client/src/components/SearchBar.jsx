import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

/* Handles writing search query and submitting
 * Will display articles with titles close to
 * the search query */
const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState();
    const [searchParams] = useSearchParams();

    /* Handles changing the value in the search bar */
    const handleSearchChange = (event) => {
        console.log(`Setting string to: ${event.target.value}`);
        setSearchQuery(event.target.value);
    }

    /* Handles submitting the form, requests the manifest data */
    const handleSubmit = () => {
        console.log(`/results?search_query=${searchQuery}`);
    }

    return (
        <section id="search" className="alt">
            <form method="get" onSubmit={handleSubmit} action="/results">
                <input type="text" name="search_query" id="query" placeholder={searchParams.get("search_query") ? searchParams.get("search_query") : "Search"} onChange={handleSearchChange} />
            </form>
        </section>
    );
}

export default SearchBar;
