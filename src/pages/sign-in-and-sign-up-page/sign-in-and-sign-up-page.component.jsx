import React from 'react';
import './sign-in-and-sign-up-page.styles.scss';
import SignIn from '../../components/SignIn/sign-in.component';
import SignUp from '../../components/Signup/sign-up.component';

const SingInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SingInAndSignUpPage;