import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

import styles from "./Detail.module.scss";
import { useRequestForTour, useEuropeTourDetail } from "../../../hooks/useTour";

export function TourDetail() {
  const navigate = useNavigate();
  const { tour_id } = useParams();

  const [form, setForm] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    additional_info: "",
  });

  const { data: tour } = useEuropeTourDetail(tour_id || "");

  const { mutate } = useRequestForTour();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("ru-RU"); // returns DD.MM.YYYY
  };

  const formatDateRange = (start: string, end: string) => {
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!tour_id) return;

    mutate(
      {
        ...form,
        tour_id: tour?.id ? tour.id : "",
        tour_type: "UZ",
      },
      {
        onSuccess: () => {
          navigate("/tours/uzbekistan");
        },
      }
    );
  };

  return (
    <div className={styles.tour_detail}>
      <div className={styles.tour_detail_container}>
        {tour ? (
          <div className={styles.tour_detail_layout}>
            <div className={styles.tour_detail_layout_content}>
              <div className={styles.tour_detail_layout_content_image}>
                <img src={tour.image} alt={tour.title} />
              </div>
              <div className={styles.tour_detail_layout_heading}>
                <h1 className={styles.tour_detail_layout_content_heading_title}>
                  {tour.title}
                </h1>
                <p
                  className={
                    styles.tour_detail_layout_content_heading_short_detail
                  }
                >
                  {tour.short_detail}
                </p>
                <h3
                  className={styles.tour_detail_layout_content_heading_datetime}
                >
                  {formatDateRange(tour.start_date_time, tour.end_date_time)}
                </h3>
                <h1 className={styles.tour_detail_layout_content_heading_price}>
                  {Number(tour.price)
                    .toLocaleString("ru-RU")
                    .replace(/,/g, " ")}{" "}
                  so'm
                </h1>
              </div>
            </div>
            <div className={styles.tour_detail_layout_content_information}>
              <div
                className={
                  styles.tour_detail_layout_content_information_extra_detail
                }
                dangerouslySetInnerHTML={{ __html: tour.extra_detail }}
              />

              <div
                className={styles.tour_detail_layout_content_information_detail}
                dangerouslySetInnerHTML={{ __html: tour.detail }}
              />
            </div>

            <form
              onSubmit={handleSubmit}
              className={styles.tour_detail_layout_content_request_tour}
            >
              <h1
                className={styles.tour_detail_layout_content_request_tour_title}
              >
                To clarify
              </h1>

              <div
                className={
                  styles.tour_detail_layout_content_request_tour_inputs
                }
              >
                <input
                  className={
                    styles.tour_detail_layout_content_request_tour_inputs_input
                  }
                  type="text"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  placeholder="Full name"
                />
                <input
                  className={
                    styles.tour_detail_layout_content_request_tour_inputs_input
                  }
                  type="text"
                  name="additional_info"
                  value={form.additional_info}
                  onChange={handleChange}
                  placeholder="Additional information"
                />
              </div>

              <div
                className={
                  styles.tour_detail_layout_content_request_tour_inputs
                }
              >
                <input
                  className={
                    styles.tour_detail_layout_content_request_tour_inputs_input
                  }
                  type="text"
                  name="phone_number"
                  value={form.phone_number}
                  onChange={handleChange}
                  placeholder="Phone number"
                />
                <input
                  className={
                    styles.tour_detail_layout_content_request_tour_inputs_input
                  }
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="E-mail"
                />
              </div>

              <button
                className={
                  styles.tour_detail_layout_content_request_tour_button
                }
              >
                <span>Send a request</span>
              </button>
            </form>
          </div>
        ) : (
          <>Not found</>
        )}
      </div>
    </div>
  );
}
