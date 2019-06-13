import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  open = '';
  menu = 'menu';
  constructor() { }

  ngOnInit() {
  }

  offcanvas(){
    if (this.open === ''){
      this.open = 'open';
      this.menu = 'close';
    } else{
      this.open = '';
      this.menu = 'menu';
    }
  }

  // $(function () {
  //   'use strict'

  //   $('[data-toggle="offcanvas"]').on('click', function () {
  //     $('.offcanvas-collapse').toggleClass('open')
  //   })
  // })
}
