import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const NewsPage = () => {
    return (
        <div>
            <h1>this this a new Page</h1>

            <Button type='primary'>
                <Link href="/">Home</Link>
            </Button>
        </div>
    );
};

export default NewsPage;