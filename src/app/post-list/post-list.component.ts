import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  @Input() post: string;
  @Input() Posts: any;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date
  constructor() { }

  ngOnInit() {
  }

}
