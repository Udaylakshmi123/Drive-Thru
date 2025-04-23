import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentTime = '';
  dirChange:boolean = false;
  showMultiPath:boolean = false;
  timer:any;

  constructor() { }

  ngOnInit() {
    this.timer= this.interval();
  }
  interval(){
    this.updateTime();
    return setInterval(()=>{
      this.updateTime();
    },1000)
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }
  flipGraph() {
    this.dirChange = !this.dirChange;
  }
  showHideMerge(val:boolean){
    this.showMultiPath = val;
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}