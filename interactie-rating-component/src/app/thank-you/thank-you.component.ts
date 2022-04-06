import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  rating: number;
  constructor(private route: ActivatedRoute) {
    this.rating = Number(this.route.snapshot.params.rating);
  }

  ngOnInit(): void {
  }

}
