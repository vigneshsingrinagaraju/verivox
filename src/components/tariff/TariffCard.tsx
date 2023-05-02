import React from 'react';
import TariffList from '../../api/model/TariffList';
import styles from './TariffCard.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowDown } from 'react-bootstrap-icons';
import { ArrowUp } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
interface TariffCardProps {
  tariff: TariffList;
  index: number
} 
function TariffCard({ tariff, index }: TariffCardProps) {
  return (
    <>
      <Row className={styles.tariff_container}>
        <Col className={styles.tariff_index} md={1} lg={1} sm={1} xs={1}><span>{index + "."}</span></Col>
        <Col md={2} lg={2} sm={3} xs={3}> {tariff.tariffname}</Col>
        <Col md={3} lg={3} sm={4} xs={4} className="desktop_and_table">
          <Row >
            <Col className="desktop">{"Download"}</Col>
          </Row>
          <Row>
            <Col className={styles.tariff_speed_icons}><ArrowDown ></ArrowDown></Col><Col className={styles.tariff_speed_text}>{tariff.downloadspeed}{" "}{tariff.downloadspeedunit}</Col>
          </Row>
          <Row className={styles.tariff_upload_margin}>
            <Col className="desktop">{"Upload"}</Col>
          </Row>
          <Row >
            <Col className={styles.tariff_speed_icons}><ArrowUp></ArrowUp></Col><Col className={styles.tariff_speed_text}>{tariff.uploadspeed}{" "}{tariff.downloadspeedunit}</Col>
          </Row>
        </Col>
        <Col sm={3} xs={3} className="mobile">
          <Row>
            <Col><ArrowDown ></ArrowDown>{" "}{tariff.downloadspeed}</Col>
          </Row>
          <Row>
            <Col>{tariff.downloadspeedunit}</Col>
          </Row>
        </Col>
        <Col md={3} className="desktop">
          <Row ><Col className={styles.tariff_benefits}><ul className="list-group">{tariff.tariffbenefits.map((benefit, rowindex) => (
            <li key={rowindex + 1}>{benefit}</li>
          ))}</ul></Col>
          </Row>
        </Col>
        <Col md={3} lg={3} sm={4} xs={4} className="desktop_and_table">
          <Row>
            <Col className={styles.tariff_price}> <b> {tariff.tariffprice}{" "}{tariff.tariffpriceunit}</b></Col>
          </Row>
          <Row>
            <Col className={styles.tariff_button}><Button variant="outline-secondary">{"To Tariff >"}</Button></Col>
          </Row>
        </Col>
        <Col md={3} lg={3} sm={5} xs={5} className="mobile">
          <Row>
            <Col className={styles.tariff_price}> <b> {tariff.tariffprice}{" "}{tariff.tariffpriceunit}</b></Col> <Col className={styles.tariff_button}><Button variant="outline-secondary">{">"}</Button></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default TariffCard;
