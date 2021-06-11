import React from "react";
import Link from "gatsby-link";
import * as helpers from "../util/helpers";
import "./TOCCard.css";

const sortFn = helpers.sorter;

const LessonCard = ({ content, title }) => {
  console.log(sortFn);

  const sections = content
    .map(lesson => lesson.node.frontmatter)
    .sort(sortFn)
    .reduce((acc, lesson) => {
      if (!acc.length) {
        acc.push([lesson]);
        return acc;
      }

      const lastSection = acc[acc.length - 1][0].section.split(",")[0];
      if (lastSection === lesson.section.split(",")[0]) {
        acc[acc.length - 1].push(lesson);
      } else {
        acc.push([lesson]);
      }

      return acc;
    }, []);

  return (
    <div>
      <div>

      <h1>Table of contents</h1>

          {sections.map(section => (
            <div key={section[0].section}>
              <h2>{section[0].section}</h2>
              <ul>
                {section.map(lesson => (
                  <li key={lesson.path}>
                    <Link to={lesson.path}>{lesson.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LessonCard;
