export const statusFilters = {
  All: "all",
  Active: "acive",
  Completed: "completed",
};

const intialState = {
  status: statusFilters.All,
  colors: [],
};

export default function filtersReducer(state = intialState, action) {
  switch (action.type) {
    case "filters/statusFilterChanged": {
      return {
        ...state,
        status: action.payload,
      };
    }
    case "filters/colorFilterChanged": {
      let { color, changeType } = action.payload;
      const { colors } = state;

      switch (changeType) {
        case "added": {
          if (colors.includes(color)) {
            return state;
          }
          return {
            ...state,
            colors: state.colors.concat(color),
          };
        }
        case "removed": {
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        }
        default:
          return state;
      }
    }
    default:
      return state;
  }
}
