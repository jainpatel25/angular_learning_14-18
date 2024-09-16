import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../pipe/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe,AsyncPipe,JsonPipe,DatePipe,UpperCasePipe, LowerCasePipe, TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName: string = "this is a demo session";

  currentDate: Date = new Date();

  
  currentTime: Observable<Date> = new Observable<Date>;

  student: any = {
    name: 'john',
    city: 'Ahemdabad',
    empId: '001',
    state: ''
  };

  constructor(){
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }

}
