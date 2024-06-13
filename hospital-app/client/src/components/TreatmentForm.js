import React, { useState } from 'react';
import axios from 'axios';


const TreatmentForm = () => {
  const [machineType, setMachineType] = useState('');
  const [treatmentType, setTreatmentType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      await axios.post('http://localhost:5000/api/treatments', { machineType, treatmentType });
      alert('Treatment details saved successfully!');
    } catch (error) {
      console.error('Error saving treatment details:', error);
      alert('Failed to save treatment details.');
    }
  };

  return (
    <div>
      <h2>Treatment Form</h2>
      <form onSubmit={handleSubmit}> {/* Ensure onSubmit calls handleSubmit */}
        <div>
          <label htmlFor="machineType">Machine Type:</label>
          <input
            type="text"
            id="machineType"
            value={machineType}
            onChange={(e) => setMachineType(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="treatmentType">Treatment Type:</label>
          <input
            type="text"
            id="treatmentType"
            value={treatmentType}
            onChange={(e) => setTreatmentType(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save</button> {/* Ensure button type is 'submit' */}
      </form>
    </div>
  );
};

export default TreatmentForm;
