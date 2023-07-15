'use client'
import { useFormik, FormikProvider, Form, useField } from 'formik';
import './contactForm.css';
import * as Yup from 'yup';
import { useState } from 'react';

interface FormData {
  username: string;
  subject: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const TextInputLiveFeedback: React.FC<{
  label: string;
  helpText: string;
  id: string;
  name: string;
  type: string;
}> = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`form-control ${
        showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
      }`}
    >
      <div className="flex items-center space-between">
        <label htmlFor={props.id}>{label}</label>{' '}
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-sm"
          >
            {meta.error ? meta.error : '✓'}
          </div>
        ) : null}
      </div>
      <input
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
      <div className="text-xs" id={`${props.id}-help`} tabIndex={-1}>
        {helpText}
      </div>
    </div>
  );
};

export const ContactForm: React.FC = () => {
  const formik = useFormik<FormData>({
    initialValues: {
      username: '',
      subject: '',
    },
    onSubmit: async (values) => {
      await sleep(500);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .max(20, 'Must be less than 20 characters')
        .required('Username is required')
        .matches(
          /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
          'Cannot contain special characters or number'
        ),
      subject: Yup.string()
        .required('Subject is required')
        .max(50, 'Must be less than 50 characters'),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <TextInputLiveFeedback
          label="Username"
          id="username"
          name="username"
          helpText="Must be 8-20 characters and cannot contain special characters."
          type="text"
        />
        <TextInputLiveFeedback
          label="Subject"
          id="subject"
          name="subject"
          helpText="Maximum 50 characters."
          type="text"
        />
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </Form>
    </FormikProvider>
  );
};
