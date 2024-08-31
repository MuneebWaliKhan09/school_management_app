export const BASE_URL = 'https://school-managment-system-pi.vercel.app/api/v1';
// export const BASE_URL = 'http://192.168.10.9:3000/api/v1';

export const API_USER_URL = BASE_URL + `/users`;
export const API_ADMIN_URL = BASE_URL + `/admin`;
export const API_TEACHER_URL = BASE_URL + `/teacher`;
export const API_STUDENT_URL = BASE_URL + `/student`;
export const API_SUBJECT_URL = BASE_URL + `/subject`;
export const API_CLASS_URL = BASE_URL + `/class`;


export const user_End_Points = {
    login: '/login',// ✅
    register: '/register',
    logout: '/logout',// ✅
    getUserDetails: '/user/me',// ✅
    changePassword: '/user/change-password',// ✅
    updateProfile: '/user/update-profile',// ✅
    updateUserAvatar: '/user/update-avatar',
}


export const teacher_End_Points = {
    teacherProfile: '/teacher-profile', // ✅
    allStudentsOfClass: '/all-students-class',// ✅
    singleStudentDetail: '/single-student-detail/',// ✅
    classTeacherAddStudent: '/class-teacher-add-student',// ✅
    updateStudentClass: '/update-student-class/',// ✅
    updateStudentAvatar: '/update-student-avatar/',// ✅
    removeStudentClass: '/remove-student-class/',// ✅
    takeAttendanceClass: '/take-attendance-class',//❓
    attendanceClassToday: '/attendance-class-today',
    notifyStudentsAbsent: '/notify-students-absent',
    giveAssignmentClass: '/give-assigment-class',
    allAssignmentsClass: '/all-assigments-class',
    singleAssignmentClass: '/single-assigment-class',
    updateAssignmentClass: '/update-assigment-class',
    deleteAssignmentClass: '/delete-assigment-class',
    allNotificationsForTeachers: '/all-notifications-for-teachers',
    singleTeacherNotifications: '/single-teacher-notifications',
    notifyStudentsClass: '/notify-students-class',
    notifySingleStudentClass: '/notify-single-student-class',
    allNotificationsClass: '/all-notifications-class',
    singleNotificationClass: '/single-notification-class/',
    updateNotificationClass: '/update-notification-class/',
    deleteNotificationClass: '/delete-notification-class/',
    allTeachersOfClass: '/all-teachers-class',
    allSubjectsOfClass: '/all-subjects-class',
    curriculumOfSubjectOfClass: '/curriculum-subject',
};


export const student_End_Points = {
    studentProfile: '/student-profile',// ✅
    studentAttendanceRecord: '/student-attendance-record',
    studentClassAssignments: '/student-class-assigments',
    studentClassNotifications: '/student-class-notifications',
    singleStudentNotifications: '/single-student-notifications',
};


const subject_End_Points = {
    allSubjects:'/all-subjects'
}


const class_End_Points= {
    allClasses: '/all-classes'
}


export const admin_End_Points = {
    // User Routes
    user_routes:{
        allUsers: '/all-users',
        singleUser: '/single-user/',
        updateUserRole: '/update-user-role/',
        updateUserAvatar: '/update-user-avatar/',
        removeUser: '/remove-user/',
    },

    // Students Routes
    student_routes:{
        allStudents: '/all-students',
        getStudentById: '/student/',
        addStudent: '/add-student',
        updateStudent: '/update-student/',
        updateAvatarStudent: '/update-student-avatar/',
        deleteStudent: '/remove-student/',
        allStudentAcademicRecord: '/all-student-academic-record/',
        singleStudentAcademicRecord: '/single-student-academic-record/',
        addStudentAcademicRecord: '/add-student-academic-record/',
        updateStudentAcademicRecord: '/update-student-academic-record/',
        deleteStudentAcademicRecord: '/remove-student-academic-record/',
    },

    // Teachers Routes
    teacher_routes:{
        allTeachers: '/all-teachers',
        getTeacherById: '/single-teacher/',
        addTeacher: '/add-teacher',
        updateTeacher: '/update-teacher/',
        updateTeacherAvatar: '/update-avatar-teacher/',
        deleteTeacher: '/remove-teacher/',
        allAttendancesOfClass: '/all-attendances-class/:className',
        notifyTeachers: '/notify-teachers',
        notifySingleTeacher: '/notify-single-teacher',
        allNotifications: '/notifications-all',
        getNotificationById: '/notification-single/',
        updateNotification: '/update-notification/',
        deleteNotification: '/delete-notification/',
    },

    // Class Routes
    class_routes:{
        addClass: '/add-class',
        allClasses: '/all-classes',
        singleClass: '/single-class/',
        updateClass: '/update-class/',
        deleteClass: '/remove-class/',
    },

    // Subjects Routes
    subject_routes:{
        allSubjects: '/all-subjects',
        addSubject: '/add-subject',
        singleSubject: '/single-subject/',
        removeSubject: '/remove-subject/',
        allCurriculumSubject: '/all-curriculums-subject/',
        addCurriculumSubject: '/add-curriculum/',
        singleCurriculumRecord: '/single-curriculum/',
        updateCurriculumSubject: '/update-curriculum/',
        deleteCurriculumSubject: '/remove-curriculum/',
    }
};
