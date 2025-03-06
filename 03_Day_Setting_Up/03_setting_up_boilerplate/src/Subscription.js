import React from 'react';

function SubscriptionForm() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>SUBSCRIBE</h1>
      <p style={styles.subtitle}>Sign up with your email address to receive news and updates.</p>
      <div style={styles.inputContainer}>
        <input type="text" placeholder="First name" style={styles.input} />
        <input type="text" placeholder="Last name" style={styles.input} />
        <input type="email" placeholder="Email" style={styles.input} />
        <button style={styles.button}>Subscribe</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#D0E9FA',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px',
  },
  title: {
    fontSize: '24px',
    margin: '10px 0',
  },
  subtitle: {
    fontSize: '16px',
    margin: '10px 0',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#FF6B6B',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default SubscriptionForm;
