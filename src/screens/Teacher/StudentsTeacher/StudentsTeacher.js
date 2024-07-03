import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DataTable} from 'react-native-paper';
import moment from 'moment';
import {THEME_COLOR, WHITE_BG} from '../../../strings/Colors';
import {useSelector} from 'react-redux';
import Loader from '../../../Loaders/Loader';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import CustomPagination from '../../Teacher/StudentsTeacher/CustomPagination'; // Adjust path as needed
import {useAllStudentsClassTeacherQuery} from '../../../store/features/teacherFeatures';

const DATE_FORMAT = 'DD/MM/YYYY';
const INITIAL_LOAD_COUNT = 3; // Number of students to load initially
const LOAD_MORE_COUNT = 3; // Number of students to load on refresh

const StudentsTeacher = () => {
  const theme = useSelector(state => state.themeTeacher);
  const navigation = useNavigation();
  const {
    data: allStudents,
    isError,
    isLoading,
  } = useAllStudentsClassTeacherQuery();
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [studentsData, setStudentsData] = useState([]);
  const [page, setPage] = useState(0); // Current page
  const [numberOfItemsPerPage, setNumberOfItemsPerPage] =
    useState(INITIAL_LOAD_COUNT); // Items per page

  useEffect(() => {
    if (allStudents?.data) {
      const startIndex = page * numberOfItemsPerPage;
      const slicedData = allStudents?.data?.[0]?.slice(
        startIndex,
        startIndex + numberOfItemsPerPage,
      );
      setStudentsData(slicedData);
    }
  }, [allStudents, page, numberOfItemsPerPage]);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setNumberOfItemsPerPage(prev => prev + LOAD_MORE_COUNT);
      setRefreshing(false);
    }, 1000);
  };

  const filteredStudents = studentsData?.filter(
    item =>
      item?.fullName?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      item?.gender?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      item?.email?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      item?.rollNo?.toString()?.includes(searchTerm?.toLowerCase()),
  );

  const totalPages = Math.ceil(
    allStudents?.data?.[0]?.length / numberOfItemsPerPage,
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Text>{isError}</Text>;
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }>
      <View style={styles.container}>
        <View
          style={[styles.searchContainer, {marginBottom: responsiveHeight(2)}]}>
          <TextInput
            autoCapitalize="none"
            placeholder="Search"
            placeholderTextColor={WHITE_BG}
            style={[
              styles.searchInput,
              {
                borderColor: theme.background,
                backgroundColor: theme.background,
                color: 'white',
              },
            ]}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <TouchableOpacity
            style={[
              styles.addButton,
              {
                backgroundColor: theme.background,
                borderColor: theme.background ? 'white' : '',
                borderWidth: theme.background ? 1 : 0,
              },
            ]}
            onPress={() => {}}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        {filteredStudents?.length > 0 ? (
          <DataTable>
            {filteredStudents?.map(item => (
              <View
                key={item._id}
                style={[
                  styles.card,
                  {
                    borderColor: theme.background ? 'white' : '',
                    backgroundColor: theme.background,
                  },
                ]}>
                <View style={styles.cardContent}>
                  <Text
                    style={[
                      styles.cardTitle,
                      {
                        color: 'rgba(250,250,250,.9)',
                        fontSize: responsiveFontSize(2.2),
                      },
                    ]}>
                    {item.fullName}
                  </Text>
                  <Text
                    style={[
                      styles.cardText,
                      {
                        color: 'rgba(250,250,250,.7)',
                        fontSize: responsiveFontSize(2),
                      },
                    ]}>
                    Email: {item.email}
                  </Text>
                  <Text
                    style={[
                      styles.cardText,
                      {
                        color: 'rgba(250,250,250,.7)',
                        fontSize: responsiveFontSize(2),
                      },
                    ]}>
                    Gender: {item.gender}
                  </Text>
                  <Text
                    style={[
                      styles.cardText,
                      {
                        color: 'rgba(250,250,250,.7)',
                        fontSize: responsiveFontSize(2),
                      },
                    ]}>
                    Roll No: {item.rollNo}
                  </Text>
                  <Text
                    style={[
                      styles.cardText,
                      {
                        color: 'rgba(250,250,250,.7)',
                        fontSize: responsiveFontSize(2),
                      },
                    ]}>
                    Date Added: {moment(item.createdAt).format(DATE_FORMAT)}
                  </Text>
                  <View style={styles.actionsContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                      <Text
                        style={[
                          styles.viewButton,
                          {fontSize: responsiveFontSize(1.8)},
                        ]}>
                        View
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                      <Text
                        style={[
                          styles.editButton,
                          {fontSize: responsiveFontSize(1.8)},
                        ]}>
                        Edit
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                      <Text
                        style={[
                          styles.deleteButton,
                          {fontSize: responsiveFontSize(1.8)},
                        ]}>
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </DataTable>
        ) : (
          <View style={styles.noDataContainer}>
            <Text
              style={[styles.noDataText, {fontSize: responsiveFontSize(2)}]}>
              No Data
            </Text>
          </View>
        )}
        {filteredStudents?.length > 0 && (
          <CustomPagination
            page={page}
            numberOfPages={totalPages}
            onPageChange={setPage}
            label="Students"
            numberOfItemsPerPageList={[3, 5, 10]}
            numberOfItemsPerPage={numberOfItemsPerPage}
            onItemsPerPageChange={setNumberOfItemsPerPage}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: responsiveWidth(4),
    backgroundColor: '#f8f9fa',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(2),
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    paddingLeft: 15,
    height: responsiveHeight(6),
    backgroundColor: '#fff',
    fontSize: responsiveFontSize(2),
  },
  addButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#2980b9',
    borderRadius: 8,
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
  },
  card: {
    marginBottom: responsiveHeight(2),
    borderWidth: 1,
    borderColor: THEME_COLOR,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  cardContent: {
    padding: responsiveWidth(4),
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  actionsContainer: {
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
  },
  actionButton: {
    marginRight: 15,
  },
  viewButton: {
    color: '#3498db',
    fontWeight: 'bold',
  },
  editButton: {
    color: '#27ae60',
    fontWeight: 'bold',
  },
  deleteButton: {
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  noDataContainer: {
    marginTop: responsiveHeight(10),
  },
  noDataText: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: 16,
  },
});

export default StudentsTeacher;
