import { Component, OnInit } from '@angular/core';
import Keyboard from 'simple-keyboard';

export interface todos {
  id:number,
  title: string,
  completed: boolean,
  editing: boolean
}

@Component({
  selector: 'app-todolijst',
  templateUrl: './todolijst.component.html',
  styleUrls: ['./todolijst.component.css']
})

export class TodolijstComponent implements OnInit {
  value = "";
  keyboard2!: Keyboard;

  ngAfterViewInit() {
    this.keyboard2 = new Keyboard(".keyboard2",{
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
    this.keyboard2.setInput(event.target.value);
  };

  handleShift = () => {
    let currentLayout = this.keyboard2.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard2.setOptions({
      layoutName: shiftToggle
    });
  };



  public todos: todos[] = [];
  public todoTitle: string = '';

  constructor() { }

  ngOnInit(): void {
    this.todoTitle = '';
    this.todos = [
    ];
  }

  addTodo() {
    this.todos.push({
      id: this.todos.length+1,
      title: this.value,
      completed: false,
      editing: false
    })
  }
}
