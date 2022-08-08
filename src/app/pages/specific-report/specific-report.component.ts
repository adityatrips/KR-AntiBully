import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-specific-report',
  templateUrl: './specific-report.component.html',
  styleUrls: ['./specific-report.component.scss'],
})
export class SpecificReportComponent implements OnInit {
  id: any;
  paramsSub: any;
  report: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  replaceAll(string: any) {
    return (
      '<li class="primary-color">' +
      string.replaceAll('~,~', '<li class="primary-color">')
    );
  }

  ngOnInit(): void {
    const _this = this;
    this.paramsSub = this.activatedRoute.params.subscribe((data) => {
      this.api.getOneReport(data['id']).subscribe((re) => {
        this.report = re;
      });
    });
  }
}
