import { Component, OnInit } from '@angular/core';
import { monoprix } from '../../models/monoprix';
import { MonoprixService } from '../../services/monoprix/monoprix.service';

@Component({
  selector: 'app-monoprix',
  templateUrl: './monoprix.component.html',
  styleUrls: ['./monoprix.component.css']
})
export class MonoprixComponent implements OnInit {
  monoprixData: monoprix[] = [];

  constructor(private monoprixService: MonoprixService) {}

  ngOnInit(): void {
    this.fetchMonoprixData();
  }

  fetchMonoprixData(): void {
    this.monoprixService.getMonoprixData().subscribe(
      (data: monoprix[]) => {
        this.monoprixData = data;
      },
      (error) => {
        console.error('Error fetching Data:', error);
      }
    );
  }
}
