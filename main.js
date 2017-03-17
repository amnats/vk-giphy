var giphy = require('giphy-api')({
    'https': true
});

var tb = $(".im_editable");
var in_query = false;

tb.on("input", function() {
    var text = tb.text();

    if(text[text.length-1] == '/') {
        in_query = !in_query;
        if(!in_query) {
            var start_pos = text.indexOf('/') + 1;
            var end_pos = text.indexOf('/', start_pos);
            query = text.substring(start_pos, end_pos);

            giphy.translate({
                s: query,
                rating: 'r'
            }, function (err, res) {
                console.log(query);
                text = text.slice(0, start_pos-1);
                text = text.concat(res.data.images.original.url);
                tb.text(text);
            });
        }
    }
    console.log(in_query);
});