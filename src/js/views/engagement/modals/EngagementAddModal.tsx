import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import EngagementAction from '../../../actions/EngagementAction2'
import EngagementState from '../../../model/stateZ/engagement/EngagementState';
import EngagementForm from '../form/EngagementForm';
import { AppState } from '../../../model/stateZ/AppState';
import controls from '../form/FormControls';

const EngagementAddModalContainer = (props: Props) => 
    <AddModalContainer
        title="New Engagement"
        action={ EngagementAction }
        controls={ controls(props) }
        submitId="engagement-submit-form"
        {...props}>
            <EngagementForm />
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.engagement
})

const EngagementAddModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EngagementAddModalContainer);

export default EngagementAddModal;