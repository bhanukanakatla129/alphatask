import { Row, Space, Tag, Typography, Col } from "antd";
import React from "react";
import "./allpDoc.css";
import dot from "./assets/dot.png";
import {
  experienceList,
  educationDetails,
  weekdays,
  Timings,
} from "./constants";
import SliderPage from "./Slider";
 import arrow from './assets/arrow.png'
const { Text } = Typography;

const Profile = () => {
  return (
    <div className="bodyProfile">
      <Row className="P_profileRow">
        <Text className="P_profile">Profile</Text>
      </Row>
      <Text className="P_expertise">Expertise</Text>
      <Row className="P_expertiseRow">
        <Tag>Orthodontist</Tag>
        <Tag>General Dentist(DDS)</Tag>
        <Tag>Periodontist</Tag>
        <Tag>General Dentist(DDS)</Tag>
      </Row>
      <div className="P_license">
        <Text className="P_expertise">Medical License</Text>
        <Row className="P_LicRow">
          <Space size={30}>
            <Text className="P_LicNumber">
              1. <span className="P_LicNumber_span"> Number: </span>{" "}
              <span className="P_LicNumber_number">XX-12345-XX</span>
            </Text>
            <Text className="P_LicNumber">
              <span className="P_LicNumber_span"> Country: </span> India
            </Text>
          </Space>
        </Row>
        <Row className="P_LicRow">
          <Space size={30}>
            <Text className="P_LicNumber">
              2. <span className="P_LicNumber_span"> Number: </span>{" "}
              <span className="P_LicNumber_number">XX-12345-XX</span>
            </Text>
            <Text className="P_LicNumber">
              <span className="P_LicNumber_span"> Country: </span> India
            </Text>
          </Space>
        </Row>
      </div>
      <div className="P_Experience">
        <Row className="ExperinceRow">
          <Text className="P_expertise">Experience</Text>
          <div className="P_expClose"><img src={arrow} alt="arrow" /></div>
        </Row>
        {experienceList &&
          experienceList.map((item) => {
            return (
              <div className="P_expList">
                <Row>
                  <Text className="P_instituteName">{item.hospName}</Text>
                </Row>
                <Row className="exp_detailsRow">
                  <Space size={20}>
                    <Text className="exp_details">{item.designation}</Text>
                    <img src={dot} alt="dot" />
                    <Text className="exp_details">{item.jobType}</Text>
                  </Space>
                </Row>
                <Row className="exp_detailsRow">
                  <Space size={20}>
                    <Text className="exp_details">{item.duration}</Text>
                    <img src={dot} alt="dot" />
                    <Text className="exp_details"> {item.country}</Text>
                    <img src={dot} alt="dot" />
                    <Text className="exp_details">{item.city}</Text>
                  </Space>
                </Row>
              </div>
            );
          })}
      </div>
      <div className="P_memberships">
        <Text className="P_expertise">Expertise</Text>
        <Row className="memberShipRow">
          <Text className="memberShipName">1. ABCDEFGabcdefg</Text>
        </Row>
        <Row className="memberShipRow">
          <Text className="memberShipName">2. ABCDEFGabcdefg</Text>
        </Row>
      </div>
      <div className="P_Experience">
        <Row className="ExperinceRow">
          <Text className="P_expertise">Education</Text>
          <div className="P_expClose"><img src={arrow} alt="arrow" /></div>
        </Row>
        {educationDetails &&
          educationDetails.map((item) => {
            return (
              <div className="P_expList">
                <Row>
                  <Text className="P_instituteName">{item.collegeName}</Text>
                </Row>
                <Row className="exp_detailsRow">
                  <Space size={20}>
                    <Text className="exp_details">{item.cource}</Text>
                    <img src={dot} alt="dot" />
                    <Text className="exp_details">{item.department}</Text>
                  </Space>
                </Row>
                <Row className="exp_detailsRow">
                  <Space size={20}>
                    <Text className="exp_details">{item.duration}</Text>
                    <img src={dot} alt="dot" />
                    <Text className="exp_details"> {item.country}</Text>
                  </Space>
                </Row>
              </div>
            );
          })}
      </div>
      <div className="P_clinic">
        <Row className="clinicRow">
          <Text className="P_expertise">Clinic</Text>
          <div className="P_expClose"><img src={arrow} alt="arrow" /></div>
        </Row>
        <Row>
          <Col span={10}><SliderPage/></Col>
          <Col span={14}>
            <Row className="C_addressRow">
              <Col span={10}>
                <Text className="C_hospName">Jupiter Hospital,</Text>
                <Row style={{ margin: "10px 0px" }}>
                  <Text className="C_address">
                    514, Avalanche Avenue
                    <br /> Waverly St, Louisiana, USA
                  </Text>
                </Row>
                <Text className="C_direction">Get Direction</Text>
              </Col>
              <Col span={14}>
                <Row style={{ marginBottom: "15px" }}>
                  <Text className="C_info">Clinic Contact Info</Text>
                </Row>
                <Text className="C_number">+966-44400500</Text>
              </Col>
            </Row>
            <Row className="clinicHoursRow">
              <Text className="C_header">Clinic Hours</Text>
              <div className="P_expClose"><img src={arrow} alt="arrow" /></div>
            </Row>
            <Row>
              <Col span={6}>
                <Row>
                  <Space size={40}>
                    <Text className="C_open">Open</Text>
                    <img src={dot} alt="dot" />
                  </Space>
                </Row>
              </Col>
              <Col span={8}>
                <Row>
                  <Space size={40}>
                    <Text className="C_day">Today, Tuesday</Text>
                    <img src={dot} alt="dot" />
                  </Space>
                </Row>
                {weekdays &&
                  weekdays.map((itm) => {
                    return (
                      <Row>
                        <Text className="C_day"> {itm}</Text>
                      </Row>
                    );
                  })}
              </Col>
              <Col span={6}>
                {Timings &&
                  Timings.map((itm) => {
                    return (
                      <Row>
                        <Text className="C_time">{itm}</Text>
                      </Row>
                    );
                  })}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
