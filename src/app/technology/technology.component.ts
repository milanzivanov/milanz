import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {


  chartOptions = {
    responsive: true,
    defaultFontFamily: 'Montserrat',
    position: 'right',
  };

  public chartColors: Array<any> = [
    {
      // first color
      backgroundColor: '#155799',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: 'red',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }
  ];

  chartData = [
    { data: [75, 70, 51, 49, 70, 60], label: 'SOFTWERE SKILLS' },
  ];

  chartLabels = ['HTML5', 'CSS3', 'Angular', 'js', 'Git', 'SourceTree'];

  onChartClick(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
