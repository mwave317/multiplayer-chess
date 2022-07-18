import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CheckerboardComponent } from '../checkerboard/checkerboard.component';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent implements OnInit {
  @ViewChild(CheckerboardComponent, { static: true }) child: CheckerboardComponent;
  disabled: boolean = false;
  player1Active: boolean = true;
  player2Active: boolean = false;

  @Output() startGame = new EventEmitter<boolean>(false);
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {

  }

  onStartGame() {
    this.disabled = true;
    this.player1Active = true;
    this.sharedService.player1Active.next(this.player1Active);
  }

  onStopGame() {
    let player = 'none';
    this.disabled = false;
  }
}
