// shopType.schema.ts
import * as Yup from 'yup';

export const getShopTypeFormSchema = (t: (key: string) => string) =>
  Yup.object().shape({
    name: Yup.string()
      .max(35, t('you_have_reached_maximum_limit_error'))
      .trim()
      .matches(/\S/, t('name_spaces_error'))
      .required(t('name_required_error')),

    image: Yup.string().required(t('image_required_error')),

    isActive: Yup.bool().nullable(),
  });
