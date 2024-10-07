import React from 'react';
import { FaUniversity, FaCertificate, FaLaptop, FaTools, FaSchool, FaGlobe, FaBookOpen, FaCheckCircle, FaSync, FaLink } from 'react-icons/fa';

const accreditations = [
  {
    title: 'Institutional Accreditation',
    icon: <FaUniversity size={40} />,
    purpose: 'To evaluate the overall quality and effectiveness of an entire educational institution, ensuring that it meets established standards of excellence.',
    process: 'Involves comprehensive reviews of governance, administration, faculty qualifications, curriculum, resources, and student services. Institutions typically undergo a self-study followed by a peer review.',
    benefits: 'Enhances the credibility of the institution, attracts prospective students, improves opportunities for funding and partnerships, and fosters trust among stakeholders.',
  },
  {
    title: 'Programmatic Accreditation',
    icon: <FaCertificate size={40} />,
    purpose: 'To assess specific academic programs or departments within an institution, ensuring they meet discipline-specific standards.',
    process: 'Programs prepare a detailed self-study report that is reviewed by an external accrediting body. This includes curriculum evaluations, faculty qualifications, and student outcomes.',
    benefits: 'Validates the quality of the program, enhances student enrollment, provides a competitive edge, and assures students that the program meets professional standards.',
  },
  {
    title: 'Distance Education Accreditation',
    icon: <FaLaptop size={40} />,
    purpose: 'To evaluate online or distance education programs, ensuring they provide quality learning experiences comparable to traditional education.',
    process: 'Involves assessment of course design, instructional delivery, faculty qualifications, and student support services in an online environment, usually through a combination of self-study and external review.',
    benefits: 'Increases student confidence in online offerings, validates the institution\'s efforts in delivering quality distance education, and may improve funding options.',
  },
  {
    title: 'Vocational and Technical Accreditation',
    icon: <FaTools size={40} />,
    purpose: 'To assess programs that prepare students for specific trades or careers, focusing on practical skills and job readiness.',
    process: 'Programs undergo evaluation based on industry standards, including curriculum relevance, faculty expertise, and student placement rates.',
    benefits: 'Enhances the employability of graduates, builds partnerships with industry stakeholders, and ensures that training programs meet the needs of the workforce.',
  },
  {
    title: 'K-12 Accreditation',
    icon: <FaSchool size={40} />,
    purpose: 'To ensure that primary and secondary educational institutions meet established educational standards and provide a quality learning environment.',
    process: 'Schools engage in a self-study process, followed by an evaluation from an accrediting body that assesses areas such as curriculum, teaching quality, and student outcomes.',
    benefits: 'Provides legitimacy and recognition, helps schools improve educational quality, ensures accountability, and facilitates student transfers between accredited institutions.',
  },
  {
    title: 'International Accreditation',
    icon: <FaGlobe size={40} />,
    purpose: 'To evaluate institutions for recognition on a global scale, ensuring they meet international educational standards.',
    process: 'Institutions undergo a thorough review process that assesses their global outreach, curriculum relevance, faculty qualifications, and student outcomes in an international context.',
    benefits: 'Increases global visibility, enhances international student recruitment, fosters partnerships with global institutions, and assures stakeholders of quality education.',
  },
  {
    title: 'Subject or Discipline-Specific Accreditation',
    icon: <FaBookOpen size={40} />,
    purpose: 'To target specific fields or subjects, ensuring that programs meet specialized standards relevant to particular disciplines (e.g., Health Sciences, Business Administration).',
    process: 'Programs prepare documentation and undergo review based on criteria relevant to their discipline, including curriculum, faculty qualifications, and student performance metrics.',
    benefits: 'Validates the quality of the program within the discipline, enhances faculty and student confidence, and improves alignment with industry standards.',
  },
  {
    title: 'Quality Assurance Certification',
    icon: <FaCheckCircle size={40} />,
    purpose: 'To assess institutions against a set of quality standards, providing a benchmark for continuous improvement.',
    process: 'Institutions undergo a self-assessment process followed by an external review to ensure compliance with established quality benchmarks.',
    benefits: 'Encourages a culture of quality and accountability, helps institutions identify areas for improvement, and provides a mechanism for ongoing evaluation and enhancement.',
  },
  {
    title: 'Continuous Improvement Accreditation',
    icon: <FaSync size={40} />,
    purpose: 'To focus on an institution\'s ongoing efforts to improve quality and educational outcomes over time.',
    process: 'Institutions are required to demonstrate a commitment to continuous improvement through regular assessments and updates to their practices and outcomes.',
    benefits: 'Promotes a proactive approach to quality, ensures responsiveness to changing educational standards, and fosters a culture of excellence and accountability.',
  },
  {
    title: 'Dual Accreditation',
    icon: <FaLink size={40} />,
    purpose: 'To recognize institutions that meet the standards of more than one accrediting body, often beneficial for programs with diverse curricula.',
    process: 'Institutions undergo evaluations from multiple accrediting bodies, demonstrating compliance with varied standards and requirements.',
    benefits: 'Increases the credibility and marketability of the institution. Improving trust among stakeholders.',
  },
];

const Accreditation = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center mb-6">What INEAA is All About</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {accreditations.map((acc, index) => (
          <div key={index} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              {acc.icon}
              <h3 className="text-lg font-bold ml-2">{acc.title}</h3>
            </div>
            <p className="font-semibold">Purpose:</p>
            <p>{acc.purpose}</p>
            <p className="font-semibold mt-2">Process:</p>
            <p>{acc.process}</p>
            <p className="font-semibold mt-2">Benefits:</p>
            <p>{acc.benefits}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accreditation;
