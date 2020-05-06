import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => (
  <Helmet>
    <meta charset="utf-8" />
    <meta name="description" content="social calendar project for introverts" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="icon"
      type="image/png"
      href="./favicon_io/facvicon.ico"
      sizes="16x16"
    />
    <title>Time&apos;s Us</title>
  </Helmet>
);

export default Head;
