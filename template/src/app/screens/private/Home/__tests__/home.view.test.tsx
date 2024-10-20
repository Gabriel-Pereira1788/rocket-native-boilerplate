import { fireEvent, render, screen } from '@test';

import { HomeController } from '../home.controller';
import { HomeView } from '../home.view';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: mockGoBack,
    }),
  };
});

function customRender(customController: HomeController) {
  render(<HomeView controller={customController} />);

  return {
    homeLoadingElement: screen.queryByTestId('home-loading-element'),
    emptyTextElement: screen.queryByText('Empty Data'),
  };
}

describe('<HomeView />', () => {
  it('should be render activity indicator', () => {
    const controller: HomeController = {
      isLoading: true,
      followers: [],
      redirectToFollowerScreen: jest.fn(),
    };
    const { homeLoadingElement } = customRender(controller);

    expect(homeLoadingElement).toBeTruthy();
  });

  it('should be render followers cards correctly', () => {
    const controller: HomeController = {
      isLoading: false,
      followers: [
        {
          avatarUrl: 'http://www.link.com',
          followerName: 'John doe',
          id: 1,
        },
        {
          avatarUrl: 'http://www.link.com',
          followerName: 'John doe',
          id: 2,
        },
        {
          avatarUrl: 'http://www.link.com',
          followerName: 'John doe',
          id: 3,
        },
      ],
      redirectToFollowerScreen: jest.fn(),
    };

    customRender(controller);
    const followersCards = screen.getAllByText('John doe');
    expect(followersCards.length).toEqual(controller.followers?.length);
  });

  it('should be render empty label', () => {
    const controller: HomeController = {
      isLoading: false,
      followers: [],
      redirectToFollowerScreen: jest.fn(),
    };
    const { emptyTextElement } = customRender(controller);

    expect(emptyTextElement).toBeTruthy();
  });

  it('should be call press function correctly', () => {
    const controller: HomeController = {
      isLoading: false,
      followers: [
        {
          avatarUrl: 'http://www.link.com',
          followerName: 'John doe',
          id: 1,
        },
      ],
      redirectToFollowerScreen: jest.fn(),
    };

    customRender(controller);
    const followerCard = screen.getByText('John doe');
    fireEvent.press(followerCard);
    expect(controller.redirectToFollowerScreen).toHaveBeenCalledWith(1);
  });
});
