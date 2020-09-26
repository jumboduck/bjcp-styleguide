import srmColors from "../constants/colors.js";

export const getColorFromSrm = (srm) => {
    return srm >= 30 ? "#000" : srmColors[srm - 1];
};

export default getColorFromSrm;
