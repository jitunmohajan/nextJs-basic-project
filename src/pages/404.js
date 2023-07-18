import { useRouter } from 'next/router';
import React from 'react';

const ErrorPage = () => {

    const router = useRouter()
    setTimeout(()=>{
        router.push('/')
    },5000)
    return (
        <div>
            <h1> This is not found Page</h1>
        </div>
    );
};

export default ErrorPage;