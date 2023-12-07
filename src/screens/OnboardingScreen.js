import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Colors, Fonts, Onboarding} from '../contants';
import {OnboardingCard, Seperator} from '../components';
import {Display} from '../utils';

const OnboardingScreen = ({navigation}) => {
  const [welcomeListIndex, setWelcomeListIndex] = useState(0);
  const welcomeList = useRef(null);

  const slideLength = Onboarding?.WELCOME_CONTENTS?.length;

  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });
  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setWelcomeListIndex(viewableItems[0].index);
    }
  }).current;

  const goToNextSlide = () => {
    const nextIndex = welcomeListIndex + 1;
    welcomeList.current.scrollToIndex({
      animated: true,
      index: nextIndex < slideLength ? nextIndex : welcomeListIndex,
    });
  };

  const handleSkip = () => {
    welcomeList?.current?.scrollToEnd();
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />

      <View style={styles.welcomeListContainer}>
        <FlatList
          ref={welcomeList}
          data={Onboarding.WELCOME_CONTENTS}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <OnboardingCard {...item} />}
          pagingEnabled
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewableItemsChanged}
        />
      </View>
      <Seperator height={Display.setHeight(8)} />
      <Pagination index={welcomeListIndex} />
      <Seperator height={Display.setHeight(8)} />

      {welcomeListIndex === 2 ? (
        <TouchableOpacity
          style={styles.getStartedBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.getStartedBtnText}>{'Get Started'}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.moveBtnContainer}>
          <TouchableOpacity
            style={styles.skipBtn}
            activeOpacity={0.8}
            onPress={() => handleSkip()}>
            <Text style={styles.btnText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextBtn}
            activeOpacity={0.8}
            onPress={() => goToNextSlide()}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  welcomeListContainer: {
    height: Display.setHeight(60),
  },
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  moveBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    width: Display.setWidth(80),
  },
  skipBtn: {},
  nextBtn: {
    backgroundColor: Colors.LIGHT_GREEN,
    paddingVertical: 20,
    paddingHorizontal: 11,
    borderRadius: 32,
  },
  btnText: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
    lineHeight: 16 * 1.4,
  },
  getStartedBtn: {
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  getStartedBtnText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 18,
    fontFamily: Fonts.POPPINS_MEDIUM,
    textAlign: 'center',
    lineHeight: 18 * 1.4,
  },
});

const pageStyle = isActive =>
  isActive
    ? styles.page
    : {...styles.page, backgroundColor: Colors.DEFAULT_GREY};

const Pagination = ({index}) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(Onboarding?.WELCOME_CONTENTS?.length).keys()].map((_, i) =>
        i === index ? (
          <View style={pageStyle(true)} key={i} />
        ) : (
          <View style={pageStyle(false)} key={i} />
        ),
      )}
    </View>
  );
};
