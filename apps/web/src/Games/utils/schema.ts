import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title: Yup.string().required('El título es obligatorio'),
  description: Yup.string().required('La descripción es obligatoria'),
  genre: Yup.string().required('El género es obligatorio'),
  state: Yup.string().required('El estado es obligatorio'),
  difficulty: Yup.string().required('La dificultad es obligatoria'),
});