import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import Link from '@atomikui-core/link';
import { BeardLogo, LogoText, Nav } from '..';

const Header = ({ nav, logoText, strapline }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <div className="header">
      <Link href="#top" className="header__logo">
        <BeardLogo />
        {!isMobile && <LogoText strapline={strapline} title={logoText} />}
      </Link>
      <Nav className="header__nav" navItems={nav} />
    </div>
  );
};

Header.propTypes = {
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
      rel: PropTypes.string,
      target: PropTypes.string,
    }),
  ),
  logoText: PropTypes.string,
  strapline: PropTypes.string,
};

Header.defaultProps = {
  nav: null,
  logoText: '',
  strapline: '',
};

export default Header;
