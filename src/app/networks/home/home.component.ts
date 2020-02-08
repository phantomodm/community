import { Component, OnInit } from '@angular/core';
import { DUMMY } from './dummy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'company', 'openings', 'neighborhood'];
  dataSource = DUMMY;

  constructor() { }

  ngOnInit() {

  }

}
