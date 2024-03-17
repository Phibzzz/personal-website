import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node.js', 'WordPress'];

  return (
    <StyledAboutSection id="a-propos" ref={revealContainer}>
      <h2 className="numbered-heading">À propos</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            Explorez de nouveaux horizons avec nos solutions d'intelligence artificielle conçues sur mesure 
            pour votre entreprise. L'intégration de l'IA représente bien plus qu'une simple évolution technologique : 
            c'est un avantage concurrentiel décisif. En exploitant les données de manière intelligente, l'IA 
            transforme les défis en opportunités, vous permettant d'anticiper les besoins du marché, d'optimiser 
            vos processus et de fournir des expériences client exceptionnelles. Avec notre expertise, restez en 
            tête de la course à l'innovation et surpassez vos concurrents grâce à une approche stratégique et visionnaire de l'IA.
            </p>

            <p>
              Passionné par les techwebs, je m'intéresse tout particulièrement au traitement automatique des langues (NLP)
              et travaille sur le développement de solutions IA et web. Après avoir effectué ma thèse doctorale sur la communication
              numérique électorale, j'accompagne les entreprises et les collectivités territoriales dans leur développement.
            </p>

            <p>
              Avec Mikckael FAUST, nous collaborons pour déployer une R&D proactive qui se caractérise par la publication d'études
              et d'articles open source dont le dernier s'intéresse <a href="https://www.linkedin.com/pulse/benchmark-llm-analyse-lexicom%2525C3%2525A9trique-comparative-des-r%2525C3%2525A9ponses-faust-9rpqe/?trackingId=CVp7YLIyRXKWwggEO8PwzA%3D%3D">
              au benchmark de plusieurs LLM</a> et à la qualité des discours générés.
              Nous accompagnons également les organisations publiques et privés dans leur besoin de développement numérique et d'intégration IA.
            </p>

          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
