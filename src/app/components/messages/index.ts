import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'messages',
  templateUrl: './index.html',
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit, AfterViewInit {

  @ViewChild('messagelist') messageList: ElementRef;

  me: any;
  users: any[];
  messages: any[];
  selectedUser: any;

  constructor() { }
  ngAfterViewInit(): void {
    this.gotoScrollToBottom();
  }

  selectUser(user: any) {
    this.selectedUser = user;
    this.messages = [];
  }

  randomMessage() {
    const message = ["I was just thinking about you!",
      "You are a great example for others.",
      "You have great ideas.",
      "When I grow up I want to be you!",
      "I appreciate all of your opinions.",
      "Made glorious pleasing barded steeds",
      "To frightful measures",
      "Grim-visaged war hath smooth'd his fair proportive tricks",
      "Now is the lascivious sun of the winter of mountings",
      "Our brows bound with victorious looking-glass",
      "Our stern alarums chamber",
      "To strut before a want love's majesty",
      "To the clouds that am curtail'd of a lute",
      "But I, that am curtail'd of fearful adversaries",
      "Now is that am not shaped front",
      "And all the clouds the clouds that am rudely stamp'd, and war hath smooth'd his fair proportive tricks",
      "Our bruised arms hung up for sportion",
      "To strut before a wanton amorous looking-glass",
      "Our bruised arms hung up for monuments",
      "I, that am rudely stamp'd, and with victorious summer by this sun of York",
      "And all the winter of York",
      "And now, instead of fearful marches to delightful marches to merry meeting barded stern alarums changed want lour'd upon our house",
      "In the clouds that am rudely stamp'd, and war hath smooth'd his wreaths",
      "Our stern alarums chamber",
      "To fright the souls of a lady's chamber",
      "To strut before a want lour'd upon our house",
      "In the lascivious sun of our bruised arms hung up for made to delightful measures",
      "Grim-visaged want love's majesty",
      "To strut before a wanton ambling of York",
      "And now, instead of mounting nymph",
      "I, that am curtail'd of fearful measures",
      "Grim-visaged want lour'd upon our bruised arms hung up for sportion",
      "ascivious summer by this summer by this fair proportive tricks",
      "Our bruised arms hung up for sportion",
      "I, that am not shaped for monuments",
      "Our discontent",
      "Made to merry meeting nymph",
      "I, that am curtail'd of this wrinkled for sportive tricks",
      "He capers nimbly in a lady's changed war hath smooth'd his wrinkled for sportion",
      "eeting barded stern alarums changed war hath smooth'd his summer by this wrinkled for sportion",
      "fearful marches to delight the ocean buried",
      "Now are our house",
      "In the winter of fearful measures",
      "Grim-visaged wanton amorous sun of our bruised arms hung up for sportion",
      "bling barded steeds",
      "To the clouds that am not shaped front",
      "And all the deep bosom of a lady's changed to merry meeting of mountings",
      "Our steeds",
      "To strut before a want love's majesty",
      "To the winter of a lady's changed war hath smooth'd his fair proportive tricks",
    ];

    setTimeout(() => {
      const fx = Math.round(Math.random() * message.length - 1);
      this.messages = [...this.messages, {
        fromId: this.selectedUser.id, toId: this.me.id, type: 'msg', message: message[fx]
      }];

      this.gotoScrollToBottom();
    }, Math.round(Math.random() * 2000 + 1000));
  }

  focusField(el: HTMLTextAreaElement) {
    setTimeout(function () {
      el.focus();
    }, 0);
  }

  /** Send messge when click to button */
  sendMessage(el: HTMLTextAreaElement) {
    if (el.value) {
      /**
       * Add new message to Message list
       */
      this.messages = [...this.messages, {
        fromId: this.me.id, toId: this.selectedUser.id, type: 'msg', message: el.value
      }];

      /** Clear Textarea */
      el.value = '';

      this.gotoScrollToBottom();
      this.randomMessage();

    }
  }

  gotoScrollToBottom() {
    setTimeout(() => {
      this.messageList.nativeElement.scroll({
        top: this.messageList.nativeElement.scrollHeight,
        left: 0,
        behavior: 'smooth'
      })
    }, 0);

  }

  sendBid() {
    this.messages = [...this.messages, {
      fromId: '1', toId: '2', type: 'oth', message: `${Math.round(Math.random() * 900 + 100)} TL bid was made`
    }];

    this.gotoScrollToBottom();
    this.randomMessage();
  }

  jobCompleted() {

    this.messages = [...this.messages, {
      fromId: '1', toId: '2', type: 'oth', message: 'Your job has been successfully completed'
    }];

    this.gotoScrollToBottom();
    this.randomMessage();
  }

  jobDone() {

    this.messages = [...this.messages, {
      fromId: '1', toId: '2', type: 'oth', message: 'Your job is completed and sent'
    }];

    this.gotoScrollToBottom();
    this.randomMessage();
  }

  ngOnInit(): void {

    /**
     * Dummy Data
     */

    /** Current User */
    this.me = { id: 1 };

    /** Users */
    this.users = [
      { name: 'JOHN SMITH CARTER', image: 'assets/images/users/user-image.jpg', id: 1 },
      { name: 'JOHN SMITH CARTER', image: 'assets/images/users/user-image.jpg', id: 2 },
      { name: 'JOHN SMITH CARTER', image: 'assets/images/users/user-image.jpg', id: 3 },
      { name: 'JOHN SMITH CARTER', image: 'assets/images/users/user-image.jpg', id: 4 },
      { name: 'JOHN SMITH CARTER', image: 'assets/images/users/user-image.jpg', id: 5 },
      { name: 'JOHN SMITH CARTER', image: 'assets/images/users/user-image.jpg', id: 6 },
      { name: 'JOHN SMITH CARTER', image: 'assets/images/users/user-image.jpg', id: 7 }
    ];

    /** Selected User */
    this.selectedUser = this.users[1];

    /** Current Dummy Messages */
    this.messages = [
      {
        fromId: '1', toId: '2', type: 'msg', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis felis eu sollicitudin bibendum.Etiam volutpat pretium lorem, quis mollis dolor pretium vitae.'
      },
      {
        fromId: '2', toId: '1', type: 'msg', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis felis eu sollicitudin bibendum.Etiam volutpat pretium lorem, quis mollis dolor pretium vitae.'
      },
      {
        fromId: '2', toId: '1', type: 'msg', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis felis eu sollicitudin bibendum.Etiam volutpat pretium lorem, quis mollis dolor pretium vitae.'
      },
      {
        fromId: '1', toId: '2', type: 'msg', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis felis eu sollicitudin bibendum.Etiam volutpat pretium lorem, quis mollis dolor pretium vitae.'
      },
      {
        fromId: '1', toId: '2', type: 'bid', message: '450 TL bid was made', extras: { value: 450, isPaid: true }
      },
      {
        fromId: '2', toId: '1', type: 'bid', message: 'The payment is complete', extras: { isPaid: true }
      },
    ]
  }

}
