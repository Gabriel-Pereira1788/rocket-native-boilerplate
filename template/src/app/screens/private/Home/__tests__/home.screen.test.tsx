import { AppStack } from '@router';
import {
  act,
  fireEvent,
  mockListGitRepoFollowers,
  renderScreen,
  screen,
} from '@test';

import { server, gitRepoServerHandlerUtils } from '../../../../../test/server';
async function customRenderScreen() {
  renderScreen(<AppStack />);

  return {
    followersCards: await screen.findAllByTestId('follower-card'),
    followersListElement: screen.queryByTestId('followers-list'),
  };
}

function addNewData() {
  gitRepoServerHandlerUtils.addInMemoryData({
    login: 'John-Doe',
    id: 123456,
    node_id: '1234-y2g',
    avatar_url: 'https://example.com',
    gravatar_id: '',
    url: 'https://example.com',
    html_url: 'https://example.com',
    followers_url: 'https://example.com',
    following_url: 'https://example.com',
    gists_url: 'https://example.com',
    starred_url: 'https://example.com',
    subscriptions_url: 'https://example.com',
    organizations_url: 'https://example.com',
    repos_url: 'https://example.com',
    events_url: 'https://example.com',
    received_events_url: 'https://example.com',
    type: 'User',
    user_view_type: 'public',
    site_admin: false,
  });
}

beforeAll(() => {
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<HomeScreen />', () => {
  it('Flow: should be render followers users from api', async () => {
    const { followersCards } = await customRenderScreen();

    expect(followersCards.length).toEqual(mockListGitRepoFollowers.length);
  });

  it('Flow: should be redirect to follower details screen', async () => {
    const { followersCards } = await customRenderScreen();

    //1) - Check if followers cards is rendered.
    expect(followersCards.length).toEqual(mockListGitRepoFollowers.length);

    //2) Press to first follower card
    act(() => {
      fireEvent.press(followersCards[0]);
    });

    //3) Check redirect correctly to follower details screen
    const followerDetailsElement = await screen.findByText(
      mockListGitRepoFollowers[0].login,
    );
    expect(followerDetailsElement).toBeTruthy();

    //4) go back to previous screen
    const goBackButton = screen.getByTestId('go-back-button');
    act(() => {
      fireEvent.press(goBackButton);
    });

    //5) Check replace to previous screen correctly
    expect(followersCards.length).toEqual(mockListGitRepoFollowers.length);
  });

  it('Flow: should be refresh content and render new item', async () => {
    const { followersListElement } = await customRenderScreen();

    //1) check if list element is render
    expect(followersListElement).toBeDefined();

    //2) add new data for render
    addNewData();

    //3) execute the refresh action
    const { refreshControl } = followersListElement!.props;
    await act(async () => {
      await refreshControl.props.onRefresh();
    });

    //4) render new data cards
    const newFollowersCardsRender = await screen.findAllByTestId(
      'follower-card',
    );

    //5) check if new followers cards is bigger than older state
    expect(newFollowersCardsRender.length).toEqual(
      mockListGitRepoFollowers.length,
    );
  });
});
