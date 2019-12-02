import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // Replace with your markup
  template: `
  <svg width="500" height="500">
    <svg:foreignObject width="500" height="500">
      <xhtml:div>Hello</xhtml:div>
    </svg:foreignObject>
  </svg>
`,
  styles: [ `h2 { font-weight: normal; }
  `]
})


export class AppComponent  {
  // your code goes here
}
