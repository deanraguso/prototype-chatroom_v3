import consumer from "./consumer"

let url = window.location.href;
let room_id = parseInt(url.substring(url.search("rooms/") + 6));

consumer.subscriptions.create({"channel":"RoomChannel", "room_id":room_id}, {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    document.querySelector("#messages").insertAdjacentHTML("beforeend", `<td>${data.text}</td>`)
  }
});
