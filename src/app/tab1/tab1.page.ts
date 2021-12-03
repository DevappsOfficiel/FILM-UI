/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public toggled: boolean = false;

  public selectedSegmentall: string = 'all'
  public selectedSegmentaction: string = 'action'
  public selectedSegmentcomedy: string = 'comedy'
  public selectedSegmentromantic: string = 'romantic'
  public selectedSegmentaventure: string = 'aventure'

    constructor() {
      this.toggled = false;
    }

    onChange($event) {
      console.log($event);
    }

    segmentChanged(ev: any) {
      console.log(ev.target.value);
      this.selectedSegmentall = ev.target.value
      this.selectedSegmentaction = ev.target.value
      this.selectedSegmentcomedy = ev.target.value
      this.selectedSegmentromantic = ev.target.value
      this.selectedSegmentaventure = ev.target.value
    }

     public toggle(): void {
      this.toggled = !this.toggled;
   }
  ngOnInit() {
  }

  cancelSearch($event){
    this.toggle();
  }

}
