import Head from "next/head";
import { Fragment } from "react";

import { NextPageWithLayout } from "~/types/common.types";

import Layout from "~/components/layout/Layout.component";

const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>DaftAcademy - WebApp 2022 - MiiiZawadzki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>DaftAcademy - WebApp 2022 - MiiiZawadzki</h1>
        <img title="jumping raccoon" alt="jumping raccoon gif" src="https://gifimage.net/wp-content/uploads/2018/04/raccoon-rolling-gif-5.gif"></img>
      </div>
    </Fragment>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;