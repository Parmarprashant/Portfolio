import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('l-V9MM0TrkHxURYX6');

export default function ContactTest() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    try {
      console.log('Form Data:', formData);

      // Try different variable name combinations
      const templateParams = {
        to_email: 'prashantparmar9919@gmail.com',
        from_name: formData.name,
        email: formData.email,
        from_email: formData.email,
        message: formData.message,
        user_name: formData.name,
        user_email: formData.email,
      };

      console.log('Sending with params:', templateParams);
      console.log('Service ID: service_k2twq3k');
      console.log('Template ID: template_3bt8i4k');
      console.log('Public Key: l-V9MM0TrkHxURYX6');

      const response = await emailjs.send(
        'service_k2twq3k',
        'template_ktnrbo4',
        templateParams
      );

      console.log('Full Response:', response);
      
      if (response.status === 200) {
        setStatus('✅ SUCCESS! Email sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Full Error Object:', error);
      console.error('Error Text:', error.text);
      console.error('Error Message:', error.message);
      
      let errorMsg = 'Error sending email';
      if (error.text) {
        errorMsg = error.text;
      } else if (error.message) {
        errorMsg = error.message;
      }
      
      setStatus(`❌ ERROR: ${errorMsg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>📧 EmailJS Contact Form Test</h1>
      
      <div style={{ 
        padding: '15px', 
        marginBottom: '20px', 
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        fontSize: '12px'
      }}>
        <p><strong>Service ID:</strong> service_k2twq3k</p>
        <p><strong>Template ID:</strong> template_ktnrbo4</p>
        <p><strong>Public Key:</strong> l-V9MM0TrkHxURYX6</p>
        <p style={{ color: 'red' }}>⚠️ Check browser console (F12) for detailed error messages</p>
      </div>

      {status && (
        <div style={{
          padding: '12px',
          marginBottom: '20px',
          backgroundColor: status.includes('SUCCESS') ? '#d4edda' : '#f8d7da',
          color: status.includes('SUCCESS') ? '#155724' : '#721c24',
          border: '1px solid',
          borderColor: status.includes('SUCCESS') ? '#c3e6cb' : '#f5c6cb',
          borderRadius: '4px'
        }}>
          {status}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your@email.com"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message..."
            rows="5"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              fontFamily: 'Arial'
            }}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: isSubmitting ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div style={{
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#e7f3ff',
        borderLeft: '4px solid #2196F3',
        borderRadius: '4px'
      }}>
        <h3>🔍 Debugging Steps:</h3>
        <ol style={{ fontSize: '14px', lineHeight: '1.6' }}>
          <li>Open Browser Console (F12 → Console tab)</li>
          <li>Fill in the form and click "Send Message"</li>
          <li>Look for error messages in the console</li>
          <li>Copy the error and tell me what it says</li>
          <li>Also tell me what variables your EmailJS template uses</li>
        </ol>
      </div>
    </div>
  );
}