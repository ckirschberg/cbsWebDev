export class Chatroom {
    // title: string;
    // chatmessages: Chatmessage[];
    // imageUrl: string;
    // id?: string;

    constructor(public title: string, public chatmessages: Chatmessage[], public imageUrl: string, public id?: string) {
        // this.id = id;
        // this.title = title;
        // this.chatmessages = chatmessages;
        // this.imageUrl = imageUrl;
    }
}

export class Chatmessage {
    constructor(public text: string, public timestamp: Date) { }
}