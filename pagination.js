/**!
 * Copyright: wxwdesign@gmail.com
 */

(function(global) {
    var pagination = {
        /**
         * [getPages description]
         * @param  {Object} config pagination configurations
         * @return {Object}        pagination data processed
         */
        getPages: function(config) {
            var totalRecords = getInt(config.totalRecords, 'totalRecords'),
                pageSize = getInt(config.pageSize, 'pageSize'),
                currentPage = getInt(config.currentPage, 'currentPage'),
                pagerData = {
                    totalRecords: totalRecords,
                    currentPage: currentPage,
                    totalPage: Math.ceil(totalRecords / pageSize),
                    pageNumber: []
                };

            if (totalRecords > 1) {
                var pageNumberArray = [],
                    cp = currentPage,
                    maxP = Math.ceil(totalRecords / pageSize),
                    centerNumber = 4;

                var startPage = cp > centerNumber / 2 ? cp - centerNumber / 2 : 1,
                    endPage = (maxP - cp >= centerNumber) ? cp + (cp > centerNumber / 2 ? centerNumber / 2 : centerNumber) : maxP;
                if (cp > 1) {
                    pageNumberArray.push({
                        number: (cp - 1),
                        type: 'prevPage'
                    });

                    if (cp > 3) {
                        pageNumberArray.push({
                            number: 1,
                            type: 'pageNumber'
                        });
                    }
                }

                if (startPage > 2) {
                    pageNumberArray.push({
                        text: "...",
                        type: 'plainText'
                    });
                }

                for (var i = startPage; i <= endPage; i++) {
                    if (i === cp) {
                        pageNumberArray.push({
                            text: i,
                            type: 'plainText'
                        });
                    } else {
                        pageNumberArray.push({
                            number: i,
                            type: 'pageNumber'
                        });
                    }
                }

                if (endPage < maxP - 1) {
                    pageNumberArray.push({
                        text: "...",
                        type: 'plainText'
                    });
                }
                if (cp < maxP) {
                    if (endPage < maxP && cp <= maxP - centerNumber) {
                        pageNumberArray.push({
                            number: maxP,
                            type: 'pageNumber'
                        });
                    }

                    pageNumberArray.push({
                        number: (cp + 1),
                        type: 'nextPage'
                    });
                }
                pagerData.pageNumber = pageNumberArray;
            }

            return pagerData;
        }
    };

    function getInt(n, name) {
        var m = parseInt(n, 10);

        if (isNaN(m)) {
            throw new Error(name + '(' + n + ") cann't be parse to integer!");
        }

        return m;
    }


    if (typeof define === 'function' && define.amd) {
        define('pagination', [], function() {
            return pagination;
        });
    }


    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = pagination;
        }
        exports.pagination = pagination;
    } else {
        global.pagination = pagination;
    }
})(this);