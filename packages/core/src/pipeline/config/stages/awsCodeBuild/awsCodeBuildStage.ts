import { AwsCodeBuildExecutionDetails } from './AwsCodeBuildExecutionDetails';
import { AwsCodeBuildStageConfig } from './AwsCodeBuildStageConfig';
import { validate } from './AwsCodeBuildValidator';
import { ExecutionDetailsTasks } from '../common';
import { Registry } from '../../../../registry';

Registry.pipeline.registerStage({
  label: 'AWS CodeBuild',
  description: 'Trigger a build in AWS CodeBuild',
  key: 'awsCodeBuild',
  producesArtifacts: true,
  component: AwsCodeBuildStageConfig,
  validateFn: validate,
  executionDetailsSections: [AwsCodeBuildExecutionDetails, ExecutionDetailsTasks],
});
