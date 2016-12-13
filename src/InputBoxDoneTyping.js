import React, { PropTypes } from 'react';

const InputBoxDoneTyping = (props) => {
  let typingTimer;

  const handleOnChange = (e) => {
    if (props.onChange) {
      // const value = e.target.value;

      props.onChange(e);
    }
  };

  const doneTyping = (value) => {
    props.doneTyping(value);
  };

  const handleOnKeyUp = (e) => {
    clearTimeout(typingTimer);
    // const value = e.target.value;
    e.persist()
    typingTimer = setTimeout(() => { doneTyping(e); }, props.doneTypingInterval);
  };

  const handleOnKeyDown = () => {
    clearTimeout(typingTimer);
  };

  return (
    <input
      type="number"
      id={props.id}
      className={props.className}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
      defaultValue={props.defaultValue}
      autoComplete={props.autoComplete}
      onChange={handleOnChange}
      onKeyUp={handleOnKeyUp}
      onKeyDown={handleOnKeyDown}
      />
  );
};

InputBoxDoneTyping.defaultProps = {
  autoComplete: 'on',
  doneTypingInterval: 500,
};

InputBoxDoneTyping.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  defaultValue: PropTypes.number,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  onChange: PropTypes.func,
  doneTyping: PropTypes.func.isRequired,
  doneTypingInterval: PropTypes.number,
};

export default InputBoxDoneTyping;
