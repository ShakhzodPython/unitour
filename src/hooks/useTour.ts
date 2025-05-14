import { useMutation, useQuery } from "@tanstack/react-query";
import {
  CreateRequestForTour,
  getEuropeTourDetails,
  getEuropeTours,
  getSanatoriumTours,
  getSanatoriumDetails,
  getUzbekistanTourDetails,
  getUzbekistanTours,
} from "../service/tourService";
import { RequestForTourType } from "../types/tourService.types";
import { useTranslation } from "react-i18next";

export function useUzbekistanTour() {
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: ["uzbekistanTours"],
    queryFn: () => getUzbekistanTours(i18n.language),
  });
}

export function useUzbekistanTourDetail(tour_id: string) {
  const { i18n } = useTranslation();
  return useQuery({
    queryKey: ["uzbekistanTourDetail", tour_id],
    queryFn: () => getUzbekistanTourDetails(tour_id, i18n.language),
  });
}

export function useEuropeTour() {
  const { i18n } = useTranslation();
  return useQuery({
    queryKey: ["uzbekistanTours"],
    queryFn: () => getEuropeTours(i18n.language),
  });
}

export function useEuropeTourDetail(tour_id: string) {
  const { i18n } = useTranslation();
  return useQuery({
    queryKey: ["uzbekistanTourDetail", tour_id],
    queryFn: () => getEuropeTourDetails(tour_id, i18n.language),
  });
}

export function useSanatoriumTour() {
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: ["uzbekistanTours"],
    queryFn: () => getSanatoriumTours(i18n.language),
  });
}

export function useSanatoriumTourDetail(tour_id: string) {
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: ["uzbekistanTourDetail", tour_id],
    queryFn: () => getSanatoriumDetails(tour_id, i18n.language),
  });
}

export function useRequestForTour() {
  return useMutation({
    mutationKey: ["requestForTour"],
    mutationFn: (data: RequestForTourType) => CreateRequestForTour(data),
  });
}
