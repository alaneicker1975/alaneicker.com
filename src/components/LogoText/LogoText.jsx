import React from 'react';
import PropTypes from 'prop-types';

const LogoText = ({ mobileLogoText, logoText, strapline }) => (
  <div>
    <div className="text-weight-semibold text-size-30">{logoText}</div>
    <div className="text-weight-light text-size-18">{strapline}</div>
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
