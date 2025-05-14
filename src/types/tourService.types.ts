export type TourType = {
  id: string;
  title: string;
  image: string;
  short_detail: string;
  start_date_time: string;
  end_date_time: string;
  price: number;
};

export type TourDetailType = {
  id: string;
  title: string;
  image: string;
  detail: string;
  short_detail: string;
  extra_detail: string;
  start_date_time: string;
  end_date_time: string;
  price: number;
};

export type RequestForTourType = {
  tour_id: string;
  tour_type: string;
  full_name: string;
  phone_number: string;
  email: string;
  additional_info?: string;
};
