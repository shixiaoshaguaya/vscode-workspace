import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  public keyword: string = "";
  public todolist: any[] = [];

  constructor(public storage: StorageService) { }

  ngOnInit(): void {
    var todolist: any = this.storage.get('todolist');

    if (todolist) {
      this.todolist = todolist;
    }
  }

  doAdd(e: { keyCode: number; }) {
    if (e.keyCode == 13) {
      if (!this.todolistHasKeyword(this.todolist, this.keyword)) {
        this.todolist.push({
          title: this.keyword,
          status: 0                   //0表示代办事项  1表示已完成事项
        });
        this.keyword = '';
        this.storage.set('todolist', this.todolist);
      } else {
        alert('数据已经存在');
        this.keyword = '';
      }
    }
  }

  deleteData(key: number) {
    this.todolist.splice(key, 1);
    this.storage.set('todolist', this.todolist);
  }

  a(key: number) {
    this.todolist[key].status = "1";
    this.storage.set('todolist', this.todolist);
  }

  b(key: number) {
    this.todolist[key].status = "0";
    this.storage.set('todolist', this.todolist);
  }

  //如果数组里面有keyword返回true  否则返回false
  todolistHasKeyword(todolist: any, keyword: any) {
    if (!keyword) return false;
    for (var i = 0; i < todolist.length; i++) {
      if (todolist[i].title == keyword) {
        return true;
      }
    }
    return false;
  }

}
