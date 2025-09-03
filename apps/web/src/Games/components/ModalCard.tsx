'use client';
import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from '@heroui/react';
import { VideoGame, NewVideoGame } from '../../shared/types/VideoGames';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

type ModalCardProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (game: VideoGame | NewVideoGame) => void; // puede ser crear o editar
  initialValues?: VideoGame; // si existe, estamos editando
};

const difficulties: VideoGame['difficulty'][] = ['facil', 'medio', 'dificil', 'experto'];
const states: VideoGame['state'][] = [
  'por jugar',
  'no jugado',
  'quiero jugar',
  'jugando',
  'jugado',
];

const validationSchema = Yup.object({
  title: Yup.string().required('El título es obligatorio'),
  description: Yup.string().required('La descripción es obligatoria'),
  genre: Yup.string().required('El género es obligatorio'),
  state: Yup.string().required('El estado es obligatorio'),
  difficulty: Yup.string().required('La dificultad es obligatoria'),
});

const ModalCard: React.FC<ModalCardProps> = ({ isOpen, onClose, onSave, initialValues }) => {
  //const { onOpenChange } = useDisclosure({ isOpen });

  const defaultValues: NewVideoGame = initialValues || {
    title: '',
    description: '',
    genre: '',
    difficulty: 'facil',
    state: 'jugando',
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent className="bg-black text-white">
        {(onCloseModal) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {initialValues ? 'Editar VideoGame' : 'Agregar VideoGame'}
            </ModalHeader>
            <ModalBody>
              <Formik
                initialValues={defaultValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  if (initialValues) {
                    // edición: mantenemos el id
                    onSave({ ...values, id: initialValues.id });
                  } else {
                    // creación: no mandamos id
                    onSave(values as NewVideoGame);
                  }
                  onCloseModal();
                }}
              >
                {({ errors, touched }) => (
                  <Form className="flex flex-col gap-3">
                    <Field name="title" placeholder="Título" className="border p-2 rounded" />
                    {errors.title && touched.title && (
                      <div className="text-red-500 text-sm">{errors.title}</div>
                    )}

                    <Field
                      name="description"
                      placeholder="Descripción"
                      className="border p-2 rounded"
                    />
                    {errors.description && touched.description && (
                      <div className="text-red-500 text-sm">{errors.description}</div>
                    )}

                    <Field name="genre" placeholder="Género" className="border p-2 rounded" />
                    {errors.genre && touched.genre && (
                      <div className="text-red-500 text-sm">{errors.genre}</div>
                    )}

                    <Field
                      as="select"
                      name="difficulty"
                      className="border p-2 rounded bg-black text-white"
                    >
                      {difficulties.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </Field>

                    <Field
                      as="select"
                      name="state"
                      className="border p-2 rounded bg-black text-white"
                    >
                      {states.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </Field>

                    <div className="flex justify-end gap-2 mt-4">
                      <Button color="danger" variant="light" onPress={onCloseModal}>
                        Cancelar
                      </Button>
                      <Button color="primary" type="submit">
                        {initialValues ? 'Guardar Cambios' : 'Agregar'}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalCard;
