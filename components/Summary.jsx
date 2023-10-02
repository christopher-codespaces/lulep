import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {

    const faqsList = [
        {
          q: "How does Lesedi Ukhanyo Light Education Project provide support to teachers?",
          a: "Our project specializes in giving in-classroom mentoring support to Mathematics, Languages, and Science teachers in primary and high schools. The goal is to enhance their teaching and learning skills for the benefit of learners in previously disadvantaged communities.",
        },
        {
          q: "What kind of mentoring programs does Lesedi Ukhanyo Light Education Project offer?",
          a: "We offer comprehensive mentoring programs for Mathematics, Languages, and Science teachers. Our programs focus on addressing specific challenges faced by teachers and providing guidance for their professional development.",
        },
        {
          q: "How can I get involved as a volunteer with Lesedi Ukhanyo Light Education Project?",
          a: "We have various volunteer opportunities available. Visit our Volunteer page for more information on how to get involved and contribute to our mission.",
        },
        {
          q: "What impact has Lesedi Ukhanyo Light Education Project made in the community?",
          a: "Our project strives to make a positive impact in the community through our mentoring programs and initiatives. Visit our Impact page to learn more about the outcomes and achievements we have realized.",
        },
        {
          q: "How can individuals or organizations contribute to Lesedi Ukhanyo Light Education Project?",
          a: "We welcome contributions from individuals and organizations. You can make a donation on our Donations page or explore partnership opportunities. Your support helps us continue our mission of providing quality education.",
        },
        {
          q: "Is Lesedi Ukhanyo Light Education Project open to sponsorships for events or programs?",
          a: "Yes, we welcome sponsorships from individuals and organizations. If you are interested in sponsoring an event or program, please reach out to us through our Contact page to discuss opportunities.",
        },
      ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          We have answered some common questions below. If you still have any
          queries, feel free to contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
