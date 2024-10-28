import { RouteProp } from '@react-navigation/native';
import { AppStackParamList } from '@router';
import {
  buildNavigationMock,
  mockListGitRepoFollowers,
  renderScreen,
  screen,
} from '@test';

import { server } from '../../../../../test/server';
import { FollowerDetailsScreen } from '../follower-details.screen';

const navigation = buildNavigationMock<
  AppStackParamList,
  'FollowerDetailsScreen'
>();

const route: RouteProp<AppStackParamList, 'FollowerDetailsScreen'> = {
  key: 'FollowersDetailsScreen',
  name: 'FollowerDetailsScreen',
  params: {
    id: 12345,
  },
};

async function getElements() {
  renderScreen(<FollowerDetailsScreen navigation={navigation} route={route} />);
  const mockFollowerDetails = mockListGitRepoFollowers[0];
  return {
    usernameElement: await screen.findByText(mockFollowerDetails.login),
    fullNameElement: await screen.findByText(mockFollowerDetails!.name!),
    bioElement: await screen.findByText(mockFollowerDetails!.bio!),
  };
}

beforeAll(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<FollowerDetailsScreen />', () => {
  it('Flow: should be render api data correctly', async () => {
    renderScreen(
      <FollowerDetailsScreen navigation={navigation} route={route} />,
    );
    //1) Verify that the loading element is displayed before the request completes

    const loadingElementFirstRender = screen.getByTestId(
      'loading-details-element',
    );

    expect(loadingElementFirstRender).toBeDefined();

    //2) Wait for the request to complete and get the rendered detail elements

    const { bioElement, fullNameElement, usernameElement } =
      await getElements();

    expect(bioElement).toBeDefined();
    expect(fullNameElement).toBeDefined();
    expect(usernameElement).toBeDefined();

    //3) After the request is completed, verify that the loading element has been unmounted

    const loadingElementLastRender = screen.queryByTestId(
      'loading-details-element',
    );
    expect(loadingElementLastRender).toBeNull();
  });
});
