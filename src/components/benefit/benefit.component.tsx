import React from 'react';
import StyledBenefit from './benefit.styled';
import {Trans} from 'react-i18next';
import {Icon} from '../common/styled';
type Props = {
    title: string,
    content: string,
    icon: string
}

const Benefit: React.FC<Props> = (props) => {

    return <StyledBenefit>
        <Icon className={props.icon} />
        <div className="text">
            <title>
                    {props.title}
                </title>
            <span>
                <Trans>
                {props.content}
                </Trans>
            </span>
        </div>
    </StyledBenefit>;
};

export default Benefit;
