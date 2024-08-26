import {ButtonProps} from '../Button';

export function buildVariant(variant: ButtonProps['variant']) {
  switch (variant) {
    case 'filled':
      return {
        container: 'bg-zinc-900 h-16 w-full',
        text: 'text-white',
      };
    case 'transparent':
      return {
        container: 'bg-transparent h-auto w-auto',
        text: 'text-zinc-500 font-bold',
      };
    default:
      return {
        container: 'bg-transparent border-2 border-zinc-400 h-16 w-full',
        text: 'text-zinc-500',
      };
  }
}
