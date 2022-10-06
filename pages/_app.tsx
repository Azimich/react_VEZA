import "/styles/reset.scss";
import "/styles/variables.scss";
import "/styles/media.scss";

import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import "react-image-gallery/styles/scss/image-gallery.scss";

const VezaApp = ({ Component, pageProps }: AppProps) => {
  return (
/*
    <Layout {...pageProps}>
*/
      <Component {...pageProps} />
/*
    </Layout>
*/
  );
};

export default wrapper.withRedux(VezaApp);
