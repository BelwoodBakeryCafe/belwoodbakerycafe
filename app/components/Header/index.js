import React from 'react';
import { FormattedMessage } from 'react-intl';

import Video from './Video';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/home">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
        <Video src="https://www.youtube.com/embed/tHgpFkU-Yag?controls=0&showinfo=0&modestbranding=1&wmode=transparent&enablejsapi=1&origin=http%3A%2F%2Fbelwoodbakerycafe.com&widgetid=1" alt="Belwood Bakery Video" frameBorder="0" width="100%" />
      </div>
    );
  }
}

export default Header;
