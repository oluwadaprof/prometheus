import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

export const colors = defineTokens.colors({
  transparent: {
    value: "transparent",
  },
  white: {
    value: "rgba(255, 255, 255, 1)",
  },
  offWhite: {
    value: "rgba(251, 251, 251, 1)",
  },
  black: {
    value: "rgba(0, 0, 0, 1)",
  },
  dark: {
    value: "lch(2.467% 0 272 / 1)",
  },
  darkContrast: {
    value: "lch(4.8 0.7 272)",
  },
  midnight: {
    value: "rgba(9, 7, 17, 1)",
  },
  modalBg: {
    value: "rgba(255, 255, 255, 0.75)",
  },
  midnightModalBg: {
    value: "rgba(9, 7, 17, 1)",
  },
  darkModalBg: {
    value: "lch(4.8 0.7 272)",
  },
  modalOverlay: {
    value: "rgba(255, 255, 255, 0.2)",
  },
  darkModalOverlay: {
    value: "rgba(9, 7, 17, 0.2)",
  },
  midnightModalOverlay: {
    value: "rgba(14, 12, 22, 0.2)",
  },
  primary: {
    1: {
      value: "rgba(252, 252, 255, 1)",
    },
    2: {
      value: "rgba(247, 248, 255, 1)",
    },
    3: {
      value: "rgba(239, 242, 255, 1)",
    },
    4: {
      value: "rgba(229, 235, 255, 1)",
    },
    5: {
      value: "rgba(216, 225, 253, 1)",
    },
    6: {
      value: "rgba(198, 212, 249, 1)",
    },
    7: {
      value: "rgba(174, 196, 243, 1)",
    },
    8: {
      value: "rgba(144, 173, 235, 1)",
    },
    9: {
      value: "rgba(12, 104, 195, 1)",
    },
    10: {
      value: "rgba(11, 94, 176, 1)",
    },
    11: {
      value: "rgba(9, 82, 156, 1)",
    },
    12: {
      value: "rgba(6, 55, 104, 1)",
    },
  },
  primaryAlpha: {
    1: {
      value: "rgba(12, 104, 195, 0.01)",
    },
    2: {
      value: "rgba(12, 104, 195, 0.03)",
    },
    3: {
      value: "rgba(12, 104, 195, 0.06)",
    },
    4: {
      value: "rgba(12, 104, 195, 0.1)",
    },
    5: {
      value: "rgba(12, 104, 195, 0.15)",
    },
    6: {
      value: "rgba(12, 104, 195, 0.22)",
    },
    7: {
      value: "rgba(12, 104, 195, 0.32)",
    },
    8: {
      value: "rgba(12, 104, 195, 0.44)",
    },
    9: {
      value: "rgba(12, 104, 195, 0.72)",
    },
    10: {
      value: "rgba(12, 104, 195, 0.76)",
    },
    11: {
      value: "rgba(12, 104, 195, 0.84)",
    },
    12: {
      value: "rgba(12, 104, 195, 0.91)",
    },
  },
  darkPrimary: {
    1: {
      value: "rgba(19, 21, 31, 1)",
    },
    2: {
      value: "rgba(22, 26, 41, 1)",
    },
    3: {
      value: "rgba(25, 32, 59, 1)",
    },
    4: {
      value: "rgba(26, 35, 72, 1)",
    },
    5: {
      value: "rgba(28, 41, 85, 1)",
    },
    6: {
      value: "rgba(29, 47, 105, 1)",
    },
    7: {
      value: "rgba(29, 55, 140, 1)",
    },
    8: {
      value: "rgba(30, 81, 210, 1)",
    },
    9: {
      value: "rgba(12, 104, 195, 1)",
    },
    10: {
      value: "rgba(102, 146, 242, 1)",
    },
    11: {
      value: "rgba(133, 170, 255, 1)",
    },
    12: {
      value: "rgba(209, 217, 255, 1)",
    },
  },
  darkPrimaryAlpha: {
    1: {
      value: "rgba(12, 104, 195, 0.03)",
    },
    2: {
      value: "rgba(12, 104, 195, 0.07)",
    },
    3: {
      value: "rgba(12, 104, 195, 0.15)",
    },
    4: {
      value: "rgba(12, 104, 195, 0.21)",
    },
    5: {
      value: "rgba(12, 104, 195, 0.26)",
    },
    6: {
      value: "rgba(12, 104, 195, 0.35)",
    },
    7: {
      value: "rgba(12, 104, 195, 0.5)",
    },
    8: {
      value: "rgba(12, 104, 195, 0.81)",
    },
    9: {
      value: "rgba(12, 104, 195, 0.89)",
    },
    10: {
      value: "rgba(12, 104, 195, 0.94)",
    },
    11: {
      value: "rgba(12, 104, 195, 1)",
    },
    12: {
      value: "rgba(209, 217, 255, 1)",
    },
  },
  gray: {
    1: {
      value: "rgba(252, 252, 253, 1)",
    },
    2: {
      value: "rgba(249, 249, 251, 1)",
    },
    3: {
      value: "rgba(242, 242, 245, 1)",
    },
    4: {
      value: "rgba(235, 235, 239, 1)",
    },
    5: {
      value: "rgba(228, 228, 233, 1)",
    },
    6: {
      value: "rgba(221, 221, 227, 1)",
    },
    7: {
      value: "rgba(211, 212, 219, 1)",
    },
    8: {
      value: "rgba(185, 187, 198, 1)",
    },
    9: {
      value: "rgba(139, 141, 152, 1)",
    },
    10: {
      value: "rgba(126, 128, 138, 1)",
    },
    11: {
      value: "rgba(96, 100, 108, 1)",
    },
    12: {
      value: "rgba(28, 32, 36, 1)",
    },
  },
  grayAlpha: {
    1: {
      value: "rgba(5, 5, 88, 0.01)",
    },
    2: {
      value: "rgba(5, 5, 88, 0.02)",
    },
    3: {
      value: "rgba(0, 0, 59, 0.05)",
    },
    4: {
      value: "rgba(2, 2, 52, 0.08)",
    },
    5: {
      value: "rgba(0, 0, 48, 0.11)",
    },
    6: {
      value: "rgba(1, 1, 46, 0.13)",
    },
    7: {
      value: "rgba(1, 6, 47, 0.17)",
    },
    8: {
      value: "rgba(0, 8, 47, 0.28)",
    },
    9: {
      value: "rgba(0, 4, 29, 0.46)",
    },
    10: {
      value: "rgba(0, 4, 24, 0.51)",
    },
    11: {
      value: "rgba(0, 7, 19, 0.62)",
    },
    12: {
      value: "rgba(0, 5, 9, 0.89)",
    },
  },
  darkGray: {
    1: {
      value: "rgba(24, 24, 26, 1)",
    },
    2: {
      value: "rgba(27, 27, 31, 1)",
    },
    3: {
      value: "rgba(39, 40, 45, 1)",
    },
    4: {
      value: "rgba(46, 48, 53, 1)",
    },
    5: {
      value: "rgba(53, 55, 60, 1)",
    },
    6: {
      value: "rgba(60, 63, 68, 1)",
    },
    7: {
      value: "rgba(70, 75, 80, 1)",
    },
    8: {
      value: "rgba(90, 97, 101, 1)",
    },
    9: {
      value: "rgba(105, 110, 119, 1)",
    },
    10: {
      value: "rgba(120, 127, 133, 1)",
    },
    11: {
      value: "rgba(173, 177, 184, 1)",
    },
    12: {
      value: "rgba(237, 238, 240, 1)",
    },
  },
  darkGrayAlpha: {
    1: {
      value: "rgba(24, 24, 246, 0.01)",
    },
    2: {
      value: "rgba(121, 121, 250, 0.03)",
    },
    3: {
      value: "rgba(189, 200, 255, 0.09)",
    },
    4: {
      value: "rgba(199, 214, 254, 0.13)",
    },
    5: {
      value: "rgba(210, 223, 255, 0.16)",
    },
    6: {
      value: "rgba(212, 228, 254, 0.19)",
    },
    7: {
      value: "rgba(213, 234, 254, 0.24)",
    },
    8: {
      value: "rgba(223, 242, 253, 0.33)",
    },
    9: {
      value: "rgba(221, 233, 255, 0.41)",
    },
    10: {
      value: "rgba(228, 238, 255, 0.49)",
    },
    11: {
      value: "rgba(239, 245, 255, 0.69)",
    },
    12: {
      value: "rgba(252, 253, 255, 0.94)",
    },
  },
  error: {
    1: {
      value: "rgba(255, 252, 252, 1)",
    },
    2: {
      value: "rgba(255, 247, 247, 1)",
    },
    3: {
      value: "rgba(255, 239, 239, 1)",
    },
    4: {
      value: "rgba(255, 229, 229, 1)",
    },
    5: {
      value: "rgba(253, 216, 216, 1)",
    },
    6: {
      value: "rgba(249, 198, 198, 1)",
    },
    7: {
      value: "rgba(243, 174, 175, 1)",
    },
    8: {
      value: "rgba(235, 144, 145, 1)",
    },
    9: {
      value: "rgba(229, 72, 77, 1)",
    },
    10: {
      value: "rgba(217, 61, 66, 1)",
    },
    11: {
      value: "rgba(198, 42, 47, 1)",
    },
    12: {
      value: "rgba(100, 23, 35, 1)",
    },
  },
  errorAlpha: {
    1: {
      value: "rgba(255, 5, 5, 0.01)",
    },
    2: {
      value: "rgba(255, 5, 5, 0.03)",
    },
    3: {
      value: "rgba(255, 1, 1, 0.06)",
    },
    4: {
      value: "rgba(255, 0, 0, 0.10)",
    },
    5: {
      value: "rgba(242, 0, 0, 0.15)",
    },
    6: {
      value: "rgba(228, 1, 1, 0.22)",
    },
    7: {
      value: "rgba(217, 0, 3, 0.32)",
    },
    8: {
      value: "rgba(209, 0, 3, 0.44)",
    },
    9: {
      value: "rgba(219, 0, 7, 0.72)",
    },
    10: {
      value: "rgba(205, 0, 8, 0.76)",
    },
    11: {
      value: "rgba(187, 0, 7, 0.84)",
    },
    12: {
      value: "rgba(85, 0, 13, 0.91)",
    },
  },
  darkError: {
    1: {
      value: "rgba(31, 19, 21, 1)",
    },
    2: {
      value: "rgba(41, 22, 24, 1)",
    },
    3: {
      value: "rgba(59, 25, 29, 1)",
    },
    4: {
      value: "rgba(72, 26, 32, 1)",
    },
    5: {
      value: "rgba(85, 28, 34, 1)",
    },
    6: {
      value: "rgba(105, 29, 37, 1)",
    },
    7: {
      value: "rgba(140, 29, 40, 1)",
    },
    8: {
      value: "rgba(210, 30, 36, 1)",
    },
    9: {
      value: "rgba(229, 72, 77, 1)",
    },
    10: {
      value: "rgba(242, 102, 105, 1)",
    },
    11: {
      value: "rgba(255, 133, 137, 1)",
    },
    12: {
      value: "rgba(255, 209, 217, 1)",
    },
  },
  darkErrorAlpha: {
    1: {
      value: "rgba(250, 0, 0, 0.03)",
    },
    2: {
      value: "rgba(254, 0, 25, 0.07)",
    },
    3: {
      value: "rgba(254, 31, 57, 0.15)",
    },
    4: {
      value: "rgba(255, 33, 62, 0.21)",
    },
    5: {
      value: "rgba(254, 39, 61, 0.26)",
    },
    6: {
      value: "rgba(255, 38, 60, 0.35)",
    },
    7: {
      value: "rgba(255, 34, 56, 0.5)",
    },
    8: {
      value: "rgba(255, 31, 40, 0.81)",
    },
    9: {
      value: "rgba(255, 78, 84, 0.89)",
    },
    10: {
      value: "rgba(255, 107, 109, 0.94)",
    },
    11: {
      value: "rgba(255, 133, 138, 1)",
    },
    12: {
      value: "rgba(255, 209, 217, 1)",
    },
  },
  success: {
    1: {
      value: "#FBFEFC",
    },
    2: {
      value: "#F2FCF5",
    },
    3: {
      value: "#E9F9EE",
    },
    4: {
      value: "#DDF3E4",
    },
    5: {
      value: "#CCEBD7",
    },
    6: {
      value: "#B4DFC4",
    },
    7: {
      value: "#92CEAC",
    },
    8: {
      value: "#5BB98C",
    },
    9: {
      value: "#299764",
    },
    10: {
      value: "#299764",
    },
    11: {
      value: "#18794E",
    },
    12: {
      value: "#193B2D",
    },
  },
  successAlpha: {
    1: {
      value: "rgba(5, 192, 67, 0.02)",
    },
    2: {
      value: "rgba(2, 186, 60, 0.09)",
    },
    3: {
      value: "rgba(2, 186, 60, 0.09)",
    },
    4: {
      value: "rgba(1, 166, 54, 0.13)",
    },
    5: {
      value: "rgba(0, 155, 55, 0.2)",
    },
    6: {
      value: "rgba(1, 147, 55, 0.29)",
    },
    7: {
      value: "rgba(0, 140, 61, 0.43)",
    },
    8: {
      value: "rgba(0, 147, 77, 0.64)",
    },
    9: {
      value: "rgba(0, 143, 74, 0.81)",
    },
    10: {
      value: "rgba(0, 131, 71, 0.84)",
    },
    11: {
      value: "rgba(0, 107, 59, 0.91)",
    },
    12: {
      value: "rgba(0, 38, 22, 0.9)",
    },
  },
  darkSuccess: {
    1: {
      value: "rgba(13, 25, 18, 1)",
    },
    2: {
      value: "rgba(15, 29, 23, 1)",
    },
    3: {
      value: "rgba(18, 40, 31, 1)",
    },
    4: {
      value: "rgba(20, 49, 37, 1)",
    },
    5: {
      value: "rgba(23, 58, 42, 1)",
    },
    6: {
      value: "rgba(25, 70, 51, 1)",
    },
    7: {
      value: "rgba(31, 94, 65, 1)",
    },
    8: {
      value: "rgba(44, 140, 94, 1)",
    },
    9: {
      value: "rgba(48, 164, 108, 1)",
    },
    10: {
      value: "rgba(53, 185, 121, 1)",
    },
    11: {
      value: "rgba(61, 214, 140, 1)",
    },
    12: {
      value: "rgba(177, 241, 203, 1)",
    },
  },
  darkSuccessAlpha: {
    1: {
      value: "rgba(0, 224, 0, 0)",
    },
    2: {
      value: "rgba(0, 251, 0, 0.02)",
    },
    3: {
      value: "rgba(0, 252, 122, 0.07)",
    },
    4: {
      value: "rgba(0, 253, 143, 0.11)",
    },
    5: {
      value: "rgba(17, 254, 147, 0.15)",
    },
    6: {
      value: "rgba(29, 254, 160, 0.2)",
    },
    7: {
      value: "rgba(47, 254, 158, 0.3)",
    },
    8: {
      value: "rgba(64, 255, 163, 0.5)",
    },
    9: {
      value: "rgba(63, 255, 162, 0.61)",
    },
    10: {
      value: "rgba(66, 255, 164, 0.7)",
    },
    11: {
      value: "rgba(69, 255, 166, 0.82)",
    },
    12: {
      value: "rgba(187, 255, 214, 0.94)",
    },
  },
  warning: {
    1: {
      value: "rgba(254, 253, 251, 1)",
    },
    2: {
      value: "rgba(255, 249, 237, 1)",
    },
    3: {
      value: "rgba(255, 243, 208, 1)",
    },
    4: {
      value: "rgba(255, 236, 183, 1)",
    },
    5: {
      value: "rgba(255, 224, 161, 1)",
    },
    6: {
      value: "rgba(245, 208, 140, 1)",
    },
    7: {
      value: "rgba(228, 187, 120, 1)",
    },
    8: {
      value: "rgba(214, 163, 92, 1)",
    },
    9: {
      value: "rgba(255, 197, 61, 1)",
    },
    10: {
      value: "rgba(255, 186, 26, 1)",
    },
    11: {
      value: "rgba(145, 89, 48, 1)",
    },
    12: {
      value: "rgba(79, 52, 34, 1)",
    },
  },
  warningAlpha: {
    1: {
      value: "rgba(192, 130, 5, 0.02)",
    },
    2: {
      value: "rgba(192, 130, 5, 0.02)",
    },
    3: {
      value: "rgba(255, 191, 1, 0.19)",
    },
    4: {
      value: "rgba(255, 187, 1, 0.28)",
    },
    5: {
      value: "rgba(254, 170, 1, 0.37)",
    },
    6: {
      value: "rgba(233, 151, 0, 0.45)",
    },
    7: {
      value: "rgba(204, 126, 0, 0.53)",
    },
    8: {
      value: "rgba(191, 112, 0, 0.64)",
    },
    9: {
      value: "rgba(255, 178, 0, 0.76)",
    },
    10: {
      value: "rgba(255, 179, 1, 0.9)",
    },
    11: {
      value: "rgba(120, 50, 0, 0.81)",
    },
    12: {
      value: "rgba(52, 21, 0, 0.87)",
    },
  },
  darkWarning: {
    1: {
      value: "rgba(31, 19, 0, 1)",
    },
    2: {
      value: "rgba(37, 24, 4, 1)",
    },
    3: {
      value: "rgba(48, 32, 11, 1)",
    },
    4: {
      value: "rgba(57, 39, 15, 1)",
    },
    5: {
      value: "rgba(67, 46, 18, 1)",
    },
    6: {
      value: "rgba(83, 57, 22, 1)",
    },
    7: {
      value: "rgba(111, 77, 29, 1)",
    },
    8: {
      value: "rgba(169, 118, 42, 1)",
    },
    9: {
      value: "rgba(255, 197, 61, 1)",
    },
    10: {
      value: "rgba(255, 203, 71, 1)",
    },
    11: {
      value: "rgba(255, 204, 77, 1)",
    },
    12: {
      value: "rgba(255, 231, 179, 1)",
    },
  },
  darkWarningAlpha: {
    1: {
      value: "rgba(250, 0, 0, 0.03)",
    },
    2: {
      value: "rgba(252, 25, 0, 0.06)",
    },
    3: {
      value: "rgba(255, 102, 0, 0.1)",
    },
    4: {
      value: "rgba(255, 128, 0, 0.14)",
    },
    5: {
      value: "rgba(254, 141, 0, 0.19)",
    },
    6: {
      value: "rgba(255, 151, 16, 0.26)",
    },
    7: {
      value: "rgba(255, 164, 37, 0.38)",
    },
    8: {
      value: "rgba(255, 174, 53, 0.63)",
    },
    9: {
      value: "rgba(255, 197, 61, 1)",
    },
    10: {
      value: "rgba(255, 203, 71, 1)",
    },
    11: {
      value: "rgba(255, 205, 77, 1)",
    },
    12: {
      value: "rgba(255, 231, 179, 1)",
    },
  },
  info: {
    1: {
      value: "rgba(249, 254, 255, 1)",
    },
    2: {
      value: "rgba(241, 252, 255, 1)",
    },
    3: {
      value: "rgba(226, 249, 255, 1)",
    },
    4: {
      value: "rgba(210, 244, 253, 1)",
    },
    5: {
      value: "rgba(191, 235, 248, 1)",
    },
    6: {
      value: "rgba(165, 220, 237, 1)",
    },
    7: {
      value: "rgba(130, 202, 224, 1)",
    },
    8: {
      value: "rgba(70, 184, 216, 1)",
    },
    9: {
      value: "rgba(124, 226, 254, 1)",
    },
    10: {
      value: "rgba(114, 219, 248, 1)",
    },
    11: {
      value: "rgba(37, 110, 147, 1)",
    },
    12: {
      value: "rgba(25, 64, 77, 1)",
    },
  },
  infoAlpha: {
    1: {
      value: "rgba(5, 213, 255, 0.02)",
    },
    2: {
      value: "rgba(1, 204, 255, 0.11)",
    },
    3: {
      value: "rgba(1, 204, 255, 0.11)",
    },
    4: {
      value: "rgba(1, 191, 244, 0.18)",
    },
    5: {
      value: "rgba(0, 174, 227, 0.25)",
    },
    6: {
      value: "rgba(0, 156, 204, 0.35)",
    },
    7: {
      value: "rgba(0, 146, 192, 0.49)",
    },
    8: {
      value: "rgba(0, 157, 201, 0.73)",
    },
    9: {
      value: "rgba(0, 199, 253, 0.51)",
    },
    10: {
      value: "rgba(0, 190, 242, 0.55)",
    },
    11: {
      value: "rgba(0, 86, 129, 0.86)",
    },
    12: {
      value: "rgba(0, 44, 58, 0.9)",
    },
  },
  darkInfo: {
    1: {
      value: "rgba(12, 24, 32, 1)",
    },
    2: {
      value: "rgba(13, 29, 38, 1)",
    },
    3: {
      value: "rgba(17, 39, 51, 1)",
    },
    4: {
      value: "rgba(19, 47, 61, 1)",
    },
    5: {
      value: "rgba(22, 54, 72, 1)",
    },
    6: {
      value: "rgba(26, 67, 88, 1)",
    },
    7: {
      value: "rgba(32, 89, 117, 1)",
    },
    8: {
      value: "rgba(45, 135, 180, 1)",
    },
    9: {
      value: "rgba(124, 226, 254, 1)",
    },
    10: {
      value: "rgba(138, 232, 255, 1)",
    },
    11: {
      value: "rgba(82, 212, 255, 1)",
    },
    12: {
      value: "rgba(194, 243, 255, 1)",
    },
  },
  darkInfoAlpha: {
    1: {
      value: "rgba(82, 212, 255, 1)",
    },
    2: {
      value: "rgba(0, 153, 255, 0.12)",
    },
    3: {
      value: "rgba(0, 153, 255, 0.12)",
    },
    4: {
      value: "rgba(0, 165, 254, 0.16)",
    },
    5: {
      value: "rgba(15, 167, 255, 0.21)",
    },
    6: {
      value: "rgba(31, 180, 254, 0.28)",
    },
    7: {
      value: "rgba(44, 185, 255, 0.4)",
    },
    8: {
      value: "rgba(55, 188, 255, 0.68)",
    },
    9: {
      value: "rgba(125, 227, 255, 1)",
    },
    10: {
      value: "rgba(138, 232, 255, 1)",
    },
    11: {
      value: "rgba(82, 212, 255, 1)",
    },
    12: {
      value: "rgba(194, 243, 255, 1)",
    },
  },
  userColors: {
    // Taken from radix colors shade 10
    gray: {
      value: "#838383",
    },
    sand: {
      value: "#82827C",
    },
    tomato: {
      value: "#DD4425",
    },
    red: {
      value: "#DC3E42",
    },
    ruby: {
      value: "#DC3B5D",
    },
    crimson: {
      value: "#DF3478",
    },
    pink: {
      value: "#CF3897",
    },
    plum: {
      value: "#A144AF",
    },
    purple: {
      value: "#8347B9",
    },
    violet: {
      value: "#654DC4",
    },
    iris: {
      value: "#5151CD",
    },
    indigo: {
      value: "#3358D4",
    },
    cyan: {
      value: "#0797B9",
    },
    teal: {
      value: "#0D9B8A",
    },
    jade: {
      value: "#26997B",
    },
    green: {
      value: "#2B9A66",
    },
    grass: {
      value: "#3E9B4F",
    },
    bronze: {
      value: "#957468",
    },
    gold: {
      value: "#8C7A5E",
    },
    brown: {
      value: "#A07553",
    },
    orange: {
      value: "#EF5F00",
    },
    amber: {
      value: "#FFBA18",
    },
    yellow: {
      value: "#9E6C00",
    },
    lime: {
      value: "#5C7C2F",
    },
    mint: {
      value: "#027864",
    },
    sky: {
      value: "#00749E",
    },
  },
  userColorsAlpha: {
    // Taken from radix colors
    gray: {
      value: "#0000000F",
    },
    sand: {
      value: "#20100010",
    },
    tomato: {
      value: "#F52B0018",
    },
    red: {
      value: "#F3000D14",
    },
    ruby: {
      value: "#F3002515",
    },
    crimson: {
      value: "#FF005216",
    },
    pink: {
      value: "#F4008C16",
    },
    plum: {
      value: "#CC00CC14",
    },
    purple: {
      value: "#8E00F112",
    },
    violet: {
      value: "#4400EE0F",
    },
    iris: {
      value: "#0011EE0F",
    },
    indigo: {
      value: "#0047F112",
    },
    cyan: {
      value: "#00C2D121",
    },
    teal: {
      value: "#00C69D1F",
    },
    jade: {
      value: "#00AE4819",
    },
    green: {
      value: "#00A43319",
    },
    grass: {
      value: "#00970016",
    },
    bronze: {
      value: "#92250015",
    },
    gold: {
      value: "#75600018",
    },
    brown: {
      value: "#A04B0018",
    },
    orange: {
      value: "#FF9C0029",
    },
    amber: {
      value: "#FFDE003D",
    },
    yellow: {
      value: "#FFEE0047",
    },
    lime: {
      value: "#96C80029",
    },
    mint: {
      value: "#00D29E22",
    },
    sky: {
      value: "#00B3EE1E",
    },
  },
  userTextColors: {
    // Taken from radix colors shade 12
    gray: {
      value: "#000000DF",
    },
    sand: {
      value: "#21201C",
    },
    tomato: {
      value: "#5C271F",
    },
    red: {
      value: "#641723",
    },
    ruby: {
      value: "#64172B",
    },
    crimson: {
      value: "#621639",
    },
    pink: {
      value: "#651249",
    },
    plum: {
      value: "#53195D",
    },
    purple: {
      value: "#402060",
    },
    violet: {
      value: "#2F265F",
    },
    iris: {
      value: "#272962",
    },
    indigo: {
      value: "#1F2D5C",
    },
    cyan: {
      value: "#0D3C48",
    },
    teal: {
      value: "#0D3D38",
    },
    jade: {
      value: "#1D3B31",
    },
    green: {
      value: "#193B2D",
    },
    grass: {
      value: "#203C25",
    },
    bronze: {
      value: "#43302B",
    },
    gold: {
      value: "#3B352B",
    },
    brown: {
      value: "#3E332E",
    },
    orange: {
      value: "#582D1D",
    },
    amber: {
      value: "#4F3422",
    },
    yellow: {
      value: "#473B1F",
    },
    lime: {
      value: "#37401C",
    },
    mint: {
      value: "#16433C",
    },
    sky: {
      value: "#1D3E56",
    },
  },
  darkUserColorsAlpha: {
    // Taken from radix colors
    gray: {
      value: "#ECFBE82C",
    },
    sand: {
      value: "#ECFBE82C",
    },
    tomato: {
      value: "#FE570C30",
    },
    red: {
      value: "#FE3E1633",
    },
    ruby: {
      value: "#FE443A32",
    },
    crimson: {
      value: "#FE4B6031",
    },
    pink: {
      value: "#FE579130",
    },
    plum: {
      value: "#FD72ED2B",
    },
    purple: {
      value: "#C774FB2F",
    },
    violet: {
      value: "#8B77FE37",
    },
    iris: {
      value: "#6A7AFF3A",
    },
    indigo: {
      value: "#4783FF3A",
    },
    cyan: {
      value: "#00F3FD27",
    },
    teal: {
      value: "#23F9A827",
    },
    jade: {
      value: "#1CFA8428",
    },
    green: {
      value: "#22FF991E",
    },
    grass: {
      value: "#8DFF6223",
    },
    bronze: {
      value: "#F7E4881E",
    },
    gold: {
      value: "#FFF47F1C",
    },
    brown: {
      value: "#F8D56C1F",
    },
    orange: {
      value: "#FD79062D",
    },
    amber: {
      value: "#FAC00024",
    },
    yellow: {
      value: "#F9E70020",
    },
    lime: {
      value: "#B6FF2F22",
    },
    mint: {
      value: "#1EF99826",
    },
    sky: {
      value: "#00EEFE29",
    },
  },
  darkUserTextColors: {
    // Taken from radix colors
    gray: {
      value: "#EEEEEE",
    },
    sand: {
      value: "#EEEEEE",
    },
    tomato: {
      value: "#FBD3CA",
    },
    red: {
      value: "#FFD2CE",
    },
    ruby: {
      value: "#FFD2D6",
    },
    crimson: {
      value: "#FFD3DE",
    },
    pink: {
      value: "#FED1E8",
    },
    plum: {
      value: "#F2D5F6",
    },
    purple: {
      value: "#E9DAFC",
    },
    violet: {
      value: "#E0DEFF",
    },
    iris: {
      value: "#DCE1FF",
    },
    indigo: {
      value: "#D5E2FF",
    },
    cyan: {
      value: "#B8EAFC",
    },
    teal: {
      value: "#AAF0E3",
    },
    jade: {
      value: "#AAF0D8",
    },
    green: {
      value: "#B2F1CB",
    },
    grass: {
      value: "#C0F0C4",
    },
    bronze: {
      value: "#F3E2DC",
    },
    gold: {
      value: "#EFE5D7",
    },
    brown: {
      value: "#F6DFCC",
    },
    orange: {
      value: "#FFDCCA",
    },
    amber: {
      value: "#FEE7BA",
    },
    yellow: {
      value: "#F4EDB8",
    },
    lime: {
      value: "#DFF8BC",
    },
    mint: {
      value: "#C0F5E8",
    },
    sky: {
      value: "#C3F2FF",
    },
  },
  darkUserColors: {
    // Taken from radix colors shade 10
    gray: {
      value: "#7B7B7B",
    },
    sand: {
      value: "#7C7B74",
    },
    tomato: {
      value: "#EC6142",
    },
    red: {
      value: "#EC5D5E",
    },
    ruby: {
      value: "#EC5A72",
    },
    crimson: {
      value: "#EE518A",
    },
    pink: {
      value: "#DE51A8",
    },
    plum: {
      value: "#B658C4",
    },
    purple: {
      value: "#9A5CD0",
    },
    violet: {
      value: "#7D66D9",
    },
    iris: {
      value: "#6E6ADE",
    },
    indigo: {
      value: "#5472E4",
    },
    cyan: {
      value: "#23AFD0",
    },
    teal: {
      value: "#0EB39E",
    },
    jade: {
      value: "#27B08B",
    },
    green: {
      value: "#33B074",
    },
    grass: {
      value: "#53B365",
    },
    bronze: {
      value: "#AE8C7E",
    },
    gold: {
      value: "#A39073",
    },
    brown: {
      value: "#B88C67",
    },
    orange: {
      value: "#FF801F",
    },
    amber: {
      value: "#FFC53D",
    },
    yellow: {
      value: "#836A21",
    },
    lime: {
      value: "#577538",
    },
    mint: {
      value: "#277F70",
    },
    sky: {
      value: "#197CAE",
    },
  },
});

