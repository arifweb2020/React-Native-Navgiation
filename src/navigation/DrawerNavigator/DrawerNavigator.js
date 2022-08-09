import React from 'react';
import {Text, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

//
import BottomNavigator from '../BottomNavigator/BottomNavigator';

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeContainer" component={BottomNavigator} />
      <Drawer.Screen
        name="More"
        // eslint-disable-next-line react/no-unstable-nested-components
        component={() => {
          return (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>This Is More Page</Text>
            </View>
          );
        }}
      />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}
export default MyDrawer;
