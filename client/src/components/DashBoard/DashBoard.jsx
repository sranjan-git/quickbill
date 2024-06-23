import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './DashBoard.scss';
import { auth, onAuthStateChanged } from '../../firebase';

const Dashboard = () => {
  const [totalStorage, setTotalStorage] = useState(0);
  const [usedStorage, setUsedStorage] = useState(0);
  const [firebaseId, setFirebaseId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFirebaseId(user.uid);
        fetchStorageData(user.uid);
      } else {
        setFirebaseId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchStorageData = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:4001/user/get/${userId}`);
      setTotalStorage(response.data.totalAssets);
      setUsedStorage(response.data.usedAssets);
    } catch (error) {
      console.error('Error fetching storage data:', error);
    }
  };

  const handleAddAssets = async () => {
    const additionalUsedAssets = 10; // Increase used storage by 10

    try {
      const response = await axios.put(`http://localhost:4001/user/updateAssets`, {
        userId: firebaseId,
        additionalUsedAssets: additionalUsedAssets
      });

      setUsedStorage(response.data.usedAssets);
    } catch (error) {
      console.error('Error updating assets:', error);
    }
  };

  const percentage = totalStorage ? (usedStorage / totalStorage) * 100 : 0;

  return (
    <div className="dashboard">
      <h1>Storage Dashboard</h1>
      <div className="chart-container">
        <CircularProgressbar
          value={percentage}
          text={`${usedStorage}GB / ${totalStorage}GB`}
          styles={buildStyles({
            pathColor: `#007bff`,
            textColor: '#007bff',
            textSize: '12px', // Adjust the text size here
          })}
        />
      </div>
      <button className="add-assets-button" onClick={handleAddAssets}>
        + Add Assets
      </button>
    </div>
  );
};

export default Dashboard;
