import { use } from 'react';
// ভুল ছিল: import { AuthContext } from '../context/AuthContext';
// সঠিক হবে (যেহেতু context ফোল্ডার app এর ভেতর):
import { AuthContext } from '@/app/context/AuthContext';

const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo;
};

export default useAuth;