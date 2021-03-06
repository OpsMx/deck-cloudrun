import { uniq } from 'lodash';
import { $q } from 'ngimport';

import type { ICloudProviderConfig } from '../CloudProviderRegistry';
import { CloudProviderRegistry } from '../CloudProviderRegistry';
import { ProviderSelectionModal } from './ProviderSelectionModal';
import type { IAccountDetails } from '../../account';
import { AccountService } from '../../account';
import type { Application } from '../../application';
import { SETTINGS } from '../../config';

export type IProviderSelectionFilter = (app: Application, acc: IAccountDetails, prov: ICloudProviderConfig) => boolean;

export class ProviderSelectionService {
  public static selectProvider(
    application: Application,
    feature: string,
    filterFn?: IProviderSelectionFilter,
  ): PromiseLike<string> {
    return AccountService.applicationAccounts(application).then((accounts: IAccountDetails[]) => {
      let reducedAccounts: IAccountDetails[] = [];
      if (feature) {
        reducedAccounts = accounts.filter((a) => CloudProviderRegistry.hasValue(a.cloudProvider, feature));
      }

      if (filterFn) {
        reducedAccounts = reducedAccounts.filter((acc: IAccountDetails) => {
          return filterFn(application, acc, CloudProviderRegistry.getProvider(acc.cloudProvider));
        });
      }
      // reduce the accounts to the smallest, unique collection taking into consideration the useProvider values
      const providerOptions = uniq(
        reducedAccounts
          .filter((a) => {
            return !CloudProviderRegistry.isDisabled(a.cloudProvider);
          })
          .map((a) => {
            const providerFeature = CloudProviderRegistry.getProvider(a.cloudProvider)[feature] || {};
            return providerFeature.useProvider || a.cloudProvider;
          }),
      );

      let provider;
      if (providerOptions.length > 1) {
        return ProviderSelectionModal.show({ providerOptions });
      } else if (providerOptions.length === 1) {
        provider = $q.when(providerOptions[0]);
      } else {
        provider = $q.when(SETTINGS.defaultProvider || 'aws');
      }
      return provider;
    });
  }

  public static isDisabled(app: Application): PromiseLike<boolean> {
    return AccountService.applicationAccounts(app).then((accounts: IAccountDetails[]) => {
      let isDisable = false;
      const cloudProvidersEnabled = accounts.filter((a) => {
        return !CloudProviderRegistry.isDisabled(a.cloudProvider);
      });

      if (cloudProvidersEnabled.length === 0) {
        isDisable = true;
      }
      return isDisable;
    });
  }
}
