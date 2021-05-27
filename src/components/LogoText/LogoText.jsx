import React from 'react';
import PropTypes from 'prop-types';

const LogoText = ({ mobileLogoText, logoText, strapline }) => (
  <div className="logo-text">
    <div className="logo-text__title">{logoText}</div>
    <div className="logo-text__subtitle">{strapline}</div>
    {/* <span className="display-none@medium text-size-24">{mobileLogoText}</span> */}
  </div>
);

LogoText.propTypes = {
  logoText: PropTypes.string.isRequired,
  strapline: PropTypes.string,
  mobileLogoText: PropTypes.string,
};

LogoText.defaultProps = {
  strapline: '',
  mobileLogoText: '',
};

export default LogoText;
