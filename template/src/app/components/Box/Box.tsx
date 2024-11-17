import { createBox, BoxProps as BoxPropsRE } from '@shopify/restyle';
import React from 'react';
import { Theme } from '@styles';

export const Box = createBox<Theme>();

export type BoxProps = BoxPropsRE<Theme>;
