import { AppStack } from '@router';
import {
  act,
  fireEvent,
  mockListGitRepoFollowers,
  renderScreen,
  screen,
  server,
} from '@test';

async function customRenderScreen() {
  renderScreen(<AppStack />);

  return {
    followersCards: await screen.findAllByTestId('follower-card'),
  };
}

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
});

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
    expect(screen.getByText('FollowerDetails')).toBeTruthy();

    //4) go back to previous screen
    const goBackButton = screen.getByTestId('go-back-button');
    act(() => {
      fireEvent.press(goBackButton);
    });

    //5) Check replace to previous screen correctly
    expect(followersCards.length).toEqual(mockListGitRepoFollowers.length);
  });
});
