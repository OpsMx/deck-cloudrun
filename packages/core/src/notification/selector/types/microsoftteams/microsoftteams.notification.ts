import { MicrosoftTeamsNotificationType } from './MicrosoftTeamsNotificationType';
import type { INotificationTypeConfig } from '../../../../domain';

export const microsoftTeamsNotification: INotificationTypeConfig = {
  component: MicrosoftTeamsNotificationType,
  key: 'microsoftteams',
  label: 'Microsoft Teams',
};
