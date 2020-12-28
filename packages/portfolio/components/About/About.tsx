import * as React from 'react';
import { css } from '@emotion/react';
import RobotMe from '@juliosoto/components/Icons/RobotMe';
import SectionHeader from '../SectionHeader';
import { getMQ } from '@juliosoto/utils/styles';

const styles = {
  root: css`
    margin-bottom: var(--gap-bottom);

    .section-content {
      max-width: var(--content-width);
      line-height: 1.8em;
      margin-bottom: var(--gap-bottom);
    }
  `,
  info: css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > div {
      margin-bottom: var(--gap-bottom);
    }

    ${getMQ('desktop')} {
      flex-direction: row;
    }

    .info-skills {
      background-color: var(--c-background-02);
      color: var(--c-light-02);
      padding: var(--gap);
      width: 100vw;
      margin-left: calc(var(--gap) * -1);
      order: 0;

      ${getMQ('desktop')} {
        order: 1;
        width: 30%;
        margin-left: 2rem;
        padding: 2rem 3rem;
        border-radius: 4px;
      }
    }

    .info-experiences {
      order: 1;

      ${getMQ('desktop')} {
        order: 0;
        margin-right: 2rem;
        width: 70%;
      }
    }
  `,
};

const About: React.FC = () => {
  return (
    <div css={styles.root} id="about">
      <SectionHeader
        label={
          <React.Fragment>
            a bit about me <RobotMe />
          </React.Fragment>
        }
        subtitle="and how I ended up being a Software Engineer"
      />
      <p className="section-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        quibusdam corporis id quisquam libero ad quo eos beatae nisi rem
        deserunt, placeat expedita distinctio, molestiae in debitis. Rerum
        possimus architecto provident, consequuntur dolore labore debitis{' '}
        ratione repudiandae, accusamus, sequi dolores itaque vitae aut beatae
        dolorum aliquam. Soluta excepturi necessitatibus corporis.
      </p>
      <div css={styles.info}>
        <div className="info-skills">
          <h3>skills</h3>
          <ul className="skills">
            <li>HTML / CSS / JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node</li>
            <li>Mongodb</li>
            <li>Amazon Web Services (AWS)</li>
            <li>Heroku</li>
            <li>Varnish Cache</li>
            <li>Datadog</li>
          </ul>
        </div>
        <div className="info-experiences">
          <h3>most relevant experience</h3>
          <ul className="experiences">
            <li>
              <p>
                <strong>Softwate Engineer</strong> at Schibsted Tech Polska
              </p>
              <p>
                - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maxime commodi accusantium, reprehenderit sint molestias rerum
                praesentium quos tenetur nesciunt exercitationem nam.
                <br />- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maxime commodi accusantium, reprehenderit sint molestias rerum
                praesentium quos tenetur nesciunt exercitationem nam.
              </p>
            </li>
            <li>
              <p>
                <strong>Cloud Engineer</strong> at Capgemini
              </p>
              <p>
                - As part of the Office 365 FastTrack Team I was responsible for
                the preparation and migration of clients’ data to the Microsoft
                cloud. From the onboarding process to the actual data migration
                and postmigration reporting.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
