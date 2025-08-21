import classes from './UserProfile.module.css';
import {  useSelector } from 'react-redux';
const UserProfile = () => {
const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    isAuth && (<main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>)
  );
};

export default UserProfile;
