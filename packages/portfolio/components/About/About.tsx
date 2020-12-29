import * as React from 'react';
import { css } from '@emotion/react';
import { RobotMe } from '@juliosoto/components/Icons';
import { SectionHeader } from '@juliosoto/components';
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
        width: 35%;
        margin-left: 2rem;
        padding: 2rem 3rem;
        border-radius: 4px;

        li {
          margin-left: 2rem;
          list-style: disc;
        }
      }
    }

    .info-experiences {
      order: 1;

      ${getMQ('desktop')} {
        order: 0;
        margin-right: 2rem;
        width: 65%;
        padding: 2rem 0;
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
        Hi there! First of all, thank you for being here! My name is Julio and
        originally I am from Granada, Spain. I came to Kraków some years ago,
        where I have lived and worked happily since.
        <br />A couple of words about my professional life: I started my way
        into IT as an IT Operations Analyst working for HCL Poland and Stanley
        Black and Decker Polska. For personal reasons I moved back to Kraków
        where I got a job as a Cloud Engineer for Capgemini Polska on the
        Microsoft Team.
        <br />
        In late 2018 I grew a love for web development. It started all of a
        sudden and since then, I knew that there was no turning back. I felt
        addicted to coding. I love it, every part of it, because it is amazingly
        challenging and fun.
        <br />
        In September 2019, Schibsted Tech Polska gave me the opportunity to work
        a full time job as a{' '}
        <span className="special">FullStack Javascript Developer</span>{' '}
        <span role="img" aria-label="tada">
          🎉
        </span>{' '}
        It really has been a dream come true. And now I am lucky enough to
        everyday being able to work around TypeScript, React and Nodejs among
        other things.
      </p>
      <div css={styles.info}>
        <div className="info-skills">
          <h3>skills</h3>
          <ul className="skills">
            <li>HTML / CSS / JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node</li>
            <li>GraphQL</li>
            <li>Jest</li>
            <li>Mongodb</li>
            <li>Amazon Web Services (AWS)</li>
            <li>Heroku</li>
            <li>Varnish Cache</li>
            <li>Datadog</li>
            <li>Terraform</li>
          </ul>
        </div>
        <div className="info-experiences">
          <h3>relevant experience</h3>
          <ul className="experiences">
            <li>
              <p>
                <strong>Softwate Engineer</strong> at Schibsted Tech Polska
              </p>
              <p>
                - As part of the Premium Shared Team we are responsible for
                delivering a platform that powers up the frontpages and articles
                of some of the biggest Scandinavia newspapers.
                <br />- We are responsible for creating tools and platforms that
                are easy for brand developers to create performant code. In our
                project we use TypeScript, React, Webpack, Node, Jest and
                Varnish cache. I also have the opportunity to build services
                using Amazon Web Services
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
