import React from "react";
import CustomLink from "./StyledLink";

const Link = ({ toRoute, content }) => {
  return (
    <CustomLink component={Link} to={toRoute}>
      {content}
    </CustomLink>
  );
};

export default Link;
