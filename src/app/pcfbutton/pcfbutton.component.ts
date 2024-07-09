import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pcfbutton',
  standalone: true,
  imports: [],
  templateUrl: './pcfbutton.component.html',
  styleUrl: './pcfbutton.component.css'
})
export class PCFButtonComponent {
  @Input() data = '';
  
  @Output() updateDataEvent = new EventEmitter<string>();
  onClick(value:string) {
    this.updateDataEvent.emit(value);
  }
}
