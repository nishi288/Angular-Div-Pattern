//Author: Nishigandha Shendkar

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  blockCount:any = 11;     //the number of blocks can be entered by the user
  
  blocksPerRow:any  = 4;   //the number of blocks per row can be entered by the user
  blockCountArray: any[] = [];
  blocksGrouped: any[] = [];
  selectedDiv:any;
  constructor() { }

  
  ngOnInit() {
    this.genBlocks();
    this.groupBlocks();
  }

  // This method groups the blocks based on the blocks needed per row
  groupBlocks() {
    for(let i = 0; i < this.blockCount; i = i + this.blocksPerRow) {
      let group = this.blockCountArray.slice(i, i + this.blocksPerRow);
      this.blocksGrouped.push(group);
    }
    
  }

  // This method generates blocks and stores some random values which are replaced by divs in the HTML file
  genBlocks() {
    for(let i = 0; i < this.blockCount; i++){
      this.blockCountArray.push({ id: i, name: Math.random().toString(36).substring(7) });
    }
  }

  // This method receives the index of the div being clicked
  onSelect(index)
  {
      this.selectedDiv = index;   
  }
}
