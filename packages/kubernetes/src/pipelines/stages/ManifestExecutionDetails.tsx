import React from 'react';

import type { IExecutionDetailsSectionProps } from '@spinnaker/core';
import { ExecutionDetailsSection, StageFailureMessage } from '@spinnaker/core';

import type { ILabelSelectors, IManifestNamesByNamespace } from './ManifestCoordinates';
import { ManifestCoordinates } from './ManifestCoordinates';

interface IManifestExecutionDetailsProps extends IExecutionDetailsSectionProps {
  context: {
    account: string;
    manifestName: string;
    location: string;
    cluster: string;
    criteria: string;
    labelSelectors: ILabelSelectors;
    manifestNamesByNamespace: IManifestNamesByNamespace;
  };
}

export const manifestExecutionDetails = (stageName: string) => {
  return class ManifestExecutionDetails extends React.Component<IManifestExecutionDetailsProps> {
    public static title = stageName;

    public render() {
      const { stage, current, name } = this.props;
      const {
        account,
        manifestName,
        location,
        cluster,
        criteria,
        labelSelectors,
        manifestNamesByNamespace,
      } = stage.context;
      return (
        <ExecutionDetailsSection name={name} current={current}>
          <div className="row">
            <div className="col-md-9">
              <dl className="dl-narrow dl-horizontal">
                <ManifestCoordinates
                  account={account}
                  manifestName={manifestName}
                  location={location}
                  cluster={cluster}
                  criteria={criteria}
                  labelSelectors={labelSelectors}
                  manifestNamesByNamespace={manifestNamesByNamespace}
                />
              </dl>
            </div>
          </div>
          <StageFailureMessage stage={stage} message={stage.failureMessage} />
        </ExecutionDetailsSection>
      );
    }
  };
};
