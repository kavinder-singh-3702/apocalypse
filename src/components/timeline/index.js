// Timeline.js
import React from "react";
import "./index.css"; // Import your CSS file

const Timeline = () => {
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
    <div className="">
      <div className="wrapper relative w-screen h-screen">
        <div className="center-line">
          <a href="#" className="scroll-icon">
            <div icon="caret-up" />
          </a>
        </div>
        {/* row 1 */}
        {rowItems.map((item, index) => (
          <div className={`row ${index + 1}`}>
            <section>
              <div className="icon" />
              <div className="details">
                <span className="title">{item.title}</span>
                <span>{item.date}</span>
              </div>
              <p>{item.content}</p>
              <div className="bottom">
                <a href="#">Read more</a>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
