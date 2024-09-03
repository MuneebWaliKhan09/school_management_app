import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import { useAllStudentsClassTeacherQuery, useAttendanceStudentMonthlyQuery } from '../../../store/features/teacherFeatures';
import Loader from '../../../Loaders/Loader'; // Assuming you have this component
import NotFound from '../../../Error/NotFound'; // Assuming you have this component
import { THEME_COLOR, WHITE_BG, THEME_COLOR2 } from '../../../strings/Colors';
import { useSelector } from 'react-redux';

const StudentMonthlyAttendance = () => {
    const theme = useSelector(state => state.themeTeacher);
    const [stid, setStid] = useState(null);
    const [search, setSearch] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const { data: allStudents, isLoading: isLoadingSt } = useAllStudentsClassTeacherQuery();
    const { data: studentData, isLoading } = useAttendanceStudentMonthlyQuery(stid?._id);

    if (isLoading || isLoadingSt) {
        return <Loader />;
    }

    const { totalDays, presentPercentage, totalPresent, totalAbsent, MonthlyAttendanceOfStudent } = studentData?.data || {};

    const handleSearch = (text) => {
        setSearch(text);
        if (text) {
            const filtered = allStudents?.data?.[0]?.filter(student => student?.fullName?.toLowerCase()?.includes(text?.toLowerCase()));
            setFilteredStudents(filtered);
        } else {
            setFilteredStudents(allStudents?.data?.[0] || []);
        }
    };

    const renderAttendanceItem = ({ item }) => (
        <View style={[styles.attendanceItem, {borderColor:theme.background}]}>
            <Text style={styles.itemDate}>{new Date(item.date).toLocaleDateString()}</Text>
            <Text style={[styles.itemStatus, item.status === 'present' ? styles.present : styles.absent]}>
                {item.status[0].toUpperCase() + item.status.slice(1)}
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.dropdownButton, {borderColor:theme.background}]} onPress={() => setModalVisible(true)}>
                <Text style={[styles.dropdownText, {color:theme.background}]}>{stid ? stid.fullName : 'Select Student'}</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search..."
                            value={search}
                            onChangeText={handleSearch}
                        />
                        <FlatList
                            data={filteredStudents}
                            keyExtractor={(item) => item._id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[styles.studentItem, stid?._id === item._id && styles.selectedItem]}
                                    onPress={() => {
                                        setStid(item);
                                        setModalVisible(false);
                                    }}
                                >
                                    <Text style={styles.studentText}>{item.fullName}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>

            <View style={[styles.summaryContainer, {borderColor:theme.background}]}>
                <Text style={[styles.summaryText, {color:theme.background}]}>Total Days: {totalDays || 0}</Text>
                <Text style={[styles.summaryText, {color:theme.background}]}>Percentage: {presentPercentage || 0}%</Text>
                <Text style={[styles.summaryText, {color:theme.background}]}>Present: {totalPresent || 0}</Text>
                <Text style={[styles.summaryText, {color:theme.background}]}>Absent: {totalAbsent || 0}</Text>
            </View>

            {MonthlyAttendanceOfStudent && MonthlyAttendanceOfStudent.length > 0 ? (
                <FlatList
                    data={MonthlyAttendanceOfStudent}
                    renderItem={renderAttendanceItem}
                    keyExtractor={(item) => item?._id}
                    contentContainerStyle={styles.attendanceList}
                />
            ) : (
                <View style={styles.notFoundContainer}>
                    <NotFound message={'No attendance records for this month.'} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: WHITE_BG,
    },
    dropdownButton: {
        backgroundColor: WHITE_BG,
        borderColor: THEME_COLOR2,
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownText: {
        fontSize: 16,
        color: THEME_COLOR,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '90%',
        height: 400,
        backgroundColor: WHITE_BG,
        borderRadius: 8,
        padding: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    searchInput: {
        borderBottomWidth: 1,
        borderBottomColor: THEME_COLOR2,
        paddingBottom: 8,
        marginBottom: 12,
        fontSize: 16,
        color: THEME_COLOR,
    },
    studentItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: THEME_COLOR2,
    },
    studentText: {
        fontSize: 15,
        color: THEME_COLOR,
    },
    summaryContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: THEME_COLOR2,
        marginBottom: 30,
    },
    summaryText: {
        fontSize: 16,
        color: THEME_COLOR,
        marginBottom: 8,
    },
    attendanceList: {
        paddingBottom: 20,
    },
    attendanceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: THEME_COLOR2,
    },
    itemDate: {
        fontSize: 15,
        color: THEME_COLOR2,
    },
    itemStatus: {
        fontSize: 15,
        fontWeight: '500',
        width: 80,
        textAlign: 'center',
    },
    present: {
        color: 'green',
    },
    absent: {
        color: 'red',
    },
    notFoundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default StudentMonthlyAttendance;
