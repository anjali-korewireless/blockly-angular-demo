import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramService } from '../services/program.service';
import { IProgram } from '../models/program';
import { DomSanitizer } from '@angular/platform-browser';

declare var Blockly: any;

@Component({
  selector: 'app-program-create',
  templateUrl: './program-create.component.html',
  styleUrls: ['./program-create.component.scss']
})
export class ProgramCreateComponent implements OnInit {
  title: string;
  programName: string;
  program: IProgram;
  workspace: any;
//   xml = '<category name="Control" colour="120">'+
//   '<block type="controls_if"></block>'+
//   '<block type="controls_repeat_ext"></block>'+
// '</category>'

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramService,
    private router: Router
  ) {
    this.title = 'Create Visual Program';
    this.route.params.subscribe(params => {
      this.programName = params['programName'];
      this.program = this.programService.getOne(this.programName);
      if (!this.program) {
        this.program = {
          name: this.programName,
          Data: null
        };
      }
      console.log(
        'creating/editing the program - ',
        JSON.stringify(this.program)
      );
    });
  }

  ngOnInit() {
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox'),
      scrollbars: true,
      trashcan: true
    });

    if (this.program.Data) {
      this.workspace.clear();
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(this.program.Data),
        this.workspace
      );
    }
  }

  saveProgram(): void {
    
    //Blockly.JavaScript.addReservedWords('code');
    //this.program.Data = Blockly.JavaScript.workspaceToCode(this.workspace);
    this.program.Data = Blockly.Xml.domToText(
      Blockly.Xml.workspaceToDom(this.workspace)
    );
    console.log('saving the program - ', JSON.stringify(this.program));
    this.programService.upsertOne(this.program);
    this.router.navigate(['listProgram']);
  }
}