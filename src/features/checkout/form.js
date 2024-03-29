import React from "react";
import { Field, reduxForm } from "redux-form";

function CheckoutForm(props) {
  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="order[name]">Your name: </label>
          <br />
          <Field name="order[name]" component="input" type="text" />
        </div>

        <div>
          <label htmlFor="order[mail]">E-Mail: </label>
          <br />
          <Field name="order[mail]" component="input" type="email" />
        </div>

        <div>
          <button type="submit">Submit order</button>
        </div>
      </form>
    </div>
  );
}

// eslint-disable-next-line
CheckoutForm = reduxForm({
  form: "checkout"
})(CheckoutForm);

export default CheckoutForm;
