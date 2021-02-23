import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'newsletter',
  templateUrl: './newsletter.html',
  encapsulation: ViewEncapsulation.None
})

export class NewsletterComponent {
  messageStatus: string = '';
  messageText: string = '';
  inputNewsletter: string = '';
  inputNewsletterPlaceholder: string = 'Your email';
  isLoading: boolean = false;

  constructor() { }

  onSubscribe() {

    this.isLoading = true;
    this.messageText = 'Please wait...';
    this.messageStatus = '';

    /** Show error message if input is null or invalid */
    if (!this.inputNewsletter || !this.inputNewsletter) {
      setTimeout(() => {
        this.messageStatus = 'message-error';
        this.messageText = 'Invalid email address';
        this.isLoading = false;
      }, 2000);
      return;
    }

    /** Show success message if email is saved */
    setTimeout(() => {
      this.messageStatus = 'message-success';
      this.messageText = 'Your email has been saved';
      this.inputNewsletter = '';
      this.isLoading = false;
    }, 2000);
  }

}