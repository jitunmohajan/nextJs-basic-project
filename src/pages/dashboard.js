import React from 'react';
import DashBoardLayout from '../../components/Layouts/DashBoardLayout';

const DashBoard = () => {
    return (
        <div>
            this is DashBoard
        </div>
    );
};

export default DashBoard;

DashBoard.getLayout = function getLayout(page){
    return (
        <DashBoardLayout>
            {page}
        </DashBoardLayout>
    )
}