System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var all, short;
    return {
        setters: [],
        execute: function () {
            /** All prepositions */
            exports_1("all", all = [
                'about',
                'above',
                'across',
                'after',
                'against',
                'along',
                'among',
                'around',
                'at',
                'before',
                'behind',
                'below',
                'beneath',
                'beside',
                'between',
                'beyond',
                'but',
                'by',
                'despite',
                'down',
                'during',
                'except',
                'for',
                'from',
                'in',
                'inside',
                'into',
                'like',
                'near',
                'of',
                'off',
                'on',
                'onto',
                'out',
                'outside',
                'over',
                'past',
                'per',
                'since',
                'through',
                'throughout',
                'till',
                'to',
                'toward',
                'under',
                'underneath',
                'until',
                'up',
                'upon',
                'via',
                'with',
                'within',
                'without',
                'versus'
            ]);
            /** Prepositions shorter than 5 characters */
            exports_1("short", short = all.filter(word => word.length < 5));
            exports_1("default", all);
        }
    };
});
//# sourceMappingURL=prepositions.js.map