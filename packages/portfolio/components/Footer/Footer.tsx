import * as React from 'react';
import { Footer } from '@juliosoto/components';
import { Contact } from '@juliosoto/portfolio/components';

const PortfolioFooter = () => (
  <Footer
    columns={{ LeftColumn: <Footer.LeftColumn />, MiddleColumn: <Contact /> }}
  />
);

export default PortfolioFooter;
