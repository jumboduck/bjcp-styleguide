const getStatAvg = (stat, beer) => {
    if (beer.stats[stat].flexible === "true") {
        if (stat === "srm") {
            return 6;
        }
        return "Flexible";
    } else {
        let average =
            (parseFloat(beer.stats[stat].low) +
                parseFloat(beer.stats[stat].high)) /
            2;

        switch (stat) {
            case "srm":
                return Math.floor(average);
            case "abv":
                return average.toFixed(2);
            case "og":
                return average.toFixed(3);
            case "fg":
                return average.toFixed(3);
            case "ibu":
                return Math.round(average);
            default:
                return console.log("This stat does not exist.");
        }
    }
};

export default getStatAvg;
