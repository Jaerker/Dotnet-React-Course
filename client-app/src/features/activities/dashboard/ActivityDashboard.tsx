
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectedActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    CreateOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}


export default function ActivityDashboard({ activities, selectedActivity, selectActivity,
    cancelSelectedActivity, editMode, openForm, closeForm, CreateOrEdit, deleteActivity }: Props) {



    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList editMode={editMode} activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && ! editMode &&
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectedActivity}
                        openForm={openForm}

                    />}
            {editMode &&
                <ActivityForm closeForm={closeForm} activity={selectedActivity} CreateOrEdit={CreateOrEdit}/>}
            </Grid.Column>

        </Grid>
    )
}