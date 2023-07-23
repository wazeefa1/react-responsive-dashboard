import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Electronics', 'Kitchen', 'Cloths'],
  datasets: [
    {
      label: '',
      data: [30, 59, 53],
      backgroundColor: [
        '#1D5B79',
        'cyan',
        '#468B97',
        
      ],
      borderColor: [
        '#1D5B79',
        'cyan',
        '#468B97',
        
      ],
      borderWidth: 1,
    },
  ],
};

 function PieChart() {
    return <Pie data={data} className="chart-container" />;
}

export default PieChart;