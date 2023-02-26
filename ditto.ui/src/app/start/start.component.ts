import { Component } from '@angular/core';
import { VoiceService } from '../voice.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [VoiceService],
})
export class StartComponent {
  speech: boolean = false;

  text: string = '';

  constructor(public service: VoiceService) {
    this.service.init();
  }

  startRecord() {
    if (this.speech == true) {
      this.speech = false;
    } else {
      this.speech = true;
    }

    if (this.speech == true) {
      this.service.start();
    } else {
      this.service.stop();
    }
  }
}
