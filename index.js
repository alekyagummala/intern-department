const ctx = document.getElementById('scatter-plot').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Data Points',
      data: [
        { x: 2, y: 80 },
        { x: 4, y: 95 },
        { x: 6, y: 70 },
        // ... more data points
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
    }]
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Study Hours'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Test Scores'
        }
      }
    }
  }
});