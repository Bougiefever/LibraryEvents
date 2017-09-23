import { Component, OnInit } from '@angular/core';
import { MessagingService } from './shared/services/messaging.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  message: any;

  constructor(
    private messagingService: MessagingService,

  ) {

  }

  ngOnInit(): void {
    this.messagingService.getPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }
}
