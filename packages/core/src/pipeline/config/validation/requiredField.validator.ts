import { PipelineConfigValidator } from './PipelineConfigValidator';
import type { IRequiredField } from './baseRequiredField.validator';
import { BaseRequiredFieldValidator } from './baseRequiredField.validator';
import type { IBaseRequiredFieldValidationConfig } from './baseRequiredField.validator';
import type { IPipeline, IStage, IStageOrTriggerTypeConfig, ITrigger } from '../../../domain';

export type IRequiredFieldValidationConfig = IBaseRequiredFieldValidationConfig & IRequiredField;

export class RequiredFieldValidator extends BaseRequiredFieldValidator {
  protected passesValidation(
    pipeline: IPipeline,
    stage: IStage | ITrigger,
    validationConfig: IRequiredFieldValidationConfig,
  ): boolean {
    return this.fieldIsValid(pipeline, stage, validationConfig.fieldName);
  }

  protected validationMessage(
    validationConfig: IRequiredFieldValidationConfig,
    config: IStageOrTriggerTypeConfig,
  ): string {
    const fieldLabel: string = this.printableFieldLabel(validationConfig);
    return validationConfig.message || `<strong>${fieldLabel}</strong> is a required field for ${config.label} stages.`;
  }
}

PipelineConfigValidator.registerValidator('requiredField', new RequiredFieldValidator());
