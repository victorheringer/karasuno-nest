import { Themes } from "enums";

const themes: ThemeOptions = {
  [Themes.CRABFC]: {
    // Background
    backgroundColor: "#ffffff",

    // Text Color
    mainFontColor: "#424242",
    menuIconsColor: "#000249",

    // Inputs
    separatorColor: "#e3e3e3",

    // Misc colors
    primaryColor: "#DD1717",
    successColor: "#66bb6a",
    errorColor: "#F44336",

    // Others
    fontFamily: "Arial, sans-serif",
    borderInputColor: "#757575",

    // Buttons
    solidBtnBgColor: "#000249",
    solidBtnBorder: "#0F4392",
    solidBtnFontColor: "#e3e3e3",
  },
  [Themes.HAIKYUU]: {
    // Main styles
    backgroundColor: "#212121",
    separatorColor: "#3c3f4c",

    // Text
    mainFontColor: "#f3f0ee",

    // Helpers
    errorColor: "#FF1744",
    successColor: "#50fa7b",

    primaryColor: "#ef863d",

    menuIconsColor: "#f3f0ee",
    fontFamily: "Arial, sans-serif",
    borderInputColor: "#757575",

    // Buttons
    solidBtnBgColor: "#ef863d",
    solidBtnBorder: "#f49030",
    solidBtnFontColor: "#212121",
  },
};

export default themes;
