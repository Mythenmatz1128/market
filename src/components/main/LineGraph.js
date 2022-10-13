import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            type: 'line',
            label: 'Dataset 1',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            data: [
              { x: 'January', y: 1 },
              { x: 'February', y: 2 },
              { x: 'March', y: 3 },
              
              { x: 'May', y: 5 }
            ],
          },
          {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: 'rgb(255, 99, 132)',
            data: [
              { x: 'January', y: 1 },
              { x: 'February', y: 2 },
              { x: 'March', y: 3 },
              { x: 'April', y: 4 },
              { x: 'May', y: 5 },
              { x: 'June', y: 6 }
            ],
            borderColor: 'red',
            borderWidth: 2,
          },
          {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: 'rgb(75, 192, 192)',
            data: [
              { x: 'January', y: 1 },
              { x: 'February', y: 2 },
              { x: 'March', y: 3 },
              { x: 'April', y: 4 },
              { x: 'May', y: 5 },
              { x: 'June', y: 6 }
            ],
          },
    ],
};

const options = {
    spanGaps: true,
}

const LineGraph = () => {
	return (
    	<div>
        	<Line type="line" data={data} options ={options} />
        </div>
    );
    
}
export default LineGraph;