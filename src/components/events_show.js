import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, isValid } from 'redux-form';

import { getEvent, deleteEvent, putEvent } from '../actions';
import { Link } from 'react-router-dom';

class EventsShow extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.getEvent(id);
  }

  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { error },
    } = field;

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {error && <span>{error}</span>}
      </div>
    );
  }
  async onDeleteClick() {
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push('/');
  }

  async onSubmit(values) {
    await this.props.putEvent(values);
    this.props.history.push('/');
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field label="title" name="title" type="text" component={this.renderField} />
            <Field label="body" name="body" type="text" component={this.renderField} />
          </div>

          <div>
            <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
            <Link to="/">Cancel</Link>
            <Link to="/" onClick={this.onDeleteClick}>
              Delete
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) errors.title = 'Enter Title please.';
  if (!values.body) errors.body = 'Enter Body please.';

  return errors;
};

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, event };
};
const mapDispatchToProps = { deleteEvent, getEvent, putEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow));
