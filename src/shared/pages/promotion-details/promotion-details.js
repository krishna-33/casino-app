import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import {getPromotionById} from '../../api/api';

const PromotionDetails = () => {
   const {id} = useParams();
   const { loading, error, data } = useQuery(getPromotionById, {
     variables: { id: Number(id) },
   });
   if (loading) return <p>Loading ...</p>;
  return (
    <>
    <div className="text-center">     
     <div className="bg-primary text-white grid grid-cols-1">
        <div>
        <img src={data.getPromotionById.image} alt="image" className="rounded-lg mx-auto mt-11" />
        <div className="px-9 py-6">
          <h2 className="font-bold text-2xl">{data.getPromotionById.title}</h2>
          <h2 className="text-xl">{data.getPromotionById.description}</h2>
        </div>
      </div>
  </div>
  </div>
  </>
  )
}

export default PromotionDetails