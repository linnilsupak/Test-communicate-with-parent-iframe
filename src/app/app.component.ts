import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing-iframe';

  sendDataToParent() {
    window.parent.postMessage({ "for": "personality-test", "result": "ENFJ" }, 'http://localhost:4200')
  }
}
