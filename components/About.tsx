import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="aboutDiv"
    >
      <h3 className="title top-12">About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:w-64 md:h-64 xl:rounded-lg xl:w-[500px] xl:h-[500px] border-2 border-gray-200"
        src="/logo.jpg"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          What does{" "}
          <span className="text-gray-900 font-bold tracking-[3px]">BeByte</span>{" "}
          do?
        </h4>

        <p className="text-sm">
          BeByte acts with the vision of offering the right solution as soon as
          possible. is doing. In its efforts to express its name with quality
          providing service by always keeping efficiency and service quality at
          the forefront. BeByte, with the understanding that its most important
          resource is human, constantly strengthens and develops. Focus,
          Customer Relationship Management Systems, Business Intelligence,
          e-Commerce applications and Participating in many national and
          international projects on mobile applications. BeByte, which has
          successfully signed its name, is also with its visionary approach. new
          products and services by anticipating the developing sectoral needs.
          adds to its portfolio. Each one completed is reference in the industry
          BeByte, which continues to grow with the projects shown as not only at
          the point of being a response to the needs, but also to its customers.
          anticipating future innovations and new needs by providing full
          support in the sense of strategic business partnership as a principle
          has acquired. Products and solutions developed since its establishment
          partnerships, advanced use of technology and corporate has
          strengthened its expertise in consultancy in solutions BeByte provides
          high level of customer satisfaction with its solutions, turns their
          savings into success.
        </p>
      </div>
    </motion.div>
  );
}
