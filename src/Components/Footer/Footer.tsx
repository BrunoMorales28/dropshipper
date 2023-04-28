import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const constants = {
  bgcolor: "darkgray",
};

interface accordionProps {
  title: string;
  details: string;
}

const FooterAccordion = ({ title, details }: accordionProps) => {
  return (
    <Accordion sx={{ backgroundColor: constants.bgcolor }} disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography> {title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </Accordion>
  );
};

const accordionItems = [
  {
    title: "Help",
    details: "",
  },
  {
    title: "Sell with us",
    details: "",
  },
  {
    title: "About us",
    details: "",
  },
  {
    title: "Legals",
    details: "",
  },
];

const Footer = () => {
  return (
    <Box component="footer" bgcolor={constants.bgcolor}>
      <Box display={"flex"} justifyContent={"center"}>
        <IconButton aria-label="delete">
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <TwitterIcon />
        </IconButton>
      </Box>
      <Box>
        {accordionItems.map(({ title, details }) => (
          <FooterAccordion title={title} details={details} />
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
