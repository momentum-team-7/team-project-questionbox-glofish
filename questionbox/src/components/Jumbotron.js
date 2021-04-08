import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'; 
import styled from 'styled-components';


const Styles = styled.div`
  .hero {
    background: #BBC7A4;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
// export const Jumbotron = () => (
//     <Styles>
//       <Jumbo fluid className="hero">
//         <div className="overlay"></div>
//         <Container>
//           <
//         </Container>
//       </Jumbo>
//     </Styles>
//   )