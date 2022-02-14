import React from 'react';
import './login-card.scss';
import {ReactComponent as GoogleSvg} from './assets/icons8-google.svg';
import {googleSignIn} from 'modules/auth/google_auth';
import {useAppSelector, useAppDispatch} from 'state/hooks';

/**
 * @return {JSX.Element}
 */
export default function LoginCard(): JSX.Element {
  const existingUser = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleGoogleLogin = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    googleSignIn();
  };
  return (
    <div className="login-card-container">
      <div className="content-center height-100">
        <div className="content-container">
          <span>
            Welcome to <code>#giveback</code>
          </span>
          <ul className="login-icons">
            <div className="login-svg" onClick={handleGoogleLogin}>
              <GoogleSvg></GoogleSvg>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
