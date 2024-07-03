import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useSelector} from 'react-redux';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Half_WHITE, Half_gray} from '../../../strings/Colors';

const CustomPagination = ({
  page,
  numberOfPages,
  onPageChange,
  label,
  numberOfItemsPerPageList,
  numberOfItemsPerPage,
  onItemsPerPageChange,
}) => {
  const theme = useSelector(state => state.themeTeacher);

  const isFirstPage = page === 0;
  const isLastPage = page === numberOfPages - 1;

  const handlePageChange = newPage => {
    if (newPage >= 0 && newPage < numberOfPages) {
      onPageChange(newPage);
    }
  };


  const handleFirstPage = () => {
    if (!isFirstPage) {
      handlePageChange(0);
    }
  };

  const handlePreviousPage = () => {
    if (!isFirstPage) {
      handlePageChange(page - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      handlePageChange(page + 1);
    }
  };

  const handleLastPage = () => {
    if (!isLastPage) {
      handlePageChange(numberOfPages - 1);
    }
  };

  const dropDownData = numberOfItemsPerPageList.map(item => ({
    label: item.toString(),
    value: item,
  }));

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.firstRow}>
        <Text style={[styles.pageNumbers, {color: 'rgba(250,250,250,.7)'}]}>
          Page: {page + 1} of {numberOfPages}
        </Text>
        <Text style={[styles.pageNumberText, {color: 'rgba(250,250,250,.7)'}]}>
          Records: {label}
        </Text>
      </View>
      <View style={styles.secondRow}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.rowsPerPage, {color: 'rgba(250,250,250,.7)'}]}>
            Rows per page
          </Text>
          <Dropdown
            style={styles.dropDownStyle}
            data={dropDownData}
            dropdownPosition={Platform.OS === 'ios' ? 'bottom' : 'top'} // Adjust dropdown position based on platform
            labelField="label"
            valueField="value"
            iconColor={Half_WHITE}
            onChange={item => {
              onItemsPerPageChange(item.value);
            }}
            selectedTextStyle={[
              styles.selectedTextStyle,
              {
                color: 'rgba(250,250,250,.7)',
                fontSize: responsiveFontSize(1.7),
              },
            ]}
            value={numberOfItemsPerPage}
            renderLeftIcon={() => (
              <Text
                style={[styles.leftIconStyle, {color: 'rgba(250,250,250,.7)'}]}>
                {' '}
                :{' '}
              </Text>
            )}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
          <TouchableOpacity onPress={handleFirstPage} disabled={isFirstPage}>
            <Image
              source={require('../../../images/paginationicons/first.png')}
              style={styles.Image}
              tintColor={
                isFirstPage ? 'rgba(250,250,250,.4)' : 'rgba(250,250,250,.8)'
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePreviousPage} disabled={isFirstPage}>
            <Image
              source={require('../../../images/paginationicons/back.png')}
              style={[
                styles.Image,
                {width: responsiveWidth(7), height: responsiveHeight(3.5)},
              ]}
              tintColor={
                isFirstPage ? 'rgba(250,250,250,.4)' : 'rgba(250,250,250,.8)'
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextPage} disabled={isLastPage}>
            <Image
              source={require('../../../images/paginationicons/next.png')}
              style={[
                styles.Image,
                {width: responsiveWidth(7), height: responsiveHeight(3.5)},
              ]}
              tintColor={
                isLastPage ? 'rgba(250,250,250,.4)' : 'rgba(250,250,250,.8)'
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLastPage} disabled={isLastPage}>
            <Image
              source={require('../../../images/paginationicons/last.png')}
              style={styles.Image}
              tintColor={
                isLastPage ? 'rgba(250,250,250,.4)' : 'rgba(250,250,250,.8)'
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(-1),
    marginBottom: responsiveHeight(1),
    backgroundColor: '#f8f9fa',
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 7,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2),
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2),
    marginTop: responsiveHeight(1),
  },
  Image: {
    width: responsiveWidth(8.2),
    height: responsiveHeight(4.1),
    marginHorizontal: responsiveWidth(1),
  },
  leftIconStyle: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: '700',
    marginRight: responsiveWidth(1),
  },
  dropDownStyle: {
    width: responsiveWidth(20),
    height: responsiveHeight(6),
    paddingHorizontal: responsiveWidth(4),
    paddingTop: Platform.OS === 'ios' ? responsiveHeight(1) : 0,
  },
  pageNumbers: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
  pageNumberText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
  rowsPerPage: {
    fontSize: responsiveFontSize(1.7),
  },
});

export default CustomPagination;
