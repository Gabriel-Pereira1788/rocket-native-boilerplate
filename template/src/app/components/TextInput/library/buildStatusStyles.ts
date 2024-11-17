import { BoxProps } from '../../Box/Box';
import { InputStatus } from '../types';

export function buildStatusStyles(status: InputStatus): BoxProps {
  switch (status) {
    case 'error':
      return {
        bg: 'neutralWhite',
        borderColor: 'feedbackError',
        borderWidth: 2,
      };
    case 'disabled':
      return {
        borderColor: 'neutralGray300',
      };
    default:
      return {
        bg: 'neutralWhite',
      };
  }
}
