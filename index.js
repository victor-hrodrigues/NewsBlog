/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import DetailPage from './UI/DetailPage';

Navigation.registerComponent('navigation.NewsBlog.HomeScreen', () => App);
Navigation.registerComponent(
  'navigation.NewsBlog.DetailScreen',
  () => DetailPage,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'navigation.NewsBlog.HomeScreen',
            },
          },
        ],
      },
    },
  });
});
