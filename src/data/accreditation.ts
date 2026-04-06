export interface Accreditation {
  id: string;
  title: string;
  logo: string;
  description: string;
}

export const accreditations: Accreditation[] = [
  {
    id: "nabh",
    title: "NABH",
    logo: "/images/accreditation/accreditation-img-1-1.png",
    description:
      "Accreditation by the National Accreditation Board for Hospitals & Healthcare Providers (NABH) confirms that our Ethics Committee meets nationally benchmarked standards for ethical review, participant protection, and governance of clinical trials. This accreditation reflects structured operating procedures, independent oversight, and consistent adherence to Good Clinical Practice (GCP) principles. It demonstrates a validated system for ethical decision-making, risk assessment, and monitoring of ongoing studies, reinforcing confidence in the safety and rights of trial participants.",
  },
  {
    id: "dcgi",
    title: "DCGI",
    logo: "/images/accreditation/accreditation-img-2-1.jpg",
    description:
      "Recognition by the Drugs Controller General of India (DCGI) authorizes our Ethics Committee to review and oversee international clinical trials conducted in India. This status signifies compliance with Indian regulatory requirements governing multinational research and confirms that our ethics framework is aligned with global clinical trial standards. DCGI recognition supports regulatory acceptance of study approvals and ensures that international sponsors can operate within a compliant and transparent ethics environment.",
  },
  {
    id: "dhr",
    title: "DHR",
    logo: "/images/accreditation/accreditation-img-2-2.jpg",
    description:
      "Registration with the Department of Health Research establishes our Ethics Committee as a nationally recognized body operating under the ethical guidelines issued by the Government of India. This registration affirms institutional commitment to responsible biomedical research, independent ethics review, and participant welfare. It also ensures that research activities are conducted within a standardized framework that emphasizes accountability, transparency, and ethical integrity.",
  },
  {
    id: "siro",
    title: "SIRO",
    logo: "/images/accreditation/accreditation-img-2-3.jpg",
    description:
      "Recognition as a Scientific and Industrial Research Organization (SIRO), along with Form 3CF approval, validates our institution as an approved research entity under the Ministry of Science & Technology. This designation acknowledges our infrastructure, scientific capability, and governance systems supporting structured research programs. It reflects national recognition of our research environment and strengthens our credibility as a compliant institution capable of conducting high-quality, regulated clinical investigations.",
  },
];

export const introText =
  "Our hospital-based clinical trial site conducts international Phase I–IV drug studies within a structured framework of regulatory compliance, ethics governance, and scientific rigor. We operate under established national standards to ensure participant safety, protocol integrity, and transparent oversight across all research activities. Our ethics infrastructure is designed to meet the expectations of global sponsors and regulatory authorities, supporting responsible conduct of research while maintaining high operational reliability.";

export const youtubeLink = "https://www.youtube.com/watch?v=GGelO2dkDDQ";
