import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss']
})
export class CardLayoutComponent implements OnInit {

  @Input() cardContainerStyle: string;
  @Input() cardIcon: string;
  @Input() cardHeader: string;

  constructor() { 
  }

  ngOnInit() {
  }

}