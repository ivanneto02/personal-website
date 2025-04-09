// Source: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
export const fisherYatesShuffle = (data) => {

    // copy the data using spread operator ...
    const newData = [...data];

    // grabs random number j from 0 to i, swaps i with j.
    for (let i = newData.length - 1; i > 0; i--) {

        // get number up to current+1 to grab random object that we have not seen
        const j = Math.floor(Math.random() * (i + 1));

        // swap the entries with standard swap
        [newData[i], newData[j]] = [newData[j], newData[i]];
    }

    return newData;
}
