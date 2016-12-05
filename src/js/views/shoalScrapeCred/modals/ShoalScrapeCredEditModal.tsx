import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import ShoalScrapeCredAction from '../../../actions/ShoalScrapeCredAction2'
import ShoalScrapeCredState from '../../../model/stateZ/shoalScrapeCred/ShoalScrapeCredState';
import ShoalScrapeCredForm from '../ShoalScrapeCredForm';
import { AppState } from '../../../model/stateZ/AppState';

const ShoalScrapeCredEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit ShoalScrape Credential"
        action={ ShoalScrapeCredAction }
        {...props}>
            <ShoalScrapeCredForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.shoalScrapeCred
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ShoalScrapeCredEditModal);
