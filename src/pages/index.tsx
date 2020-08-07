import React, { useEffect } from 'react'
import { navigate, PageProps } from 'gatsby';

const Index: React.FunctionComponent<PageProps> = () => {
    useEffect(() => {
        navigate('/home');
    }, []);
    return null;
}

export default Index;