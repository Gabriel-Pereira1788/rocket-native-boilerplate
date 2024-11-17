import { Theme } from '@styles';
import { BoxProps } from '../../Box/Box';
import { ButtonProps } from '../Button';

export function buildVariant(variant: ButtonProps['variant']): {
  container: BoxProps;
  textColor: keyof Theme['colors'];
} {
  switch (variant) {
    case 'filled':
      return {
        container: {
          bg: 'primaryMain',
          height: 64,
          width: '100%',
        },
        textColor: 'neutralWhite',
      };

    case 'transparent':
      return {
        container: {
          height: 'auto',
          width: 'auto',
        },
        textColor: 'textPrimary',
      };
    default:
      return {
        container: {
          borderRadius: 'rd8',
          borderColor: 'borderLight',
          borderWidth: 2,
          height: 64,
          width: '100%',
        },
        textColor: 'textPrimary',
      };
  }
}
