import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author1: <A href="https://www.github.com/bbtran">Benjamin Bao Tran</A>,
            author2: <A href="https://www.github.com/johnny-tran">Jonathan Tran</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
