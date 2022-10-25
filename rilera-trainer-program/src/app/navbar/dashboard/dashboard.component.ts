import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ChartComponent,
  ApexGrid,
  ApexPlotOptions,
  ApexResponsive,
  ApexLegend,
  ApexFill,
  ApexTooltip,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  colors: any;
};
export type ChartOptions2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

export type ChartOptions3 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  @ViewChild('chartWrapper') chartWrapper;

  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions2>;
  public chartOptions3: Partial<ChartOptions3>;

  public currentComponentWidth;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Entrada(R$)",
          color: '#FFD100',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 160, 190, 205]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        foreColor: 'rgb(101, 100, 100)',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Entrada Anual (R$)",
        align: "center",
        style: {
          fontFamily: 'Roboto',
          fontSize: '30px',
        }
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.8
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez"
        ]
      }
    };

    this.chartOptions2 = {
      series: [
        {
          name: "Alunos",
          data: [44, 55, 41, 67, 22, 43, 50, 56, 62, 68, 74, 80],
          color: "#FFD100"
        },
        {
          name: "Alunos novos",
          data: [13, 23, 20, 8, 13, 27, 5, 15, 7, 18, 21, 23],
          
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez"
        ]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };

    this.chartOptions3 = {
      series: [
        {
          name: "Canceladas",
          data: [4, 5, 7, 6, 1, 8, 3],
          color: "rgb(101, 100, 100)"

        },
        {
          name: "Realizadas",
          data: [26, 65, 29, 50, 42, 33, 31],
          color: "#FFD100"
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        foreColor: "rgb(101, 100, 100)"
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "D",
          "S",
          "T",
          "Q",
          "Q",
          "S",
          "S",
        ]
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "";
          }
        }
      }
    };
  }




  ngOnInit(): void {
  }

}
