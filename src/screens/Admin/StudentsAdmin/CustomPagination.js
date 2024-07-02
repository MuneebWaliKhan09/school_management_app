import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useSelector } from 'react-redux';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const CustomPagination = ({
  page,
  numberOfPages,
  onPageChange,
  label,
  numberOfItemsPerPageList,
  numberOfItemsPerPage,
  onItemsPerPageChange,
}) => {
  const theme = useSelector((state) => state.themeAdmin);
  const isFirstPage = page === 0;
  const isLastPage = page === numberOfPages - 1;

  const handlePageChange = (newPage) => {
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

  const dropDownData = numberOfItemsPerPageList.map((item) => ({
    label: item.toString(),
    value: item,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.pageNumbers}>Page</Text>
          <Text style={[styles.centerLeftIconStyle, { color: theme.background ? "red" : '' }]}> : </Text>
          <Text style={styles.pageNumbers}>
            {page + 1 + ' of ' + numberOfPages}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.pageNumberText}>Records</Text>
          <Text style={[styles.centerIconStyle, { color: theme.background ? "red" : '' }]}> : </Text>
          <Text style={styles.pageNumberText}>{label}</Text>
        </View>
      </View>
      <View style={styles.secondRow}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.rowsPerPage}>Rows per page</Text>
          <Dropdown
            style={styles.dropDownStyle}
            data={dropDownData.reverse()}
            dropdownPosition={'top'}
            labelField="label"
            valueField="value"
            onChange={(item) => {
              handlePageChange(onItemsPerPageChange(item.value));
            }}
            selectedTextStyle={styles.selectedTextStyle}
            value={numberOfItemsPerPage}
            renderLeftIcon={() => (
              <Text style={[styles.leftIconStyle, { color: theme.background ? "red" : '' }]}> : </Text>
            )}
          />
        </View>
        <View style={{ flexDirection: 'row', gap: responsiveWidth(8) }}>
          <TouchableOpacity onPress={handleFirstPage} disabled={isFirstPage}>
            <Image
              source={require('../../../images/paginationicons/first.png')}
              style={styles.Image}
              tintColor={isFirstPage ? 'grey' : null}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePreviousPage} disabled={isFirstPage}>
            <Image
              source={require('../../../images/paginationicons/back.png')}
              style={styles.Image}
              tintColor={isFirstPage ? 'grey' : null}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextPage} disabled={isLastPage}>
            <Image
              source={require('../../../images/paginationicons/next.png')}
              style={styles.Image}
              tintColor={isLastPage ? 'grey' : null}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLastPage} disabled={isLastPage}>
            <Image
              source={require('../../../images/paginationicons/last.png')}
              style={styles.Image}
              tintColor={isLastPage ? 'grey' : null}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(-15),
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(6),
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(1),
  },
  secondRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(6),
    marginBottom: responsiveHeight(2),
    justifyContent: 'space-between',
  },
  Image: {
    width: responsiveWidth(8),
    height: responsiveHeight(4),
  },
  leftIconStyle: {
    width: responsiveWidth(10),
    height: responsiveHeight(4),
    marginBottom: responsiveHeight(1),
    fontWeight: '700',
  },
  centerIconStyle: {
    width: responsiveWidth(10),
    height: responsiveHeight(4),
    marginHorizontal: responsiveWidth(2),
    fontWeight: '700',
  },
  centerLeftIconStyle: {
    width: responsiveWidth(10),
    height: responsiveHeight(4),
    marginHorizontal: responsiveWidth(2),
    fontWeight: '700',
  },
  dropDownStyle: {
    width: responsiveWidth(20),
    height: responsiveHeight(6),
    paddingHorizontal: responsiveWidth(4),
    paddingTop: Platform.OS === 'ios' ? responsiveHeight(1) : responsiveHeight(2),
  },
  pageNumbers: {
    fontSize: responsiveFontSize(2),
  },
  pageNumberText: {
    fontSize: responsiveFontSize(2),
  },
  rowsPerPage: {
    fontSize: responsiveFontSize(2),
  },
});

export default CustomPagination;
