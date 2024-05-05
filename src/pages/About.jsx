import { Helmet } from "react-helmet-async";
import { Container, Typography } from "@mui/material";

const About = () => {
    return (
        <Container maxWidth="md" className="my-12">
            <Helmet>
                <title>TutorHive | About</title>
            </Helmet>

            <Typography variant="h2" component="h2" color="primary" sx={{ fontWeight: 'bold' }}>
                Welcome to TutorHive!
            </Typography>
            <Typography variant="h4" component="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                Here learning knows no bounds!
            </Typography>

            <Typography
                variant="body1"
                color="grey.600"
                sx={{
                    mb: '2rem',
                    mt: '1rem',
                }}
            >
                At TutorHive, we believe in the power of education and the potential within every individual. Our platform is designed to connect passionate tutors with eager learners, creating a vibrant community of knowledge seekers. Whether you are here to offer your expertise or seeking guidance, TutorHive is your go-to destination for personalized learning experiences.
            </Typography>

            <Typography
                variant="h4"
                component="h2"
                sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                }}
            >Our Mission:</Typography>
            <Typography
                variant="body1"
                color="grey.600"
                sx={{
                    mb: '2rem',
                    mt: '1rem',
                }}
            >
                Our mission is to empower both tutors and learners by providing a seamless platform for educational exchange. We aim to foster a supportive learning environment where skills are honed, confidence is built, and knowledge is shared.
            </Typography>

            <Typography
                variant="h4"
                component="h2"
                sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                }}
            >Why TutorHive?</Typography>
            <Typography
                variant="body1"
                color="grey.600"
                sx={{
                    mb: '2rem',
                    mt: '1rem',
                }}
            >
                <span className="font-bold text-gray-600">Diverse Expertise:</span> Our platform hosts a wide array of subjects and skills. From academic subjects to specialized areas of interest, TutorHive brings together a diverse pool of tutors to cater to all learning needs.
            </Typography>

            <Typography
                variant="body1"
                color="grey.600"
                sx={{
                    mb: '2rem',
                    mt: '1rem',
                }}
            >
                <span className="font-bold text-gray-600">Flexibility:</span> TutorHive offers flexibility for both tutors and learners. Set your own schedule, choose the subjects you are passionate about, and customize your learning journey.
            </Typography>

            <Typography
                variant="body1"
                color="grey.600"
                sx={{
                    mb: '2rem',
                    mt: '1rem',
                }}
            >
                <span className="font-bold text-gray-600">Community-driven:</span> Join a community of like-minded individuals who share a passion for learning and teaching. Connect with tutors and learners, exchange ideas, and build lasting relationships.
            </Typography>

            <Typography
                variant="body1"
                color="grey.600"
                sx={{
                    mb: '2rem',
                    mt: '1rem',
                }}
            >
                <span className="font-bold text-gray-600">Quality Assurance:</span> TutorHive ensures a high standard of tutoring by providing tools for feedback and reviews. We believe in continuous improvement and strive to create a platform that consistently delivers quality education.
            </Typography>
        </Container >
    );
};

export default About;


