import { Helmet } from "react-helmet-async";
import { Container, Typography, Grid, Link } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLoaderData } from "react-router-dom";

const Contact = () => {
    const faqs = useLoaderData();
    return (
        <Container maxWidth="md" sx={{ my: 12 }}>
            <Helmet>
                <title>TutorHive | Contact</title>
            </Helmet>

            <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 6 }}>
                Contact Us
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2, mt: 6 }}>
                Get in Touch
            </Typography>

            <Typography variant="body1" color="grey.600">
                We are here to help you with any questions or concerns you may have. Please feel free to reach out to us via email or through our contact form. Our team will get back to you as soon as possible.
            </Typography>

            <Grid container spacing={6}>
                <Grid item xs={12} lg={6}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2, mt: 6 }}>
                        Contact Information
                    </Typography>
                    <Typography variant="body1" color="grey.600" sx={{ mb: 4, lineHeight: 'relaxed' }}>
                        We are here to help you with any questions or concerns you may have. Our team will get back to you as soon as possible.
                    </Typography>

                    <Typography variant="body1" color="grey.600" sx={{ mb: 4, lineHeight: 'relaxed' }}>
                        <span sx={{ fontWeight: 'bold', color: 'gray.600' }}>Email:</span> <br />
                        <Link href="mailto:support@tuitionmaster.com" color="inherit" underline="hover">support@tuitionmaster.com</Link>
                    </Typography>
                    <Typography variant="body1" color="grey.600" sx={{ mb: 4, lineHeight: 'relaxed' }}>
                        <span sx={{ fontWeight: 'bold', color: 'gray.600' }}>Office Hours:</span> <br />
                        Monday - Friday: 9:00 AM - 5:00 PM
                    </Typography>
                    <Typography variant="body1" color="grey.600" sx={{ mb: 4, lineHeight: 'relaxed' }}>
                        <span sx={{ fontWeight: 'bold', color: 'gray.600' }}>Office Location:</span> <br />
                        1234 Main Street <br />
                        Rajshahi, Bangladesh, 6206 <br />
                        Bangladesh <br />
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2, mt: 6 }}>
                        Connect with Us
                    </Typography>
                    <Typography variant="body1" color="grey.600" sx={{ mb: 4, lineHeight: 'relaxed' }}>
                        Stay updated on the latest news, educational tips, and community highlights by following us on social media:
                    </Typography>
                    <Typography variant="body1" color="grey.600" sx={{ mb: 4, lineHeight: 'relaxed' }}>
                        <span sx={{ fontWeight: 'bold', color: 'gray.600' }}>Facebook: </span>
                        <Link href="https://www.facebook.com/" color="inherit" underline="hover">https://www.facebook.com/</Link>
                    </Typography>
                    <Typography variant="body1" color="grey.600" sx={{ mb: 4, lineHeight: 'relaxed' }}>
                        <span sx={{ fontWeight: 'bold', color: 'gray.600' }}>LinkedIn: </span>
                        <Link href="https://www.linkedin.com/in/" color="inherit" underline="hover">https://www.linkedin.com/in/</Link>
                    </Typography>
                    <Typography variant="body1" color="grey.600" sx={{ mb: 4, lineHeight: 'relaxed' }}>
                        <span sx={{ fontWeight: 'bold', color: 'gray.600' }}>Twitter: </span>
                        <Link href="https://www.twitter.com/" color="inherit" underline="hover">https://www.twitter.com/</Link>
                    </Typography>
                    <Typography variant="body1" color="grey.600" sx={{ mb: 4, lineHeight: 'relaxed' }}>
                        <span sx={{ fontWeight: 'bold', color: 'gray.600' }}>Instagram: </span>
                        <Link href="https://www.instagram.com/" color="inherit" underline="hover">https://www.instagram.com/</Link>
                    </Typography>
                    <Typography variant="body1" color="grey.600" sx={{ mb: 4, lineHeight: 'relaxed' }}>
                        <span sx={{ fontWeight: 'bold', color: 'gray.600' }}>YouTube: </span>
                        <Link href="https://www.youtube.com/" color="inherit" underline="hover">https://www.youtube.com/</Link>
                    </Typography>
                    <Typography variant="body1" color="grey.600" sx={{ mb: 4, lineHeight: 'relaxed' }}>
                        <span sx={{ fontWeight: 'bold', color: 'gray.600' }}>Discord: </span>
                        <Link href="https://discord.gg/" color="inherit" underline="hover">https://discord.gg/</Link>
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={6} sx={{ my: 16 }}>
                <Grid item xs={12} lg={6}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 6 }}>
                        Contact Form
                    </Typography>
                    <form className="border p-6 rounded-2xl">
                        {/* Contact form inputs and submit button */}
                    </form>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 6 }}>
                        FAQs
                    </Typography>
                    <div>
                        {
                            faqs.slice(0, 7).map((faq, idx) => (
                                <Accordion key={faq._id}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id={faq._id}
                                    >
                                        <Typography>{faq.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {faq.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        }
                    </div>
                </Grid>
            </Grid>

            <Typography variant="h4"
                sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2, mt: 6 }}>
                Schedule a Meeting
            </Typography>
            <Typography variant="body1" color="grey.600">
                We would love to meet you! Please feel free to drop by our office during business hours or schedule a virtual meeting with our team.
            </Typography>
        </Container>
    );
};

export default Contact;
