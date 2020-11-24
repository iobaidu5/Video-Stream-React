import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component{
   render () {
    return (
    <form>
        <Field name="Title" />
        <Field name="Description" />
    </form>
    );
 }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);