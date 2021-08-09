export const deprecated = (propType, explanation) => (
  props,
  propName,
  componentName,
  ...rest
) => {
  if (props[propName] != null) {
    let warned = {};
    const message = `"${propName}" property of "${componentName}" has been deprecated.\n${
      explanation ? explanation : emptyString
    }`;
    if (!warned[message]) {
      console.warn(message);
      warned[message] = true;
    }
  }

  return propType(props, propName, componentName, ...rest);
};
