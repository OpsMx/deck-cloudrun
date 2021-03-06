import React from 'react';

import type { ITriggerTemplateComponentProps } from './TriggerTemplate';
import type { IPipelineCommand } from '../../domain';

/**
 * This is only necessary because manualPipelineExecution is still in angular
 * Once it is converted to React, this whole component can be removed
 */
export class StageManualComponents extends React.Component<{
  command: IPipelineCommand;
  updateCommand: (path: string, value: any) => void;
  components: Array<React.ComponentType<ITriggerTemplateComponentProps>>;
}> {
  public render() {
    const { command, components, updateCommand } = this.props;
    return components.map((Comp, index) => <Comp key={index} command={command} updateCommand={updateCommand} />);
  }
}
