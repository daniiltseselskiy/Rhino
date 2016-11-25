import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import EmailServerAction from '../../actions/EmailServerAction2'
import EmailServerState from '../../model/stateZ/emailServer/EmailServerState';
import EmailServerAddModal from './modals/EmailServerAddModal';
import EmailServerList from './EmailServerList';
import EmailServerEditModal from './modals/EmailServerEditModal';

const EmailServerRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="EmailServers"
            action={ EmailServerAction }
            {...props}>
                <EmailServerList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <EmailServerAddModal />
        <EmailServerEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.emailServer
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EmailServerRoot);  