import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormField } from "../../store/formSlice";
import formData from "./form.json";

export const Form = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.form);

  const onChangeHandler = (fieldset, e) => {
    dispatch(
      updateFormField({
        fieldset,
        key: e.target.name,
        value: e.target.value,
      })
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // Send data
  };
  return (
    <form className={"App-form"} onSubmit={onSubmit}>
      {formData.map((fieldset, index) => (
        <fieldset key={index}>
          <legend>{fieldset.legend}</legend>
          {fieldset.inputs.map((input, index) => (
            <div className="App-form-item" key={index}>
              <div className="App-form-item-des">
                <p>{input.label}</p>
              </div>
              <div className="App-form-item-options">
                {input.options.map((option, index) => (
                  <div key={index}>
                    <input
                      type={input.type}
                      name={input.name}
                      id={option.id}
                      value={option.value}
                      checked={state[fieldset.key][input.name] === option.value}
                      onChange={onChangeHandler.bind(null, fieldset.key)}
                    />
                    <label htmlFor={option.id}>{option.value}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </fieldset>
      ))}
      <div className="App-form-actions">
        <button className={"btn-primary"} type="submit">
          Send Feedback
        </button>
      </div>
    </form>
  );
};
