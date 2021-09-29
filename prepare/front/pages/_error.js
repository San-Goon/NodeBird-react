import React from "react";
import Error from "next/error";
import PropTypes from "prop-types";

const Page = ({ statusCode }) => {
  return <Error statusCode={statusCode}></Error>;
};

Page.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

Page.propTypes = {
  statusCode: PropTypes.elementType.isRequired,
};

export default Page;
