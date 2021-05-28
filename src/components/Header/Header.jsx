import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import Link from '@atomikui-core/link';
import { BeardLogo, LogoText, Nav } from '..';

const Header = ({ nav, logoText, mobileLogoText, strapline }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <div className="header">
      <Link href="#top" className="header__logo">
        <BeardLogo />
        <LogoText
          strapline={isMobile ? '' : strapline}
          title={isMobile ? mobileLogoText : logoText}
        />
      </Link>
      <Nav className="header__nav" navItems={nav} />
    </div>
  );
};

Header.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
      rel: PropTypes.string,
      target: PropTypes.string,
    }),
  ),
};

Header.defaultProps = {
  navItems: null,
};

export default Header;
