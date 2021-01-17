import React from "react";
import "./styles.css";

import {Tabs, Tab} from 'react-bootstrap-tabs';
import Dashboard from './components/Tabs/dashboard';
import Header from './components/header';

export default function App() {
  return(
        <div id='body'>
            <Header/>
            <TabData/>
            <FooterContainer/>
        </div>
    );
}

const TabData = () =>{
  return(
      <div className='tabss'>
          <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
              <Tab label="DASHBOARD">
                <div class="tab-container">
                  <Dashboard />
                </div>
              </Tab>
              <Tab label="MY CONTENT">
                <div class="tab-container">MY CONTENT</div>
              </Tab>
              <Tab label="MY WALLET">
                <div class="tab-container">MY WALLET</div>
              </Tab>
          </Tabs>
      </div>
  );
}


const FooterContainer = () => {
    return(
        <div className='contact-container'>
        </div>
    );

}
