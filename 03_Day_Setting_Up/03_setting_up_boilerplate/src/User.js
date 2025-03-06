import React from 'react';

function UserCard() {
  return (
    <div style={styles.card}>
      <img src="https://via.placeholder.com/150" alt="Profile" style={styles.image} />
      <h2 style={styles.name}>ASABENEH YETAYEH</h2>
      <p style={styles.title}>Senior Developer, Finland</p>
      <div style={styles.skills}>
        {skills.map(skill => (
          <span key={skill} style={styles.skill}>{skill}</span>
        ))}
      </div>
      <p style={styles.joined}>Joined on Aug 30, 2020</p>
    </div>
  );
}

const skills = [
  "HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB", "Python",
  "Flask", "Django", "NumPy", "Pandas", "Data Analysis", "MYSQL", "GraphQL",
  "D3.js", "Gatsby", "Docker", "Heroku", "Git"
];

const styles = {
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '300px',
    margin: '0 auto',
  },
  image: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
  },
  name: {
    fontSize: '20px',
    margin: '10px 0',
  },
  title: {
    fontSize: '14px',
    color: 'gray',
    margin: '5px 0',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '5px',
    margin: '10px 0',
  },
  skill: {
    backgroundColor: '#D0E9FA',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '12px',
  },
  joined: {
    fontSize: '12px',
    color: 'gray',
    margin: '10px 0',
  }
};

export default UserCard;
