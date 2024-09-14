import { ToasterConfig } from '../Toaster';

const mappedColors: Record<ToasterConfig['status'], string> = {
  error: '#dc2626',
  success: '#16a34a',
  warning: '#fde047',
};
export function buildColor(status?: ToasterConfig['status']) {
  return status ? mappedColors[status] : mappedColors.success;
}
