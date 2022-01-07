import React, { useState } from "react";
import data from "./data";

const Reminder = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <section className="container">
        <h1>{people.length} birthdays today</h1>
        {people.map((person) => {
          const { id, name, age, prof } = person;
          return (
            <article key={id} className="insideelem">
              <img src={prof} alt={name} />
              <div>
                <h2>{name}</h2>
                <h3>{age} years</h3>
              </div>
            </article>
          );
        })}
        <button className="btn" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </>
  );
};

export default Reminder;
