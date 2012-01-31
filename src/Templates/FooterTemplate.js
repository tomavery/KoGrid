﻿kg.templates.defaultFooterTemplate = function () {
    return '<div style="margin-top: 5px; margin-bottom: auto; height: 30px; position: absolute; top: 0; bottom: 0; left: 5px;">' +
                '<div>' +
                    '<strong>Total Items</strong>: <span data-bind="text: maxRows"></span>' +
                '</div>' +
                '<div>' +
                    '<strong>Selected Items</strong>: <span data-bind="text: selectedItemCount"></span>' +
                '</div>' +
            '</div>' +
            '<div style="position: absolute; right: 0; left: 150px; margin-top: 5px;" data-bind="visible: pagerVisible">' +
                '<div style="float: right;">' +
                    '<div style="float: left;">' +
                        '<strong>Rows:</strong>' +
                        '<select data-bind="options: pageSizes, value: selectedPageSize">' +
                        '</select>' +
                    '</div>' +
                    '<div style="float: left; min-width: 175px;">' +
                        '<input type="button" value="<<" data-bind="click: pageToFirst, enable: canPageBackward" title="First Page"/>' +
                        '<input type="button" value="<" data-bind="click: pageBackward, enable: canPageBackward" title="Previous Page"/>' +
                        '<input type="text" value="0" style="width: 25px;" data-bind="value: protectedCurrentPage, enable: maxPages() > 1" />' +
                        '<input type="button" value=">" data-bind="click: pageForward, enable: canPageForward" title="Next Page"/>' +
                        '<input type="button" value=">>" data-bind="click: pageToLast, enable: canPageForward" title="Last Page"/>' +
                    '</div>' +
                '</div>' +
            '</div>';
};