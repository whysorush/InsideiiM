import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <app-user-entry></app-user-entry>
            <app-user-update></app-user-update>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inside';
}
