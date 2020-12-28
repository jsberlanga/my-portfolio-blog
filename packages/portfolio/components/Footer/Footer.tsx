import { Footer } from '@juliosoto/components';
import * as React from 'react';
import Contact from '../Contact';

const PortfolioFooter = () => (
  <Footer
    columns={{ LeftColumn: <Footer.LeftColumn />, MiddleColumn: <Contact /> }}
  />
);

export default PortfolioFooter;
