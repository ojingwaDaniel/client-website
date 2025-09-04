import React from "react";
import { motion } from "framer-motion";
import { clientReviews } from "../data/reviewsData";

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-section">
      <motion.h2
        className="section-title-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="reviews-wrapper">
        {clientReviews.map((review, i) => (
          <motion.div
            key={i}
            className="review-tile"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <div className="quote-mark">“</div>
            <p className="review-text">{review.review}</p>
            <div className="review-meta">
              <span className="review-name">{review.name}</span> —{" "}
              <span className="review-company">{review.company}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
