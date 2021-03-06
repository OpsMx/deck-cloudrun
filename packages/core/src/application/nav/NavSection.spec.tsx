import { shallow } from 'enzyme';
import React from 'react';

import {
  mockLoadBalancerDataSourceConfig,
  mockPipelineDataSourceConfig,
  mockServerGroupDataSourceConfig,
} from '@spinnaker/mocks';

import { NavSection } from './NavSection';
import { ApplicationModelBuilder } from '../../application';

describe('NavItem', () => {
  it('should render multiple categories', () => {
    const app = ApplicationModelBuilder.createApplicationForTests(
      'testapp',
      mockPipelineDataSourceConfig,
      mockLoadBalancerDataSourceConfig,
      mockServerGroupDataSourceConfig,
    );

    const wrapper = shallow(<NavSection app={app} dataSources={app.dataSources} />);
    const nodes = wrapper.children();
    expect(nodes.length).toEqual(3);
  });

  it('should not render if no dataSources', () => {
    const app = ApplicationModelBuilder.createApplicationForTests('testapp');

    const wrapper = shallow(<NavSection app={app} dataSources={[]} />);
    const nodes = wrapper.children();
    expect(nodes.length).toEqual(0);
  });
});
