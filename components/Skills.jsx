'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {fadeIn, textVariant} from '@/utils/motion';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Avatar,
  Tooltip,
} from '@material-tailwind/react';

const skills = [
  {
    category: 'Back End',
    tools: [
      {
        name: 'Java',
        iconSrc: '/img/skills/java.png',
      },
      {
        name: 'Spring',
        iconSrc: '/img/skills/spring.png',
      },
      {
        name: 'Spring Boot',
        iconSrc: '/img/skills/springboot.png',
      },
      {
        name: 'Node.js',
        iconSrc: '/img/skills/nodejs.png',
      },
      {
        name: 'AWS Lambda',
        iconSrc: '/img/skills/awslambda.png',
      },
      {
        name: 'Hibernate',
        iconSrc: '/img/skills/hibernate.png',
      },
      {
        name: 'QueryDSL JPA',
        iconSrc: '/img/skills/querydsl.png',
      },
      {
        name: 'MyBatis',
        iconSrc: '/img/skills/mybatis.png',
      },
      {
        name: 'Flyway',
        iconSrc: '/img/skills/flyway.png',
      },
      {
        name: 'MySQL',
        iconSrc: '/img/skills/mysql.png',
      },
      {
        name: 'PostgreSQL',
        iconSrc: '/img/skills/postgresql.png',
      },
      {
        name: 'Gradle',
        iconSrc: '/img/skills/gradle.png',
      },
      {
        name: 'Maven',
        iconSrc: '/img/skills/maven.png',
      },
    ],
  },
  {
    category: 'Front End',
    tools: [
      {
        name: 'React.js',
        iconSrc: '/img/skills/reactjs.png',
      },
      {
        name: 'Next.js',
        iconSrc: '/img/skills/nextjs.png',
      },
      {
        name: 'Tailwind CSS',
        iconSrc: '/img/skills/tailwindcss.png',
      },
      {
        name: 'Material UI',
        iconSrc: '/img/skills/mui.png',
      },
      {
        name: 'Formik',
        iconSrc: '/img/skills/formik.png',
      },
      {
        name: 'MobX',
        iconSrc: '/img/skills/mobx.png',
      },
      {
        name: 'Html 5',
        iconSrc: '/img/skills/html.png',
      },
      {
        name: 'CSS 3',
        iconSrc: '/img/skills/css.png',
      },
      {
        name: 'Javascript (ESNext)',
        iconSrc: '/img/skills/javascript.png',
      },
      {
        name: 'Typescript',
        iconSrc: '/img/skills/typescript.png',
      },
    ],
  },
  {
    category: 'DevOps',
    tools: [
      {
        name: 'Git',
        iconSrc: '/img/skills/git.png',
      },
      {
        name: 'Docker',
        iconSrc: '/img/skills/docker.png',
      },
      {
        name: 'Github Action',
        iconSrc: '/img/skills/githubaction.png',
      },
      {
        name: 'ArgoCD',
        iconSrc: '/img/skills/argocd.png',
      },
      {
        name: 'Jenkins',
        iconSrc: '/img/skills/jenkins.png',
      },
      {
        name: 'Amazon EC2',
        iconSrc: '/img/skills/amazonec2.png',
      },
      {
        name: 'Amazon S3',
        iconSrc: '/img/skills/amazons3.png',
      },
      {
        name: 'Terraform',
        iconSrc: '/img/skills/terraform.png',
      },
      {
        name: 'K8s',
        iconSrc: '/img/skills/kubernetes.png',
      },
      {
        name: 'Amazon EKS',
        iconSrc: '/img/skills/amazoneks.png',
      },
      {
        name: 'AWS CodePipeline',
        iconSrc: '/img/skills/awscodepipeline.png',
      },
    ],
  },
  {
    category: 'Machine Learning',
    tools: [
      {
        name: 'Tensorflow',
        iconSrc: '/img/skills/tensorflow.png',
      },
      {
        name: 'Amazon Comprehend',
        iconSrc: '/img/skills/amazoncomprehend.png',
      },
    ],
  },
  {
    category: 'Etc.',
    tools: [
      {
        name: 'Amazon API Gateway',
        iconSrc: '/img/skills/amazonapigateway.png',
      },
      {
        name: 'AWS VPC',
        iconSrc: '/img/skills/awsvpc.png',
      },
      {
        name: 'Amazon EC2',
        iconSrc: '/img/skills/amazonec2.png',
      },
      {
        name: 'Amazon S3',
        iconSrc: '/img/skills/amazons3.png',
      },
      {
        name: 'AWS Lambda',
        iconSrc: '/img/skills/awslambda.png',
      },
      {
        name: 'Amazon RDS',
        iconSrc: '/img/skills/amazonrds.png',
      },
      {
        name: 'C++',
        iconSrc: '/img/skills/cpp.png',
      },
      {
        name: 'Python',
        iconSrc: '/img/skills/python.png',
      },
      {
        name: 'OpenCV',
        iconSrc: '/img/skills/opencv.png',
      },
    ],
  },
];

const Skills = () => {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="md:text-[14px] text-[10px] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
          Hammer and wrench
        </p>
        <h1 className="text-text font-black md:text-[50px] sm:text-[42px] text-[30px]">
          Skills
        </h1>
      </motion.div>

      <motion.div className="mt-8" variants={fadeIn('left', 'tween', 0, 1)}>
        {skills.map((skill, index) => (
          <Accordion
            key={index + 1}
            open={open === index + 1}
            className="mb-2 rounded-[20px] border border-blue-gray-100 px-4 shadow-inner">
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
      </motion.div>
    </>
  );
};

export default SectionWrapper(Skills, 'skills');
