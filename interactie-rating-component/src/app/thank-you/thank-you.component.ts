import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  rating: number;
  heading="Thank you!";
  text="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
  constructor(private route: ActivatedRoute) {
    this.rating = Number(this.route.snapshot.params.rating);
  }

  ngOnInit(): void {
  }

}
