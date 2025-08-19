import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { RouterLink } from '@angular/router';

Chart.register(...registerables);

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage implements AfterViewInit {

  @ViewChild('MyCanvasCircle', { static: false }) canvasRef!: ElementRef;
  @ViewChild('MyCanvasbar', { static: false }) barCanvasRef!: ElementRef;

  ngAfterViewInit() {
    this.createPieChart();
    this.createBarChart();
  }

  createPieChart() {
    const ctx = this.canvasRef.nativeElement as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Europe', 'Asie', 'Afrique', 'Amériques'],
          datasets: [{
            data: [35, 30, 20, 15],
            backgroundColor: [
              '#3B82F6', // Bleu pour Europe
              '#14B8A6', // Teal/vert pour Asie
              '#F59E0B', // Orange/jaune pour Afrique
              '#EF4444'  // Rouge/coral pour Amériques
            ],
            borderColor: [
              '#3B82F6',
              '#14B8A6',
              '#F59E0B',
              '#EF4444'
            ],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: '🥧 Répartition géographique',
              font: {
                size: 16,
                weight: 'bold',
              },
              align: 'start'
            },
            legend: {
              display: true,
              position: 'bottom',
              align: 'start',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 20,
                generateLabels: function(chart) {
                  const data = chart.data;
                  if (data.labels && data.datasets && data.datasets[0]) {
                    return data.labels.map((label, index) => {
                      const value = data.datasets[0].data[index];
                      const backgroundColor = data.datasets[0].backgroundColor;
                      const color = Array.isArray(backgroundColor) ? backgroundColor[index] : backgroundColor;
                      return {
                        text: `${label} ${value}%`,
                        fillStyle: color,
                        strokeStyle: color,
                        pointStyle: 'circle',
                        hidden: false,
                        index: index
                      };
                    });
                  }
                  return [];
                }
              }
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.parsed;
                  return `${label} : ${value}`;
                }
              }
            }
          }
        }
      });
    }
  }

  createBarChart() {
    const ctx = this.barCanvasRef.nativeElement as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
          datasets: [
            {
              label: 'Import',
              data: [3800, 2800, 1800, 2800, 1800, 2300],
              backgroundColor: '#3B82F6', // Bleu pour Import
              borderColor: '#3B82F6',
              borderWidth: 1
            },
            {
              label: 'Export',
              data: [2300, 1300, 9500, 3800, 4800, 3800],
              backgroundColor: '#10B981', // Vert pour Export
              borderColor: '#10B981',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 2,
          plugins: {
            title: {
              display: true,
              text: '📊 Analyse du trafic import/export',
              font: {
                size: 16,
                weight: 'bold'
              },
              align: 'start'
            },
            legend: {
              display: true,
              position: 'bottom',
              align: 'center',
              labels: {
                usePointStyle: false,
                padding: 20
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 10000,
              min: 0,
              ticks: {
                stepSize: 2000,
                callback: function(value) {
                  return value.toLocaleString();
                }
              },
              title: {
                display: false,
                text: 'Milliers de tonnes'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Mois'
              }
            }
          }
        }
      });
    }
  }
}
