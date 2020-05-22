import Layout from "../src/Components/Layout/Layout";

const myApp = ({ Component, pageProps }) => {
  return (
    <>
      <header>Header</header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default myApp;
