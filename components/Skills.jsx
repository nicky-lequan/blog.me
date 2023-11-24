'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {textVariant} from '@/utils/motion';
import {styles} from '@/app/styles';
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
        iconSrc: '/img/tools/java.png',
      },
      {
        name: 'Spring',
        iconSrc: '/img/tools/spring.png',
      },
      {
        name: 'Spring Boot',
        iconSrc: '/img/tools/springboot.png',
      },
      {
        name: 'Node.js',
        iconSrc: '/img/tools/nodejs.png',
      },
      {
        name: 'AWS Lambda',
        iconSrc: '/img/tools/awslambda.png',
      },
      {
        name: 'Hibernate',
        iconSrc: '/img/tools/hibernate.png',
      },
      {
        name: 'QueryDSL JPA',
        iconSrc: '/img/tools/querydsl.png',
      },
      {
        name: 'MyBatis',
        iconSrc: '/img/tools/mybatis.png',
      },
      {
        name: 'Flyway',
        iconSrc: '/img/tools/flyway.png',
      },
      {
        name: 'MySQL',
        iconSrc: '/img/tools/mysql.png',
      },
      {
        name: 'PostgreSQL',
        iconSrc: '/img/tools/postgresql.png',
      },
      {
        name: 'Gradle',
        iconSrc: '/img/tools/gradle.png',
      },
      {
        name: 'Maven',
        iconSrc: '/img/tools/maven.png',
      },
    ],
  },
  {
    category: 'Front End',
    tools: [
      {
        name: 'React.js',
        iconSrc: '/img/tools/reactjs.png',
      },
      {
        name: 'Next.js',
        iconSrc: '/img/tools/nextjs.png',
      },
      {
        name: 'Tailwind CSS',
        iconSrc: '/img/tools/tailwindcss.png',
      },
      {
        name: 'Material UI',
        iconSrc: '/img/tools/mui.png',
      },
      {
        name: 'Formik',
        iconSrc: '/img/tools/formik.png',
      },
      {
        name: 'MobX',
        iconSrc: '/img/tools/mobx.png',
      },
      {
        name: 'Html 5',
        iconSrc: '/img/tools/html.png',
      },
      {
        name: 'CSS 3',
        iconSrc: '/img/tools/css.png',
      },
      {
        name: 'Javascript (ESNext)',
        iconSrc: '/img/tools/javascript.png',
      },
      {
        name: 'Typescript',
        iconSrc: '/img/tools/typescript.png',
      },
    ],
  },
  {
    category: 'DevOps',
    tools: [
      {
        name: 'Git',
        iconSrc: '/img/tools/git.png',
      },
      {
        name: 'Docker',
        iconSrc: '/img/tools/docker.png',
      },
      {
        name: 'Github Action',
        iconSrc: '/img/tools/githubaction.png',
      },
      {
        name: 'ArgoCD',
        iconSrc: '/img/tools/argocd.png',
      },
      {
        name: 'Jenkins',
        iconSrc: '/img/tools/jenkins.png',
      },
      {
        name: 'Amazon EC2',
        iconSrc: '/img/tools/amazonec2.png',
      },
      {
        name: 'Amazon S3',
        iconSrc: '/img/tools/amazons3.png',
      },
      {
        name: 'Terraform',
        iconSrc: '/img/tools/terraform.png',
      },
      {
        name: 'K8s',
        iconSrc: '/img/tools/kubernetes.png',
      },
      {
        name: 'Amazon EKS',
        iconSrc: '/img/tools/amazoneks.png',
      },
      {
        name: 'AWS CodePipeline',
        iconSrc: '/img/tools/awscodepipeline.png',
      },
    ],
  },
  {
    category: 'Machine Learning',
    tools: [
      {
        name: 'Tensorflow',
        iconSrc: '/img/tools/tensorflow.png',
      },
      {
        name: 'Amazon Comprehend',
        iconSrc: '/img/tools/amazoncomprehend.png',
      },
    ],
  },
  {
    category: 'Etc.',
    tools: [
      {
        name: 'Amazon API Gateway',
        iconSrc: '/img/tools/amazonapigateway.png',
      },
      {
        name: 'AWS VPC',
        iconSrc: '/img/tools/awsvpc.png',
      },
      {
        name: 'Amazon EC2',
        iconSrc: '/img/tools/amazonec2.png',
      },
      {
        name: 'Amazon S3',
        iconSrc: '/img/tools/amazons3.png',
      },
      {
        name: 'AWS Lambda',
        iconSrc: '/img/tools/awslambda.png',
      },
      {
        name: 'Amazon RDS',
        iconSrc: '/img/tools/amazonrds.png',
      },
      {
        name: 'C++',
        iconSrc: '/img/tools/cpp.png',
      },
      {
        name: 'Python',
        iconSrc: '/img/tools/python.png',
      },
      {
        name: 'OpenCV',
        iconSrc: '/img/tools/opencv.png',
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
        <p className={styles.sectionSubText}>My capabilities</p>
        <h1 className={styles.sectionHeadText}>Skills</h1>
      </motion.div>

      <div className="mt-8">
        {skills.map((skill, index) => (
          <Accordion
            key={index + 1}
            open={open === index + 1}
            className="mb-2 rounded-[20px] border border-blue-gray-100 px-4">
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className={`border-b-0 transition-colors ${
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
};

export default SectionWrapper(Skills, 'skills');
