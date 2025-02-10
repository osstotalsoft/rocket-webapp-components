const typographyStyle = theme => ({
  defaultFont: {
    fontFamily: theme.typography.fontFamily,
    textTransform: "none"
  }
});

export const emphasisType = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  overline: { textDecoration: "overline" },
  "line-through": { textDecoration: "line-through" },
  underline: { textDecoration: "underline" }
};

export default typographyStyle;
