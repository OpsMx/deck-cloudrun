import { module } from 'angular';

import { AZURE_SERVERGROUP_SERVERGROUP_TRANSFORMER } from '../serverGroup.transformer';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_SERVERGROUPINSTANCEARCHETYPE_CONTROLLER } from './wizard/ServerGroupInstanceArchetype.controller';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_SERVERGROUPINSTANCETYPE_CONTROLLER } from './wizard/ServerGroupInstanceType.controller';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_ADVANCEDSETTINGS_SERVERGROUPADVANCEDSETTINGS_CONTROLLER } from './wizard/advancedSettings/ServerGroupAdvancedSettings.controller';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_ADVANCEDSETTINGS_ADVANCEDSETTINGSSELECTOR_DIRECTIVE } from './wizard/advancedSettings/advancedSettingsSelector.directive';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_BASICSETTINGS_SERVERGROUPBASICSETTINGS_CONTROLLER } from './wizard/basicSettings/ServerGroupBasicSettings.controller';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_CAPACITY_CAPACITYSELECTOR_DIRECTIVE } from './wizard/capacity/capacitySelector.directive';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_HEALTHSETTINGS_SERVERGROUPHEALTHSETTINGS_CONTROLLER } from './wizard/healthSettings/ServerGroupHealthSettings.controller';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_HEALTHSETTINGS_HEALTHSETTINGSSELECTOR_DIRECTIVE } from './wizard/healthSettings/healthSettingsSelector.directive';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_IMAGESETTINGS_SERVERGROUPIMAGESETTINGS_CONTROLLER } from './wizard/image/ServerGroupImageSettings.controller';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_IMAGESETTINGS_IMAGESETTINGS_DIRECTIVE } from './wizard/image/imageSettingsSelector.directive';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_LOADBALANCERS_SERVERGROUPLOADBALANCERS_CONTROLLER } from './wizard/loadBalancers/ServerGroupLoadBalancers.controller';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_LOADBALANCERS_SERVERGROUPLOADBALANCERSSELECTOR_DIRECTIVE } from './wizard/loadBalancers/serverGroupLoadBalancersSelector.directive';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_NETWORKSETTINGS_SERVERGROUPNETWORKSETTINGS_CONTROLLER } from './wizard/networkSettings/ServerGroupNetworkSettings.controller';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_NETWORKSETTINGS_SERVERGROUPNETWORKSETTINGSSELECTOR_DIRECTIVE } from './wizard/networkSettings/ServerGroupNetworkSettingsSelector.directive';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_SECURITYGROUP_SERVERGROUPSECURITYGROUPS_CONTROLLER } from './wizard/securityGroup/ServerGroupSecurityGroups.controller';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_SECURITYGROUP_SERVERGROUPSECURITYGROUPSSELECTOR_DIRECTIVE } from './wizard/securityGroup/serverGroupSecurityGroupsSelector.directive';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_TAGS_TAGSSELECTOR_DIRECTIVE } from './wizard/tags/tagsSelector.directive';
import { AZURE_SERVERGROUP_CONFIGURE_WIZARD_ZONES_ZONESELECTOR_DIRECTIVE } from './wizard/zones/zoneSelector.directive';

('use strict');

export const AZURE_SERVERGROUP_CONFIGURE_SERVERGROUP_CONFIGURE_AZURE_MODULE = 'spinnaker.azure.serverGroup.configure';
export const name = AZURE_SERVERGROUP_CONFIGURE_SERVERGROUP_CONFIGURE_AZURE_MODULE; // for backwards compatibility
module(AZURE_SERVERGROUP_CONFIGURE_SERVERGROUP_CONFIGURE_AZURE_MODULE, [
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_BASICSETTINGS_SERVERGROUPBASICSETTINGS_CONTROLLER,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_LOADBALANCERS_SERVERGROUPLOADBALANCERS_CONTROLLER,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_SERVERGROUPINSTANCEARCHETYPE_CONTROLLER,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_SERVERGROUPINSTANCETYPE_CONTROLLER,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_SECURITYGROUP_SERVERGROUPSECURITYGROUPS_CONTROLLER,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_ADVANCEDSETTINGS_SERVERGROUPADVANCEDSETTINGS_CONTROLLER,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_HEALTHSETTINGS_HEALTHSETTINGSSELECTOR_DIRECTIVE,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_IMAGESETTINGS_IMAGESETTINGS_DIRECTIVE,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_IMAGESETTINGS_SERVERGROUPIMAGESETTINGS_CONTROLLER,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_HEALTHSETTINGS_SERVERGROUPHEALTHSETTINGS_CONTROLLER,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_LOADBALANCERS_SERVERGROUPLOADBALANCERSSELECTOR_DIRECTIVE,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_CAPACITY_CAPACITYSELECTOR_DIRECTIVE,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_SECURITYGROUP_SERVERGROUPSECURITYGROUPSSELECTOR_DIRECTIVE,
  AZURE_SERVERGROUP_SERVERGROUP_TRANSFORMER,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_ADVANCEDSETTINGS_ADVANCEDSETTINGSSELECTOR_DIRECTIVE,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_NETWORKSETTINGS_SERVERGROUPNETWORKSETTINGS_CONTROLLER,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_NETWORKSETTINGS_SERVERGROUPNETWORKSETTINGSSELECTOR_DIRECTIVE,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_ZONES_ZONESELECTOR_DIRECTIVE,
  AZURE_SERVERGROUP_CONFIGURE_WIZARD_TAGS_TAGSSELECTOR_DIRECTIVE,
]);
