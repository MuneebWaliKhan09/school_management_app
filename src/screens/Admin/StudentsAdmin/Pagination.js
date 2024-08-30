import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { GHOST_WHITE, Half_WHITE, THEME_COLOR } from '../../../strings/Colors';
import { useSelector } from 'react-redux';

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
  const theme = useSelector(state => state.themeAdmin);
  const { width } = useWindowDimensions();
  const pageNumbers = [];
  const maxPageNumbers = 5; // Number of page numbers to display at a time
  let startPage, endPage;

  if (totalPages <= maxPageNumbers) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= Math.floor(maxPageNumbers / 2)) {
      startPage = 1;
      endPage = maxPageNumbers;
    } else if (currentPage + Math.floor(maxPageNumbers / 2) >= totalPages) {
      startPage = totalPages - maxPageNumbers + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - Math.floor(maxPageNumbers / 2);
      endPage = currentPage + Math.floor(maxPageNumbers / 2);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <View style={styles.paginationContainer}>
      {currentPage > 1 && (
        <TouchableOpacity onPress={() => onChangePage(1)} style={[styles.pageNumber,{backgroundColor:theme.background}]}>
          <Text style={styles.pageNumberText}>First</Text>
        </TouchableOpacity>
      )}
      {pageNumbers.map(page => (
        <Animated.View
          key={page}
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}
          layout={Layout.springify()}
        >
          <TouchableOpacity
            onPress={() => onChangePage(page)}
            style={[styles.pageNumber,{backgroundColor:theme.background}, currentPage === page && {backgroundColor:"white",borderWidth:0.5}]}
          >
            <Text style={currentPage !== page &&  styles.pageNumberText}>{page}</Text>
          </TouchableOpacity>
        </Animated.View>
      ))}
      {currentPage < totalPages && (
        <TouchableOpacity onPress={() => onChangePage(totalPages)} style={[styles.pageNumber,{backgroundColor:theme.background}]}>
          <Text style={styles.pageNumberText}>Last</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  pageNumber: {
    marginHorizontal: 5,
    padding: 5,
    paddingHorizontal: responsiveWidth(2.5),
    borderRadius: 5,
    borderWidth:0.5,
  },
  pageNumberText: {
    fontSize: responsiveFontSize(2),
    color: GHOST_WHITE,
  },
});

export default Pagination;
