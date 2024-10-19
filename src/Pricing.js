import React from 'react';

function Pricing() {
  return (
    <div className="pricing-container">
      <h2>Pricing</h2>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Price</th>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic</td>
            <td>$10/month</td>
            <td>Feature 1, Feature 2</td>
          </tr>
          <tr>
            <td>Standard</td>
            <td>$20/month</td>
            <td>Feature 1, Feature 2, Feature 3</td>
          </tr>
          <tr>
            <td>Premium</td>
            <td>$50/month</td>
            <td>All features</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Pricing;