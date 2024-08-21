import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrl: './chart-js.component.css'
})
export class ChartJsComponent implements OnInit {

  basicData: any;
  basicOptions: any;

  data: any;
  options: any;

  doughnutData: any;
  doughnutOptions: any;

  barData: any;
  barOptions: any;

  hBarData: any;
  hBarOptions: any;

  stakedData: any;
  stackedOptions: any;

  lineData: any;
  lineOptions: any;

  MultiAxisData: any;
  MultiAxisOptions: any;

  linesData:any;
  linesOptions: any;

  radarData: any;
  radarOptions: any;

  comboData: any;
  comboOptions: any;

  ngOnInit(): void {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Sales',
          data: [540, 325, 702, 620],
          backgroundColor: ['rgba(115, 226, 123, 0.8)', 'rgba(115, 226, 229, 0.8)', 'rgba(232, 170, 212, 0.66)', 'rgba(230, 180, 137, 0.66)'],
          borderColor: ['rgb(60, 179, 113)', 'rgb(238, 130, 238)', 'rgb(106, 90, 205)', 'rgb(255, 165, 0)'],
          borderWidth: 1
        }
      ]
    };

    this.basicOptions = {
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          y: {
              beginAtZero: true,
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          },
          x: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          }
      }
  };


  this.data = {
    labels: ['A', 'B', 'C'],
    datasets: [
        {
            data: [540, 325, 702],
            backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
    ]
  };
  this.options = {
    plugins: {
        legend: {
            labels: {
                usePointStyle: true,
                color: textColor
            }
        }
    }
  };


  this.doughnutData = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
        hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
      }
    ]
  };
  this.doughnutOptions = {
    cutout: '60%',
    plugins: {
        legend: {
            labels: {
                color: textColor
            }
        }
    }
};


this.barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'My First dataset',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
          label: 'My Second dataset',
          backgroundColor: documentStyle.getPropertyValue('--pink-500'),
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          data: [28, 48, 40, 19, 86, 27, 90]
      }
  ]
};
this.barOptions = {
  maintainAspectRatio: false,
  aspectRatio: 0.8,
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: textColorSecondary,
              font: {
                  weight: 500
              }
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      },
      y: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      }

  }
};


this.hBarData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'My First dataset',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
          label: 'My Second dataset',
          backgroundColor: documentStyle.getPropertyValue('--pink-500'),
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          data: [28, 48, 40, 19, 86, 27, 90]
      }
  ]
};
this.hBarOptions = {
  indexAxis: 'y',
  maintainAspectRatio: false,
  aspectRatio: 0.8,
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: textColorSecondary,
              font: {
                  weight: 500
              }
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      },
      y: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      }
  }
};


this.stakedData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          type: 'bar',
          label: 'Dataset 1',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          data: [50, 25, 12, 48, 90, 76, 42]
      },
      {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: documentStyle.getPropertyValue('--green-500'),
          data: [21, 84, 24, 75, 37, 65, 34]
      },
      {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
          data: [41, 52, 24, 74, 23, 21, 32]
      }
  ]
};
this.stackedOptions = {
  maintainAspectRatio: false,
  aspectRatio: 0.8,
  plugins: {
      tooltip: {
          mode: 'index',
          intersect: false
      },
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      x: {
          stacked: true,
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      },
      y: {
          stacked: true,
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      }
  }
};


this.lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4
      },
      {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4
      }
  ]
};

this.lineOptions = {
  maintainAspectRatio: false,
  aspectRatio: 0.6,
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      },
      y: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      }
  }
};


this.MultiAxisData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'Dataset 1',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          yAxisID: 'y',
          tension: 0.4,
          data: [65, 59, 80, 81, 56, 55, 10]
      },
      {
          label: 'Dataset 2',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          yAxisID: 'y1',
          tension: 0.4,
          data: [28, 48, 40, 19, 86, 27, 90]
      }
  ]
};

this.MultiAxisOptions = {
  stacked: false,
  maintainAspectRatio: false,
  aspectRatio: 0.6,
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder
          }
      },
      y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder
          }
      },
      y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
              color: textColorSecondary
          },
          grid: {
              drawOnChartArea: false,
              color: surfaceBorder
          }
      }
  }
};


this.linesData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--blue-500')
      },
      {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--teal-500')
      },
      {
          label: 'Third Dataset',
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: documentStyle.getPropertyValue('--orange-500'),
          tension: 0.4,
          backgroundColor: 'rgba(255,167,38,0.2)'
      }
  ]
};

this.linesOptions = {
  maintainAspectRatio: false,
  aspectRatio: 0.6,
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder
          }
      },
      y: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder
          }
      }
  }
};


this.radarData = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
      {
          label: 'My First dataset',
          borderColor: documentStyle.getPropertyValue('--bluegray-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--bluegray-400'),
          pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
          data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
          label: 'My Second dataset',
          borderColor: documentStyle.getPropertyValue('--pink-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
          pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
          data: [28, 48, 40, 19, 96, 27, 100]
      }
  ]
};

this.radarOptions = {
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      r: {
          grid: {
              color: textColorSecondary
          },
          pointLabels: {
              color: textColorSecondary
          }
      }
  }
};


this.comboData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          type: 'line',
          label: 'Dataset 1',
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: [50, 25, 12, 48, 56, 76, 42]
      },
      {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: documentStyle.getPropertyValue('--green-500'),
          data: [21, 84, 24, 75, 37, 65, 34],
          borderColor: 'white',
          borderWidth: 2
      },
      {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: documentStyle.getPropertyValue('--orange-500'),
          data: [41, 52, 24, 74, 23, 21, 32]
      }
  ]
};

this.comboOptions = {
  maintainAspectRatio: false,
  aspectRatio: 0.6,
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder
          }
      },
      y: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder
          }
      }
  }
};

  }
}
