import React from 'react';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '997165539821-7rffmmpiektnb9dim86jc7p4tpq8ur6h.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render() {

        return <div>GoogleAuth</div>
    }
}

export default GoogleAuth;