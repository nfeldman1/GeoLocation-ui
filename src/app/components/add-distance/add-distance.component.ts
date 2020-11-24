import { Component, OnInit } from '@angular/core';
import { DistanceService } from 'src/app/services/distance.service';

@Component({
  selector: 'app-add-distance',
  templateUrl: './add-distance.component.html',
  styleUrls: ['./add-distance.component.css']
})
export class AddDistanceComponent implements OnInit {
  distance = {
    source: '',
    dest: '',
    km: 0,
    counter: 0
  };
  submitted = false;
  distances;
  distanceByKM;
  populardist;
  popularSrc;
  popularDest;
  popularCount;

  constructor(private distanceService: DistanceService) { }

  ngOnInit(): void {
  }

  getDistance(): void {
    const data = {
      source: this.distance.source,
      dest: this.distance.dest
    };
    this.distanceService.getPopular().subscribe(
      response => {
        console.log(response);
        this.populardist = response[0].km;
        this.popularSrc = response[0].source;
        this.popularDest = response[0].dest;
        this.popularCount = response[0].counter;
        this.distances = response;
        error => {
          console.log(error);
          }
        });

    this.distanceService.get(data.source, data.dest)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          if(response && response.distance){
          this.distanceByKM = response.distance.km ? response.distance.km : response.distance;
          }
        error => {
          console.log(error);
          }
        });

}

  newDistance(): void {
    this.submitted = false;
    this.distance = {
      source: '',
      dest: '',
      km: 0,
      counter: 0
    };
  }

}
