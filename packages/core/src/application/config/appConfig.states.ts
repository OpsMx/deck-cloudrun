import { module } from 'angular';

import { ApplicationConfig } from './ApplicationConfig';
import type { ApplicationStateProvider } from '../application.state.provider';
import { APPLICATION_STATE_PROVIDER } from '../application.state.provider';
import type { INestedState } from '../../navigation';

export const APP_CONFIG_STATES = 'spinnaker.core.application.states';
module(APP_CONFIG_STATES, [APPLICATION_STATE_PROVIDER]).config([
  'applicationStateProvider',
  (applicationStateProvider: ApplicationStateProvider) => {
    const configState: INestedState = {
      name: 'config',
      url: '/config?section',
      views: {
        insight: {
          component: ApplicationConfig,
          $type: 'react',
        },
      },
      params: {
        section: {
          dynamic: true,
        },
      },
      data: {
        pageTitleSection: {
          title: 'Config',
        },
      },
    };

    applicationStateProvider.addChildState(configState);
  },
]);
