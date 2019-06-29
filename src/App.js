import { Navigation } from 'react-native-navigation'

import Splash from './screens/Splash'
import HomeStateless from './screens/HomeStateless'
import HomeClass from './screens/HomeClass'

Navigation.registerComponent('SPLASH', () => Splash)
Navigation.registerComponent('HOME_STATELESS', () => HomeStateless)
Navigation.registerComponent('HOME_CLASS', () => HomeClass)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'SPLASH',
            },
          },
        ],
      },
    },
  })
})
