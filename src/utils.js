// utils.js

// Import Images
const Images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));
const Icons = importAll(require.context('./assets/icons/bootstrap', false, /\.(png|jpe?g|svg)$/));

/**
 * Imports all items matching Regex r
 * @param {string} r
 * @returns {Array}
 */
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export { importAll, Images, Icons }