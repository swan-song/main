import React from "react";
import { Header } from "./styled-components/styled-components";
import { GrLocation } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import Iframe from 'react-iframe'
export default function About() {
  return (
    <div>
      <Header>About Us</Header>
        <div className="about">
          <div className="contact-info">
                <h5> <GrLocation /> 3423 Piedmont Rd NE, Atlanta, GA 30305</h5>

                <h5> <HiOutlineMail /> carrental@gmail.com</h5>

                <h5><FiPhone /> (123) 456-7890</h5>
          </div>
        <Iframe
          url="https://www.google.com/maps/embed/v1/place?key=AIzaSyCgYqkp1_NlaPC-HiJL7q5Guxhg-kLSuyE&q=Atlanta+Tech+Village"
          width="450px"
          height="450px"
          position="relative"
          className="map"
        />
          <div className="hours">
            <h1>Hours of Operation</h1>
            <h4>Everyday: 9 am - 7 pm</h4>
          </div>
        </div>

    </div>
  );
}

