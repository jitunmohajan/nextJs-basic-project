import React from 'react';
import DashBoardLayout from '@/components/Layouts/DashBoardLayout';
import RootLayout from '@/components/Layouts/RootLayout';

const AdminHomePage = () => {
    return (
        <div>
            <h1>This is Admin DashBoardLayout</h1>
        </div>
    );
};

export default AdminHomePage;

AdminHomePage.getLayout = function getLayout(page){
    return (
        <RootLayout>
            <DashBoardLayout>
                {page}
            </DashBoardLayout>
        </RootLayout>
    )
}