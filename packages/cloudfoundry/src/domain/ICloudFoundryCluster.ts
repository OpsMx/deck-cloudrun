import type { ICloudFoundryServerGroup } from './ICloudFoundryServerGroup';

export interface ICloudFoundryCluster {
  name: string;
  serverGroups: ICloudFoundryServerGroup[];
}
