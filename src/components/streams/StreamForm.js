import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component{

    renderError({error,touched}) {
        console.log(error);
        if(touched && error){
        return (
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        );
        }
    }

    renderInput = ({input, label, meta}) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} />
            {this.renderError(meta)}
        </div>
    );
    }

    onSubmit = (values) => {
      this.props.onSubmit(values);
    }


   render () {
    return (
    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
    </form>
    );
 }
}

  const validate = formValues => {
      const error = {};

      if(!formValues.title){
          error.title = "Must Enter Title";
      }

      if(!formValues.description){
          error.description = "Must Enter Description";
      }
    return error;
  }


export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);
