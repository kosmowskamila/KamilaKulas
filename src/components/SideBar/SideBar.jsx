import React, {useState} from 'react';
import styled from 'styled-components';
import {Row, Icon} from 'antd';
import logo from '../../assets/kk.png';

const SideRow = styled(Row)`
  width: ${props => props.expanded ? '10vw' : '3vw'};
  background: ${props => props.expanded ? props.theme.opacityLightGray : 'none'};
  height: 100vh;
  padding: 10px 0;
  transition: width 300ms ease-in-out, background 300ms ease-in-out;
`;

const InnerRow = styled(Row)`
  width: 100%;
  height: 50%;
`;

const ExpandIcon = styled(Icon)`
  color: ${props => props.theme.lightGray};
  font-size: 2em;
  transform: ${props => props.expanded ? 'scaleX(-1)' : 'none'};
  transition: transform 600ms;
`;

const Logo = styled.img`
  width: 2vw;
  height: 2vw;
`;

const SideBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <SideRow expanded={expanded ? 1 : undefined}>
      <InnerRow type='flex' justify='center'>
        <Logo src={logo} alt='logo'/>
      </InnerRow>
      <InnerRow type='flex' align='bottom' justify='center'>
        <ExpandIcon type='right'
                    expanded={expanded ? 1 : undefined}
                    onClick={() => setExpanded(!expanded)}
        />
      </InnerRow>
    </SideRow>
  )
};

export default SideBar;