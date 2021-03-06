// Random deck initialization code
import type { StateService } from '@uirouter/core';
import type { IRootScopeService } from 'angular';

import { bootstrapModule } from './bootstrap.module';
import type { CacheInitializerService } from '../cache';
import { SETTINGS } from '../config';

bootstrapModule.run([
  '$rootScope',
  '$state',
  ($rootScope: IRootScopeService, $state: StateService) => {
    $rootScope.feature = SETTINGS.feature;
    $rootScope.$state = $state; // TODO: Do we really need this?
  },
]);

bootstrapModule.run([
  'cacheInitializer',
  (cacheInitializer: CacheInitializerService) => {
    cacheInitializer.initialize();
  },
]);
