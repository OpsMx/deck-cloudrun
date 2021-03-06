import React from 'react';

import type { IOverridableProps } from '@spinnaker/core';
import { Overridable } from '@spinnaker/core';

export interface ITargetGroupDetailsProps extends IOverridableProps {}

@Overridable('loadBalancer.targetGroupDetails')
export class TargetGroupDetails extends React.Component<ITargetGroupDetailsProps> {
  public render() {
    return <h3>Target Group Details</h3>;
  }
}
