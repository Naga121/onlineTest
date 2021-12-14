import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { TestService } from 'src/app/Services/test.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public name: string = '';
  public questions: any = [];
  public currentQuestion: number = 0;
  public marks: number = 0;
  public counter = 30;
  public currectAnswer:number=0;
  public inCurrectAnswer:number=0;
  public intervalsTime:any
  public progress:any=0;
  public testCompleted:boolean=false;
  constructor(private ts: TestService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getQuestion();
    this.startCounter();
  }
  // get question Method
  getQuestion() {
    this.ts.getQuestions().subscribe(res => {
      this.questions = res;
    })
  }
  // next Question Method
  nextQuestion() {
    if(this.questions.length>this.currentQuestion+1){
      this.currentQuestion ++;
      this.resetCounter();
    }

  }
  // next Question Method
  prevQuestion() {
    this.currentQuestion --;
    this.resetCounter();

  }
  // set answer Method
  answer(currentQno:number,option:any){
    if(currentQno === this.questions.length){
      this.testCompleted=true;
      this.endCounter();
    }
    if(option.corret){
      this.marks+=1;
      this.currectAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.getProgress();
        this.resetCounter();
      },1000);

    }else{
      setTimeout(() => {
        this.currentQuestion++;
        this.inCurrectAnswer++;
        this.getProgress();
      },1000);
    }
  }
  // Start time
  startCounter(){
    this.intervalsTime=interval(1000)
    .subscribe(
      val=>{
        this.counter--;
        if(this.counter===0){
          this.currentQuestion++;
          this.resetCounter();
        }
      }
    );
    setTimeout(()=>{
      this.intervalsTime.unsubscribe();
    },30000)
  }
  // end time method
  endCounter(){
    this.intervalsTime.unsubscribe();
    this.counter=0;
  }
  // reset time method
  resetCounter(){
    this.endCounter();
    this.counter=30;
    this.startCounter();
  }
  // get progress method
  getProgress(){
    this.progress = ((this.currentQuestion/this.questions.length)*100).toString();
    return this.progress;
  }

}

