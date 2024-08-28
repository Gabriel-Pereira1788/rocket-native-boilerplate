import { IconProps } from '../../Icon';
import { ToasterConfig } from '../Toaster';

const mappedIcons: Record<ToasterConfig['status'], IconProps['iconName']> = {
  success: 'check',
  error: 'x',
  warning: 'warning',
};
export function buildIconName(status?: ToasterConfig['status']) {
  return status ? mappedIcons[status] : null;
}
