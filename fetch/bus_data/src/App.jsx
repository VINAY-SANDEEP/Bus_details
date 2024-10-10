import React, { useState } from 'react';
import { userData } from './data'; // Assuming you have a data file

const BusRouteList = () => {
  // State for storing search input and filtered data
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRoute, setFilteredRoute] = useState(null); // Initialize with no routes

  // Handle search input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle form submission and find the first matching route
  const handleSearch = (e) => {
    e.preventDefault();

    const result = userData.find((user) =>
      user.routename.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredRoute(result); // Store the first matched route
  };

  return (
    <div className="supriya">
      {/* Search form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Route Name"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* Display the first matching route details */}
      <div className="priya">
        {filteredRoute ? (
          <div style={{ margin: '10px 0' }}>
            <div><strong>Route Name:</strong> {filteredRoute.routename}</div>

            {/* Conditionally render Students and Capacity only if they are not null */}
            {filteredRoute.students && (
              <div><strong>Students:</strong> {filteredRoute.students}</div>
            )}
            {filteredRoute.capacity && (
              <div><strong>Capacity:</strong> {filteredRoute.capacity}</div>
            )}
            {filteredRoute.regno && (
              <div><strong>Bus no:</strong> {filteredRoute.regno}</div>
            )}
            {filteredRoute.distance && (
              <div><strong>distance:</strong> {filteredRoute.distance}</div>
            )}
            {filteredRoute.kms && (
              <div><strong>Kms:</strong> {filteredRoute.kms}</div>
            )}
            {filteredRoute.branch && (
              <div><strong>Branch:</strong> {filteredRoute.branch}</div>
            )}
          </div>
        ) : (
          <p>No matching route found.</p>
        )}
      </div>
    </div>
  );
};
export default BusRouteList;
