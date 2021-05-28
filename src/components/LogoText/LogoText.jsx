import React from 'react';
import PropTypes from 'prop-types';

const LogoText = ({ title, strapline }) => (
  <div className="logo-text">
    <div className="logo-text__title">{title}</div>
    <div className="logo-text__subtitle">{strapline}</div>
  </div>
);

LogoText.propTypes = {
  title: PropTypes.string,
  strapline: PropTypes.string,
};

LogoText.defaultProps = {
  strapline: '',
  title: '',
};

export default LogoText;
