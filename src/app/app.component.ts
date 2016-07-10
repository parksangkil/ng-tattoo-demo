import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_BUTTON_DIRECTIVES, MdIcon],
  providers: [MdIconRegistry],
  template: `
<button md-raised-button color=’primary’>this is a magical button</button>
<button md-raised-button color=’primary’><md-icon>home</md-icon></button>
`
})
export class AppComponent {
  title = 'app works!';
}
