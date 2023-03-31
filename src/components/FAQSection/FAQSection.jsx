import { useState } from "react";

function FAQSection() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is CinemaZone?",
      answer:
        "CinemaZone is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
      active: false,
    },
    {
      question: "How much does CinemaZone cost?",
      answer:
        "Watch CinemaZone on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 29 zł to 60 zł a month. No extra costs, no contracts.",
      active: false,
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your CinemaZone account to watch instantly on the web at CinemaZone.com from your personal computer or on any internet-connected device that offers the CinemaZone app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take CinemaZone with you anywhere.",
      active: false,
    },
    {
      question: "How do I cancel?",
      answer:
        "CinemaZone is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      active: false,
    },
    {
      question: "What can I watch on CinemaZone?",
      answer:
        "CinemaZone has an extensive library of feature films, documentaries, TV shows, anime, award-winning CinemaZone originals, and more. Watch as much as you want, anytime you want.",
      active: false,
    },
    {
      question: "Is CinemaZone good for kids?",
      answer:
        "The CinemaZone Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
      active: false,
    },
  ]);

  function toggleFAQ(index) {
    const newFaqs = faqs.map((faq, i) => {
      if (i === index) {
        return {
          ...faq,
          active: !faq.active,
        };
      } else {
        return {
          ...faq,
          active: false,
        };
      }
    });
    setFaqs(newFaqs);
  }
  

  return (
    <section className="faq">
      <div className="faq__wrapper">
        <h2 className="faq__header">Frequently Asked Questions</h2>
        <div className="faq__q-wrapper">
          {faqs.map((faq, index) => (
            <div
              className={`faq__faq ${faq.active ? "active" : ""}`}
              key={index}
            >
              <button className="faq__question" onClick={() => toggleFAQ(index)}>
                {faq.question} <span>+</span>
              </button>
              {faq.active && <p className="faq__answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
