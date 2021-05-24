import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Title from "../components/Title";
import useView from "../hooks/useView";

const servicesList = [
  {
    title: "Web Development",
    price: "$25-35/hr",
    description:
      "I will build your web application with the technologies of your choice. I can implement your existing design, or create one from scratch. Unlimited revisions, pages, and redesigns are available.",
  },
  {
    title: "Web Design",
    price: "$25/hr",
    description:
      "I will create the design of your web application in Figma or Adobe XD. Available as PDF, PNG, JPG, SVG, or direct link.",
  },
  {
    title: "Teaching",
    price: "$20/hr",
    description:
      "I will teach or tutor you in HTML, CSS, JavaScript, or React. Will also do code reviews and help with debugging.",
  },
  {
    title: "Search Engine Optimization",
    price: "$20/hr",
    description:
      "I will make your website more indexible by search engines. This gives your website more potential to rank higher on search engines such as Google, and increase sales or traffic.",
  },
  {
    title: "Hosting",
    price: "",
    description:
      "I will host your website cheaper than cloud providers such as Amazon Web Services, Google Cloud Platform, and Azure. Pricing varies by site.",
  },
];

export default function Services() {
  useView("/services");
  return (
    <>
      <Head>
        <title>Mito's Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title text="Services" />
        {servicesList.map((service) => (
          <Box key={service.title} mb="25px">
            <Heading size="md">
              {service.title}
              {service.price.length > 0 && ` - ${service.price}`}
            </Heading>
            <Text>{service.description}</Text>
          </Box>
        ))}
      </main>
    </>
  );
}
