import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {


  chartOptions = {
    responsive: true,

    // barPercentage: Number,
    // backgroundColor: '#222',
    // borderColor: 'indianred',
    // pointBackgroundColor: 'rgb(103, 58, 183)',
    // pointBorderColor: '#fff',
    // pointHoverBackgroundColor: '#fff',
    // pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' },
    { data: [45, 50, 850, 400], label: 'Account D' }
  ];

  chartLabels = ['HTML5', 'CSS3', 'Angular', 'js', 'Git'];

  onChartClick(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
