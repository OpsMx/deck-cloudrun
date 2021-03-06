import type { IScope } from 'angular';

import type { Application, IStageConstant } from '@spinnaker/core';

import type { IAppengineAccount } from './IAppengineAccount';

export interface IAppengineStage {
  credentials: string;
  region: string;
  target?: string;
  cloudProvider: string;
  isNew?: boolean;
  interestingHealthProviderNames: string[];
}

export interface IAppengineStageScope extends IScope {
  accounts: IAppengineAccount[];
  targets: IStageConstant[];
  stage: IAppengineStage;
  application: Application;
  platformHealth: string;
}
