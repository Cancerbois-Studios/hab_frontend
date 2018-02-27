import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputListComponent } from './components/input-list/input-list.component';
import { ChooseAnswerComponent } from './components/choose-answer/choose-answer.component';
import { GuessStatePracticeComponent } from './viewes/guess-state-practice/guess-state-practice.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InputListComponent, ChooseAnswerComponent, GuessStatePracticeComponent],
  exports: [
    GuessStatePracticeComponent
  ]
})
export class ChrisNorwegianStatesModule { }
