import { Component, OnInit } from '@angular/core';
import Keyboard from 'simple-keyboard';

export interface boodschappen {
  id:number,
  title: string,
  completed: boolean,
  editing: boolean
}

@Component({
  selector: 'app-boodschappen',
  templateUrl: './boodschappen.component.html',
  styleUrls: ['./boodschappen.component.css']
})
export class BoodschappenComponent implements OnInit {

  value = "";
  keyboard!: Keyboard;

  showkeyboard = false

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: (input: string) => this.onChange(input),
      onKeyPress: (button: string) => this.onKeyPress(button)
    });
  }

  onChange = (input: string) => {
    this.value = input;
    console.log("Input changed", input);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };



  public boodschappen: boodschappen[] = [];
  public boodschapTitle: string = '';

  constructor() { }

  ngOnInit(): void {
    this.boodschapTitle = '';
    this.boodschappen = [
    ];
  }

  addTodo() {
    this.boodschappen.push({
      id: this.boodschappen.length+1,
      title: this.value,
      completed: false,
      editing: false
    });
    this.keyboard.clearInput()
    this.value = ""
  }
}
