export const utils = {
    filterByName
};

function filterByName(results, keyword) {
    return results.filter((result) =>
        result[0].toLowerCase().includes(keyword.toLowerCase())
    );
}
