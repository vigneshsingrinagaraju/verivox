import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import AppState from '../../redux/state/AppState';
import TariffListState from '../../redux/state/TariffListState';
import { fetchTariffList, sortTariffList } from '../../redux/actions/TariffListActionCreators';
import TariffCard from '../../components/tariff/TariffCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropDownToSort from '../../components/dropdown/DropDownToSort'
import styles from './TariffList.module.scss';

function TariffList() {
  const tariffList = useSelector(
    (appState: AppState) => appState.tariffListState
  );
  const dispatch = useDispatch<ThunkDispatch<TariffListState, any, AnyAction>>();
  useEffect(() => {
    dispatch<any>(fetchTariffList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  return (
    <>
      <Container fluid>
        {tariffList.tariffList.length>0?
        <><Row className={styles.row_margin_top_right}>
            <Col md={{ span: 2, offset: 7 }} lg={{ span: 2, offset: 7 }} sm={{ span: 4, offset: 4 }} xs={6}>
              {"Sorted by:"}
            </Col>
            <Col md={3} lg={3} sm={4} xs={6}>
              <DropDownToSort onDopdownSelect={(data: any) => { dispatch(sortTariffList(data)) }} dropdownlist={['downloadspeed', 'tariffprice', 'tariffname']}></DropDownToSort>
            </Col>
        </Row>
        {tariffList.tariffList.map((tariff: any, rowindex: number) => (
          <TariffCard tariff={tariff} index={rowindex + 1} key={"tariffcard"+rowindex + 1}></TariffCard>
        ))}</>:<Row className={styles.row_margin_top}><Col md={{ span: 2, offset:5 }} lg={{ span: 2, offset: 5 }} sm={{ span: 6, offset: 6 }} xs={{ span: 6, offset: 6 }}>{"Please wait.."}</Col></Row>}
      </Container>
    </>
  );
}

export default TariffList;
