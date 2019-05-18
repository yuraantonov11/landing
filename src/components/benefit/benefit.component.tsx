import React from 'react';
import StyledBenefit from './benefit.styled';
interface BenefitProps {
    title: string,
    content: string
}

const Benefit: React.FC<BenefitProps> = (props) => {

    return <StyledBenefit>
        <i className="icon" />
        <div className="text">
            <title>{props.title}</title>
            <span>{props.content}</span>
        </div>
    </StyledBenefit>;
};

export default Benefit;
