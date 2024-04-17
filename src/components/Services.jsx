import React from "react";

function Services() {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/Icon1.png",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/Icon2.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/Icon3.png",
    },
  ];

  return (
    <div className="md:px-20 px-4 py-20 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>
        {/* company logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="/src/assets/Company1.png" alt=""></img>
          <img src="/src/assets/Company2.png" alt=""></img>
          <img src="/src/assets/Company3.png" alt=""></img>
          <img src="/src/assets/Company4.png" alt=""></img>
          <img src="/src/assets/Company5.png" alt=""></img>
        </div>
      </div>
      {/* services */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 text-center">
          Manage your entire Community in a single system
        </h2>
        <p className="text-neutralGrey text-center">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      {/*cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className={`px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full`}
          >
            <div>
              <div className="bg-[#E8F5E9] h-14 w-14 mb-4 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl text-neutralDGrey font-bold px-2 mb-3">
                {service.title}
              </h4>
              <p className="text-neutralGrey text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
