import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Portal from '@atomikui-core/portal';
import { useMediaQuery } from 'react-responsive';
import { Header, Footer, ContactInfo, SocialMedia, Nav } from './components';
import { Hero, About, Principles, Career, OpenSource } from './sections';
import { AppProvider, AppContext } from './context';

const App = () => {
  const {
    content: {
      docTitle,
      about,
      career,
      contact,
      principles,
      header,
      nav,
      hero,
      footer,
      preface,
      openSource,
      socialMedia,
    },
  } = useContext(AppContext);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <>
      <Portal container={document.head}>
        <>
          {[
            '57x57',
            '60x60',
            '72x72',
            '76x76',
            '114x114',
            '120x120',
            '144x144',
            '180x180',
          ].map((size) => (
            <link
              key={size}
              rel="apple-touch-icon"
              sizes={size}
              href={`images/apple-icon-${size}.png`}
            />
          ))}
          <link rel="icon" type="image/x-icon" href="images/favicon.ico" />
          <link rel="manifest" href="manifest.json" />
          <title>{docTitle}</title>
        </>
      </Portal>
      <div className="layout">
        <aside className="layout__header">
          <Header {...header} />
          {isDesktop && (
            <Footer copyrightText={footer.copyrightText}>
              <ContactInfo {...contact} />
              <SocialMedia {...socialMedia} />
            </Footer>
          )}
        </aside>
        <main className="layout__main">
          <div className="layout__content">
            <Hero id="top" {...hero} />
            <About id="about" {...{ preface, ...about }} />
            <Principles id="principles" {...principles} />
            <Career id="career" {...career} />
            <OpenSource id="projects" {...openSource} />
          </div>
          {isMobile && <div>mobile footer</div>}
        </main>
      </div>
    </>
  );
};

const rootElement = document.getElementById('root');

ReactDOM[rootElement.hasChildNodes() ? 'hydrate' : 'render'](
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector('#root'),
);
