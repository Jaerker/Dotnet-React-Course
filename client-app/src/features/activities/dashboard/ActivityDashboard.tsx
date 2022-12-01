
import { observer } from 'mobx-react-lite';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    deleteActivity: (id: string) => void;
}


export default observer(function ActivityDashboard({ deleteActivity }: Props) {

    const { activityStore } = useStore();
    const { selectedActivity, editMode } = activityStore;

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList
                    deleteActivity={deleteActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails  />}
                {editMode &&
                    <ActivityForm />}
            </Grid.Column>

        </Grid>
    )
});
