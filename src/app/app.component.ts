import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing-iframe';

  sendDataToParent() {
    window.parent.postMessage({ "for": "personality-test", "data": "this is a child iframe" }, '*')
  }
}
