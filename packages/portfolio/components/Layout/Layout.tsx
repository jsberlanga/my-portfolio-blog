import * as React from 'react';
import Layout from '@juliosoto/components/Layout';
import Loading from '../Loading';
import PortfolioFooter from '../Footer';
import PortfolioNavbar from '../Navbar';
import { AnimatePresence } from 'framer-motion';

const PortfolioLayout: React.FC = ({ children }) => {
  const [initialLoading, setInitialLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setInitialLoading(false), 3000);
  }, []);

  if (!initialLoading) {
    return (
      <AnimatePresence>
        <Loading key="loading" />;
      </AnimatePresence>
    );
  }
  return (
    <AnimatePresence>
      <Layout components={{ Footer: PortfolioFooter, Navbar: PortfolioNavbar }}>
        {children}
      </Layout>
    </AnimatePresence>
  );
};

export default PortfolioLayout;
