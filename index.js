import { Provider } from 'react-redux';
import { BlogDataStore } from './Redux/Blog.dataStore';
import { Navigation } from 'react-native-navigation';
import MainPage from './UI/MainPage';
import DetailPage from './UI/DetailPage';

Navigation.registerComponentWithRedux('NewsBlog.Home', () => MainPage, Provider, BlogDataStore);
Navigation.registerComponentWithRedux('NewsBlog.Detail', () => DetailPage, Provider, BlogDataStore);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'NewsBlog',
        children: [
          {
            component: {
              name: 'NewsBlog.Home',
              options: {
                topBar: {
                  title: {
                    text: 'News Blog'
                  }
                }
              }
            },
          },
        ],
      },
    },
  });
});
