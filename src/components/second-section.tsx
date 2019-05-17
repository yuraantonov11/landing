import React from 'react';
import styled from 'styled-components'
import {useTranslation} from 'react-i18next';
import colors from './common/colors';
import ProgramComponent from './program';

const StyledSecondSection = styled.section`
  background-color: ${colors.white1};
  color: ${colors.black1};
  justify-content: flex-start;
  padding: 3rem 0;
  .wrapper{
    flex-direction: column;
      .text-wrapper{
        h2{
          margin: 1rem 0;
        }
        h3{
          margin: 1rem 0;
        }
      }
      .programs-list{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 15px;
      }
}
`;


const SecondSection = () => {
    const { t } = useTranslation();

    return <StyledSecondSection>
        <div className="wrapper">
            <div className="text-wrapper">
                <h2>{t('secondSectionHeadline')}</h2>
                <h3>{t('secondSectionTitle')}</h3>
            </div>
            <div className="programs-list">
                <ProgramComponent />
                <ProgramComponent className="active gradient" />
            </div>
        </div>


    </StyledSecondSection>;
}

export default SecondSection;
