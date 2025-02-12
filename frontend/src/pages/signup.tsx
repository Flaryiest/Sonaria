import React, { useEffect } from 'react';

const SignupPage: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://tally.so/widgets/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div style={{ margin: 0, height: '100%', overflow: 'hidden' }}>
            <iframe
                data-tally-src="https://tally.so/r/3NbzlO"
                width="100%"
                height="100%"
                title="Elvaria Foundation Spring 2025 Music Theory Course Registration"
                style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, border: 0, }}
            ></iframe>
        </div>
    );
};

export default SignupPage;