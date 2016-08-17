import React from 'react';

class Form extends React.Component {

  submitForm (event) {
    event.preventDefault();
    let whiskey = {
      name: this.refs.name.value,
      type: this.refs.type.value
    };
    this.props.add(whiskey);
    
    this.refs.name.value = '';
    this.refs.type.value = '';
  }

  render () {
    return (
      <form onSubmit={ this.submitForm.bind(this) }>
        <p className="control">
          <input type="text" className="input" placeholder="Whiskey Name" ref="name" />
        </p>
        <p className="control">
          <input type="text" className="input" placeholder="Whiskey Type" ref="type" />
        </p>
        <p className="control">
          <button className="button is-primary">Add</button>
        </p>
      </form>
    );
  }

}
export {Form};