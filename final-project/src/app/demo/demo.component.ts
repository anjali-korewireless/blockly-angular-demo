import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-demo',
  template: `./demo.component.html`,
  styleUrls: ['./demo.component.scss']
})
 
export class DemoComponent implements OnInit {
  // xml = `<div><xml id="toolbox" style="display: none">
  // <block type="controls_if"></block>
  // <block type="controls_repeat_ext"></block>
  // <block type="logic_compare"></block>
  // <block type="math_number"></block>
  // <block type="math_arithmetic"></block>
  // <block type="text"></block>
  // <block type="text_print"></block>
  // </xml></div>`;
  public htmlData :any;
//  xml = '<span>j</span>';
  constructor(
    private sanitizer: DomSanitizer
  ){}
  ngOnInit() {
    //this.htmlData = this.sanitizer.bypassSecurityTrustHtml( this.xml);
  }

}
