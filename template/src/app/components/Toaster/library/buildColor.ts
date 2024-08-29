import { ToasterConfig } from '../Toaster';

const mappedColors: Record<ToasterConfig['status'], string> = {
  error: '#dc2626',
  success: '#bef214',
  warning: '#fde047',
};
export function buildColor(status?: ToasterConfig['status']) {
  return status ? mappedColors[status] : mappedColors.success;
}
