
import { Chart } from 'chart.js';
import React, { useEffect, useRef } from 'react';
import { BarController, CategoryScale, LinearScale, BarElement } from 'chart.js';
Chart.register(BarController, CategoryScale, LinearScale, BarElement);


const Graph = ( {data} ) => {
  const chartRef = useRef(null);
//   console.log(data.length);
  useEffect(() => {
    if (data && data.length > 0) {
        

      const ctx = chartRef.current.getContext('2d');
        if (chartRef.current.chart) {
            chartRef.current.chart.destroy();
          }
      const newChart = new Chart(ctx, {
        type: 'bar', // You can change the chart type here (line, bar, pie, etc.)
        data: {
          labels: data.map(item => item.label),
        // labels: "New",
          datasets: [
            {
              label: 'Data',
              data: data.map(item => item.value),
            // data: [20,8,0,32],
              backgroundColor: 'rgba(75, 192, 192, 0.2)', // Change the color as needed
              borderColor: 'rgba(75, 192, 192, 1)', // Change the color as needed
              borderWidth: 1,
            },
          ],
        },
        options: {
            backgroundColor:{
                
            },
          scales: {
            y: {
                beginAtZero: true, // Start the scale at zero
              },
          },
        },
      });
      chartRef.current.chart = newChart;
    }
  }, [data]);

  return <canvas ref={chartRef} width="400" height="400" />;
};

export default Graph;
