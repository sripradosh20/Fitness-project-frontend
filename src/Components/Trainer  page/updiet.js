import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './ogupdiet.css';

// Register the components required for the pie chart
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const DietPlanUpload = () => {
  const { userId } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // Sample data for the pie chart
  const data = {
    labels: ['Protein', 'Carbs', 'Fiber'],
    datasets: [
      {
        label: 'Nutrient Distribution',
        data: [30, 50, 20], // Replace with your actual data
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Handle file upload logic here, possibly sending the userId along with the file
      console.log('File selected for user ID:', userId);
      console.log('File selected:', selectedFile);
    }
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div className="upload-section" style={{ flex: 1 }}>
        <h2>Upload Diet Plan for User ID: {userId}</h2>
        <div className="mt-3">
          <input type="file" onChange={handleFileChange} />
          <button className="btn btn-primary mt-2" onClick={handleUpload}>Upload</button>
        </div>
        {preview && (
          <div className="mt-3">
            <h4>Preview:</h4>
            <img src={preview} alt="Diet Plan Preview" className="preview-image" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        )}
      </div>

      <div className="chart-section" style={{ flex: 1, padding: '20px' }}>
        <h3 className="text-center">Nutrient Distribution</h3>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default DietPlanUpload;
