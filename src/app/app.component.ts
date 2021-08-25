import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExternalService } from './services/external/external.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private exService: ExternalService) {}

  ngOnInit() {
    this.exService.getExternalInfo();
  }

  ngOnDestroy() {
  }
}
