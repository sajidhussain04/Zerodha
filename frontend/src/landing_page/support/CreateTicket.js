import React from "react";
const sections = [
  {
    title: "Account Opening",
    icon: "fa-circle-plus",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa-user",
    items: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],
  },
  {
    title: "Kite",
    icon: "fa-paper-plane",
    items: ["IPO", "Trading FAQs", "Charts and orders", "Alerts and Nudges", "General"],
  },
  {
    title: "Funds",
    icon: "fa-indian-rupee-sign",
    items: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
  },
  {
    title: "Console",
    icon: "fa-magnifying-glass-plus",
    items: ["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"],
  },
  {
    title: "Coin",
    icon: "fa-circle-notch",
    items: [
      "Mutual funds",
      "National Pension Scheme (NPS)",
      "Fixed Deposit (FD)",
      "Features on Coin",
      "Payments and Orders",
      "General",
    ],
  },
];

function SearchForm() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h1 className="fs-2 text-center mb-5">
          To create a ticket, select a relevant topic
        </h1>

        {sections.map((section, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 p-4">
            <h4>
              <i className={`fa-solid ${section.icon} fa-sm me-2`}></i>
              {section.title}
            </h4>
            <ul className="mt-3 text-muted list-unstyled">
              {section.items.map((item, i) => (
                <li key={i}>
                  <a href="#" className="custom-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchForm;
