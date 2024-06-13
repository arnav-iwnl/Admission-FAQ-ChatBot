import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { BsChatDots } from 'react-icons/bs'; // Bootstrap Icons

const faqs = [
  {
    category: "Admission Criteria",
    questions: [
      {
        question: "What are the admission criteria?",
        answer: "The admission criteria typically include academic qualifications, entrance exam scores, and specific requirements set by the college."
      },
      {
        question: "What is the admission process?",
        answer: "The admission process usually involves filling out an application form, appearing for an entrance exam, and attending a counseling session."
      },
      {
        question: "How do I register for classes?",
        answer: "You can register for classes through the student portal during the registration period."
      }
    ]
  },
  {
    category: "Placement and ROI",
    questions: [
      {
        question: "What is the placement ROI?",
        answer: "The Placement Return on Investment (ROI) varies by course and institution. It is advisable to check specific college placement statistics for accurate information."
      }
    ]
  },
  {
    category: "Courses Offered",
    questions: [
      {
        question: "What courses can I opt for?",
        answer: "You can opt for various courses including Engineering, Medical, Arts, Science, Commerce, and many others. Please visit the college website for a detailed list of courses offered."
      }
    ]
  },
  {
    category: "Reserved Quota and Reservation System",
    questions: [
      {
        question: "Is there a reserved quota?",
        answer: "Yes, there is a reserved quota for categories such as SC, ST, OBC, and other categories as per government regulations."
      },
      {
        question: "Can you explain the reservation system?",
        answer: "The reservation system in India allocates a certain percentage of seats for SC, ST, OBC, and other categories to ensure equal opportunities for all sections of society."
      }
    ]
  },
  {
    category: "Scholarships and Financial Aid",
    questions: [
      {
        question: "Are there any scholarships available?",
        answer: "Yes, there are several scholarships available based on merit, financial need, and specific criteria set by the institution or external organizations."
      },
      {
        question: "How can I apply for scholarships?",
        answer: "You can apply for scholarships through the college’s official website or through specific scholarship portals. Ensure to check the eligibility criteria before applying."
      }
    ]
  },
  {
    category: "For Other Queries",
    questions: [
      {
        question: "Do you have any other questions?",
        answer: "For any other queries, please visit our website or contact us at (123) 456-7890."
      }
    ]
  }
];

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom of chat box on messages update
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleFAQClick = (faq) => {
    const userMessage = { sender: 'user', text: faq.question };
    const botResponse = { sender: 'bot', text: faq.answer };

    setMessages([...messages, userMessage, botResponse]);
  };

  return (
    <Container className="mt-5" fluid>
      <Row className="h-100">
        <Col md={3} className="h-100">
          <Card className="h-100">
            <Card.Header className="bg-primary text-white d-flex align-items-center justify-content-between">
              <span>FAQs</span>
              <BsChatDots className="fs-4" />
            </Card.Header>
            <Card.Body className="d-flex flex-column">
              {faqs.map((category, index) => (
                <div key={index} className="mb-3">
                  <h6 className="text-primary">{category.category}</h6>
                  {category.questions.map((faq, faqIndex) => (
                    <Button
                      key={faqIndex}
                      onClick={() => handleFAQClick(faq)}
                      variant="outline-primary"
                      className="mb-2 d-block w-100 text-start"
                    >
                      {faq.question}
                    </Button>
                  ))}
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col md={9} className="h-100">
          <Card className="h-100">
            <Card.Header className="bg-primary text-white">Chat Interface</Card.Header>
            <Card.Body className="chat-box" ref={chatBoxRef} style={{ maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
              {messages.map((msg, index) => (
                <div key={index} className={`message-container d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                  <div className={`message bg-${msg.sender === 'user' ? 'light' : 'info'} text-${msg.sender === 'user' ? 'dark' : 'white'} p-3 mb-3 rounded-3 shadow-sm`}>
                    <strong>{msg.sender === 'user' ? '👤 You ' : '🤖 Bot '}: </strong>
                     {msg.text}
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
