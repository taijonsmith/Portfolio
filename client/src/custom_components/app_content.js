import React, { useEffect, Suspense } from 'react';
import './css/app_content.css';
import { useSelector } from 'react-redux';


export default function AppContent() {
    const ProfileHome = React.lazy(() => import('./profile_home'));
    const PrototypeOne = React.lazy(() => import('./prototype_one'));
    const PrototypeTwo = React.lazy(() => import('./prototype_two'));
    const current_prototype = useSelector(state => state.current_prototype);

    useEffect(() => {
        window.scrollTo({top: 0});
    });

    return (
        <React.Fragment>
            <div className="page" hidden={current_prototype.index !== 0}>
                <Suspense fallback={<React.Fragment />}>
                    <ProfileHome />
                </Suspense>
            </div>
            <div className="page" hidden={current_prototype.index !== 1}>
                <Suspense fallback={<React.Fragment />}>
                    <PrototypeOne />
                </Suspense>
            </div>
            <div className="page" hidden={current_prototype.index !== 2}>
                <Suspense fallback={<React.Fragment />}>
                    <PrototypeTwo />
                </Suspense>
            </div>
        </React.Fragment>
    );
}