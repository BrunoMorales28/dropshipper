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
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    title: "Sell with us",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    title: "About us",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    title: "Legals",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];

const Footer = () => {
  return (
    <Box component="footer" bgcolor={constants.bgcolor}>
      <Box display={"flex"} px={10} justifyContent={"space-around"}>
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
