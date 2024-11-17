import { Theme } from '@styles';
import { ToasterConfig } from '../Toaster';

const mappedColors: Record<ToasterConfig['status'], keyof Theme['colors']> = {
  error: 'feedbackError',
  success: 'feedbackSuccess',
  warning: 'feedbackWarning',
};
export function buildColor(status?: ToasterConfig['status']) {
  return status ? mappedColors[status] : mappedColors.success;
}
