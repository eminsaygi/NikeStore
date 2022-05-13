import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import {Svg, Polygon} from 'react-native-svg';
import {BlurView} from '@react-native-community/blur';

import {images, dummyData, icons, COLORS, FONTS, SIZES} from '../../constants';
import styles from './style';
const Home = ({navigation}) => {
  const [showAddToBagModal, setShowAddToBagModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [selectedSize, setSelectedSize] = React.useState('');

  const [trending, setTrending] = React.useState(dummyData.trending);

  const [recentlyViewed, setRecentlyViewed] = React.useState(
    dummyData.recently,
  );

  // Render

  function renderTrendingShoes(item, index) {
    var trendingStyle = {};

    if (index == 0) {
      trendingStyle = {marginLeft: SIZES.padding};
    } else {
      trendingStyle = {};
    }

    return (
      <TouchableOpacity
        style={[styles.trendingButton, {...trendingStyle}]}
        onPress={() => {
          setSelectedItem(item);
          setShowAddToBagModal(true);
        }}>
        <Text style={styles.trendingTextType}>{item.type}</Text>

        <View
          style={[
            styles.trendingView,
            styles.trendingShadow,
            {backgroundColor: item.bgColor},
          ]}>
          <View style={styles.trendingTextView}>
            <Text style={styles.trendingTextViewName}>{item.name}</Text>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>{item.price}</Text>
          </View>
        </View>

        <View style={styles.viewEffects}>
          <Svg height="100%" width="100%">
            <Polygon points="0,0 160,0 160,80" fill="white" />
          </Svg>
        </View>

        <Image
          source={item.img}
          resizeMode="cover"
          style={styles.imagesStyle}
        />
      </TouchableOpacity>
    );
  }

  function renderRecentlyViewed(item, index) {
    return (
      <TouchableOpacity
        style={{flex: 1, flexDirection: 'row'}}
        onPress={() => {
          setSelectedItem(item);
          setShowAddToBagModal(true);
        }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={item.img}
            resizeMode="contain"
            style={{
              width: 130,
              height: 100,
            }}
          />
        </View>
        <View
          style={{
            flex: 1.5,
            marginLeft: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>{item.name}</Text>
          <Text style={{...FONTS.h3}}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function renderShoeSizes() {
    return selectedItem.sizes.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={[
            styles.renderShoes,
            {
              backgroundColor:
                selectedItem.sizes[index] == selectedSize ? COLORS.white : null,
            },
          ]}
          onPress={() => {
            setSelectedSize(item);
          }}>
          <Text
            style={{
              color:
                selectedItem.sizes[index] == selectedSize
                  ? COLORS.black
                  : COLORS.white,
              ...FONTS.body4,
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding,
          ...FONTS.largeTitleBold,
        }}>
        TRENDING
      </Text>

      <View style={{height: 260, marginTop: SIZES.radius}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => renderTrendingShoes(item, index)}
        />
      </View>

      <View
        style={[
          {
            flex: 1,
            flexDirection: 'row',
            marginTop: SIZES.padding,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: COLORS.white,
          },
          styles.recentContainerShadow,
        ]}>
        <View style={{width: 70, marginLeft: SIZES.base}}>
          <Image
            source={images.recentlyViewedLabel}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <View style={{flex: 1, paddingBottom: SIZES.padding}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={recentlyViewed}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => renderRecentlyViewed(item, index)}
          />
        </View>
      </View>

      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showAddToBagModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <BlurView
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            blurType="light"
            blurAmount={20}
            reducedTransparencyFallbackColor="white">
            {/* Button to close modal */}
            <TouchableOpacity
              style={styles.absolute}
              onPress={() => {
                setSelectedItem(null);
                setSelectedSize('');
                setShowAddToBagModal(false);
              }}></TouchableOpacity>

            {/* Modal content */}
            <View
              style={{
                justifyContent: 'center',
                width: '85%',
                backgroundColor: selectedItem.bgColor,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: -SIZES.padding * 2,
                }}>
                <Image
                  source={selectedItem.img}
                  resizeMode="contain"
                  style={{
                    width: '90%',
                    height: 170,
                    transform: [{rotate: '-15deg'}],
                  }}
                />
              </View>
              <Text
                style={{
                  marginTop: SIZES.padding,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.body2,
                }}>
                {selectedItem.name}
              </Text>
              <Text
                style={{
                  marginTop: SIZES.base / 2,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.body3,
                }}>
                {selectedItem.type}
              </Text>
              <Text
                style={{
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.h1,
                }}>
                {selectedItem.price}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.padding,
                }}>
                <View>
                  <Text style={{color: COLORS.white, ...FONTS.body3}}>
                    Select size
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    marginLeft: SIZES.radius,
                  }}>
                  {renderShoeSizes()}
                </View>
              </View>

              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 70,
                  marginTop: SIZES.base,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                }}
                onPress={() => {
                  setSelectedItem(null);
                  setSelectedSize('');
                  setShowAddToBagModal(false);
                }}>
                <Text style={{color: COLORS.white, ...FONTS.largeTitleBold}}>
                  Add to Bag
                </Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </Modal>
      )}
    </View>
  );
};

export default Home;
