/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import DetailPage from './UI/DetailPage';

Navigation.registerComponent('HomeScreen', () => App);
Navigation.registerComponent('DetailScreen', () => DetailPage);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HomeScreen',
            },
          },
        ],
      },
    },
  });
});
