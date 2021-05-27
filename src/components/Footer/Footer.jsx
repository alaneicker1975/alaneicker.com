import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Footer = ({ copyrightText, children }) => {
  if (children && children.length > 2) {
    throw new Error(
      `Error: Expected 2 children but recieved ${children.length}`,
    );
  }

  return (
    <footer>
      {children && (
        <>
          {Children.map(children, (child, index) => (
            <div
              className="margin-bottom-24"
              key={`content-${index + 1}`}
              md={6}
            >
              {child}
            </div>
          ))}
        </>
      )}
      <p className="margin-top-8 text-size-12">
        &copy; {new Date().getFullYear()} {copyrightText}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  copyrightText: PropTypes.string,
  children: PropTypes.node,
};

Footer.defaultProps = {
  copyrightText: '',
  children: null,
};

export default Footer;
