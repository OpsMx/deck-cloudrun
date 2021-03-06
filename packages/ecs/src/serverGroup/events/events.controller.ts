import type { IController } from 'angular';
import { module } from 'angular';
import type { IModalServiceInstance } from 'angular-ui-bootstrap';

import type { IServerGroup } from '@spinnaker/core';

import type { IEventDescription } from './serverGroupEventsReader.service';
import { ServerGroupEventsReader } from './serverGroupEventsReader.service';

export interface IScalingActivitiesViewState {
  loading: boolean;
  error: boolean;
}

export class EventsController implements IController {
  public viewState: IScalingActivitiesViewState;
  public events: IEventDescription[] = [];

  public static $inject = ['$uibModalInstance', 'serverGroup'];
  public constructor(private $uibModalInstance: IModalServiceInstance, public serverGroup: IServerGroup) {}

  public $onInit(): void {
    this.viewState = {
      loading: true,
      error: false,
    };

    ServerGroupEventsReader.getEvents(this.serverGroup).then(
      (rawEvents: IEventDescription[]) => {
        this.viewState.loading = false;
        this.events = rawEvents;
      },
      () => {
        this.viewState.error = true;
      },
    );
  }

  public close(): void {
    this.$uibModalInstance.close();
  }
}

export const EVENTS_CTRL = 'spinnaker.ecs.serverGroup.events.controller';
module(EVENTS_CTRL, []).controller('EventsController', EventsController);
