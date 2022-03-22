import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width:100%;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type:none ;
    padding:4px ;
    display:flex ;
    margin:0 ;
`;

WrapperTabList.tabsRole ='TabList'

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding:8px ;
    cursor: pointer;
    z-index: 99999;
    background-color: "#fff";
    margin: 8px;

    &:focus {
        outline:none ;
    }

    &.is-selected {
        color: red;
    }

`;

WrapperTab.tabsRole ='Tab'

export const WrapperTabPanel = styled(TabPanel)`

    padding: 16px;
    margin-top:-5px ;
    display:none;
    
    &.is-selected {
        display:block ;
    }

`;

WrapperTabPanel.tabsRole ='TabPanel'

export const WrapperList = styled.div`
   display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;