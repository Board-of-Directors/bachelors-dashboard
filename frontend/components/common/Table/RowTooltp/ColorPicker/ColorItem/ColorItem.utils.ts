import { Color } from "@/types/utils";

export const getBackgroundFromColor = (color: Color) => {
  switch (color) {
    case "none": {
      return "transparent";
    }
    case "danger": {
      return "#FDF0EA";
    }
    case "success": {
      return "#D5FBF0";
    }
    case "warning": {
      return "#FDF4EA";
    }
    case "info": {
      return "#EAF4FD";
    }
  }
};
