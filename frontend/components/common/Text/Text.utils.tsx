import { TextProps } from "./Text.types";

export const createTextByProps = ({ as = "p", ...props }: TextProps) => {
  switch (as) {
    case "h1": {
      return <h1 {...props} />;
    }
    case "h2": {
      return <h2 {...props} />;
    }
    case "h3": {
      return <h3 {...props} />;
    }
    case "h4": {
      return <h4 {...props} />;
    }
    case "h5": {
      return <h5 {...props} />;
    }
    case "h6": {
      return <h6 {...props} />;
    }
    default: {
      return <p {...props} />;
    }
  }
};
