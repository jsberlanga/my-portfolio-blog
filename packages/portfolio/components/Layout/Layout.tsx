import * as React from 'react';
import Layout from '@juliosoto/components/Layout';
import PortfolioFooter from '../Footer';
import PortfolioNavbar from '../Navbar';
import { AnimatePresence } from 'framer-motion';

const PortfolioLayout: React.FC = ({ children }) => {
  return (
    <AnimatePresence>
      <Layout components={{ Footer: PortfolioFooter, Navbar: PortfolioNavbar }}>
        {children}
      </Layout>
    </AnimatePresence>
  );
};

export default PortfolioLayout;
