import { createTheme } from '@shopify/restyle';
import { palette } from './palette';

export const theme = createTheme({
  colors: {
    background: palette.background,
    primaryMain: palette.primary.main,
    primaryLight: palette.primary.light,
    primaryDark: palette.primary.dark,

    secondaryMain: palette.secondary.main,
    secondaryLight: palette.secondary.light,
    secondaryDark: palette.secondary.dark,

    feedbackSuccess: palette.feedback.success,
    feedbackError: palette.feedback.error,
    feedbackWarning: palette.feedback.warning,
    feedbackInfo: palette.feedback.info,

    neutralWhite: palette.neutral.white,
    neutralBackground: palette.neutral.background,
    neutralGray100: palette.neutral.gray100,
    neutralGray200: palette.neutral.gray200,
    neutralGray300: palette.neutral.gray300,
    neutralGray400: palette.neutral.gray400,
    neutralGray500: palette.neutral.gray500,
    neutralGray600: palette.neutral.gray600,
    neutralGray700: palette.neutral.gray700,
    neutralGray800: palette.neutral.gray800,
    neutralGray900: palette.neutral.gray900,
    neutralBlack: palette.neutral.black,

    stateDisabled: palette.state.disabled,
    stateHover: palette.state.hover,
    statePressed: palette.state.pressed,

    textPrimary: palette.text.primary,
    textSecondary: palette.text.secondary,
    textDisabled: palette.text.disabled,
    textInverse: palette.text.inverse,

    borderLight: palette.border.light,
    borderMedium: palette.border.medium,
    borderDark: palette.border.dark,
  },
  spacing: {
    sp3: 3,
    sp5: 5,
    sp7: 7,
    sp10: 10,
    sp12: 12,
    sp15: 15,
    sp16: 16,
    sp17: 17,
    sp20: 20,
    sp23: 23,
    sp25: 25,
    sp28: 28,
    sp40: 40,
    sp48: 48,
    sp50: 50,
    sp60: 60,
    sp80: 80,
  },
  borderRadii: {
    rd4: 4,
    rd8: 8,
    rd12: 12,
    rd15: 15,
    rd40: 40,
    rd100: 100,
  },
});

export type Theme = typeof theme;
