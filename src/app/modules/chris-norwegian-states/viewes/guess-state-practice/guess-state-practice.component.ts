import { Component, OnInit, ViewChild } from '@angular/core';
import { InputListComponent } from '../../components/input-list/input-list.component';
import { ChooseAnswerComponent } from '../../components/choose-answer/choose-answer.component';

@Component({
  selector: 'app-guess-state-practice',
  templateUrl: './guess-state-practice.component.html',
  styleUrls: ['./guess-state-practice.component.css']
})
export class GuessStatePracticeComponent implements OnInit {
  public addresses = [];
  public answers = [];
  public addressIndex = 0;
  public maxAddressesIndex = 0;
  public correctAnswersAddresses = [];
  public incorrectAnswersAddresses = [];
  public answeredCounter = 0;
  public correctCounter = 0;
  public lastCorrectAnswer = '';

  @ViewChild(InputListComponent)
  public inputListComponent: InputListComponent;
  @ViewChild(ChooseAnswerComponent)
  public chooseAnswerComponent: ChooseAnswerComponent;


  constructor() { }

  ngOnInit() {
    this.updateInput();
    this.updateOutput();
    this.maxAddressesIndex = this.addresses.length - 1;
  }

  public updateInput() {
    this.answers = this.inputListComponent.getPossibleAnswers();
    this.addresses = this.inputListComponent.getAddresses();
  }

  public updateOutput() {
    this.chooseAnswerComponent.update(this.addresses[this.addressIndex + this.answeredCounter]['address'], this.answers);
  }

  public chooseAnswer() {
    let varNumber = this.addressIndex + this.answeredCounter;
    this.lastCorrectAnswer = this.addresses[varNumber]['answer'];
    if (this.chooseAnswerComponent.selectedAnswer == this.addresses[varNumber]['answer']) {
      this.correctAnswersAddresses.push(this.addresses[varNumber]);
      this.correctCounter++;
    } else {
      this.incorrectAnswersAddresses.push(this.addresses[varNumber]);
    }
    this.answeredCounter++;
    this.updateOutput();
    console.log(this.addresses.length - this.answeredCounter + " index:" + (this.addressIndex + this.answeredCounter));
    if(this.addresses.length <= this.addressIndex + this.answeredCounter) {
      this.addressIndex--;
    }
    delete this.addresses[varNumber];
    this.maxAddressesIndex = this.addresses.length - this.answeredCounter - 1;
  }

}
