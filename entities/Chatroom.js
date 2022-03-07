export class Chatroom {
    constructor(title, chatmessages, imageUrl) {
        this.title = title;
        this.chatmessages = chatmessages;
        this.imageUrl = imageUrl;
    }
}

export class Chatmessage {
    constructor(text, timestamp) {
        this.text = text;
        this.timestamp = timestamp;
    }
}