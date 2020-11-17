import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: Http) { }
  accessPointUrl: string = 'https://localhost:44234/api/values';
  apiValues: string[] = [];

  // makes initial API call when AppComponent is mounted, and stores values in apiValues public variable
  ngOnInit() {
    this._httpService.get(this.accessPointUrl).subscribe(values => {
      this.apiValues = values.json() as string[];
    });  
  }

  title = 'angular-simpletalk';
}
