import { InputStatus } from '../types';
export function buildStatusStyles(status: InputStatus) {
  switch (status) {
    case 'error':
      return 'bg-white border-2 border-red-500';
    case 'disabled':
      return 'border-gray-300';

    default:
      return 'bg-white';
  }
}
