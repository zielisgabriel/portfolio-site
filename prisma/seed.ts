import { prisma } from "../db";

async function main() {
  const technologies = [
    { id: 1, name: "Java" },
    { id: 2, name: "Spring Boot" },
    { id: 3, name: "Spring Security" },
    { id: 4, name: "Spring WebSocket" },
    { id: 5, name: "RabbitMQ" },
    { id: 6, name: "Next.js" },
    { id: 7, name: "TailwindCSS" },
    { id: 8, name: "MongoDB" },
    { id: 9, name: "Docker" },
    { id: 10, name: "AWS" },
    { id: 11, name: "TypeScript" },
    { id: 12, name: "Python" },
    { id: 13, name: "Flask" },
    { id: 14, name: "SQLite" },
    { id: 15, name: "Styled Components" },
    { id: 16, name: "React.js" }
  ];

  for (const technology of technologies) {
    await prisma.technology.upsert({
      where: { id: technology.id },
      update: {},
      create: {
        id: technology.id,
        name: technology.name
      }
    })
  }

  const projects = [
    {
      id: 1,
      title: "ZlsChat",
      description: "Chat application.",
      imageUrl: "https://zielis-gabriel-portfolio-projects-images.s3.us-east-1.amazonaws.com/zlschat-chat-page.png",
      repositoryUrl: "https://github.com/zielisgabriel/zlschat-web"
    },
    {
      id: 2,
      title: "CrossX",
      description: "Barbershop appointment application.",
      imageUrl: "https://zielis-gabriel-portfolio-projects-images.s3.us-east-1.amazonaws.com/barbershop-screen.png",
      repositoryUrl: "https://github.com/zielisgabriel/barbershop-appointment-api"
    },
    {
      id: 3,
      title: "ElevenLinks",
      description: "Freelance project to manage links",
      projectUrl: "https://elevenlinks.vercel.app/",
      imageUrl: "https://zielis-gabriel-portfolio-projects-images.s3.us-east-1.amazonaws.com/elevenlinks.jpeg"
    }
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.id },
      update: {},
      create: {
        id: project.id,
        title: project.title,
        description: project.description,
        imageUrl: project.imageUrl,
        projectUrl: project.projectUrl,
        repositoryUrl: project.repositoryUrl
      }
    })
  };

  const projectTechnologies = [
    { id: 1, projectId: 1, technologyId: 1 },
    { id: 2, projectId: 1, technologyId: 2 },
    { id: 3, projectId: 1, technologyId: 3 },
    { id: 4, projectId: 1, technologyId: 4 },
    { id: 5, projectId: 1, technologyId: 5 },
    { id: 6, projectId: 1, technologyId: 6 },
    { id: 7, projectId: 1, technologyId: 7 },
    { id: 8, projectId: 1, technologyId: 8 },
    { id: 9, projectId: 1, technologyId: 9 },
    { id: 10, projectId: 1, technologyId: 10 },

    { id: 11, projectId: 2, technologyId: 6 },
    { id: 12, projectId: 2, technologyId: 11 },
    { id: 13, projectId: 2, technologyId: 7 },
    { id: 14, projectId: 2, technologyId: 12 },
    { id: 15, projectId: 2, technologyId: 13 },
    { id: 16, projectId: 2, technologyId: 14 },

    { id: 17, projectId: 3, technologyId: 16 },
    { id: 18, projectId: 3, technologyId: 11 },
    { id: 19, projectId: 3, technologyId: 15 }
  ];

  for (const projectTechnology of projectTechnologies) {
    await prisma.projectTechnologies.upsert({
      where: { id: projectTechnology.id },
      update: {},
      create: {
        id: projectTechnology.id,
        projectId: projectTechnology.projectId,
        technologyId: projectTechnology.technologyId
      }
    });
  };

  console.log("Seed data inserted!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });