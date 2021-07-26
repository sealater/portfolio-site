// utils.js

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

export { importAll }