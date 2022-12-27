import "/styles/reset.scss";
import "/styles/variables.scss";
import "/styles/media.scss";

import type { AppProps } from "next/app";
import { wrapper } from "store/store";
import { Layout } from "components/common";
import { FC } from "react";
import { Provider } from "react-redux";

const VezaApp: FC<AppProps> = ({ Component, ...rest }) => {
  console.log("start", rest);
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout {...props.pageProps}>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
};

export default VezaApp;
