import { InputProps } from '../Input';

export function buildInputStatus(props: InputProps) {
  if (props.errorMessage) {
    return 'error';
  }

  if (props.disabled) {
    return 'disabled';
  }
  return 'default';
}
