import { gql } from '@apollo/client';

export const getAllPromotions = gql`{
  getAllPromotions {
    id,
    title,
    description,
    image
  }
}`;

export const getPromotionById = gql`
  query getPromotionById($id: Int!) {
    getPromotionById(id: $id) {
      id,
      title,
      description,
      image
    }
  }
`;