const checkBeerInRange = (beer, stat, range) => {
    if (
        range === "any" ||
        (parseFloat(beer.stats[stat].low) >= range[0] &&
            parseFloat(beer.stats[stat].low) < range[1]) ||
        (parseFloat(beer.stats[stat].high) >= range[0] &&
            parseFloat(beer.stats[stat].high) < range[1])
    ) {
        return true;
    } else if (range === "flexible" && beer.stats[stat].flexible === "true") {
        return true;
    } else {
        return false;
    }
};

export default checkBeerInRange;
