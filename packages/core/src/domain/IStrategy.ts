import type { IPipeline } from './IPipeline';

export interface IStrategy extends IPipeline {
  strategy: boolean;
}
