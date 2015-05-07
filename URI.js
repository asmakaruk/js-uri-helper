(function(){
    'use strict';

    var URI = function(url) {
        var _urlDefined = arguments.length >= 1;

        if ( url === undefined ) {
            if ( _urlDefined ) {
                throw new TypeError('undefined is not a valid argument for URI');
            }

            if (typeof location !== 'undefined') {
                url = location.href + '';
            } else {
                url = '';
            }
        }
    };

    URI.version = '0.0.1';

    var proto = URI.prototype,
        hasProperty = Object.prototype.hasOwnProperty;

    // allow duplicate query parameters (?q=1&q=2)
    URI.allowDuplicateQueryParameters = false;
    // replace ' ', + with %20 (space in query strings)
    URI.escapeSpaceInQuery              = true;

    URI.parts       = {
        protocol        : null,
        username        : null,
        password        : null,
        hostname        : null,
        port            : null,
        path            : null,
        query           : null,
        fragment        : null
    };

    URI.ports       = {
        http            : '80',
        https           : '443',
        ftp             : '21',
        gopher          : '70',
        ws              : '80',
        wss             : '443'
    };

    URI.expressions = {
        protocol        : /^[a-z][a-z0-9.+-]*$/i,
        ip4             : /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
    };

})();