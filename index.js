'use strict';

module.exports = exports = function () {
    return {
        renderChunk: function (source) {
            const matches = /(exports(?:\['default']|\.default)) = (.*);/gi.exec(source);
            if (matches) {
                const pos = source.indexOf('exports.');

                source = source.substring(0, pos) + `module.exports = exports = ${matches[2]};\n\n` + source.substring(pos);
            }
            return source;
        }
    };
}
