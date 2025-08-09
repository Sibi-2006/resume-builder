import React from 'react';
import PortfolioForm from './PortfolioForm';

export default function Template1({ cssFile }) {
  if (cssFile) {
    import(`../Css/${cssFile}.css`);
  }

  return (
    <div className="template-container">
      <PortfolioForm />
    </div>
  );
}
