import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-how-did-we-do',
  templateUrl: './how-did-we-do.component.html',
  styleUrls: ['./how-did-we-do.component.scss']
})
export class HowDidWeDoComponent implements OnInit {
  rating:number=0;
  constructor(private router:Router) { }
  heading="How did we do?";
  text="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
  numberArray=[1,2,3,4,5];

  ngOnInit(): void {;
  }

  setValue(value:number){
    this.rating=value;
  }

  onSubmit(){
    if(this.rating>0){
      this.router.navigate(['/thankyou',{rating:this.rating}]);
    } else{
      alert("Please give a feedback.")
    }
  }

}
