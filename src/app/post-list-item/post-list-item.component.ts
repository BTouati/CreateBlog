import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.sass']
})
export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  //created_at=new Date();
  constructor() { }

  ngOnInit() {
  }
  LovePlus() {
    this.loveIts++;
    return this.loveIts;
    }
  LoveMinus() {
    this.loveIts--;
    return this.loveIts;
    }

}
