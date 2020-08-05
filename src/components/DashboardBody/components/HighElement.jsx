import * as React from 'react'
import Highcharts from 'highcharts'



function selectPointsByDrag(e) {

  console.log(e)
  // Select points
  Highcharts.each(this.series, function (series) {
      Highcharts.each(series.points, function (point) {
          if (point.x >= e.xAxis[0].min && point.x <= e.xAxis[0].max) {
              point.select(true, true);
          }
      });
  });

  // Fire a custom event
  Highcharts.fireEvent(this, 'selectedpoints', { points: this.getSelectedPoints() });

  return false; // Don't zoom
}

export const HighElement = () => {
  const container = React.createRef()

  React.useEffect(() => {
    const currentContainer = container.current
    currentContainer.style.height = '100%'
    currentContainer.style.width = '100%'

    let pointEventData
    let inChart = false
    // OPTIONS start-------------------------------------
    const options = {
        title: {
          text: 'Solar Employment Growth by Sector, 2010-2016'
      },
      chart: {
        type: 'line',
        events: {
          // selection: selectPointsByDrag,
          // selectedpoints: selectedPoints,
          // click: unselectByClick
        },
        // zoomType: 'xy',
        selectionMarkerFill: 'green',
      },

      subtitle: {
          text: 'Source: thesolarfoundation.com'
      },

      yAxis: {
          title: {
              text: 'Number of Employees'
          }
      },

      xAxis: {
        // plotBands: [{
        //   color: '#FCFFC5',
        //   from: 2011,
        //   to: 2015
        // }],
          accessibility: {
              rangeDescription: 'Range: 2010 to 2017'
          }
      },

      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },

      plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: (e) => {
                  pointEventData = e
                }
              }
            },
            events: {
              mouseOver: (e) => {
                inChart = true
                // console.log(e)
              },
              mouseOut: () => {
                inChart = false
              }
            },
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
          }
      },

      series: [{
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
          allowPointSelect: true,
      }, {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
          allowPointSelect: true,
      }, {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
          allowPointSelect: true,
      }, {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
          allowPointSelect: true,
      }, {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
          allowPointSelect: true,
      }],

      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }
    }
    // OPTIONS end--------------------------

    let chartObject = Highcharts.chart(currentContainer, options)



    const getX = () => pointEventData && pointEventData.target && pointEventData.target.x


    const cont = document.getElementsByClassName('highcharts-root')[0]
    console.log(cont)
 
    let initialFrom
    let mousedown = false
    cont.addEventListener('mousedown', () => {
      mousedown = true
      if (mousedown && inChart) {
        chartObject.xAxis[0].removePlotBand('plot-band-1')
        initialFrom = getX()
        chartObject.xAxis[0].addPlotBand({
          from: getX(),
          to: getX(),
          color: 'rgba(108, 67, 224, 0.1)',
          id: 'plot-band-1'
        })
      }
      console.log('clicked!')
    })
    cont.addEventListener('mousemove', (e) => {
      if (mousedown && inChart) {
        chartObject.xAxis[0].removePlotBand('plot-band-1')
        console.log('pevd', pointEventData)
        // console.log('dragging!')
        // console.log(chartObject)
        console.log('initialFrom: ', initialFrom)
        console.log('to: ', getX())
        chartObject.xAxis[0].addPlotBand({
          from: initialFrom,
          to: getX(),
          color: 'rgba(108, 67, 224, 0.1)',
          id: 'plot-band-1'
        })
      }
    })
    cont.addEventListener('mouseup', () => {
      mousedown = false
    })
    console.log(cont)
    return () =>
      chartObject && chartObject.destroy()
  })

  return <div ref={container} />
}
