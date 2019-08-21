import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() NameUsers;

  questions= ['¿which is the most important for you in the service?',
  '¿What type is your industry and what are your specialties?',
  '¿average hours when you use trucks?'];
  constructor() { }

  ngOnInit() {
  }

}
