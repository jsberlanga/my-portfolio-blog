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
    grid-template-columns:
      1fr [content-start] min(var(--content-width), calc(100% - var(--gap)))
      [content-end] 1fr;
    grid-column-gap: 1rem;
  `,
  main: css`
    grid-column: content-start/content-end;
  `,
  header: css`
    grid-column: content-start/content-end;
  `,
  footer: css`
    grid-column: 1/4;
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
