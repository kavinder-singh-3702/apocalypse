// Timeline.js
import { useState, useEffect } from "react";
import React from "react";
import "./index.css"; // Import your CSS file
import { motion } from "framer-motion";

const Timeline = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [percentageScrolled, setPercentageScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY - 120;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;

      const percentage = (scrollPosition / maxScroll) * 100;
      setScrollHeight(scrollPosition);
      setPercentageScrolled(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const rowItems = [
    {
      title: "First Meetup",
      date: "5th November 2023",
      content:
        "Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.",
      link: "#",
    },
    {
      title: "Texting Period",
      date: "6-18th November 2023",
      content:
        "Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.",
      link: "#",
    },
    {
      title: "Best date",
      date: "19nd nov 2023",
      content:
        "Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.",
      link: "#",
    },
    {
      title: "Fest Walk",
      date: "21nd nov 2023",
      content:
        "Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.",
      link: "#",
    },
    {
      title: "Exam Period",
      date: "22nd NoV - 13th December 2023",
      content:
        "Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.",
      link: "#",
    },
    {
      title: "Birthday",
      date: "14th December 2023",
      content:
        "Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.",
      link: "#",
    },
    // Add more rows as needed
  ];
  return (
    <div className="bg h-screen w-screen">
      <div className="wrapper relative w-screen h-screen">
        <motion.div
          className="center-line"
          style={{ height: `${percentageScrolled}%` }}
          whileInView={{ height: percentageScrolled < 150 }}
          transition={{ duration: 8 }}
        >
          {/* */}
        </motion.div>
        {/* row 1 */}
        {rowItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 * index }}
            className={`row ${index + 1}`}
          >
            <section>
              <div className="icon" />
              <div className="details">
                <span className="title">{item.title}</span>
                <span>{item.date}</span>
              </div>
              <p>{item.content}</p>
              <div className="bottom"></div>
            </section>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
