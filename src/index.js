const $ = require('jquery');
const giphy = require('giphy-api')({
   'https': true
});
// const ya_translate = require('yandex-translate')('trnsl.1.1.20170318T192613Z.3893c3029957be21.18b10c3aa1e4b2ee4994be06c03b06a853b80a8d');
VK.init({
   apiId: 5931547
});

let shownGifs = {};

function sendMessage(msg) {
   chrome.runtime.sendMessage({message: msg}, function (response) {
      if (response != null) {
         console.log("response: " + response.message);
      }
   });
}

function getGifPreview(query, img) {
   giphy.translate({
      s: query,
      rating: 'r',
   }, function (err, res) {
      console.log(res);
      if (res.data.length != 0) {
         img.src = res.data.images.downsized_medium.url;
      }
      else {
         img.src = 'empty';
      }

      if (err != null) {
         console.log(err);
      }
   });
}

function refreshGif(query, img) {
   getGifPreview(query, img);
}


function sendGif(img) {
   let currId;

   VK.Auth.getLoginStatus(function(session, status) {
      if(status != 'connected') {
         VK.Auth.login(function (session, status) {
            console.log(status);
         }, 4096);
      }
   });

   VK.Api.call('messages.send', {user_id: 10712412, message: 'hello'}, function (r) {
      console.log(currId);
      console.log(r);
   });
}

function insertGiphy() {
   let vk_right_menu = $(".im-right-menu");
   let tool_width = vk_right_menu.css('width');
   console.log(tool_width);

   let img = document.createElement('img');
   img.style.maxWidth = tool_width;

   let textbox = document.createElement('input');
   textbox.type = 'text';
   //textbox.style.width = tool_width;
   let timerId;
   textbox.oninput = function () {
      let query = textbox.value;
      if (timerId != null) {
         clearTimeout(timerId);
      }

      // if (query.length > 0) {
      //    timerId = setTimeout(function () {
      //       ya_translate.translate(query, {to: 'en'}, function (err, res) {
      //          console.log(res);
      //          textbox.value = res.text[0];
      //          getGifPreview(textbox.value, img);
      //       });
      //    }, 700);
      // }
   };

   let buttonRefresh = document.createElement('button');
   //buttonRefresh.style.width = tool_width;
   buttonRefresh.innerHTML = "Еще";
   buttonRefresh.onclick = function () {
      let query = textbox.value;
      if (timerId != null) {
         clearTimeout(timerId);
      }
      if (query.length > 0) {
         buttonRefresh.disabled = true;
         refreshGif(query, img);
      }
   };

   let buttonSend = document.createElement('button');
   //buttonSend.style.width = tool_width;
   buttonSend.innerHTML = "Отправить";
   buttonSend.onclick = function () {
      sendGif(img);
   };

   img.onload = function () {
      buttonRefresh.disabled = false;
      console.log("img loaded");
   };

   let wrapper = document.createElement('div');
   wrapper.id = 'giphy-wrapper';
   wrapper.style.width = tool_width;
   wrapper.style.marginLeft = vk_right_menu.css('margin-left');
   wrapper.appendChild(img);
   wrapper.appendChild(textbox);
   wrapper.appendChild(buttonRefresh);
   wrapper.appendChild(buttonSend);

   $(".im-page-wrapper").append(wrapper);
   sendMessage('tool_injected');
}

function unloadGiphy() {
   $("#giphy-wrapper").remove();
}

chrome.runtime.onMessage.addListener(
      function (request, sender, sendResponse) {
         console.log("got message from background: " + request.message);
         sendResponse({message: "content script got the message: " + request.message});

         if (request.message == 'in_pm') {
            insertGiphy();
         }
         if (request.message == 'unload_tool') {
            unloadGiphy();
         }
      });

sendMessage('in_vk');