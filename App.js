/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';
import faker from 'faker';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const startupNamesList = new Array(1000)
  .fill(null)
  .map((item, idx) => ({id: idx, name: faker.company.companyName()}));

const App: () => React$Node = () => {
  console.log(startupNamesList);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <FlatList
            data={startupNamesList}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#DCDEDC',
  },
});

export default App;
