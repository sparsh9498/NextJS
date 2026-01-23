'use client';

import { useEffect } from "react";

const Error = ({ error }: { error: Error }) => {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div>
            Error loading users...
        </div>
    )
}

export default Error
