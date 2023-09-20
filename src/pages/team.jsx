
import PERSON1 from "../../public/2.png";
import PERSON2 from "../../public/3.png";
import PERSON3 from "../../public/4.png";
import BOD1 from "../../public/bod1.png";
import PERSON4 from "../../public/5.png";
import PERSON5 from "../../public/1.png";

const boardOfDirectorsData = [
  {
    name: "Iqbal Badruddin",
    role: "Founder and Country Director",
    image: PERSON1,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/iqbalbadruddin",
      twitter: "https://twitter.com/iqbalbadruddin",
      email: "mailto:iqbal@example.com",
    },
  },
  {
    name: "Kamran Ali",
    role: "Deputy Country Director",
    image: PERSON2,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/iqbalbadruddin",
      twitter: "https://twitter.com/iqbalbadruddin",
      email: "mailto:iqbal@example.com",
    },
  },
  {
    name: "Rozina Ahmed",
    role: "Head of Marketing team",
    image: PERSON3,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/iqbalbadruddin",
      twitter: "https://twitter.com/iqbalbadruddin",
      email: "mailto:iqbal@example.com",
    },
  },
  {
    name: "Pervaiz Ali",
    role: "Head of Communications",
    image: PERSON4,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/iqbalbadruddin",
      twitter: "https://twitter.com/iqbalbadruddin",
      email: "mailto:iqbal@example.com",
    },
  },
  {
    name: "Atif Ahmed",
    role: "Lead of Something...",
    image: BOD1,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/iqbalbadruddin",
      twitter: "https://twitter.com/iqbalbadruddin",
      email: "mailto:iqbal@example.com",
    },
  },
];

const teamMembersData = [
  {
    name: "Ali Shan",
    role: "IT and Media Team",
    image: PERSON5,
  },
  // Add more team members using the imported images as needed
];

const BoardOfDirectors = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-auto pb-10 lg:max-w-screen-lg">
      {boardOfDirectorsData.map((member, index) => (
        <div
          key={index}
          className="animate__fadeInLeft animate__animated text-center"
        >
          <div className="hover:shadow-2xl relative rounded-full shadow bg-green-600 overflow-hidden mx-auto">
            <img
              className="relative rounded-full transition-transform transform scale-100 hover:scale-110"
              src={member.image}
              alt={member.name}
            />
          </div>
          <p className="text-lg font-bold font-pop">{member.name}</p>
          <p className="mb-5 text-xs text-gray-800">{member.role}</p>
          <div className="flex justify-center space-x-3">
            <a
              href={member.socialLinks.linkedin}
              className="text-gray-600 transition-colors duration-300 hover:text-green-600"
            >
              <span className="fa-brands fa-linkedin text-xl"></span>
            </a>
            <a
              href={member.socialLinks.twitter}
              className="text-gray-600 transition-colors duration-300 hover:text-green-600"
            >
              <span className="fa-brands fa-twitter text-xl"></span>
            </a>
            <a
              href={member.socialLinks.email}
              className="text-gray-600 transition-colors duration-300 hover:text-green-600"
            >
              <span className="fa-regular fa-envelope text-xl"></span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const TeamMembers = () => {
  return (
    <div className="flex flex-wrap justify-center mx-auto py-5 sm:gap-0 sm:space-x-10 md:flex-row lg:flex-none lg:flex-row lg:space-x-10 text-center lg:max-w-screen-lg">
      {teamMembersData.map((member, index) => (
        <div
          key={index}
          className="animate__fadeInLeft animate__animated text-center"
        >
          <div className="hover:shadow-2xl relative rounded shadow bg-green-600 overflow-hidden mx-auto">
            <img
              className="relative w-48 h-48 rounded transition-transform transform scale-100 hover:scale-110"
              src={member.image}
              alt={member.name}
            />
          </div>
          <p className="text-lg font-bold font-pop">{member.name}</p>
          <p className="mb-5 text-xs text-gray-800">{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default function Team() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-6xl md:px-8 lg:px-2">
      <div className="mx-auto pt-4 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px  text-3xl font-semibold font-pop tracking-wider text-teal-900 uppercase rounded bg-teal-accent-400">
          FRidays for Future Pakistan Board of Directors
        </p>
      </div>

      <BoardOfDirectors />

      <hr />

      <div className="mx-auto pt-4 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px  text-3xl font-semibold font-pop tracking-wider text-teal-900 uppercase rounded bg-teal-accent-400">
          Our Team
        </p>
      </div>

      <TeamMembers />
    </div>
  );
}
