/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';

const styles = {
  root: css`
    display: grid;
    justify-content: stretch;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 3rem;
    grid-column-gap: 2rem;
    margin: 0 auto;
  `,

  header: css`
    grid-column: 1/3;
  `,

  form: css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1rem;

    label {
      font-size: 12px;
      margin-bottom: -12px;
    }

    input {
      font-size: 16px;
      background-color: var(--c-background);
      color: var(--c-text);
      padding: 10px;
      border: 2px solid var(--c-text);
      border-radius: 5px;
      grid-column: 1 / span 2;
    }

    input[type='submit'] {
      margin: 0px;
      width: auto;
      line-height: 35px;
      text-decoration: none;
      border-radius: 5px;
      border: 2px solid var(--c-text);
      background-color: var(--c-text);
      color: var(--c-background);
      cursor: pointer;
      font-size: 16px;
      padding: 0px;
      grid-column: 1 / auto;
      align-self: baseline;

      &:disabled {
        background: silver;
        border: 2px solid silver;
        cursor: not-allowed;
      }
    }
  `,
  infoMessage: css`
    padding: 2px;
    border-radius: 5px;
    margin: 0;
    font-size: 14px;
    display: grid;
    align-content: center;
  `,
};

const Newsletter = () => {
  const [formState, setFormState] = React.useState({
    email: '',
    inprogress: false,
    error: null,
    success: null,
  });

  const handleChange = (e) =>
    setFormState({
      inprogress: null,
      error: null,
      success: null,
      email: e.target.value,
    });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormState({ ...formState, inprogress: true });

    const response = await fetch(
      'https://api.buttondown.email/v1/subscribers',
      {
        method: 'POST',
        body: JSON.stringify({ email: formState.email }),
        headers: new Headers({
          Authorization: process.env.BUTTONDOWN_AUTH_TOKEN,
          'Content-Type': 'application/json',
        }),
      },
    );

    if (response.ok) {
      return setFormState({
        ...formState,
        inprogress: false,
        error: null,
        success: true,
      });
    } else {
      return setFormState({
        ...formState,
        inprogress: false,
        error: response.statusText,
        success: false,
      });
    }
  };
  return (
    <section css={styles.root}>
      <h4 css={styles.header}>Sign up for my newsletter</h4>
      <div className="small">
        I send a montly newsletter
        <br />
        with posts on React and TypeScript.
        <br />
        <br />
        No spam, unsubscribe anytime.
      </div>
      <form css={styles.form} onSubmit={handleFormSubmit}>
        <label htmlFor="bd-email">Email</label>
        <input
          type="email"
          name="email"
          id="bd-email"
          required
          placeholder="hi@juliosoto.dev"
          onChange={handleChange}
          value={formState.email}
        />
        <input type="hidden" value="1" name="embed" />
        <input
          type="submit"
          value={`${formState.inprogress ? 'Submitting...' : 'Subscribe'}`}
          disabled={formState.inprogress}
        />
        <div css={styles.infoMessage} className="xsmall">
          {formState.error ? 'There was an error, please try again' : null}
          {formState.success ? 'Thanks for signing up!' : null}
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
