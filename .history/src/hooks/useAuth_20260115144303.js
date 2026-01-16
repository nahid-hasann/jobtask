import { use } from 'react'; // React 19 / Next.js 15 feature
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo;
};

export default useAuth;