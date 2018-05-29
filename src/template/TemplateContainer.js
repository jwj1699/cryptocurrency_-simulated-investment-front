import React, { Component } from 'react';
import TemplateSidebar from './TemplateSidebar';

import Transactionhistory from '../transactionHistory';

class TemplateContainer extends Component {
    render() {
        const to = (this.props.match.params.to === undefined) ? "main" : this.props.match.params.to;

        let screen = null;
        if(to === 'history') screen = <Transactionhistory/>

        return (
            <div className="row">
                <TemplateSidebar to={to}/>
                <div className="col-md-10">                
                    {screen}
                </div>
            </div>
        );
    }
}

export default TemplateContainer;