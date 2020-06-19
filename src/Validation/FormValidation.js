import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    name: Yup
      .string()
      .min(3,"Name must be at least 2 characters long.")
      .required("Must include a name address."),
    size: Yup
      .string()
      .oneOf(['small','medium','large','extra-large','huge'],"Please select a pizza size."),
  });

  export default formSchema