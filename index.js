module.exports = {
    website: {
        assets: './assets',
        js: [
            'comment.js'
        ],
        css: [
            'comment.css'
        ]
    },
    // Map of hooks
    hooks: {
        "page:before": function (page) {
            var tmpl = '<%= depth %><%= bullet %>[<%= heading %>](#<%= url %>)\n';
            console.log(tmpl);
            // page.content = toc.insert(page.content, {
            //     template: tmpl
            // });
            console.log(page.content);
            return page;
        }
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};