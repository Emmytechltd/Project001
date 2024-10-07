// Pricing.jsx
import React from 'react';

const Pricing = () => {
  return (
    <div className="container mx-auto px-4 my-8">
      <h2 className="text-3xl font-bold mb-4">INEAA Pricing</h2>
      <h3 className="text-2xl font-bold mb-2">Detailed Pricing Breakdown for Accreditation</h3>

      <h4 className="text-xl font-bold mt-4">1. Institutional Accreditation</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Small Institutions (Under 500 students): $10,000</li>
        <li>Medium Institutions (500 - 2,000 students): $20,000</li>
        <li>Large Institutions (2,000 - 10,000 students): $30,000</li>
        <li>Very Large Institutions (Over 10,000 students): $50,000</li>
      </ul>

      <h4 className="text-xl font-bold mt-4">2. Programmatic Accreditation</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Small Programs (Under 100 students): $5,000</li>
        <li>Medium Programs (100 - 500 students): $10,000</li>
        <li>Large Programs (500 - 1,000 students): $15,000</li>
        <li>Very Large Programs (Over 1,000 students): $25,000</li>
      </ul>

      <h4 className="text-xl font-bold mt-4">3. Distance Education Accreditation</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Programs with 50 - 200 students: $3,000</li>
        <li>Programs with 201 - 500 students: $7,500</li>
        <li>Programs with 501 - 1,000 students: $10,000</li>
        <li>Programs with Over 1,000 students: $15,000</li>
      </ul>

      <h4 className="text-xl font-bold mt-4">4. Vocational and Technical Accreditation</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Small Programs (Under 100 students): $2,000</li>
        <li>Medium Programs (100 - 300 students): $5,000</li>
        <li>Large Programs (300 - 600 students): $7,500</li>
        <li>Very Large Programs (Over 600 students): $10,000</li>
      </ul>

      <h4 className="text-xl font-bold mt-4">5. K-12 Accreditation</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Small Schools (Under 200 students): $5,000</li>
        <li>Medium Schools (200 - 500 students): $10,000</li>
        <li>Large Schools (500 - 1,000 students): $15,000</li>
        <li>Very Large Schools (Over 1,000 students): $20,000</li>
      </ul>

      <h4 className="text-xl font-bold mt-4">6. International Accreditation</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Small Institutions (Under 500 students): $15,000</li>
        <li>Medium Institutions (500 - 2,000 students): $30,000</li>
        <li>Large Institutions (2,000 - 10,000 students): $50,000</li>
        <li>Very Large Institutions (Over 10,000 students): $75,000</li>
      </ul>

      <h4 className="text-xl font-bold mt-4">7. Subject or Discipline-Specific Accreditation</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Small Programs (Under 100 students): $3,000</li>
        <li>Medium Programs (100 - 500 students): $7,000</li>
        <li>Large Programs (500 - 1,000 students): $10,000</li>
        <li>Very Large Programs (Over 1,000 students): $15,000</li>
      </ul>

      <h4 className="text-xl font-bold mt-4">8. Quality Assurance Certification</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Small Institutions (Under 200 students): $1,000</li>
        <li>Medium Institutions (200 - 500 students): $2,500</li>
        <li>Large Institutions (500 - 1,000 students): $4,000</li>
        <li>Very Large Institutions (Over 1,000 students): $5,000</li>
      </ul>

      <h4 className="text-xl font-bold mt-4">9. Continuous Improvement Accreditation</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Small Institutions (Under 500 students): $2,000</li>
        <li>Medium Institutions (500 - 1,500 students): $5,000</li>
        <li>Large Institutions (1,500 - 5,000 students): $7,500</li>
        <li>Very Large Institutions (Over 5,000 students): $10,000</li>
      </ul>

      <h4 className="text-xl font-bold mt-4">10. Dual Accreditation</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Small Institutions (Under 500 students): $10,000</li>
        <li>Medium Institutions (500 - 2,000 students): $20,000</li>
        <li>Large Institutions (2,000 - 10,000 students): $30,000</li>
        <li>Very Large Institutions (Over 10,000 students): $40,000</li>
      </ul>

      <h3 className="text-2xl font-bold mt-6 mb-2">Additional Fees to Consider</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Renewal Fees:</strong> Generally, 50% of the initial accreditation fee after the accreditation period ends.</li>
        <li><strong>Site Visit Fees:</strong> $1,000 - $5,000, depending on location and duration of the visit.</li>
        <li><strong>Consultation Services:</strong> $100 - $300 per hour, based on the level of expertise required.</li>
      </ul>
    </div>
  );
};

export default Pricing;