export const semanticColors = defineSemanticTokens.colors({
  background: {
    app: {
      value: { base: "{colors.white}", _dark: "{colors.darkContrast}" },
    },
    contrast: {
      value: { base: "{colors.grayAlpha.3}", _dark: "{colors.grayAlpha.3}" },
    },
    muted: {
      value: {
        base: "{colors.grayAlpha.3}",
        _dark: "{colors.darkGrayAlpha.3}",
      },
    },
    mutedNoAlpha: {
      value: {
        base: "{colors.offWhite}",
        _dark: "#2C2F3A",
      },
    },
    success: {
      value: {
        base: "{colors.success.8}",
        _dark: "{colors.darkSuccess.9}",
        _pulseDark: "{colors.darkSuccess.9}",
      },
    },
    panel: {
      value: { base: "{colors.modalBg}", _dark: "{colors.darkModalBg}" },
    },
    panelOverlay: {
      value: {
        base: "{colors.modalOverlay}",
        _dark: "{colors.darkModalOverlay}",
      },
    },
    primary: {
      value: {
        base: "{colors.primaryAlpha.9}",
        _dark: "{colors.darkPrimaryAlpha.9}",
      },
    },
  },
  border: {
    subtle: {
      value: {
        base: "{colors.grayAlpha.4}",
        _dark: "{colors.darkGrayAlpha.4}",
      },
    },
    focused: {
      value: {
        base: "{colors.primaryAlpha.9}",
        _dark: "{colors.darkPrimaryAlpha.9}",
      },
    },
    success: {
      value: {
        base: "{colors.successAlpha.4}",
        _dark: "{colors.darkSuccessAlpha.4}",
      },
    },
  },
  text: {
    app: {
      value: {
        base: "{colors.grayAlpha.12}",
        _dark: "{colors.darkGrayAlpha.12}",
      },
    },
    primary: {
      value: {
        base: "{colors.primaryAlpha.11}",
        _dark: "{colors.darkPrimaryAlpha.11}",
      },
    },
    illustration: {
      value: {
        base: "{colors.grayAlpha.8}",
        _dark: "{colors.darkGrayAlpha.8}",
      },
    },
    muted: {
      value: {
        base: "{colors.grayAlpha.11}",
        _dark: "{colors.darkGrayAlpha.11}",
      },
    },
    error: {
      value: {
        base: "{colors.brand.errorA.11}",
        _dark: "{colors.darkErrorAlpha.11}",
      },
    },
    warning: {
      value: {
        base: "{colors.brand.warningA.11}",
        _dark: "{colors.darkWarningAlpha.11}",
      },
    },
    success: {
      value: {
        base: "{colors.successAlpha.9}",
        _dark: "{colors.darkSuccessAlpha.9}",
      },
    },
    label: {
      value: {
        base: "{colors.grayAlpha.11}",
        _dark: "{colors.darkGrayAlpha.11}",
      },
    },
    placeholder: {
      value: {
        base: "{colors.grayAlpha.9}",
        _dark: "{colors.darkGrayAlpha.10}",
      },
    },
    white: {
      value: { base: "{colors.white}", _dark: "{colors.white}" },
    },
  },
  brand: {
    primary: {
      1: {
        value: {
          base: "{colors.primary.1}",
          _dark: "{colors.darkPrimary.1}",
          _pulseDark: "{colors.darkPrimary.1}",
        },
      },
      2: {
        value: {
          base: "{colors.primary.2}",
          _dark: "{colors.darkPrimary.2}",
          _pulseDark: "{colors.darkPrimary.2}",
        },
      },
      3: {
        value: {
          base: "{colors.primary.3}",
          _dark: "{colors.darkPrimary.3}",
          _pulseDark: "{colors.darkPrimary.3}",
        },
      },
      4: {
        value: {
          base: "{colors.primary.4}",
          _dark: "{colors.darkPrimary.4}",
          _pulseDark: "{colors.darkPrimary.4}",
        },
      },
      5: {
        value: {
          base: "{colors.primary.5}",
          _dark: "{colors.darkPrimary.5}",
          _pulseDark: "{colors.darkPrimary.5}",
        },
      },
      6: {
        value: {
          base: "{colors.primary.6}",
          _dark: "{colors.darkPrimary.6}",
          _pulseDark: "{colors.darkPrimary.6}",
        },
      },
      7: {
        value: {
          base: "{colors.primary.7}",
          _dark: "{colors.darkPrimary.7}",
          _pulseDark: "{colors.darkPrimary.7}",
        },
      },
      8: {
        value: {
          base: "{colors.primary.8}",
          _dark: "{colors.darkPrimary.8}",
          _pulseDark: "{colors.darkPrimary.8}",
        },
      },
      9: {
        value: {
          base: "{colors.primary.9}",
          _dark: "{colors.darkPrimary.9}",
          _pulseDark: "{colors.darkPrimary.9}",
        },
      },
      10: {
        value: {
          base: "{colors.primary.10}",
          _dark: "{colors.darkPrimary.10}",
          _pulseDark: "{colors.darkPrimary.10}",
        },
      },
      11: {
        value: {
          base: "{colors.primary.11}",
          _dark: "{colors.darkPrimary.11}",
          _pulseDark: "{colors.darkPrimary.11}",
        },
      },
      12: {
        value: {
          base: "{colors.primary.12}",
          _dark: "{colors.darkPrimary.12}",
          _pulseDark: "{colors.darkPrimary.12}",
        },
      },
    },
    primaryA: {
      DEFAULT: {
        value: {
          base: "{colors.primaryAlpha.1}",
          _dark: "{colors.darkPrimaryAlpha.1}",
          _pulseDark: "{colors.darkPrimaryAlpha.1}",
        },
      },
      2: {
        value: {
          base: "{colors.primaryAlpha.2}",
          _dark: "{colors.darkPrimaryAlpha.2}",
          _pulseDark: "{colors.darkPrimaryAlpha.2}",
        },
      },
      3: {
        value: {
          base: "{colors.primaryAlpha.3}",
          _dark: "{colors.darkPrimaryAlpha.3}",
          _pulseDark: "{colors.darkPrimaryAlpha.3}",
        },
      },
      4: {
        value: {
          base: "{colors.primaryAlpha.4}",
          _dark: "{colors.darkPrimaryAlpha.4}",
          _pulseDark: "{colors.darkPrimaryAlpha.4}",
        },
      },
      5: {
        value: {
          base: "{colors.primaryAlpha.5}",
          _dark: "{colors.darkPrimaryAlpha.5}",
          _pulseDark: "{colors.darkPrimaryAlpha.5}",
        },
      },
      6: {
        value: {
          base: "{colors.primaryAlpha.6}",
          _dark: "{colors.darkPrimaryAlpha.6}",
          _pulseDark: "{colors.darkPrimaryAlpha.6}",
        },
      },
      7: {
        value: {
          base: "{colors.primaryAlpha.7}",
          _dark: "{colors.darkPrimaryAlpha.7}",
          _pulseDark: "{colors.darkPrimaryAlpha.7}",
        },
      },
      8: {
        value: {
          base: "{colors.primaryAlpha.8}",
          _dark: "{colors.darkPrimaryAlpha.8}",
          _pulseDark: "{colors.darkPrimaryAlpha.8}",
        },
      },
      9: {
        value: {
          base: "{colors.primaryAlpha.9}",
          _dark: "{colors.darkPrimaryAlpha.9}",
          _pulseDark: "{colors.darkPrimaryAlpha.9}",
        },
      },
      10: {
        value: {
          base: "{colors.primaryAlpha.10}",
          _dark: "{colors.darkPrimaryAlpha.10}",
          _pulseDark: "{colors.darkPrimaryAlpha.10}",
        },
      },
      11: {
        value: {
          base: "{colors.primaryAlpha.11}",
          _dark: "{colors.darkPrimaryAlpha.11}",
          _pulseDark: "{colors.darkPrimaryAlpha.11}",
        },
      },
      12: {
        value: {
          base: "{colors.primaryAlpha.12}",
          _dark: "{colors.darkPrimaryAlpha.12}",
          _pulseDark: "{colors.darkPrimaryAlpha.12}",
        },
      },
    },
    gray: {
      DEFAULT: {
        value: {
          base: "{colors.gray.1}",
          _dark: "{colors.darkGray.1}",
          _pulseDark: "{colors.darkGray.1}",
        },
      },
      2: {
        value: {
          base: "{colors.gray.2}",
          _dark: "{colors.darkGray.2}",
          _pulseDark: "{colors.darkGray.2}",
        },
      },
      3: {
        value: {
          base: "{colors.gray.3}",
          _dark: "{colors.darkGray.3}",
          _pulseDark: "{colors.darkGray.3}",
        },
      },
      4: {
        value: {
          base: "{colors.gray.4}",
          _dark: "{colors.darkGray.4}",
          _pulseDark: "{colors.darkGray.4}",
        },
      },
      5: {
        value: {
          base: "{colors.gray.5}",
          _dark: "{colors.darkGray.5}",
          _pulseDark: "{colors.darkGray.5}",
        },
      },
      6: {
        value: {
          base: "{colors.gray.6}",
          _dark: "{colors.darkGray.6}",
          _pulseDark: "{colors.darkGray.6}",
        },
      },
      7: {
        value: {
          base: "{colors.gray.7}",
          _dark: "{colors.darkGray.7}",
          _pulseDark: "{colors.darkGray.7}",
        },
      },
      8: {
        value: {
          base: "{colors.gray.8}",
          _dark: "{colors.darkGray.8}",
          _pulseDark: "{colors.darkGray.8}",
        },
      },
      9: {
        value: {
          base: "{colors.gray.9}",
          _dark: "{colors.darkGray.9}",
          _pulseDark: "{colors.darkGray.9}",
        },
      },
      10: {
        value: {
          base: "{colors.gray.10}",
          _dark: "{colors.darkGray.10}",
          _pulseDark: "{colors.darkGray.10}",
        },
      },
      11: {
        value: {
          base: "{colors.gray.11}",
          _dark: "{colors.darkGray.11}",
          _pulseDark: "{colors.darkGray.11}",
        },
      },
      12: {
        value: {
          base: "{colors.gray.12}",
          _dark: "{colors.darkGray.12}",
          _pulseDark: "{colors.darkGray.12}",
        },
      },
    },
    grayA: {
      DEFAULT: {
        value: {
          base: "{colors.grayAlpha.1}",
          _dark: "{colors.darkGrayAlpha.1}",
          _pulseDark: "{colors.darkGrayAlpha.1}",
        },
      },
      2: {
        value: {
          base: "{colors.grayAlpha.2}",
          _dark: "{colors.darkGrayAlpha.2}",
          _pulseDark: "{colors.darkGrayAlpha.2}",
        },
      },
      3: {
        value: {
          base: "{colors.grayAlpha.3}",
          _dark: "{colors.darkGrayAlpha.3}",
          _pulseDark: "{colors.darkGrayAlpha.3}",
        },
      },
      4: {
        value: {
          base: "{colors.grayAlpha.4}",
          _dark: "{colors.darkGrayAlpha.4}",
          _pulseDark: "{colors.darkGrayAlpha.4}",
        },
      },
      5: {
        value: {
          base: "{colors.grayAlpha.5}",
          _dark: "{colors.darkGrayAlpha.5}",
          _pulseDark: "{colors.darkGrayAlpha.5}",
        },
      },
      6: {
        value: {
          base: "{colors.grayAlpha.6}",
          _dark: "{colors.darkGrayAlpha.6}",
          _pulseDark: "{colors.darkGrayAlpha.6}",
        },
      },
      7: {
        value: {
          base: "{colors.grayAlpha.7}",
          _dark: "{colors.darkGrayAlpha.7}",
          _pulseDark: "{colors.darkGrayAlpha.7}",
        },
      },
      8: {
        value: {
          base: "{colors.grayAlpha.8}",
          _dark: "{colors.darkGrayAlpha.8}",
          _pulseDark: "{colors.darkGrayAlpha.8}",
        },
      },
      9: {
        value: {
          base: "{colors.grayAlpha.9}",
          _dark: "{colors.darkGrayAlpha.9}",
          _pulseDark: "{colors.darkGrayAlpha.9}",
        },
      },
      10: {
        value: {
          base: "{colors.grayAlpha.10}",
          _dark: "{colors.darkGrayAlpha.10}",
          _pulseDark: "{colors.darkGrayAlpha.10}",
        },
      },
      11: {
        value: {
          base: "{colors.grayAlpha.11}",
          _dark: "{colors.darkGrayAlpha.11}",
          _pulseDark: "{colors.darkGrayAlpha.11}",
        },
      },
      12: {
        value: {
          base: "{colors.grayAlpha.12}",
          _dark: "{colors.darkGrayAlpha.12}",
          _pulseDark: "{colors.darkGrayAlpha.12}",
        },
      },
    },
    success: {
      DEFAULT: {
        value: {
          base: "{colors.success.1}",
          _dark: "{colors.darkSuccess.1}",
          _pulseDark: "{colors.darkSuccess.1}",
        },
      },
      2: {
        value: {
          base: "{colors.success.2}",
          _dark: "{colors.darkSuccess.2}",
          _pulseDark: "{colors.darkSuccess.2}",
        },
      },
      3: {
        value: {
          base: "{colors.success.3}",
          _dark: "{colors.darkSuccess.3}",
          _pulseDark: "{colors.darkSuccess.3}",
        },
      },
      4: {
        value: {
          base: "{colors.success.4}",
          _dark: "{colors.darkSuccess.4}",
          _pulseDark: "{colors.darkSuccess.4}",
        },
      },
      5: {
        value: {
          base: "{colors.success.5}",
          _dark: "{colors.darkSuccess.5}",
          _pulseDark: "{colors.darkSuccess.5}",
        },
      },
      6: {
        value: {
          base: "{colors.success.6}",
          _dark: "{colors.darkSuccess.6}",
          _pulseDark: "{colors.darkSuccess.6}",
        },
      },
      7: {
        value: {
          base: "{colors.success.7}",
          _dark: "{colors.darkSuccess.7}",
          _pulseDark: "{colors.darkSuccess.7}",
        },
      },
      8: {
        value: {
          base: "{colors.success.8}",
          _dark: "{colors.darkSuccess.8}",
          _pulseDark: "{colors.darkSuccess.8}",
        },
      },
      9: {
        value: {
          base: "{colors.success.9}",
          _dark: "{colors.darkSuccess.9}",
          _pulseDark: "{colors.darkSuccess.9}",
        },
      },
      10: {
        value: {
          base: "{colors.success.10}",
          _dark: "{colors.darkSuccess.10}",
          _pulseDark: "{colors.darkSuccess.10}",
        },
      },
      11: {
        value: {
          base: "{colors.success.11}",
          _dark: "{colors.darkSuccess.11}",
          _pulseDark: "{colors.darkSuccess.11}",
        },
      },
      12: {
        value: {
          base: "{colors.success.12}",
          _dark: "{colors.darkSuccess.12}",
          _pulseDark: "{colors.darkSuccess.12}",
        },
      },
    },
    successA: {
      DEFAULT: {
        value: {
          base: "{colors.successAlpha.1}",
          _dark: "{colors.darkSuccessAlpha.1}",
          _pulseDark: "{colors.darkSuccessAlpha.1}",
        },
      },
      2: {
        value: {
          base: "{colors.successAlpha.2}",
          _dark: "{colors.darkSuccessAlpha.2}",
          _pulseDark: "{colors.darkSuccessAlpha.2}",
        },
      },
      3: {
        value: {
          base: "{colors.successAlpha.3}",
          _dark: "{colors.darkSuccessAlpha.3}",
          _pulseDark: "{colors.darkSuccessAlpha.3}",
        },
      },
      4: {
        value: {
          base: "{colors.successAlpha.4}",
          _dark: "{colors.darkSuccessAlpha.4}",
          _pulseDark: "{colors.darkSuccessAlpha.4}",
        },
      },
      5: {
        value: {
          base: "{colors.successAlpha.5}",
          _dark: "{colors.darkSuccessAlpha.5}",
          _pulseDark: "{colors.darkSuccessAlpha.5}",
        },
      },
      6: {
        value: {
          base: "{colors.successAlpha.6}",
          _dark: "{colors.darkSuccessAlpha.6}",
          _pulseDark: "{colors.darkSuccessAlpha.6}",
        },
      },
      7: {
        value: {
          base: "{colors.successAlpha.7}",
          _dark: "{colors.darkSuccessAlpha.7}",
          _pulseDark: "{colors.darkSuccessAlpha.7}",
        },
      },
      8: {
        value: {
          base: "{colors.successAlpha.8}",
          _dark: "{colors.darkSuccessAlpha.8}",
          _pulseDark: "{colors.darkSuccessAlpha.8}",
        },
      },
      9: {
        value: {
          base: "{colors.successAlpha.9}",
          _dark: "{colors.darkSuccessAlpha.9}",
          _pulseDark: "{colors.darkSuccessAlpha.9}",
        },
      },
      10: {
        value: {
          base: "{colors.successAlpha.10}",
          _dark: "{colors.darkSuccessAlpha.10}",
          _pulseDark: "{colors.darkSuccessAlpha.10}",
        },
      },
      11: {
        value: {
          base: "{colors.successAlpha.11}",
          _dark: "{colors.darkSuccessAlpha.11}",
          _pulseDark: "{colors.darkSuccessAlpha.11}",
        },
      },
      12: {
        value: {
          base: "{colors.successAlpha.12}",
          _dark: "{colors.darkSuccessAlpha.12}",
          _pulseDark: "{colors.darkSuccessAlpha.12}",
        },
      },
    },
    error: {
      DEFAULT: {
        value: {
          base: "{colors.error.1}",
          _dark: "{colors.darkError.1}",
          _pulseDark: "{colors.darkError.1}",
        },
      },
      2: {
        value: {
          base: "{colors.error.2}",
          _dark: "{colors.darkError.2}",
          _pulseDark: "{colors.darkError.2}",
        },
      },
      3: {
        value: {
          base: "{colors.error.3}",
          _dark: "{colors.darkError.3}",
          _pulseDark: "{colors.darkError.3}",
        },
      },
      4: {
        value: {
          base: "{colors.error.4}",
          _dark: "{colors.darkError.4}",
          _pulseDark: "{colors.darkError.4}",
        },
      },
      5: {
        value: {
          base: "{colors.error.5}",
          _dark: "{colors.darkError.5}",
          _pulseDark: "{colors.darkError.5}",
        },
      },
      6: {
        value: {
          base: "{colors.error.6}",
          _dark: "{colors.darkError.6}",
          _pulseDark: "{colors.darkError.6}",
        },
      },
      7: {
        value: {
          base: "{colors.error.7}",
          _dark: "{colors.darkError.7}",
          _pulseDark: "{colors.darkError.7}",
        },
      },
      8: {
        value: {
          base: "{colors.error.8}",
          _dark: "{colors.darkError.8}",
          _pulseDark: "{colors.darkError.8}",
        },
      },
      9: {
        value: {
          base: "{colors.error.9}",
          _dark: "{colors.darkError.9}",
          _pulseDark: "{colors.darkError.9}",
        },
      },
      10: {
        value: {
          base: "{colors.error.10}",
          _dark: "{colors.darkError.10}",
          _pulseDark: "{colors.darkError.10}",
        },
      },
      11: {
        value: {
          base: "{colors.error.11}",
          _dark: "{colors.darkError.11}",
          _pulseDark: "{colors.darkError.11}",
        },
      },
      12: {
        value: {
          base: "{colors.error.12}",
          _dark: "{colors.darkError.12}",
          _pulseDark: "{colors.darkError.12}",
        },
      },
    },
    errorA: {
      DEFAULT: {
        value: {
          base: "{colors.errorAlpha.1}",
          _dark: "{colors.darkErrorAlpha.1}",
          _pulseDark: "{colors.darkErrorAlpha.1}",
        },
      },
      2: {
        value: {
          base: "{colors.errorAlpha.2}",
          _dark: "{colors.darkErrorAlpha.2}",
          _pulseDark: "{colors.darkErrorAlpha.2}",
        },
      },
      3: {
        value: {
          base: "{colors.errorAlpha.3}",
          _dark: "{colors.darkErrorAlpha.3}",
          _pulseDark: "{colors.darkErrorAlpha.3}",
        },
      },
      4: {
        value: {
          base: "{colors.errorAlpha.4}",
          _dark: "{colors.darkErrorAlpha.4}",
          _pulseDark: "{colors.darkErrorAlpha.4}",
        },
      },
      5: {
        value: {
          base: "{colors.errorAlpha.5}",
          _dark: "{colors.darkErrorAlpha.5}",
          _pulseDark: "{colors.darkErrorAlpha.5}",
        },
      },
      6: {
        value: {
          base: "{colors.errorAlpha.6}",
          _dark: "{colors.darkErrorAlpha.6}",
          _pulseDark: "{colors.darkErrorAlpha.6}",
        },
      },
      7: {
        value: {
          base: "{colors.errorAlpha.7}",
          _dark: "{colors.darkErrorAlpha.7}",
          _pulseDark: "{colors.darkErrorAlpha.7}",
        },
      },
      8: {
        value: {
          base: "{colors.errorAlpha.8}",
          _dark: "{colors.darkErrorAlpha.8}",
          _pulseDark: "{colors.darkErrorAlpha.8}",
        },
      },
      9: {
        value: {
          base: "{colors.errorAlpha.9}",
          _dark: "{colors.darkErrorAlpha.9}",
          _pulseDark: "{colors.darkErrorAlpha.9}",
        },
      },
      10: {
        value: {
          base: "{colors.errorAlpha.10}",
          _dark: "{colors.darkErrorAlpha.10}",
          _pulseDark: "{colors.darkErrorAlpha.10}",
        },
      },
      11: {
        value: {
          base: "{colors.errorAlpha.11}",
          _dark: "{colors.darkErrorAlpha.11}",
          _pulseDark: "{colors.darkErrorAlpha.11}",
        },
      },
      12: {
        value: {
          base: "{colors.errorAlpha.12}",
          _dark: "{colors.darkErrorAlpha.12}",
          _pulseDark: "{colors.darkErrorAlpha.12}",
        },
      },
    },
    warning: {
      DEFAULT: {
        value: {
          base: "{colors.warning.1}",
          _dark: "{colors.darkWarning.1}",
          _pulseDark: "{colors.darkWarning.1}",
        },
      },
      2: {
        value: {
          base: "{colors.warning.2}",
          _dark: "{colors.darkWarning.2}",
          _pulseDark: "{colors.darkWarning.2}",
        },
      },
      3: {
        value: {
          base: "{colors.warning.3}",
          _dark: "{colors.darkWarning.3}",
          _pulseDark: "{colors.darkWarning.3}",
        },
      },
      4: {
        value: {
          base: "{colors.warning.4}",
          _dark: "{colors.darkWarning.4}",
          _pulseDark: "{colors.darkWarning.4}",
        },
      },
      5: {
        value: {
          base: "{colors.warning.5}",
          _dark: "{colors.darkWarning.5}",
          _pulseDark: "{colors.darkWarning.5}",
        },
      },
      6: {
        value: {
          base: "{colors.warning.6}",
          _dark: "{colors.darkWarning.6}",
          _pulseDark: "{colors.darkWarning.6}",
        },
      },
      7: {
        value: {
          base: "{colors.warning.7}",
          _dark: "{colors.darkWarning.7}",
          _pulseDark: "{colors.darkWarning.7}",
        },
      },
      8: {
        value: {
          base: "{colors.warning.8}",
          _dark: "{colors.darkWarning.8}",
          _pulseDark: "{colors.darkWarning.8}",
        },
      },
      9: {
        value: {
          base: "{colors.warning.9}",
          _dark: "{colors.darkWarning.9}",
          _pulseDark: "{colors.darkWarning.9}",
        },
      },
      10: {
        value: {
          base: "{colors.warning.10}",
          _dark: "{colors.darkWarning.10}",
          _pulseDark: "{colors.darkWarning.10}",
        },
      },
      11: {
        value: {
          base: "{colors.warning.11}",
          _dark: "{colors.darkWarning.11}",
          _pulseDark: "{colors.darkWarning.11}",
        },
      },
      12: {
        value: {
          base: "{colors.warning.12}",
          _dark: "{colors.darkWarning.12}",
          _pulseDark: "{colors.darkWarning.12}",
        },
      },
    },
    warningA: {
      DEFAULT: {
        value: {
          base: "{colors.warningAlpha.1}",
          _dark: "{colors.darkWarningAlpha.1}",
          _pulseDark: "{colors.darkWarningAlpha.1}",
        },
      },
      2: {
        value: {
          base: "{colors.warningAlpha.2}",
          _dark: "{colors.darkWarningAlpha.2}",
          _pulseDark: "{colors.darkWarningAlpha.2}",
        },
      },
      3: {
        value: {
          base: "{colors.warningAlpha.3}",
          _dark: "{colors.darkWarningAlpha.3}",
          _pulseDark: "{colors.darkWarningAlpha.3}",
        },
      },
      4: {
        value: {
          base: "{colors.warningAlpha.4}",
          _dark: "{colors.darkWarningAlpha.4}",
          _pulseDark: "{colors.darkWarningAlpha.4}",
        },
      },
      5: {
        value: {
          base: "{colors.warningAlpha.5}",
          _dark: "{colors.darkWarningAlpha.5}",
          _pulseDark: "{colors.darkWarningAlpha.5}",
        },
      },
      6: {
        value: {
          base: "{colors.warningAlpha.6}",
          _dark: "{colors.darkWarningAlpha.6}",
          _pulseDark: "{colors.darkWarningAlpha.6}",
        },
      },
      7: {
        value: {
          base: "{colors.warningAlpha.7}",
          _dark: "{colors.darkWarningAlpha.7}",
          _pulseDark: "{colors.darkWarningAlpha.7}",
        },
      },
      8: {
        value: {
          base: "{colors.warningAlpha.8}",
          _dark: "{colors.darkWarningAlpha.8}",
          _pulseDark: "{colors.darkWarningAlpha.8}",
        },
      },
      9: {
        value: {
          base: "{colors.warningAlpha.9}",
          _dark: "{colors.darkWarningAlpha.9}",
          _pulseDark: "{colors.darkWarningAlpha.9}",
        },
      },
      10: {
        value: {
          base: "{colors.warningAlpha.10}",
          _dark: "{colors.darkWarningAlpha.10}",
          _pulseDark: "{colors.darkWarningAlpha.10}",
        },
      },
      11: {
        value: {
          base: "{colors.warningAlpha.11}",
          _dark: "{colors.darkWarningAlpha.11}",
          _pulseDark: "{colors.darkWarningAlpha.11}",
        },
      },
      12: {
        value: {
          base: "{colors.warningAlpha.12}",
          _dark: "{colors.darkWarningAlpha.12}",
          _pulseDark: "{colors.darkWarningAlpha.12}",
        },
      },
    },
    info: {
      DEFAULT: {
        value: {
          base: "{colors.info.1}",
          _dark: "{colors.darkInfo.1}",
          _pulseDark: "{colors.darkInfo.1}",
        },
      },
      2: {
        value: {
          base: "{colors.info.2}",
          _dark: "{colors.darkInfo.2}",
          _pulseDark: "{colors.darkInfo.2}",
        },
      },
      3: {
        value: {
          base: "{colors.info.3}",
          _dark: "{colors.darkInfo.3}",
          _pulseDark: "{colors.darkInfo.3}",
        },
      },
      4: {
        value: {
          base: "{colors.info.4}",
          _dark: "{colors.darkInfo.4}",
          _pulseDark: "{colors.darkInfo.4}",
        },
      },
      5: {
        value: {
          base: "{colors.info.5}",
          _dark: "{colors.darkInfo.5}",
          _pulseDark: "{colors.darkInfo.5}",
        },
      },
      6: {
        value: {
          base: "{colors.info.6}",
          _dark: "{colors.darkInfo.6}",
          _pulseDark: "{colors.darkInfo.6}",
        },
      },
      7: {
        value: {
          base: "{colors.info.7}",
          _dark: "{colors.darkInfo.7}",
          _pulseDark: "{colors.darkInfo.7}",
        },
      },
      8: {
        value: {
          base: "{colors.info.8}",
          _dark: "{colors.darkInfo.8}",
          _pulseDark: "{colors.darkInfo.8}",
        },
      },
      9: {
        value: {
          base: "{colors.info.9}",
          _dark: "{colors.darkInfo.9}",
          _pulseDark: "{colors.darkInfo.9}",
        },
      },
      10: {
        value: {
          base: "{colors.info.10}",
          _dark: "{colors.darkInfo.10}",
          _pulseDark: "{colors.darkInfo.10}",
        },
      },
      11: {
        value: {
          base: "{colors.info.11}",
          _dark: "{colors.darkInfo.11}",
          _pulseDark: "{colors.darkInfo.11}",
        },
      },
      12: {
        value: {
          base: "{colors.info.12}",
          _dark: "{colors.darkInfo.12}",
          _pulseDark: "{colors.darkInfo.12}",
        },
      },
    },
    infoA: {
      DEFAULT: {
        value: {
          base: "{colors.infoAlpha.1}",
          _dark: "{colors.darkInfoAlpha.1}",
          _pulseDark: "{colors.darkInfoAlpha.1}",
        },
      },
      2: {
        value: {
          base: "{colors.infoAlpha.2}",
          _dark: "{colors.darkInfoAlpha.2}",
          _pulseDark: "{colors.darkInfoAlpha.2}",
        },
      },
      3: {
        value: {
          base: "{colors.infoAlpha.3}",
          _dark: "{colors.darkInfoAlpha.3}",
          _pulseDark: "{colors.darkInfoAlpha.3}",
        },
      },
      4: {
        value: {
          base: "{colors.infoAlpha.4}",
          _dark: "{colors.darkInfoAlpha.4}",
          _pulseDark: "{colors.darkInfoAlpha.4}",
        },
      },
      5: {
        value: {
          base: "{colors.infoAlpha.5}",
          _dark: "{colors.darkInfoAlpha.5}",
          _pulseDark: "{colors.darkInfoAlpha.5}",
        },
      },
      6: {
        value: {
          base: "{colors.infoAlpha.6}",
          _dark: "{colors.darkInfoAlpha.6}",
          _pulseDark: "{colors.darkInfoAlpha.6}",
        },
      },
      7: {
        value: {
          base: "{colors.infoAlpha.7}",
          _dark: "{colors.darkInfoAlpha.7}",
          _pulseDark: "{colors.darkInfoAlpha.7}",
        },
      },
      8: {
        value: {
          base: "{colors.infoAlpha.8}",
          _dark: "{colors.darkInfoAlpha.8}",
          _pulseDark: "{colors.darkInfoAlpha.8}",
        },
      },
      9: {
        value: {
          base: "{colors.infoAlpha.9}",
          _dark: "{colors.darkInfoAlpha.9}",
          _pulseDark: "{colors.darkInfoAlpha.9}",
        },
      },
      10: {
        value: {
          base: "{colors.infoAlpha.10}",
          _dark: "{colors.darkInfoAlpha.10}",
          _pulseDark: "{colors.darkInfoAlpha.10}",
        },
      },
      11: {
        value: {
          base: "{colors.infoAlpha.11}",
          _dark: "{colors.darkInfoAlpha.11}",
          _pulseDark: "{colors.darkInfoAlpha.11}",
        },
      },
      12: {
        value: {
          base: "{colors.infoAlpha.12}",
          _dark: "{colors.darkInfoAlpha.12}",
          _pulseDark: "{colors.darkInfoAlpha.12}",
        },
      },
    },
  },
});

export const USER_COLORS = [
  "gray",
  "sand",
  "tomato",
  "red",
  "ruby",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "iris",
  "indigo",
  "cyan",
  "teal",
  "jade",
  "green",
  "grass",
  "bronze",
  "gold",
  "brown",
  "orange",
  "amber",
  "yellow",
  "lime",
  "mint",
  "sky",
];
