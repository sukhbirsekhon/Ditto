import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent {
  speech: boolean = false;

  ngOnInit() {}

  startRecord() {
    if (this.speech == true) {
      this.speech = false;
    } else {
      this.speech = true;
    }

    if (this.speech == true) {
    }
  }
}
