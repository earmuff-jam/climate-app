import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import HeadingSubtitle from "../HeadingSubtitle/HeadingSubtitle";

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "row",
    },
    root: {
      padding: theme.spacing(0.1, 1),
    },
  };
});

const Heading = ({
  title,
  subtitle,
  titleVariant,
  subtitleVariant,
  gutterBottom,
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.root}>
        <HeadingTitle title={title} titleVariant={titleVariant} />
        <HeadingSubtitle
          text={subtitle}
          subtitleVariant={subtitleVariant}
          gutterBottom={gutterBottom}
        />
      </Box>
    </Box>
  );
};

export default Heading;
