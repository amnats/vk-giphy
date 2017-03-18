const $ = require('jquery');
//const translate = require('google-translate-api');
const giphy = require('giphy-api')({
    'https': true
});

// vk input field
let tb = $(".im_editable");
let in_query = false;

let wrapper = {};
wrapper.class = 'giphy-wrapper';
wrapper = document.createElement('div', wrapper, );
wrapper = document.createElement('div', wrapper);

tb.on("input", function() {
    let text = tb.text();

    if(text[text.length-1] == '/') {
        in_query = !in_query;
        if(!in_query) {
            let start_pos = text.indexOf('/') + 1;
            let end_pos = text.indexOf('/', start_pos);
            let query = text.substring(start_pos, end_pos);

            // translate(query, {from: 'ru', to: 'en'}).then(res => {
            //     console.log(res.text);
            //     query = res.text;
            // }).carch(err => {
            //     console.error(err);
            // });

            giphy.translate({
                s: query,
                rating: 'r'
            }, function (err, res) {
                console.log(query);
                console.log(res);
                text = text.slice(0, start_pos-1);
                text = text.concat(res.data.images.original.url);
                tb.text(text);
            });
        }
    }
    console.log(in_query);
});