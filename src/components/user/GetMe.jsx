'use client';

import React from 'react';
import { useSession } from 'next-auth/react';


export default function GetMe() {
    const { data: session, status } = useSession();


    console.log('session', session);
    console.log('status', status);

    if (status === 'loading') {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>User ID: {session?.user.id}</h1>
            <h2>status: {status}</h2>
        </div>
    )


}
