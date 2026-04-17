/************************** imports **************************/
import express from 'express';
import {
   deleteUserAdmin,
   getAllUsersAdmin,
   getCurrentUserProfile, getSingleUserAdmin,
   signInUser,
   signOutUser,
   signUpUser, updateCurrentUserPassword, updateCurrentUserProfile,
   updateUserProfileAdmin,
   sendPasswordReset, verifyTokenAndResetPassword
} from '../controllers/authController.js';
import {authenticateUser, authorizeRoles} from '../middlewares/authMiddleware.js';

/************************* variables *************************/
const router = express.Router();

/************************ auth routes ************************/
router.post('/auth/sign-up', signUpUser);
router.post('/auth/sign-in', signInUser);
router.post('/auth/sign-out', authenticateUser, signOutUser);
router.get('/auth/users', authenticateUser, getCurrentUserProfile);
router.patch('/auth/users', authenticateUser, updateCurrentUserPassword);
router.put('/auth/users', authenticateUser, updateCurrentUserProfile);
router.post('/auth/users/password/forgot', sendPasswordReset);
router.patch('/auth/users/password/:userToken', verifyTokenAndResetPassword);

/************************* admin routes *************************/
router.get('/admin/auth/users', authenticateUser, authorizeRoles('admin'), getAllUsersAdmin);
router.get('/admin/auth/users/:userId', authenticateUser, authorizeRoles('admin'), getSingleUserAdmin);
router.put('/admin/auth/users/:userId', authenticateUser, authorizeRoles('admin'), updateUserProfileAdmin);
router.delete('/admin/auth/users/:userId', authenticateUser, authorizeRoles('admin'), deleteUserAdmin);

export default router;