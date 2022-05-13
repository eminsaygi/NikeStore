import {StyleSheet} from 'react-native';
import {images, dummyData, icons, COLORS, FONTS, SIZES} from '../../constants';

export default styles = StyleSheet.create({
  trendingButton: {
    height: 240,
    width: 180,
    justifyContent: 'center',
    marginHorizontal: SIZES.base,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  trendingShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  recentContainerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  trendingTextType: {
    color: COLORS.gray,
    ...FONTS.h5,
  },
  trendingView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: SIZES.base,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginRight: SIZES.padding,
    paddingLeft: SIZES.radius,
    paddingRight: SIZES.padding,
    paddingBottom: SIZES.radius,
  },
  trendingTextView: {height: '35%', justifyContent: 'space-between'},
  trendingTextViewName: {color: COLORS.white, ...FONTS.body4},
  viewEffects: {
    position: 'absolute',
    top: 27,
    right: 0,
    width: '95%',
    height: '100%',
  },
  imagesStyle:{
    position: 'absolute',
    top: 50,
    right: 0,
    width: '98%',
    height: 80,
    transform: [{rotate: '-15deg'}],
  },
  renderShoes : {
    width: 35,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginBottom: 10,

      
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 5,
  }

});
