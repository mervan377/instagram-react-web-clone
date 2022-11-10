import React from "react";
import { Form, Formik, Field } from "formik";
import { exampleSchema } from "validation";
import Button from "components/Button";

export default function ProfessionalAccopunt() {
  const addHandleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div className="p-8">
      <Formik
        validationSchema={exampleSchema}
        initialValues={{
          name: "Long",
          message: "Short",
        }}
        onSubmit={addHandleSubmit}
      >
        {({ isSubmitting, isValid, dirty, values, errors, touched }) => (
          <Form className="flex-1">
            <div className="mb-8">
              Name: <Field name="name" className="border h-8 " />
              {errors.name && touched.name ? (
                <div>{errors.name}</div>
              ) : null}
            </div>
            Message: <Field name="message" className="border h-8 " />
            {errors.message && touched.message ? (
              <div>{errors.message}</div>
            ) : null}
            <Button type="submit" disabled={!isValid || !dirty || isSubmitting}>
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
