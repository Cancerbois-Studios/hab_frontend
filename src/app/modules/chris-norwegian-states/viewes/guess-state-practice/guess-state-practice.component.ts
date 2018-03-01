import { Component, OnInit, ViewChild } from '@angular/core';
import { InputListComponent } from '../../components/input-list/input-list.component';
import { ChooseAnswerComponent } from '../../components/choose-answer/choose-answer.component';
import { CommonFunctionsService } from '../../../framework/services/common-functions.service';

@Component({
  selector: 'app-guess-state-practice',
  templateUrl: './guess-state-practice.component.html',
  styleUrls: ['./guess-state-practice.component.css']
})
export class GuessStatePracticeComponent implements OnInit {
  public addresses = [];
  public answers = [];
  public currentQuestion;
  public lastQuestion = null;
  public correctAnsweredQuestions = [];
  public incorrectAnsweredQuestions = [];

  @ViewChild(InputListComponent)
  public inputListComponent: InputListComponent;
  @ViewChild(ChooseAnswerComponent)
  public chooseAnswerComponent: ChooseAnswerComponent;


  constructor(private commonFunctions: CommonFunctionsService) { }

  ngOnInit() {
    this.updateInput();
  }

  public updateInput() {
    this.answers = this.inputListComponent.getPossibleAnswers();
    this.addresses = this.inputListComponent.getAddresses();
    this.commonFunctions.shuffleArray(this.addresses);
    this.nextAnswer();
    this.updateOutput();
  }

  public updateOutput() {
    if(this.currentQuestion != null) {
      this.chooseAnswerComponent.update(this.currentQuestion['address'], this.answers);
      return;
    }
    this.chooseAnswerComponent.update('-', this.answers);
  }

  public chooseAnswer() {
    this.lastQuestion = this.currentQuestion;
    if (this.chooseAnswerComponent.selectedAnswer == this.currentQuestion['answer']) {
      this.correctAnsweredQuestions.push(this.currentQuestion);
    } else {
      this.incorrectAnsweredQuestions.push(this.currentQuestion);
    }
    this.nextAnswer();
    this.updateOutput();
  }

  private nextAnswer() {
    if(this.addresses.length == 0) {
      this.currentQuestion = null;
      return;
    }
    this.currentQuestion = this.addresses.pop();
  }

}
