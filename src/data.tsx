import {
  BuildOutlined,
  ApartmentOutlined,
  HomeOutlined,
  ProjectOutlined,
  SketchOutlined,
  CalculatorOutlined,
  DeploymentUnitOutlined,
  DeleteOutlined,
  AlertOutlined,
  PhoneFilled,
  MailFilled,
  EnvironmentFilled, SafetyCertificateTwoTone, TeamOutlined, TrophyOutlined
} from "@ant-design/icons";

import okeAbiola from './assets/okeAbiola.png';
import CEOAdelekeAjibola from './assets/AdelekeAjibola.png';
import adebayoSamsundeen from './assets/adebayoSamsudeen.png';



const contactIcon = {
    fontSize:'27px',
    color:'var(--ivory)',
    padding:'15px',
    borderRadius:'15px',
  
  }

    const featureIcon={
    color:'var(--ivory)',
    fontWeight:'900',
    fontSize:'40px',
    

  }


export const services = [
  {
    title: "Engineering & Design",
    description:
      "Structural and civil engineering solutions designed to international standards — precise, compliant, and built to last.",
    icon: <BuildOutlined className='icon-style' />,
  },
  {
    title: "Civil Construction",
    description:
      "Roads, drainages, bridges and civil infrastructure executed with precision, safety, and efficiency across Nigerian cities.",
    icon: <ApartmentOutlined className='icon-style' />,
  },
  {
    title: "Housing Construction",
    description:
      "Affordable housing units for outright sale and mortgage — quality builds that meet modern living standards.",
    icon: <HomeOutlined className='icon-style' />,
  },
  {
    title: "Project & Facility Management",
    description:
      "End-to-end project oversight and facility management ensuring on-time delivery and operational excellence.",
    icon: <ProjectOutlined className='icon-style' />,
  },
  {
    title: "Architecture",
    description:
      "Innovative architectural designs that balance aesthetics, functionality, and regulatory compliance.",
    icon: <SketchOutlined className='icon-style' />,
  },
  {
    title: "Quantity Surveying",
    description:
      "Accurate cost estimation, budget control, and financial management throughout every project lifecycle.",
    icon: <CalculatorOutlined className='icon-style' />,
  },
  {
    title: "Aerial Survey",
    description:
      "Advanced drone and aerial survey solutions for topographic mapping, site assessment, and project monitoring.",
    icon: <DeploymentUnitOutlined className='icon-style' />,
  },
  {
    title: "Organised Refuse Disposal",
    description:
      "Structured and environmentally responsible waste management solutions for construction sites and communities.",
    icon: <DeleteOutlined className='icon-style' />,
  },
  {
    title: "Fire Service Solutions",
    description:
      "Comprehensive fire safety systems design, installation, and compliance services for residential and commercial buildings.",
    icon: <AlertOutlined className='icon-style' />,
  },
];

export const leaders = [
  {
    "name": "Engr. Adeleke Ajibola",
    "position": "Chief Executive Officer",
    "image": CEOAdelekeAjibola,
    "description": "Providing strategic leadership and industry expertise, overseeing the company's vision and commitment to high-quality engineering solutions."
  },
  {
    "name": "Adebayo Samsundeen",
    "position": "Director of Projects",
    "image": adebayoSamsundeen,
    "description": "Responsible for project coordination and execution, ensuring operational efficiency and timely delivery across all infrastructure projects."
  },
  {
    "name": "Engr. Oke Abiola Afeez",
    "position": "Director, Road Projects",
    "image":okeAbiola,
    "description": "Leading road and infrastructure development with a focus on durability, safety, and world-class engineering standards."
  }
]

export const contactInfo = [
  {
    icon: <PhoneFilled style={{...contactIcon}}/>,
    label: "Call us directly",
    value:<a href="tel:+2348080548331">+234 123 454 6789</a>
  },
  {
    icon: <MailFilled style={{...contactIcon}}/>,
    label: "Email us anytime",
    value: <a href="mailto:info@dewhynoconstruction.ng">info@ynuxconstruction</a>
  },
  {
    icon: <EnvironmentFilled style={{...contactIcon}}/>,
    label: "Visit our office",
    value: "Abuja, Nigeria"
  }
];


export const ctaFeaturesList = [
  {
    id: 1,
    text: "Free, no-obligation project consultation",
    icon: <h1 style={{ ...featureIcon }}>FREE</h1>
  },
  {
    id: 2,
    text: "Registered & compliant construction company",
    icon: <SafetyCertificateTwoTone style={{ ...featureIcon }} />
  },
  {
    id: 3,
    text: "Experienced team across Nigeria",
    icon: <TeamOutlined style={{ ...featureIcon }} />
  },
  {
    id: 4,
    text: "End-to-end project management",
    icon: <TrophyOutlined style={{ ...featureIcon }} />
  }
];