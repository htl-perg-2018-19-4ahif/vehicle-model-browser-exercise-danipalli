import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-models-browser',
  templateUrl: './models-browser.component.html',
  styleUrls: ['./models-browser.component.css']
})
export class ModelsBrowserComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

} 
