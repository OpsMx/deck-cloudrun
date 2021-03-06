import React from 'react';

import { StandardFieldLayout } from './StandardFieldLayout';
import type { ILayoutProps } from './interface';

export const LayoutContext = React.createContext<React.ComponentType<ILayoutProps>>(StandardFieldLayout);
export const { Provider: LayoutProvider, Consumer: LayoutConsumer } = LayoutContext;
