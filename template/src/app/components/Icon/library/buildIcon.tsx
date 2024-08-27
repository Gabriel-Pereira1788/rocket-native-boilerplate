import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft';
import Email from 'phosphor-react-native/src/icons/Envelope';
import Eye from 'phosphor-react-native/src/icons/Eye';
import EyeClosed from 'phosphor-react-native/src/icons/EyeClosed';
import EyeSlash from 'phosphor-react-native/src/icons/EyeSlash';
import Lock from 'phosphor-react-native/src/icons/Lock';

import { IconProps } from '../Icon';

export const mappedIcons = {
  email: Email,
  lock: Lock,
  eye: Eye,
  eyeClosed: EyeClosed,
  eyeSlash: EyeSlash,
  arrowLeft: ArrowLeft,
};
export function buildIcon(iconName: IconProps['iconName']) {
  return mappedIcons[iconName];
}
