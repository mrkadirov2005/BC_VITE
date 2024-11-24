// hooks/useOnlineStatus.ts
import { useEffect, useState } from 'react';

const useOnlineStatus = (): boolean => {
    const [isOnline, setIsOnline] = useState<boolean>(typeof window !== 'undefined' ? navigator.onLine : false);

    useEffect(() => {
        const updateOnlineStatus = () => setIsOnline(navigator.onLine);

        if (typeof window !== 'undefined') {
            window.addEventListener('online', updateOnlineStatus);
            window.addEventListener('offline', updateOnlineStatus);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('online', updateOnlineStatus);
                window.removeEventListener('offline', updateOnlineStatus);
            }
        };
    }, []);

    return isOnline;
};

export default useOnlineStatus;
