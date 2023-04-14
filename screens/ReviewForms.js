import React from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'rating must be a number between 1 to 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
    .min(1),
});

const ReviewForms = ({ addReview }) => {
  return (
    <Formik
      initialValues={{ title: '', body: '', rating: '' }}
      validationSchema={reviewSchema}
      onSubmit={(values, action) => {
        addReview(values);
        action.resetForm();
      }}>
      {({
        values: { title, body, rating },
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched,
      }) => (
        <View style={globalStyles.container}>
          <TextInput
            style={globalStyles.input}
            placeholder="Review Title"
            placeholderTextColor="#9e9e9e"
            onChangeText={handleChange('title')}
            value={title}
            onBlur={handleBlur('title')}
          />
          <Text style={globalStyles.errorText}>
            {touched.title && errors.title}
          </Text>
          <TextInput
            multiline={true}
            // minHeight={80}
            style={globalStyles.input}
            placeholder="Review Body"
            placeholderTextColor="#9e9e9e"
            onChangeText={handleChange('body')}
            value={body}
            onBlur={handleBlur('body')}
          />
          <Text style={globalStyles.errorText}>
            {touched.body && errors.body}
          </Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Rating (1-5)"
            placeholderTextColor="#9e9e9e"
            onChangeText={handleChange('rating')}
            value={rating}
            keyboardType="numeric"
            onBlur={handleBlur('rating')}
          />
          <Text style={globalStyles.errorText}>
            {touched.rating && errors.rating}
          </Text>

          <FlatButton onPress={handleSubmit} color="maroon" text="Submit" />
        </View>
      )}
    </Formik>
  );
};

export default ReviewForms;
