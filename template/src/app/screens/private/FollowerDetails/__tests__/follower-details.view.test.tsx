import { render, screen } from '@test';

import { FollowerDetailsController } from '../follower-details.controller';
import { FollowerDetailsView } from '../follower-details.view';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: mockGoBack,
    }),
  };
});

function customRender(controller: FollowerDetailsController) {
  render(<FollowerDetailsView controller={controller} />);

  return {
    usernameElement: screen.getByText(controller.details!.username!),
    fullNameElement: screen.getByText(controller.details!.fullname!),
    bioElement: screen.getByText(controller.details!.bio!),
    loadingElement: screen.queryByTestId('loading-details-element'),
  };
}

describe('<FollowerDetailsView />', () => {
  it('should be render component correctly', () => {
    const mockController: FollowerDetailsController = {
      details: {
        avatarUrl: 'http://www.url.com',
        id: 1,
        bio: 'bio',
        username: '@johndoe',
        fullname: 'John doe',
      },
      isError: false,
      loading: false,
    };
    const { usernameElement, fullNameElement, bioElement } =
      customRender(mockController);

    expect(usernameElement).toBeTruthy();
    expect(fullNameElement).toBeTruthy();
    expect(bioElement).toBeTruthy();
  });

  it('should be render loading component', () => {
    const mockController: FollowerDetailsController = {
      details: {
        avatarUrl: 'http://www.url.com',
        id: 1,
        bio: 'bio',
        username: '@johndoe',
        fullname: 'John doe',
      },
      isError: false,
      loading: true,
    };
    const { loadingElement } = customRender(mockController);

    expect(loadingElement).toBeTruthy();
  });
});
