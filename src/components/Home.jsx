import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

const Home = () => (
        <Accordion className="w-75 mx-auto mt-5" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h3>Statement</h3>
                </Accordion.Header>
                <Accordion.Body>
                    <strong>I want to make climbing cheaper and more accesible.</strong>
                    {" "}
                    There are numerous open free artifical walls in every town, but they have one problem - no routes.
                    My purpouse with this site is simpifying creating routes on such walls and making them accesible to new climbers.
                    App can also be used for private walls in clubs or private gyms.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <h3>Who are we?</h3>
                </Accordion.Header>
                <Accordion.Body>
                    <strong>There is no we, only me.</strong>
                    {" "}
                    If you want to join on this project or contribute in any way (coding, marketing or with ideas),
                    I encourage you to contact me on Github or via bostjanzup @ gmaaaail.com.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    <h3>Disclamer</h3>
                </Accordion.Header>
                <Accordion.Body>
                    <strong>This project is in beta phase.</strong>
                    {" "}
                    I you want to add your private wall accesible only to you and chosen members contact me.
                    If you want to add public crag, contact me so I can grant you contributor privileges.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );

export default Home;
