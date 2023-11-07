import React from "react";
import skills from "../data/skills.json";
import history from "../data/history.json";

export const Experience = () => {
  return (
    <section className="expContainer" id="experience">
      <h2 className="expTitle">Experiencia</h2>
      <div className="expContent">
        <div className="expSkills">
          {skills.map((skill, id) => {
            return (
              <div key={id} className="expSkill">
                <div className="skillImageContainer">
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className="history">
          {history.map((historyItem, id) => {
            return (
              <li key={id} className="historyItem">
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className="historyItemDetails">
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
