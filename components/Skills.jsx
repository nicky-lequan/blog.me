'use client';

import {useState} from 'react';
import SectionWrapper from './hoc/SectionWrapper';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Avatar,
  Tooltip,
} from '@/providers/AppProvider';

const skills = [
  {
    category: 'Back End',
    tools: [
      {
        name: 'Java',
        iconSrc: '/assets/images/skills/java.png',
      },
      {
        name: 'Spring',
        iconSrc: '/assets/images/skills/spring.png',
      },
      {
        name: 'Spring Boot',
        iconSrc: '/assets/images/skills/springboot.png',
      },
      {
        name: 'Node.js',
        iconSrc: '/assets/images/skills/nodejs.png',
      },
      {
        name: 'AWS Lambda',
        iconSrc: '/assets/images/skills/awslambda.png',
      },
      {
        name: 'QueryDSL JPA',
        iconSrc: '/assets/images/skills/querydsl.png',
      },
      {
        name: 'MyBatis',
        iconSrc: '/assets/images/skills/mybatis.png',
      },
      {
        name: 'Flyway',
        iconSrc: '/assets/images/skills/flyway.png',
      },
      {
        name: 'MySQL',
        iconSrc: '/assets/images/skills/mysql.png',
      },
      {
        name: 'PostgreSQL',
        iconSrc: '/assets/images/skills/postgresql.png',
      },
      {
        name: 'Gradle',
        iconSrc: '/assets/images/skills/gradle.png',
      },
      {
        name: 'Maven',
        iconSrc: '/assets/images/skills/maven.png',
      },
    ],
  },
  {
    category: 'Front End',
    tools: [
      {
        name: 'React.js',
        iconSrc: '/assets/images/skills/reactjs.png',
      },
      {
        name: 'Next.js',
        iconSrc: '/assets/images/skills/nextjs.png',
      },
      {
        name: 'Tailwind CSS',
        iconSrc: '/assets/images/skills/tailwindcss.png',
      },
      {
        name: 'Material UI',
        iconSrc: '/assets/images/skills/mui.png',
      },
      {
        name: 'Formik',
        iconSrc: '/assets/images/skills/formik.png',
      },
      {
        name: 'MobX',
        iconSrc: '/assets/images/skills/mobx.png',
      },
      {
        name: 'Html 5',
        iconSrc: '/assets/images/skills/html.png',
      },
      {
        name: 'CSS 3',
        iconSrc: '/assets/images/skills/css.png',
      },
      {
        name: 'Javascript (ESNext)',
        iconSrc: '/assets/images/skills/javascript.png',
      },
      // {
      //   name: 'Typescript',
      //   iconSrc: '/assets/images/skills/typescript.png',
      // },
    ],
  },
  {
    category: 'DevOps',
    tools: [
      {
        name: 'Git',
        iconSrc: '/assets/images/skills/git.png',
      },
      {
        name: 'Docker',
        iconSrc: '/assets/images/skills/docker.png',
      },
      {
        name: 'Github Action',
        iconSrc: '/assets/images/skills/githubaction.png',
      },
      {
        name: 'ArgoCD',
        iconSrc: '/assets/images/skills/argocd.png',
      },
      // {
      //   name: 'Jenkins',
      //   iconSrc: '/img/skills/jenkins.png',
      // },
      {
        name: 'Amazon EC2',
        iconSrc: '/assets/images/skills/amazonec2.png',
      },
      {
        name: 'Amazon S3',
        iconSrc: '/assets/images/skills/amazons3.png',
      },
      // {
      //   name: 'Terraform',
      //   iconSrc: '/img/skills/terraform.png',
      // },
      // {
      //   name: 'K8s',
      //   iconSrc: '/img/skills/kubernetes.png',
      // },
      // {
      //   name: 'Amazon EKS',
      //   iconSrc: '/assets/images/skills/amazoneks.png',
      // },
      {
        name: 'AWS CodePipeline',
        iconSrc: '/assets/images/skills/awscodepipeline.png',
      },
    ],
  },
  {
    category: 'Machine Learning',
    tools: [
      {
        name: 'Tensorflow',
        iconSrc: '/assets/images/skills/tensorflow.png',
      },
      {
        name: 'Amazon Comprehend',
        iconSrc: '/assets/images/skills/amazoncomprehend.png',
      },
    ],
  },
  {
    category: 'Etc.',
    tools: [
      {
        name: 'Amazon API Gateway',
        iconSrc: '/assets/images/skills/amazonapigateway.png',
      },
      {
        name: 'AWS VPC',
        iconSrc: '/assets/images/skills/awsvpc.png',
      },
      {
        name: 'Amazon EC2',
        iconSrc: '/assets/images/skills/amazonec2.png',
      },
      {
        name: 'Amazon S3',
        iconSrc: '/assets/images/skills/amazons3.png',
      },
      {
        name: 'AWS Lambda',
        iconSrc: '/assets/images/skills/awslambda.png',
      },
      {
        name: 'Amazon RDS',
        iconSrc: '/assets/images/skills/amazonrds.png',
      },
      {
        name: 'C++',
        iconSrc: '/assets/images/skills/cpp.png',
      },
      {
        name: 'Python',
        iconSrc: '/assets/images/skills/python.png',
      },
      {
        name: 'OpenCV',
        iconSrc: '/assets/images/skills/opencv.png',
      },
    ],
  },
];

function Skills() {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <p className="md:text-[1rem] text-[0.75rem] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
        Hammer and wrench
      </p>
      <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
        Skills
      </h1>

      <div className="mt-8">
        {skills.map((skill, index) => (
          <Accordion
            key={index + 1}
            open={open === index + 1}
            className="mb-2 rounded-[1.25rem] border border-blue-gray-100 px-4 shadow-inner">
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className={`border-b-0 transition-colors font-raleway font-bold ${
                open === index + 1
                  ? 'text-text hover:text-text'
                  : 'hover:text-text'
              }`}>
              {skill.category}
            </AccordionHeader>
            <AccordionBody className="pt-0 flex flex-wrap">
              {skill.tools.map((tool, index) => (
                <Tooltip
                  key={index}
                  content={tool.name}
                  animate={{
                    mount: {scale: 1, y: 0},
                    unmount: {scale: 0, y: 25},
                  }}>
                  <Avatar src={tool.iconSrc} alt={tool.name} variant="square" />
                </Tooltip>
              ))}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Skills, 'skills');
