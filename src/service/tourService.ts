import axios from "axios";

import {
  RequestForTourType,
  TourDetailType,
  TourType,
} from "../types/tourService.types";
import { BASE_URL } from "../utils";

export const getUzbekistanTours = async (
  lang: string
): Promise<Array<TourType>> => {
  const response = await axios.get<Array<TourType>>(
    `${BASE_URL}/uzbekistan-tour-products/`,
    { params: { lang } }
  );
  return response.data;
};

export const getUzbekistanTourDetails = async (
  tour_id: string,
  lang: string
): Promise<TourDetailType> => {
  const response = await axios.get<TourDetailType>(
    `${BASE_URL}/uzbekistan-tour-products/${tour_id}/`,
    { params: { lang } }
  );
  return response.data;
};

export const getEuropeTours = async (
  lang: string
): Promise<Array<TourType>> => {
  const response = await axios.get<Array<TourType>>(
    `${BASE_URL}/europe-tour-products/`,
    { params: { lang } }
  );
  return response.data;
};

export const getEuropeTourDetails = async (
  tour_id: string,
  lang: string
): Promise<TourDetailType> => {
  const response = await axios.get<TourDetailType>(
    `${BASE_URL}/europe-tour-products/${tour_id}/`,
    { params: { lang } }
  );
  return response.data;
};

export const getSanatoriumTours = async (
  lang: string
): Promise<Array<TourType>> => {
  const response = await axios.get<Array<TourType>>(
    `${BASE_URL}/sanatorium-products/`,
    { params: { lang } }
  );
  return response.data;
};

export const getSanatoriumDetails = async (
  tour_id: string,
  lang: string
): Promise<TourDetailType> => {
  const response = await axios.get<TourDetailType>(
    `${BASE_URL}/sanatorium-products/${tour_id}/`,
    { params: { lang } }
  );
  return response.data;
};

export const CreateRequestForTour = async (data: RequestForTourType) => {
  const response = await axios.post<RequestForTourType>(
    `${BASE_URL}/request-for-tour/`,
    data
  );
  console.log(response.data);

  return response.data;
};
