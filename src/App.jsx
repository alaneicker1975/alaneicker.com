import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Portal from '@atomikui-core/portal';
import { Header, Footer, ContactInfo, SocialMedia } from './components';
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
      hero,
      footer,
      preface,
      openSource,
      socialMedia,
    },
  } = useContext(AppContext);

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
      <div className="layout" />
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
