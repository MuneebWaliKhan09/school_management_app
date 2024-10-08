import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  RefreshControl,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DataTable} from 'react-native-paper';
import moment from 'moment';
import {
  useAllStudentsAdminQuery,
  useDeleteStudentMutation,
} from '../../../store/features/adminFeatures';
import {Half_WHITE, THEME_COLOR, WHITE_BG} from '../../../strings/Colors';
import {useSelector} from 'react-redux';
import Loader from '../../../Loaders/Loader';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useToast} from '../../../context/ToastContext';
import Pagination from './Pagination';

const DATE_FORMAT = 'DD/MM/YYYY';

const StudentsAdmin = () => {
  const {showToast} = useToast();
  const theme = useSelector(state => state.themeAdmin);
  const {data: allStudents, isError, isLoading,refetch} = useAllStudentsAdminQuery();
  const navigation = useNavigation();
  const [DeleteStudent] = useDeleteStudentMutation();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const studentPerPage = 3


  const filterStudents = (data)=>{
    return data?.filter((items)=>{
      const matchSearch = 
        items.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        items.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        items.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        items.rollNo.toString().includes(searchTerm.toLowerCase());
        return matchSearch
    })
  }
    
  useEffect(() => {
    if (allStudents?.data) {
      const FilterStudent = filterStudents(allStudents?.data);
      const pages = Math.ceil(FilterStudent?.length / studentPerPage)
      setTotalPages(pages)
    }
  }, [allStudents,searchTerm]);

  const currentStudents = filterStudents(allStudents?.data)?.slice(
    (currentPage - 1) * studentPerPage,
    currentPage * studentPerPage,
  )

  const onChangePage = (page)=>{
    if(page >= 1 && page <= totalPages){
      setCurrentPage(page)
    }
  }

  const handleRefresh = useCallback(()=>{
    refetch()
  },[])


  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Text>{isError}</Text>;
  }

  const

   handleAddStudent = ()=>{
    navigation.navigate('AdminStack',{
      screen: 'AddStudent'
    })
   }

  const handleVeiw = id => {
    navigation.navigate('AdminStack', {
      screen: 'StudentDetails',
      params: {id: id},
    });
  };

  const handleEdit = id => {
    navigation.navigate('AdminStack', {
      screen: 'EditStudent',
      params: {id: id},
    });
  };

  const handleDelete = async id => {
    const confirm = Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              const response = await DeleteStudent(id);
              if (response?.error) {
                showToast(response?.error?.data?.message, 'error');
              } else {
                showToast(response?.data?.message, 'success');
                navigation.goBack();
              }
            } catch (error) {
              showToast('An error occurred while saving changes', 'error');
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
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
            onPress={handleAddStudent}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        {currentStudents?.length > 0 ? (
          <DataTable>
            {currentStudents?.map(item => (
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
                    Class: {item.className?.className?.toLowerCase()}
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
                    Date Added: {moment(item.createdAt).format(DATE_FORMAT)}
                  </Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={[styles.button, styles.actionBTNStyle]}
                      onPress={() => handleVeiw(item?._id)}>
                      <Image
                        style={styles.icon}
                        source={require('../../../images/icons/view.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.button, styles.actionBTNStyle]}
                      onPress={() => handleEdit(item?._id)}>
                      <Image
                        style={styles.icon}
                        source={require('../../../images/icons/pen.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.button, styles.actionBTNStyle]}
                      onPress={() => handleDelete(item?._id)}>
                      <Image
                        style={styles.icon}
                        source={require('../../../images/icons/delete.png')}
                      />
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
        {totalPages !== 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChangePage={onChangePage}
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
    // height: responsiveHeight(6), // changes
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: responsiveHeight(2),
    gap: responsiveWidth(4.5),
  },
  button: {
    paddingVertical: responsiveHeight(0.8),
    paddingHorizontal: responsiveWidth(2),
    borderRadius: responsiveWidth(1.25),
    alignItems: 'center',
  },
  actionBTNStyle: {
    borderColor: Half_WHITE,
    borderWidth: 0.7,
  },
  icon: {
    width: responsiveWidth(2),
    height: responsiveHeight(2), // changes
    padding:10,
    tintColor: Half_WHITE,
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

export default StudentsAdmin;
