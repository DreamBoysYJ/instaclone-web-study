import { Helmet } from "react-helmet-async";
import { PropTypes } from "prop-types";

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title} | Instaclone</title>
    </Helmet>
  );
}

PageTitle.prototypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
