import { ArrowButton, SectionPill } from "../site-header";

const plans = [
  {
    name: "Pro Membership",
    price: "$120",
    tag: "Most Popular Plan",
    featured: true,
    benefits: [
      "8 group classes",
      "4 court hours",
      "2 private lessons",
      "Club tournament access",
    ],
  },
  {
    name: "Elite Membership",
    price: "$80",
    benefits: [
      "4 group classes",
      "2 court hours",
      "1 private lesson",
      "Club tournament access",
    ],
  },
  {
    name: "Starter Membership",
    price: "$40",
    benefits: ["2 group classes", "1 court hour", "Club tournament access"],
  },
];
export function Memberships() {
  return (
    <section className="membership section-wrap reveal">
      <div className="membership-intro">
        <SectionPill>Memberships</SectionPill>
        <h2>Three refined membership plans — elevate your game.</h2>
        <p>Personalized benefits. Premium courts. Stronger community.</p>
      </div>
      <div className="plans">
        {plans.map((plan) => (
          <article
            className={`plan ${plan.featured ? "featured" : ""}`}
            key={plan.name}
          >
            {plan.tag && <span className="plan-tag">{plan.tag}</span>}
            <h3>{plan.name}</h3>
            <strong>
              {plan.price}
              <small>/month</small>
            </strong>
            <ul>
              {plan.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ArrowButton>Join Now</ArrowButton>
          </article>
        ))}
      </div>
    </section>
  );
}
