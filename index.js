'use strict';

const searchFor = [
    'exports.',
    'exports[\'default\']'
];

/**
 *
 * @param {string} source
 * @returns {number}
 */
function findPos(source) {
    for (const value of searchFor) {
        const pos = source.indexOf(value);
        if (pos !== -1) {
            return pos;
        }
    }

    return -1;
}

module.exports = exports = function () {
    return {
        renderChunk: function (source) {
            const matches = /(exports(?:\['default']|\.default)) = (.*);/gi.exec(source);
            if (matches === null || matches.length < 3) {
                return source;
            }

            const pos = findPos(source);
            if (pos === -1) {
                return source;
            }

            return source.substring(0, pos) + `module.exports = exports = ${matches[2]};\n\n` + source.substring(pos);
        }
    };
}
