import React, { FC } from "react";
import NextHead from "next/head";
/* import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json' */

const Head: FC = () => (
  <NextHead>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </NextHead>
);

export {Head};
