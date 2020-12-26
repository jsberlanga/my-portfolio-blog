/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DefaultNavbar from '../Navbar';

const styles = {
  root: css`
    display: grid;
    grid-template-rows:
      var(--header-height) minmax(
        calc(100vh - (var(--header-height) + var(--footer-height))),
        1fr
      )
      auto;
    grid-template-columns: var(--gap) [col-1] 1fr [col-2] 1fr [col-3] var(--gap);
  `,
  main: css`
    grid-column: col-1/col-3;
  `,
  header: css`
    grid-column: col-1/col-3;
  `,
  footer: css`
    grid-column: 1/5;
  `,
};

const Layout: React.FC<any> = ({
  children,
  components: { Navbar = DefaultNavbar, Footer = () => <div>footer</div> } = {},
}) => (
  <div css={styles.root}>
    <header css={styles.header}>
      <Navbar />
    </header>
    <main css={styles.main}>{children}</main>
    <footer css={styles.footer}>
      <Footer />
    </footer>
  </div>
);

export default Layout;
