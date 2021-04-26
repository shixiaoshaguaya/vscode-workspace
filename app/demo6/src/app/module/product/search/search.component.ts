import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public keyword: string = "";
  public historyList: any[] = [];

  constructor(public storage: StorageService) { }

  ngOnInit(): void {
    var searchlist: any = this.storage.get('searchlist');

    if (searchlist) {
      this.historyList = searchlist;
    }

  }

  doSearch() {
    if (this.historyList.indexOf(this.keyword) == -1) {
      this.historyList.push(this.keyword);
    }
    this.keyword = '';
    this.storage.set('searchlist', this.historyList);
  }

  deleteHistroy(key: number) {
    alert(key);
    this.historyList.splice(key, 1);
    this.storage.set('searchlist', this.historyList);
  }

}
