// ** Custom hooks for business logic **

// import { useState } from 'react';
// const useContactForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState('');

//   const submitForm = async (formData) => {
//     setIsSubmitting(true);
//     try {
//       await api.submitContact(formData);
//       setMessage('Message sent successfully!');
//     } catch (error) {
//       setMessage('Error sending message. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return { submitForm, isSubmitting, message };
// };

// export default useContactForm;
